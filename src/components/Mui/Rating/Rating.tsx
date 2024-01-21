import { Rating as RatingMui, Typography } from '@mui/material';
import styles from './Rating.module.scss';
import { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { red } from '@mui/material/colors';

export const Rating = () => {
  const [film, setFilm] = useState<number | null>(null);

  return (
    <div>
      <h4>Rating</h4>

      <div className={styles.container}>
        <div>
          <Typography component="legend">Film Raiting</Typography>
          <div className={styles.raiting}>
            <RatingMui
              onChange={(event, value) => setFilm(value)}
              value={film}
              precision={0.5}
            />
            <span>Selected raiting: {film}</span>
          </div>
        </div>

        <div>
          <Typography>Film Raiting is readOnly</Typography>
          <div className={styles.raiting}>
            <RatingMui
              onChange={(event, value) => setFilm(value)}
              value={1.5}
              precision={0.5}
              readOnly
              disabled
            />
            <span>Selected raiting: {film}</span>
          </div>
        </div>

        <div>
          <Typography>Film Raiting with heard</Typography>
          <div className={styles.raiting}>
            <RatingMui
              onChange={(event, value) => setFilm(value)}
              value={film}
              precision={0.5}
              icon={<Favorite sx={{color: red[400]}}/>}
              emptyIcon={<FavoriteBorder />}
            />
            <span>Selected raiting: {film}</span>
          </div>
        </div>
      </div>
    </div>
  );
};