import React from 'react'
import cardStyle from './Card.module.css'

const Card = ({Heading,Para,ImgSrc}) => {
    return (
        <>
        <div className={cardStyle.card_parent_show}>
        <div className={cardStyle.card}>
          <img
            src={ImgSrc}
            alt="news"
            className={cardStyle.img}
          />
          <div className={cardStyle.content}>
            <h1 className={cardStyle.heading}>
             Book ticket of {Heading} show
            </h1>
            <h3 className={cardStyle.sub_heading}>
              {Para}
            </h3>
          </div>
        </div>
      </div>
        </>
    )
}

export default Card
