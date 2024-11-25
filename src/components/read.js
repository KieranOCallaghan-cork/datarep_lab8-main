import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
        props.Reload();
      })
      .catch((error) => {
        console.log(error);
      });
    });


      LoadData();
 


  return (
    <div>
      <h3>Hello from read component!</h3>
      <Movies myMovies={movies} ReloadData={LoadData} />
    </div>
  );
}

export default Read;