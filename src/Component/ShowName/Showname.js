import { useEffect, useState } from "react";
import Axios from 'axios'
import Card from './Card/Card'
import ShowNameStyle from './ShowName.module.css'

const Showname = () => {
    const [data, setData] = useState([]);

  const fetchData = async () => {
    const {data} = await Axios.get('https://api.tvmaze.com/search/shows?q=all');
     
    setData(data);
  }

useEffect(() => {
    fetchData();
})
    return (
        <>
        <div className={ShowNameStyle.main_div}>
        {data.map((value) => <Card key={value.show.id} id={value.show.id} Heading={value.show.name} Heading_Secondary={value.show.officialSite} ImgSrc={value.show.image.medium}/>)}
            </div>
        </>
    )
}

export default Showname
