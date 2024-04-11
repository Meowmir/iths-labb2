import axios from 'axios';
import {useEffect, useState} from "react";

const API_URL = "https://api.datamuse.com/"

export default function getResults(userInput: string) : string[] {
  const [fetchResult, setFetchResult] = useState([])

  const similarTo = API_URL + "words?ml=" + userInput

  useEffect(() => {
    axios
      .get(similarTo)
      .then((response) => {
        return response.data.map((item) => {
          return item.word
        })
      })
      .then(setFetchResult)
  }, [userInput]);


  return fetchResult
}
