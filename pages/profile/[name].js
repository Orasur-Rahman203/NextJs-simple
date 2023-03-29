import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

const profile = () => {
    const router=useRouter();
    const name=router.query.name;
    return (
        <div className={styles.main}>
            <h3>Hello {name}</h3>
        </div>
    );
};

export default profile;