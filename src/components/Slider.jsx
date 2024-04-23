import React from 'react'
import { db } from '../firebase';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';
import {Swiper,SwiperSlide} from "swiper/react"
import SwiperCore
from "swiper";

import { Autoplay,
  EffectFade,
  Navigation,
  Pagination} from "swiper/modules"
import "swiper/css/bundle"
import { useNavigate } from 'react-router';
export default function Slider() {
    const[listings, setListings] = useState(null);
  const[loading,setLoading] = useState(true)
  SwiperCore.use([Autoplay,Navigation,Pagination]);
  const navigate = useNavigate()
  useEffect(()=>{
    async function fetchListing(){
    const listingsRef = collection(db,"listings")
    const q = query(listingsRef, orderBy("timestamp","desc"),limit(5))
    const querySnap = await getDocs(q)
    let listings = [];
    querySnap.forEach((doc) => {
      return listings.push({
        id: doc.id,
        data: doc.data(),
      })
    })
    setListings(listings);
    setLoading(false);
    }
    fetchListing()
  },[]);
  if(loading){
    return <Spinner/>
  }
  if(listings.length === 0){
    return<>
    </>
  }
   return  listings && ( <>
    <Swiper slidesPerView={1}
    navigation
    pagination={{type:"progressbar"}}
    effect="fade"
    modules={[EffectFade]}
    autoplay={{delay: 3000}}>
    {listings.map(({data, id}) => (
        <SwiperSlide key={id} onClick={()=> navigate(`/category/${data.type}.type)/${id}`)}>
        <div style={{background: `url(${data.imgUrls[0]}) center, no-repeat`, backgroundSize: "cover",}}
        className="w-full h-[300px] overflow-hidden" >

        </div>
        <p className="text-[#f1face] absolute left-1 top-3 font-medium max-w-[90%] bg-[#2d718f] shadow-lg opacity-90 p-2 rounded-br-3xl">{data.name}

        </p>
        <p className="text-[#f1face] absolute left-1 bottom-1 font-medium max-w-[90%] bg-[#c76a3c] shadow-lg opacity-90 p-2 rounded-tr-3xl">{data.discountedPrice ?? data.regularPrice}
        {data.type === "rent" && " /month"}

        </p>
        </SwiperSlide>
    ))}
    </Swiper>
    </>
   ) 
}
