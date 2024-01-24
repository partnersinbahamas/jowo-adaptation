import { FormControlLabel, FormGroup, Switch, SwitchProps } from '@mui/material';
import styles from './Switchs.module.scss';
import { useState } from 'react';
import styled from '@emotion/styled';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }: any) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '2px',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 'grey',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#39393D',
    opacity: 1,
    transition: '.5s',
  },
}));

export const Switchs = () => {
  const [isSwitched, setIsSwitched] = useState<boolean>(false);

  const switchHandler = (event: any) => {
    const { checked } = event.target;
    setIsSwitched(checked);
  };

  return (
    <div>
      <h4>Switchs</h4>

      <div className={styles.container}>
        <FormGroup>
          <FormControlLabel
            label="Switcher lable"
            control={
              <Switch
                checked={isSwitched}
                size="small"
                onChange={(event) => switchHandler(event)}
              />
            }
          />

          <FormControlLabel
            label="Switcher lable"
            control={
              <Switch
                checked={isSwitched}
                size="medium"
              />
            }
          />

          <FormControlLabel control={<IOSSwitch/>} label="IOS Sw" />
        </FormGroup>
      </div>
    </div>
  )
}