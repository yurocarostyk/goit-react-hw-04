// src/components/ErrorMessage/ErrorMessage.jsx
import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
