import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <main>
      <nav>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/ssr">
          <a className={styles.navLink}>SSR</a>
        </Link>
        <Link href="/tags/[tag]" as="/tags/1">
          <a className={styles.navLink}>Tag 1</a>
        </Link>
        <Link href="/tags/[tag]" as="/tags/2">
          <a className={styles.navLink}>Tag 2</a>
        </Link>
        <Link href="/tags/[tag]" as="/tags/3">
          <a className={styles.navLink}>Tag 3</a>
        </Link>
        <Link href="/preview">
          <a className={styles.navLink}>Page with Preview</a>
        </Link>
      </nav>
      {children}
    </main>
  )
}
