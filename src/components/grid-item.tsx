import {Grid} from "@mui/material";

export default function GridItem({title, words, index}: {title: string, words: string[][], index: number}){
  return (
    <Grid container>
    <Grid item xs={12}>
      <p>{title}</p>
      <hr/>
    </Grid>
    <Grid item xs={12}>
      {words[index].map((word, i) => (
        <Grid item xs={6} key={i}>
          <p>{word}</p>
        </Grid>
      ))}
    </Grid>
  </Grid>
  )
}
