import React from 'react'
import './card.scss'
export default function Card({work,number,person}) {
    return (
        <div className='dashboard-tiles-item'>
            <div className="color"></div>
            <div className="dashboard-tiles-item__body">
                <h6 className="dashboard-card-title">{work}</h6>
                <span className="dashboard-card-money">{number}</span>
                <p className="dashboard-card-description">{person}</p>
            </div>
        </div>
    )
}
