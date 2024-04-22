import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { toast } from 'react-toastify';

export default function Contact({userRef, listing}) {
    const[landlord, setLandlord] = useState(null)
    const [message, setMessage]= useState("")
    useEffect(()=>{
        async function getLandlord(){
         const docRef = doc(db,"users",userRef)
         const docSnap = await getDoc(docRef);
         if(docSnap.exists()){
            setLandlord(docSnap.data())
         }else{
            toast.error("Could not get landlord data")
         }
        }
        getLandlord();
    },[userRef])
    function onChange(e){
        setMessage(e.target.value)
    }
  return <div><>{landlord !== null && (
    <div className="flex flex-col w-full">
        <p className="mt-6">Contact {landlord.name} for the {listing.name.toLowerCase()}</p>
        <div className="mt-6 mb-2">
            <textarea name="message" id="message"  rows="2" value={message} onChange={onChange} className="w-full px-4 py-2 text-xl text-gray-700 bg-white-border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"></textarea>
        </div>
        <a href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}> <button type="button" className="w-full mb-6 px-3 py-3 bg-blue-500 text-white rounded text-sm uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out text-center">Send message</button></a>
       
    </div>
  )}</></div>
  
}
