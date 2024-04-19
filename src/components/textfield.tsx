import {Input} from "@mui/material";

export default function Textfield({onChange} : {onChange: (input: string) => void}){
  return (
      <Input
        autoFocus={true}
        placeholder="Seashell on shore"
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          padding: 1,
          marginBottom: 5
        }}
        onChange={(input) => onChange(input.target.value)}
      />
  )
}
