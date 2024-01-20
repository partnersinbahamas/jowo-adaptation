import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio } from "@mui/material";
import styles from './RadioGroup.module.scss';
import { useState } from "react";
import {RadioGroup as RGroup} from '@mui/material';

export const RadioGroup = () => {
  const [control, setControl] = useState<any>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const controlHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setControl(value);
  }
  
  const submithandler = (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('');
    setIsError(false);

    if (!control) {
      setMessage('Please select the control');
      setIsError(true);
    }
  }

  return (
    <div>
      <h4>RadioGroup</h4>

      <form className={styles.container} onSubmit={submithandler}>
        <FormControl error={isError}>
          <FormLabel>Are you FE developer?</FormLabel>

          <RGroup onChange={controlHanlder}>
            <div className={styles.item}>
              <FormControlLabel
                label="Yes"
                value="yes"
                control={
                  <Radio />
                }
              />
            </div>

            <div className={styles.item}>
              <FormControlLabel
                label="No"
                value='no'
                control={
                  <Radio disabled/>
                }
              />
            </div>

            <div className={styles.item}>
              <FormControlLabel
                label="Not only"
                value='notOnly'
                control={
                  <Radio />
                }
              />
            </div>
          </RGroup>

          <FormHelperText>{message}</FormHelperText>
        <Button
          variant="contained"
          color={
            isError && message
            ? 'error'
            : !isError
              && typeof message === 'string'
              ? 'success'
              : 'secondary'
          }
          type="submit"
        >
            Send
          </Button>

        </FormControl>
      </form>
    </div>
  );
};