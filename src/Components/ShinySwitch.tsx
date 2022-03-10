import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

export default function useSwitch() {
  
  const [checked, setChecked] = useState(false);

  const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    console.log(checked)
    setChecked(event.target.checked);
  };

  return {
    checked,
    render:(
    <div>
    <FormControlLabel control={
        <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />}
        label="Shiny"
        labelPlacement="bottom"
    />
    </div>
  )}
}