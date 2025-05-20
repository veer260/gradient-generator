import styles from './Header.module.css';

function Header(){
    return (
        <header className={styles.superheader}>
          <h1>Gradient-generator</h1>
          <h3>Beautiful-lush Gradients</h3>
        </header>
    )
}

export default Header;