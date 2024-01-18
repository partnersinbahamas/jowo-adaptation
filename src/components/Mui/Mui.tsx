import { Button, ButtonGroup } from '@mui/material';
import { Section } from '../Section/Section';
import { AutoComplete } from './AutoComelete/AutoComplete';
import { Buttons } from './Buttons/Buttons';
import { GroupButtons } from './GroupButtons/GroupButtons';
import styles from './Mui.module.scss';
import { Checkboxes } from './Checkboxes/Checkboxes';

export const Mui = () => {
  return (
    <div className={styles.mui}>
      <h1 className={styles.title}>Material UI</h1>

      <div className={styles.sections}>
        <Section>
          <AutoComplete />
        </Section>

        <Section>
          <Buttons />
        </Section>

        <Section>
          <GroupButtons variant="outlined" />

          <br />

          <ButtonGroup
            className={styles.groupButton}
            orientation="vertical"
            variant="contained"
            >
            <Button>First</Button>

            <Button variant="outlined">Second</Button>
            <Button>Third</Button>
          </ButtonGroup>
        </Section>

        <Section>
          <Checkboxes />
        </Section>
      </div>
    </div>
  )
}