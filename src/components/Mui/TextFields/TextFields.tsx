import { Box, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import { currencies } from '../../../helpers/variables';
import styles from './TextFields.module.scss';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { red } from '@mui/material/colors';

type TCurrency = {
  label: string,
  value: string,
}

function RedBar() {
    return (
      <Box
        sx={{
          height: 20,
          width: '100%',
          backgroundColor: red[100]
        }}
      />
    );
  }

export const TextFields = () => {
  const [txtValue, setTxtValue] = useState<string | null>('');
  const [numberValue, setNumberValue] = useState<number>(0);
  const [currency, setCurrency] = useState<TCurrency>(currencies[0]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isEye, setIsEye] = useState<boolean>(false);

  const onTextHanlde = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setTxtValue(value);
  }

  const onErrorHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNumberValue(Number(value));
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!numberValue) {
      setIsError(true);
    };
  }

  const currencyHanler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    const selectedCurrency: TCurrency = currencies.find((curr) => curr.label === value) || currency;
    setCurrency(selectedCurrency);
  }

  return (
    <div>
      <h4>Text field's</h4>

      <form className={styles.container} onSubmit={(event) => submitHandler(event)}>
        <Grid container gap={1}>
          <TextField
            label=".txt"
            helperText="Write some .txt"
            type="text"
            InputLabelProps={{shrink: true}}
            value={txtValue}
            onChange={onTextHanlde}
          />

          <TextField
            error={isError}
            variant="filled"
            label=".txt"
            InputLabelProps={{shrink: true}}
            helperText={`${isError ? 'Please enter the correct entire.' : 'Write some .txt.'}`}
            type="number"
            value={numberValue}
            onChange={onErrorHanlder}
          />

          <TextField
            error={isError}
            variant="filled"
            select
            label="currency select"
            helperText={`${isError ? 'Please enter the correct entire.' : 'Write some .txt.'}`}
            value={currency.label}
            onChange={currencyHanler}
          >
            {currencies.map((curr) => (
              <MenuItem
                key={curr.label}
                value={curr.label}
              >
                {curr.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Button type="submit">
          Submit me
        </Button>
      </form>

      <Grid container gap={1}>
        <FormControl>
          <InputLabel>
            Autor
          </InputLabel>

          <Input
            startAdornment={
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
          <AccountCircle sx={{mr: 1}}/>
          <TextField variant="standard" />
        </Box>

        <FormControl variant="filled">
          <InputLabel>Password</InputLabel>
          <Input 
            size="medium"
            type={isEye ? 'text' : 'password'}
            endAdornment={
              <InputAdornment
                position='end'
                variant="filled"
                onClick={() => setIsEye((current) => !current)}
                sx={{pr: 1}}
              >
                <IconButton edge="end">
                  {isEye ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>

      <Grid container gap={1} className={styles.container}>
        <Grid item>
          <RedBar/>
          <TextField margin="none" helperText="margin-none"/>
        </Grid>
        <Grid item>
          <RedBar/>
          <TextField margin="dense" helperText="margin-dense"/>
        </Grid>
        <Grid item>
          <RedBar/>
          <TextField margin="normal" helperText="margin-normal"/>
        </Grid>
      </Grid>
    </div>
  )
}