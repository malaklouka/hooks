import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Components/Filter.js'
import MovieList from './Components/MovieList.js'
import AddMovie from './Components/AddMovie.js'
function App() {

  const MovieData = [
    {
      id: uuidv4(),
      title: "Peaky Blinders : (TV series)",
      description: "Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, England, the series follows the exploits of the Shelby crime family in the direct aftermath of the First World War. The fictional family is loosely based on a real urban youth gang of the same name, who were active in the city from the 1890s to the early 20th century.",
      posterURL: "https://www.themoviedb.org/t/p/original/se86cWSwdSftjJH8OStW7Yu3ZPC.jpg",
      annonce :"https://www.youtube.com/watch?v=oVzVdvGIC7U",
      rate: 6
    },
    {
      id: uuidv4(),
      title: "Anne with an E",
      description: "is a Canadian television series adapted from Lucy Maud Montgomery's 1908 classic work of children's literature, Anne of Green Gables. It was created by Moira Walley-Beckett for CBC and stars Amybeth McNulty as orphan Anne Shirley, Geraldine James as Marilla Cuthbert, R. H. Thomson as Matthew Cuthbert, Dalila Bela as Diana Barry and Lucas Jade Zumann as Gilbert Blythe.",
      posterURL: "https://www.themoviedb.org/t/p/original/jrgeHLyis4kdaiOQX73vMJIOqRz.jpg",
       annonce:"https://www.youtube.com/watch?v=S5qJXYNNINo",
      rate: 4
    },
    {
      id: uuidv4(),
      title: "Unorthodox ",
      description: "Unorthodox is a German-American drama television miniseries that debuted on Netflix on March 26, 2020. The first Netflix series to be primarily in Yiddish, it is inspired by Deborah Feldman's 2012 autobiography, Unorthodox: The Scandalous Rejection of My Hasidic Roots. The four-part miniseries was created and written by Anna Winger and Alexa Karolinski, and directed by Maria Schrader.",
      posterURL: "https://www.themoviedb.org/t/p/original/mdH0FbD328BIann1TPVwsPdCi0G.jpg",
      annonce:"https://www.youtube.com/watch?v=Nixgq1d5J7g",
      rate: 5
    },
    {
      id: uuidv4(),
      title: "Room: 2015 film ",
      description: "Room is a 2015 drama film directed by Lenny Abrahamson and written by Emma Donoghue, based on her 2010 novel of the same name. It stars Brie Larson as a young woman who has been held captive for seven years and whose five-year-old son (Jacob Tremblay) was born in captivity. Their escape allows the boy to experience the outside world for the first time. The film also stars Joan Allen, Sean Bridgers, and William H. Macy.",
      posterURL: "https://www.themoviedb.org/t/p/original/lLg0WhEn4A5KvblzYBHtPpy2X7r.jpg",
      annonce:"https://www.youtube.com/watch?v=E_Ci-pAL4eE",
      rate: 5
    } 

  ];
  
  const [movies, setMovies] = useState(MovieData);
  const [search, setSearch] = useState('');
  const [rate, setRate] = useState(0);

  const searching = (s) => {
    setSearch(s)
  }
  const rating = (r) => {
    setRate(r)
  }

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  return (
    <div >
      <div className='nav'>
        <div className='titre'> <h1>My movie App</h1></div>
        <Filter
          title={searching} rate={rating}
        />
      </div>
      <div className='movie-list'>
        <h1>Movies List</h1>
        <AddMovie handleAddMovie={handleAddMovie} />
      </div>
      <div class="movie-app">
        <MovieList
          movies={movies.filter((elm) => (elm.title.toLowerCase().match(search.toLowerCase().trim())) && (elm.rate >= rate))} />
      </div>

    </div >
  );
}

export default App;