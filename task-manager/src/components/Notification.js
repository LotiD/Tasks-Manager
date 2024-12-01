import React, { useState, useEffect } from "react";
import NotificationSystem from "../services/NotificationSystem";

const Notification = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleNotification = msg => setMessage(msg);

    NotificationSystem.subscribe(handleNotification);
    return () => NotificationSystem.unsubscribe(handleNotification);
  }, []);

  return message ? <div className="notification">{message}</div> : null;
};

export default Notification;
