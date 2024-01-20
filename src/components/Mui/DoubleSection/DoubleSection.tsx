import { ReactNode } from 'react';
import styles from './DoubleSection.module.scss';

type Props = {
  children: ReactNode,
}

export const DoubleSection: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}