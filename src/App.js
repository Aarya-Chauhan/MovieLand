import React, { useEffect, useState } from 'react';
// 1d2698f7
const API_URL = 'https://www.omdbapi.com?apikey=1d2698f7'

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data)
  }
  useEffect(() => {
    searchMovies('Spiderman')

  },[])
  return (

    <h1>hello react!!</h1>
  )
}

export default App;
