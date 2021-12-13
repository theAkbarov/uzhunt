import React from "react";
import Card from "../components/card/Card";
import Header from "../containers/header/Header";
import './pages.scss'
import SearchIcon from '../photo/search.png'

export default function HomePage() {
  return (
    <div className="homeBlock">
      <div className="homeBlock_wrapper">
        <Header />
        <div className="search-block container">
          <h1 className="search-title">Найди работу мечты</h1>
          <div className="search-block_inner">
            <form action="" className="search-form">
             <div className="search-input-block">
               <input
                   placeholder="Профессия, должность или компания"
                   type="text"
                   className="search-input"
               />
               <a href="" className="search-input-link">
                 <img src={SearchIcon} alt="" className="search-input-icon"/>
               </a>
             </div>
              <button className="search-btn">Найти работу</button>
            </form>
          </div>
          <div className="search_block_link">
            <a href="" className="search_link">
              Я ищу сотрудника
            </a>
          </div>
        </div>
        <div className="supernova-dashboard container">
          <div className="supernova-dashboard-stats">
            <h6 className="supernova-dashboard-stats__value">268 509</h6>
            <p className="bloko-text">резюме</p>
          </div>
          <div className="supernova-dashboard-stats">
            <h6 className="supernova-dashboard-stats__value">4405</h6>
            <p className="bloko-text">вакансий</p>
          </div>
          <div className="supernova-dashboard-stats">
            <h6 className="supernova-dashboard-stats__value">11 054</h6>
            <p className="bloko-text">компаний</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-tiles-block">
        <Card
        work={'Вакансии дня'}
        person={'14 вакансий'}
        number={'1 800 000 – 6 469 300  сум'}
        />
          <Card
              work={'Компании дня'}
              person={'59 вакансий'}
              number={''}
          />
          <Card
              work={'Работа из дома'}
              person={'103 вакансий'}
              number={''}
          />
          <Card
              work={'Подработка'}
              person={'367 вакансий'}
              number={'800 – 17 970 800 сум '}
          />
          <Card
              work={'Курьер'}
              person={'22 вакансий'}
              number={'1 799 800 – 6 738 200  сум'}
          />
          <Card
              work={'Водитель'}
              person={'57 вакансий'}
              number={'1 499 900 – 8 666 600 сум '}
          />
          <Card
              work={'Продавец'}
              person={'136 вакансий'}
              number={'999 900 – 9 416 600 сум '}
          />
          <Card
              work={'Кассир'}
              person={'63 вакансий'}
              number={'79 900 – 4 354 900 сум '}
          />
          <Card
              work={'Администратор'}
              person={'175 вакансий'}
              number={'999 900 – 8 991 500 сум '}
          />
          <Card
              work={'Оператор'}
              person={'173 вакансий'}
              number={'761 700 – 5 730 800 сум '}
          />
          <Card
              work={'Программист'}
              person={'412 вакансий'}
              number={'800 – 36 625 100 сум '}
          />
          <Card
              work={'Менеджер'}
              person={'1102 вакансий'}
              number={'17 970 300 сум'}
          />
        </div>
      </div>
    </div>
  );
}
