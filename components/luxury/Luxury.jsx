import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
    return (
        <div className={styles.luxury}>
            <div className={styles.heading}>
                <h2>Luxury Selection</h2>
                <div className={styles.text_bg}>
                    <p>
                        <span>Select from the top luxury vehicles to roll in styles</span>
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80v" alt="/" />
                    <div className={styles.content}>
                        <h3>Rolls Royce</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
                    <div className={styles.content}>
                        <h3>Ferrari</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
                    <div className={styles.content}>
                        <h3>Bugatti</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1617335692042-7a3779b8e050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
                    <div className={styles.content}>
                        <h3>McLaren</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Luxury