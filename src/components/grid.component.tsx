import {Grid} from "@mui/material";
import TextfieldAndButton from "./textfield-and-button.tsx";

export default function GridView(){
  return (
    <>
     <Grid container>
      <Grid item xs={3}>
        <TextfieldAndButton label={"Words with a meaning similar to:"}/>
      </Grid>
       <Grid item xs={3}>
        <TextfieldAndButton label={"Words with a meaning similar to:"}/>
      </Grid>
     </Grid>
    </>
  )
}
