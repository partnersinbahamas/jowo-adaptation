import { Checkbox,FormControlLabel, FormGroup, Rating } from '@mui/material';
import styles from './Checkboxes.module.scss';
import { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

export const Checkboxes = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChakedBox = (value: boolean) => {
    setIsChecked(value);
  }

  return (
    <div className={styles.wrapper}>
      <h4>CheckBoxes</h4>

      <div className={styles.container}>
        <div>
          <Checkbox checked/>
        </div>

        <FormGroup row>
          <FormControlLabel
            label="Checkbox test - 1"
            control={
              <Checkbox
                size="small"
                color="error"
                checked={isChecked}
              />
            }
            onClick={() => handleChakedBox(!isChecked)}
          />

          <FormControlLabel
            label="Checkbox test - 2"
            control={
              <Checkbox
                size="medium"
                color="success"
                checked={isChecked}
              />
            }
            onClick={() => handleChakedBox(!isChecked)}
          />

          <FormControlLabel
            label="Checkbox test - 3"
            control={
              <Checkbox
                sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                color="secondary"
                checked={isChecked}
              />
            }
            onClick={() => handleChakedBox(!isChecked)}
          />

          <FormControlLabel
            label
            control={
              <Checkbox
                icon={<FavoriteBorder sx={{color: pink[100]}}/>}
                checkedIcon={<Favorite sx={{color: pink[500]}}/>}
              />
            }
          />
        </FormGroup>
  
        <Rating />
      </div>
    </div>
  )
}