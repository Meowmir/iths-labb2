import axios from 'axios';

const API_URL = "https://api.datamuse.com/"

export default function getWords(words: string){
  const FULL_API = API_URL + "words?ml=" + words
  console.log(FULL_API)
  console.log("-------")


    const data = axios
      .get(FULL_API)
      .then((response) => {
        response.data.map((item) => {
          console.log(item.word)
        })
      console.log(response.data);
    })
  console.log(data)

  return data
}
