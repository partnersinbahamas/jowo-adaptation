import { Button, ButtonGroup } from "@mui/material";
import styles from './GroupButtons.module.scss';

type TVariants = 'outlined' | 'contained' | 'text';

type Props = {
  variant: TVariants,
}

export const GroupButtons: React.FC<Props> = ({ variant }) => {
  return (
    <div className={styles.wrapper}>
      <h4>Group Buttons</h4>

      <div className={styles.container}>
        <div className={styles.groupButtons}>
          <ButtonGroup
            className={styles.groupButton}
            variant={variant}
            orientation="horizontal"
          >
            <Button>First</Button>

            <Button
              variant={
                variant === 'contained'
                ? 'outlined'
                : 'contained'
              }
            >
              Second
            </Button>

            <Button>Third</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};