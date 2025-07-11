import React from 'react';
import { AlertTriangle, CheckCircle, X } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, type, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <AlertTriangle size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        {getIcon()}
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close" onClick={onClose}>
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
