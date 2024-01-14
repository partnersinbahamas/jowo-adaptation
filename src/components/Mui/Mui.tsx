import { Section } from '../Section/Section';
import { AutoComplete } from './AutoComelete/AutoComplete';
import { Buttons } from './Buttons/Buttons';
import styles from './Mui.module.scss';

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
      </div>
    </div>
  )
}