import WordGrid from "../components/word-grid.component.tsx";
import getWords from "../utils/get-words.util.ts";
import {useState} from "react";

export default function FrontView(){
  const [similarWord, setSimilarWord] = useState("")
  const [soundWord, setSoundWord] = useState("")

  const handleClick = () => {
    getWords(similarWord)


  }


  return (
    <>
      <h1>Words</h1>
      <WordGrid
        onSimilarChange={setSimilarWord}
        onSimilarClick={handleClick}
        onSoundChange={setSoundWord}
        onSoundClick={handleClick}
        />
    </>
  )
}
