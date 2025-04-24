import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";

function Test(){
    const [movieRating, setMovieRating] = useState(0);

    return <div><StarRating color='blue' onSteRating={setMovieRating}/>
    <p>this movie was rated {movieRating} stars</p>
    </div>
    }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Test/>
    {/*<App />*/}
      <StarRating messages={["terrible","bad","okay","good","amazing"]} />
      <StarRating maxRating={5} className="" defaultRating = {3}/>
  </React.StrictMode>
);
