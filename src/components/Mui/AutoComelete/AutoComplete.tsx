import { SyntheticEvent, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { movies } from '../../../helpers/variables';
import styles from './AutoCompelete.module.scss';


export const AutoComplete = () => {
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [wroteMessage, setWroteMessage] = useState<string>('');

  const changeHandler = (event: SyntheticEvent<Element, Event>, value: any) => {
    setSelectedMovie(value);
  }

  const wroteChangeHandler = (event: SyntheticEvent<Element, Event>, value: string) => {
    setWroteMessage(value);
  }

  return (
    <div className={styles.wrapper}>
      <h4>AutoComplete</h4>

      <div className={styles.container}>
        <div className={styles.variants}>
          <Autocomplete
            disablePortal
            freeSolo
            clearOnBlur
            selectOnFocus
            // handleHomeEndKeys
            id="films-aComplete"
            options={movies.sort((a: any, b: any) => a.label.localeCompare(b.label))}
            groupBy={(option) => option.label[0]}
            getOptionLabel={(option: any) => option.label}
            inputValue={wroteMessage}
            onInputChange={wroteChangeHandler}
            value={selectedMovie}
            onChange={changeHandler}
            sx={{ width: 300 }}
            renderInput={(params) =>
              <TextField
                {...params}
                label="Movie categories"
                variant='outlined'
              />
            }
          />

          <Autocomplete
            disablePortal
            id="films-aComplete"
            options={movies}
            value={selectedMovie}
            onChange={changeHandler}
            sx={{ width: 300 }}
            renderInput={(params) =>
              <TextField
                {...params}
                label="Movie"
                variant='filled'
              />
            }
          />

          <Autocomplete
            disablePortal
            id="films-aComplete"
            options={movies}
            value={selectedMovie}
            onChange={changeHandler}
            sx={{ width: 300 }}
            renderInput={(params) =>
              <TextField
                {...params}
                label="Movie"
                variant='standard'
              />
            }
          />
        </div>

        <div className={styles.output}>
          <div className={styles.movie}>
            <p>Selected movie: </p>
            <p>{selectedMovie === null ? 'null' : selectedMovie.label}</p>
          </div>

          <div className={styles.movie}>
              <p>Wrote message: </p>
              <p>{wroteMessage ? wroteMessage : 'null'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}