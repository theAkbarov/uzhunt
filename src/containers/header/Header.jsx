import React from "react";
import "./header.scss";
export default function Header() {
  return (
    <div className="header">
      <div className="header_wrapper container">
        <div className="header_left">
          <h1 className="logo">UZ <span className="hunter">Hunter</span> </h1>
          <a href="" className="employers">Работодателям</a> 
          <a href="" className="help employers">Помощь</a> 
        </div>
        <div className="header_right">
          <a href="" className="create_a_resume ">Создать резюме</a> 
          <a href="" className="to_com_in ">Войти</a> 
        </div>
      </div>
    </div>
  );
}
