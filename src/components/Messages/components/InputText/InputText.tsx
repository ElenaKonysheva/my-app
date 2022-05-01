import React, { FC } from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
interface InputTextProps {
  changeText?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | (() => void);
  value?: string;
}
export const InputText: FC<InputTextProps> = (props) => {
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
