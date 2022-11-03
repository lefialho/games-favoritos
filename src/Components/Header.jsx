import { useState } from 'react';
import styles from './Header.module.css';

export function Header() {
  const [theme, setTheme] = useState('theme-dark');
  const $body = document.body;
  $body.className = theme;

  function toggleTheme(e) {
    return e.target.checked
      ? ($body.className = setTheme('theme-light'))
      : ($body.className = setTheme('theme-dark'));
  }

  return (
    <header>
      <h1>Meus games favoritos</h1>
      <h2>Tabela periódica categorizada por console</h2>
      <label className={styles['toggle-theme']}>
        <input
          className={styles['theme-control']}
          type="checkbox"
          onChange={toggleTheme}
        />
        <span className={styles['theme-track']}>Trocar tema</span>
      </label>
    </header>
  );
}
