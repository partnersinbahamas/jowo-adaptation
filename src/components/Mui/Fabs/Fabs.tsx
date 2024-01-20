import { Favorite, Navigation, QuestionMark, } from "@mui/icons-material"
import { Fab } from '@mui/material';
import styles from './Fabs.module.scss';

export const Fabs = () => {
  return (
    <div>
      <h4>FAB</h4>

      <div className={styles.container}>
        <Fab variant="extended" color="primary" size="small">
          <Favorite
            sx={{fontSize: 20,
            transform: 'rotate(45deg)'
            }}
          />
        </Fab>

        <Fab
          variant="extended"
          size="small"
        >
          <Navigation fontSize="small" sx={{mr: 1}}/>
          Navigato to
        </Fab>

        <Fab disabled size="small">
          <QuestionMark/>
        </Fab>

      </div>
    </div>
  )
}