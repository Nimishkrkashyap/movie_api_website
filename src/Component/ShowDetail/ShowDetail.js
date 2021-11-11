import React,{ useState,useEffect} from 'react'
import Card from './Card/Card'
import {useParams} from 'react-router-dom'
import Axios from 'axios'

const ShowDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    const fetchData = async () => {
        const {data} = await Axios.get('https://api.tvmaze.com/search/shows?q=all');
        const newData = data.find((data) => data.show.id === parseInt(id));
        const details = newData.show;
        setProduct(details);
      }

useEffect(() => {
    fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

    return (
        <>
            <Card Heading={product.name} Para={product.summary} ImgSrc={product.image?.original} id={product.id}/>
        </>
    )
}

export default ShowDetail
