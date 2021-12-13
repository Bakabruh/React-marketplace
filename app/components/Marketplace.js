import React, { useState, useEffect } from 'react'
import styles from '../styles/Marketplace.module.css'
import Card from '../components/Card'

export default function Marketplace() {

    return (
        <div>
            <h3 style={{
                textAlign: 'center',
                fontSize: '24px'
            }}>Shop</h3>

            <div className={styles.marketcontainer}>
                <Card title="NFT n°23" img="https://c.tenor.com/rz84v8a-8b0AAAAd/salut-ahmed.gif" desc="Ceci est la description" price="30$" />
                <Card title="NFT n°24" img="https://media-exp1.licdn.com/dms/image/C4E03AQGc_okTsbZxhg/profile-displayphoto-shrink_200_200/0/1631883049678?e=1643846400&v=beta&t=7P7zswBXC-_JjuWp3nvuOYU24D9JqunPFlYcglaTi9Q" desc="C'est vraiment po nice" price="20$" />
                <Card title="NFT n°25" img="https://media-exp1.licdn.com/dms/image/C4E03AQEhkcQSnHnV6g/profile-displayphoto-shrink_200_200/0/1618325423760?e=1642636800&v=beta&t=0M8clkJiOnurvOR3RkQCQx25zsIMv0R_v_ELah0b24A" desc="Salut je m'appelle Ahmed" price="5$" />
                <Card title="NFT n°26" img="https://media-exp1.licdn.com/dms/image/C4E03AQE4LcL9lqlrTQ/profile-displayphoto-shrink_200_200/0/1623151785021?e=1643241600&v=beta&t=fBN5sKzwa7U4XcLeTQhMgjKpAljcyusZSzYPdM19rl4" desc="C'est parti Oui-Oui" price="1$" />
            </div>

        </div>
    )
}