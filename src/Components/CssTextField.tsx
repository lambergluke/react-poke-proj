import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& :placeholder': {
      color: 'white'
   }, 
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'secondary',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary',
      },
    },
  });

export default CssTextField;