import {useEffect, useState} from "react";
const KEY= "3156a2fc"

export function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(function() {


        const controller = new AbortController();
        async function fetchMovies(){
            setIsLoading(true);

            try{
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{signal: controller.signal });

                if (!res.ok) throw new Error("Could not fetch movies");
                const data = await res.json();
                if (data.Response === 'False') {
                    throw new Error("Could not find movie");
                }
                setMovies(data.Search);
                setError("");
            }catch (err){
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            }finally {
                setIsLoading(false);
            }
        }

        if (query.length <1){
            setMovies([]);
            setError("");
            return;
        }

        fetchMovies()
        return function (){
            controller.abort();
        }
    },[query])
    return  {movies,isLoading,error};

}