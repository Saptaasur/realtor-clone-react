import {db} from "../firebase" 
import { collection, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";
export default function Offers() {
  const[listings,setListings] = useState(null)
  const [loading,setLoading] = useState(true)
  const[lastFetchListing, setLastFetchListing] = useState(null)
  useEffect(()=>{
   async function fetchListings(){
     try {
      const listingRef = collection(db,"listings")
      const q= query(listingRef, where("offer", "==", true),orderBy("timestamp","desc"),limit(6))
      const querySnap = await getDocs(q)
      const lastVisible= querySnap.docs[querySnap.docs.length - 1]
      setLastFetchListing(lastVisible)
      const listings = []
      querySnap.forEach((doc)=>{
        return listings.push({
          id: doc.id,
          data:doc.data(),
        })
      })
      setListings(listings)
      setLoading(false)
     } catch (error) {
      toast.error("Could not fetch the listing")
     }
   }
   fetchListings()
  },[]);
  async function onFetchMoreListing(){
    try {
      const listingRef = collection(db,"listings")
      const q= query(listingRef, where("offer", "==", true),startAfter(lastFetchListing),orderBy("timestamp","desc"),limit(6))
      const querySnap = await getDocs(q)
      const lastVisible= querySnap.docs[querySnap.docs.length - 1]
      setLastFetchListing(lastVisible)
      const listings = []
      querySnap.forEach((doc)=>{
        return listings.push({
          id: doc.id,
          data:doc.data(),
        })
      })
      setListings((prevState)=>[...prevState, ...listings])
      setLoading(false)
     } catch (error) {
      toast.error("Could not fetch the listing")
     }
  }
  return <div className="max-w-6xl mx-auto px-3">
     <h1 className="text-3xl text text-center mt-6 font-bold mb-6">Offers</h1>
      {loading ? (
        <Spinner/>
      ): listings && listings.length > 0 ? (
        <>
        <main>
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {listings.map((listing)=>(
              <ListingItem key={listing.id}
              id={listing.id}
              listing={listing.data}/>
            ))}
          </ul>
        </main>
        {lastFetchListing && (
          <div className="flex justify-center items-center">
            <button className="bg-white px-3 py-1.5 text-grey-700 border border-gray-300 mt-6 mb-6 rounded hover:border-slate-600 transition duration-150 ease-in-out" onClick={onFetchMoreListing}>Load More</button>
          </div>
        )}
        </>
      ):(
        <p>There are no current offers</p>
      )}
    </div>
  
}
