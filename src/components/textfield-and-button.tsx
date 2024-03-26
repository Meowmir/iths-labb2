import {Button, Grid, TextField} from "@mui/material";

export default function TextfieldAndButton({label} : {label: string}){
  return (
    <Grid container>
      <Grid item xs={12}>
        <h4>{label}</h4>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="example"
          variant="outlined"
          color="primary"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
          }}
        />
      </Grid>
        <Grid item xs={12} sx={{margin: 2}}>
          <Button variant="contained">Send</Button>
        </Grid>
    </Grid>
  )
}
