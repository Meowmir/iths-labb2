import {Button, Grid, TextField} from "@mui/material";

export default function TextfieldAndButton({label, onChange, onClick} : {label: string, onChange: (input: string) => void, onClick: () => void}){
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
          onChange={(input) => onChange(input.target.value)}
        />
      </Grid>
        <Grid item xs={12} sx={{margin: 2}}>
          <Button variant="contained" onClick={onClick}>Send</Button>
        </Grid>
    </Grid>
  )
}
