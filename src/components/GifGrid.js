import React, { useState, useEffect } from 'react';

export const GifGrid = ({ category }) => {

  const [count, setCount] = useState(0)

  const GetGifs = async() => {
    const url = `https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=EFBkyGRAvf4SrMtFpEozjnWMEPV0E9dj`;
    const Response = await fetch( url );
    const { data } = await Response.json();
    
    const Gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    console.log(Gifs)
  }

  useEffect(() => {
    GetGifs();
  }, [])

  return (
    <div>
      <h3>{ category }</h3>
      <h3>{ count }</h3>
      <button onClick={ () => setCount( count + 1 ) }> Count </button>
    </div>
  )
}
