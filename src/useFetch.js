import React from 'react'
import { useState, useEffect } from 'react'



function useFetch(url) {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setIsLoading(true);
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setList(data);
            setIsLoading(false);
          })
          .catch(error => {
            setError(error);
            setIsLoading(false);
          });
      }, [url]);

  return [list, isLoading, error]
}

export default useFetch