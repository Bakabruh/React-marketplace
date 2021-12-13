import React, { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navcontainer}>
            <p>Oui</p>
            <p>Non</p>
            <p>Peut être</p>

        </div>
    )
}