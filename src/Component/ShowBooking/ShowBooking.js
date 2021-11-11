import React, { useState, useEffect } from "react";
import showBookingStyle from "./ShowBooking.module.css";
import Card from "./Card/Card";
import { useParams } from "react-router-dom";
import Axios from "axios";

const getLocalData = () => {
  let formData = localStorage.getItem("Data");

  if (!formData)
    return {
      fullname: "",
      mobile: "",
      email: "",
    };
  return JSON.parse(formData);
};

const ShowBooking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);

  const fetchBooking = async () => {
    const { data } = await Axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    const newData = data.find((data) => data.show.id === parseInt(id));
    const details = newData.show;
    setBooking(details);
  };

  // Form Data Managing
  const [data, SetData] = useState(getLocalData());

  const inputEvent = (event) => {
    const { name, value } = event.target;

    SetData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    // alert(`My name is ${data.fullname}. My mobile no is ${data.mobile}. My E-Mail id is ${data.email} And My message is ${data.msg}`)
  };
  useEffect(() => {
    fetchBooking();
    localStorage.setItem("Data", JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booking]);
  return (
    <>
      <Card
        Heading={booking.name}
        Para={booking.summary}
        ImgSrc={booking.image?.original}
      />
     <h1 className={showBookingStyle.heading}>Book Ticket</h1>
      <div className={showBookingStyle.container}>
        <form onSubmit={formSubmit} className={showBookingStyle.form}>
          <h2 className={showBookingStyle.heading_secondary}>Full Name</h2>
          <input
            type="text"
            className={showBookingStyle.text}
            autoComplete="none"
            name="fullname"
            value={data.fullname}
            onChange={inputEvent}
          />

          <h2 className={showBookingStyle.heading_secondary}>Mobile No</h2>
          <input
            type="number"
            className={showBookingStyle.number}
            autoComplete="none"
            name="mobile"
            value={data.mobile}
            onChange={inputEvent}
          />

          <h2 className={showBookingStyle.heading_secondary}>E-Mail</h2>
          <input
            type="email"
            className={showBookingStyle.email}
            autoComplete="none"
            name="email"
            value={data.email}
            onChange={inputEvent}
          />
          <br />
          <input
            type="Submit"
            value="Submit Form"
            onChange={inputEvent}
            className={showBookingStyle.button}
          />
        </form>
      </div>
    </>
  );
};

export default ShowBooking;
