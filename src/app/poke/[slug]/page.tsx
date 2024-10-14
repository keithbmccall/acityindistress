'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../lib/button';
import styles from '../../page.module.css';

export default function Poke() {
  console.log('this page will be server side');
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Back to <Link href="/">home </Link>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Button>Check Please</Button>
      </div>
    </main>
  );
}
