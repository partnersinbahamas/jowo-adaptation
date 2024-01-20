import { ReactNode } from 'react';
import styles from './Section.module.scss';

type Props = {
  children: ReactNode,
  // styles?: {[key: string]: any},
}

export const Section: React.FC<Props> = ({ children }) => {
   return (
    <section className={styles.section}>
      {children}
    </section>
   )
}