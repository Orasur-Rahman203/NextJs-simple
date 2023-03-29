import React from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const pageNotFound = () => {
    return (
        <div className={styles.main}>
            <h1>Page not found</h1>
            <Link href='/'><button>Click me</button></Link>
            <p>Click the Button then go back the home page</p>
        </div>
    );
};

export default pageNotFound;