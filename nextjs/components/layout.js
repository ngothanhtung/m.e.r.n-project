import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <nav>Home | About | Login</nav>
      <main>{children}</main>
    </div>
  );
}
