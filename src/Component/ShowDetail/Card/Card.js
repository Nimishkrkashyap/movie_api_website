import React from 'react'
import cardStyle from './Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({Heading,Para,ImgSrc,id}) => {
    return (
        <>
             <div className={cardStyle.container}>
                <div className={cardStyle.left}>
                    <h1 className={cardStyle.heading}>{Heading}</h1>
                    <p className={cardStyle.para}>{Para}</p>
                    <Link to={`/TicketBooking/${id}`}><button className={cardStyle.btn}>Book Ticket</button></Link>
                </div>
                <div className={cardStyle.right}>
                  <img src={ImgSrc}  className={cardStyle.img} alt="imgdata" />
                </div>
            </div>
        </>
    )
}

export default Card
