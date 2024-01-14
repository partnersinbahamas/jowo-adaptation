import { Mui } from './components/Mui/Mui';
import styles from './App.module.scss';

function App() {
  return (
    <section className={styles.app}>
      <h1 className={styles.title}>Jowo adaptation</h1>

      <main className={styles.main}>
        <Mui />
      </main>
    </section>
  );
}

export default App;
