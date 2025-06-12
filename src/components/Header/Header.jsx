import Sparkles from '../Sparkles/Sparkles';
import styles from './Header.module.css';

function Header(){
    return (
        <header className={styles.superheader}>
          <h1>Gradient Generator</h1>
          <h3>Beautiful-lush <Sparkles> Gradients</Sparkles></h3>
        </header>
    )
}

export default Header;