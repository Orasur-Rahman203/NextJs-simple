import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.link}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/cart'>Cart</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;