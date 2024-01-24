import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { movies } from '../../../helpers/variables';
import styles from './Selects.module.scss';
import { useState } from 'react';

export const Selects = () => {
  const [movieArr, setMovieArr] = useState<any>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleChangeMultiple = (event: any) => {
    const { options } = event.target;

    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setMovieArr(value);
  };

  const changeHandler = (event: SelectChangeEvent<string | null>) => {
    const { value } = event.target;
    setSelectedValue(value);
  }

  const onSubmitHandler = (event?: React.FormEvent) => {
    event?.preventDefault();

    if (!selectedValue) {
      setIsError(true);
    }
  }

  return (
    <div className={styles.wrapper}>
      <h4>Selects</h4>

      <form
        className={styles.container}
        onSubmit={(event) => onSubmitHandler(event)}
      >
        <Box>
          <FormControl
            fullWidth
            variant="outlined"
            error={isError}
          >
            <InputLabel>
              {`Movie ${selectedValue ? `: ${selectedValue}` : ''}`}
            </InputLabel>

            <Select
              label={`Movie ${selectedValue ? `: ${selectedValue}` : ''}`}
              value={selectedValue}
              onChange={(event) => changeHandler(event)}
              onBlur={onSubmitHandler}
              onFocus={() => setIsError(false)}
            >
              {movies.map((movie) => (
                <MenuItem
                  key={movie.label}
                  value={movie.label}
                >
                  {movie.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Button
          sx={{width: 100}}
          variant='contained'
          type='submit'
          color={
            isError ? 'error' : selectedValue
            && !isError ? 'success' : 'primary'
          }
        >
          UnSelect
        </Button>
      </form>

      <form
        className={styles.container}
        onSubmit={(event) => onSubmitHandler(event)}
      >
        <Box>
          <FormControl
            fullWidth
            variant="outlined"
            error={isError}
          >
            <InputLabel shrink>Native</InputLabel>

            <Select
              native
              multiple
              label="Native"
              value={movieArr}
              onChange={handleChangeMultiple}
              onBlur={onSubmitHandler}
              onFocus={() => setIsError(false)}
              inputProps={{
                id: 'select-multiple-native',
              }}
            >
              {movies.map((movie) => (
                <option
                  key={movie.label}
                  value={movie.label}
                >
                  {movie.label}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Button
          sx={{width: 100}}
          variant='contained'
          type='submit'
          color={
            isError ? 'error' : selectedValue
            && !isError ? 'success' : 'primary'
          }
        >
          UnSelect
        </Button>
      </form>
    </div>
  )
}