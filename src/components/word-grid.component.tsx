import {Grid} from "@mui/material";
import TextfieldAndButton from "./textfield-and-button.tsx";

type WordGridProps = {
  onSimilarChange: (word: string) => void,
  onSimilarClick: () => void,
  onSoundChange: (word: string) => void,
  onSoundClick: () => void
}

export default function WordGrid({onSimilarChange, onSimilarClick, onSoundChange, onSoundClick} : WordGridProps){
  return (
    <>
     <Grid container>
      <Grid item xs={3}>
        <TextfieldAndButton label={"Words with a meaning similar to:"} onChange={onSimilarChange} onClick={onSimilarClick}/>
      </Grid>
       <Grid item xs={3}>
        <TextfieldAndButton label={"Words that sound like:"} onChange={onSoundChange} onClick={onSoundClick}/>
      </Grid>
     </Grid>
    </>
  )
}
