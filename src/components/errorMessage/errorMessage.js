import React from "react";
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
  return (
    <>
      {/* Переменное окружение */}
      {/* <img src={process.env.PUBLIC_URL + "/img/error.jpg"} alt="error"></img> */}

      <img src={img} alt="error"></img>

      <span>Something going wrong!</span>
    </>
  )
}

export default ErrorMessage;