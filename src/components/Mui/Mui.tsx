import { Button, ButtonGroup } from '@mui/material';
import { Section } from '../Section/Section';
import { AutoComplete } from './AutoComelete/AutoComplete';
import { Buttons } from './Buttons/Buttons';
import { GroupButtons } from './GroupButtons/GroupButtons';
import styles from './Mui.module.scss';
import { Checkboxes } from './Checkboxes/Checkboxes';
import { Fabs } from './Fabs/Fabs';
import { DoubleSection } from './DoubleSection/DoubleSection';
import { RadioGroup } from './RadioGroup/RadioGroup';
import { Selects } from './Selects/Selects';
import { Sliders } from './Sliders/Sliders';
import { Switchs } from './Switchs/Switchs';

export const Mui = () => {
  return (
    <div className={styles.mui}>
      <h1 className={styles.title}>Material UI</h1>

      <div className={styles.sections}>
        <DoubleSection>
          <Section>
            <AutoComplete />
          </Section>

          <Section>
            <Selects/>
          </Section>
        </DoubleSection>

        <DoubleSection>
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
            <Fabs />
          </Section>
        </DoubleSection>

        <DoubleSection>
          <Section>
            <Checkboxes />
          </Section>

          <Section>
            <RadioGroup />
          </Section>
        </DoubleSection>

        <DoubleSection>
          <Section>
            <Sliders />
          </Section>

          <Section>
            <Switchs />
          </Section>
        </DoubleSection>
      </div>
    </div>
  )
}