import {Grid} from "@mui/material";

export default function WordGrid({words} : {words: string[]}){
  return (
    <>
     <Grid container>
       <Grid item xs={6}  sx={{borderStyle: "solid", borderColor: "white"}}>
         <p>Similar meaning to:</p>
         <hr/>
         {words.map((word) => (
           <Grid item xs={6} key={word} sx={{ justifyContent: "center", alignItems: "center"}}>
             <p>{word}</p>
           </Grid>
         ))}
       </Grid>
       <Grid item xs={6}>
         <p>Similar meaning to:</p>
         {words.map((word) => (
           <Grid item xs={6} key={word} sx={{borderStyle: "solid", borderColor: "white"}}>
             <p>{word}</p>
           </Grid>
         ))}
       </Grid>
     </Grid>
    </>
  )
}
