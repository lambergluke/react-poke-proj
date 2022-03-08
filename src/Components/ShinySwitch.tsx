import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
        <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />

  );
}


//return (
//    <FormControlLabel control={
//        <Switch
//        checked={checked}
//        onChange={handleChange}
//        inputProps={{ 'aria-label': 'controlled' }}
//        />}
//    label="Shiny"
//    />
//  );