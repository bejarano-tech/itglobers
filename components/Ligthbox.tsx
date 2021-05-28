import { useState, useEffect } from "react";
import classnames from 'classnames';

import styles from './Ligthbox.module.css';

export default function Ligthbox(props: {message: string}) {

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <p>{props.message}</p>
            </div>    
        </div>
    );
}