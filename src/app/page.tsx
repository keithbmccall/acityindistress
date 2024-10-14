import { Button } from '../lib/button';
import { PokeSearch } from '../lib/poke-search';
import styles from './page.module.css';

export default function Home() {
  console.log('this will be the home page and will have the search bar');
  return (
    <main className={styles.main}>
      <div>
        <PokeSearch />
      </div>

      <div className={styles.grid}>
        <Button>Check Please</Button>
      </div>
    </main>
  );
}
