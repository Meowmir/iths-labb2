import {Button, Grid, TextField} from "@mui/material";

export default function TextfieldAndButton({onChange} : {onChange: (input: string) => void}){
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          label="example"
          variant="outlined"
          color="primary"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
          }}
          onChange={(input) => onChange(input.target.value)}
        />
      </Grid>

    </Grid>
  )
}
