import { Button } from '@mui/material';
import styles from './Buttons.module.scss';
import { Delete } from '@mui/icons-material';
import { Send } from '@mui/icons-material';
import { useState } from 'react';

export const Buttons = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className={styles.buttons}>
      <h4 className={styles.title}>Buttons</h4>

      <div className={styles.container}>
        <h6>Default</h6>
        
        <Button variant="contained" disabled>
          Contained + disabled
        </Button>

        <Button variant="outlined" onClick={() => setIsClicked((current) => !current)} color={`${isClicked ? 'success' : 'secondary'}`}>
          {`Outlined ${isClicked ? "+ clicked" : ""}`}
        </Button>

        <Button variant="text">
          Text
        </Button>

        <Button
          variant="outlined"
          href='https://www.instagram.com/'
          target="_blank"
        >
          Instagram Link
        </Button>
      </div>

      <div className={styles.container}>
        <h6>With icons</h6>

        <Button variant='contained' startIcon={<Delete />}>Delete</Button>
        <Button variant='outlined' startIcon={<Send />}>Send</Button>
      </div>
    </div>
  )
}