import WordGrid from "../components/word-grid.component.tsx";
import {useState} from "react";
import Textfield from "../components/textfield.tsx";
import getResults from "../utils/get-results.util.ts";

export default function FrontView(){
  const [userInput, setUserInput] = useState("")
  const results = getResults(userInput)

  return (
    <>
      <h1>Words</h1>
      <h4>Start typing a word or a sentence</h4>
      <Textfield onChange={setUserInput}/>
      <WordGrid
        words={results}
        />
    </>
  )
}
