import React, { useState, useEffect } from 'react'
import styles from '../styles/Marketplace.module.css'
import Card from '../components/Card'

export default function Marketplace() {

    return (
        <div className={styles.marketcontainer}>
            <h3>Shop</h3>

            <Card title="NFT n°23" img="https://c.tenor.com/rz84v8a-8b0AAAAd/salut-ahmed.gif" desc="Ceci est la description" price="30$" />
            <Card title="NFT n°23" img="https://c.tenor.com/rz84v8a-8b0AAAAd/salut-ahmed.gif" desc="Ceci est la description" price="30$" />
            <Card title="NFT n°23" img="https://c.tenor.com/rz84v8a-8b0AAAAd/salut-ahmed.gif" desc="Ceci est la description" price="30$" />
            <Card title="NFT n°23" img="https://c.tenor.com/rz84v8a-8b0AAAAd/salut-ahmed.gif" desc="Ceci est la description" price="30$" />
            <Card title="NFT n°23" img="https://c.tenor.com/rz84v8a-8b0AAAAd/salut-ahmed.gif" desc="Ceci est la description" price="30$" />

        </div>
    )
}