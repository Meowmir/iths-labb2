import WordGrid from "../components/word-grid.component.tsx";
import {useState} from "react";
import Textfield from "../components/textfield.tsx";
import getResults from "../utils/get-results.util.ts";

export default function FrontView(){
  const [words, setWord] = useState("")
  const results = getResults(words)

  return (
    <>
      <h1>Words</h1>
      <h4>Start typing a word or a sentence</h4>
      <Textfield onChange={setWord}/>
      <WordGrid
        words={results}
        />
    </>
  )
}
