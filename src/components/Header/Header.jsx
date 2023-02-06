import { useState } from 'react';
import cn from 'classnames';
import styles from './Header.module.css';
import burgerImg from './img/Burger.svg';
import logoImg from './img/Logo.svg';
import phoneImg from './img/Phone.svg';
import tgImg from './img/socials/telegram.svg';
import instImg from './img/socials/instagram.svg';
import facebookImg from './img/socials/facebook.svg';
import youtubeImg from './img/socials/youtube.svg';
import tiktokImg from './img/socials/tiktok.svg';
import whatsupImg from './img/socials/whatsup.svg';

function Header() {
    const socials = [
        { name: tgImg, link: 'https://telegram.org/' },
        { name: instImg, link: 'https://www.instagram.com/' },
        { name: facebookImg, link: 'https://facebook.com/' },
        { name: youtubeImg, link: 'https://youtube.com/' },
        { name: tiktokImg, link: 'https://tiktok.com/' },
        { name: whatsupImg, link: 'https://www.whatsapp.com/' },
    ];
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <header className={styles.header}>
            <div className={cn(styles.header__main, 'container')}>
                <div className={styles.header__burger}>
                    <img src={burgerImg} alt="burger" />
                </div>
                <img className={styles.header__logo} src={logoImg} alt="logo" />
                <div className={styles.header__phone}>
                    <img src={phoneImg} alt="phone" />
                </div>
            </div>
            <div className={styles.header__burger}>
                <div className={styles.header__burger_pages}></div>
                <div className={styles.header__burger_socials}></div>
            </div>
        </header>
    );
}

export default Header;
