import React from 'react'
import cardStyle from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    // console.log(props)
    return (
        <>
            <div className={cardStyle.main_div}>
                <div className={cardStyle.img_div}>
                    <img src={props.ImgSrc} alt="img" />
                </div>
                <div className={cardStyle.content}>
                    <h2 className={cardStyle.heading}>{props.Heading}</h2>
                    <p className={cardStyle.para}>{props.Heading_Secondary}</p>
                    <Link to={`/ShowDetail/${props.id}`}><button className={cardStyle.btn}>Details</button> </Link>
                </div>
            </div>
        </>
    )
}

export default Card
