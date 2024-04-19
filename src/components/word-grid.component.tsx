import {Grid} from "@mui/material";
import GridItem from "./grid-item.tsx";

export default function WordGrid({words} : {words: string[][]}){
  return (
    <>
     <Grid container>
       <Grid item xs={4} sx={{padding: 2}}>
         <GridItem title="Similar to:" words={words} index={0}/>
       </Grid>
       <Grid item xs={4} sx={{padding: 2}}>
         <GridItem title="Sounds like:" words={words} index={1}/>
       </Grid>
       <Grid item xs={4} sx={{padding: 2}}>
         <GridItem title="Words that often follow:" words={words} index={2}/>
       </Grid>
     </Grid>
    </>
  )
}
