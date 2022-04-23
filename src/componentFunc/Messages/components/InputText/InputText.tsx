import React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import PropTypes from 'prop-types';
// interface InputTextProps {
//   value: string;
//   changeText: () => void;
// }

export const InputText = (props: {
  changeText:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | (() => void);
  value: string;
}) => {
  return (
    <Box sx={{ '& > :not(style)': { m: 4 } }}>
      <TextField
        data-testid="custom-element"
        placeholder={'write your message'}
        onChange={props.changeText}
        value={props.value}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
};
// InputText.propTypes = {
//   changeText: PropTypes.func,
//   value: PropTypes.string,
// };
