import TextField from "@mui/material/TextField";
import { SetStateAction, useState } from "react";
import CssTextField from './CssTextField'

export default function useInputBox(pokeName: string) {

    const [value, setValue] = useState("");
    let textBox;
    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        console.log(value)
        setValue(event.target.value);
      };
    
    if (pokeName === 'default-value'){
      textBox = (
      <h1 className="App-textbox">
          <TextField 
              color="primary"
              error={true} 
              label="Pokemon Name" 
              helperText="Invalid name entered."
              onChange={handleChange}
              sx={{input: {color: 'white'}}}
          />
      </h1>
        )
    } textBox = (
          <h1 className="App-textbox">
            <CssTextField
                variant="outlined" 
                color="primary"
                error={false} 
                label="Pokemon Name"
                helperText=""
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                onChange={handleChange}
                sx={{input: {color: 'white'}}}
            />
          </h1>
      )

    return{
        value,
        renderTextBox:(textBox)

    }

  }