import styles from './header.module.css';
import Logo from '../../logo.svg'
import Navcontent from '../nav-contents/navcontents.components';

const Header = () => {
  return (
    <nav className={styles.wrapper}>
        <div className={styles.container}>
            <img src={Logo} alt="logo" className={styles.logo} />
            <Navcontent />
        </div>
    </nav>
  )
}

export default Header