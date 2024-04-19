import axios from 'axios';
import {useEffect, useState} from "react";

const API_URL = "https://api.datamuse.com/"


export default function getResults(userInput: string) : string[][] {
  const [fetchSimilarToResult, setFetchSimilarToResult] = useState([])
  const [fetchSoundsLikeResult, setFetchSoundsLikeResult] = useState([])
  const [fetchWordsThatFollowResult, setFetchWordsThatFollowResult] = useState([])

  const similarTo = API_URL + "words?ml=" + userInput
  const soundsLike = API_URL + "words?sl=" + userInput
  const wordsThatFollow = API_URL + "words?lc=" + userInput + "&sp=???*"

  useEffect(() => {
    axios
      .get(similarTo)
      .then((response) => {
        return response.data.map((item) => {
          return item.word
        })
      })
      .then(setFetchSimilarToResult)
  }, [userInput]);


  useEffect(() => {
    axios
      .get(soundsLike)
      .then((response) => {
        return response.data.map((item) => {
          return item.word
        })
      })
      .then(setFetchSoundsLikeResult)
  }, [userInput]);

  useEffect(() => {
    axios
      .get(wordsThatFollow)
      .then((response) => {
        return response.data.map((item) => {
          return item.word
        })
      })
      .then(setFetchWordsThatFollowResult)
  }, [userInput]);

  return [fetchSimilarToResult, fetchSoundsLikeResult, fetchWordsThatFollowResult]
}


