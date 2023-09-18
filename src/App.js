import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <h1>Welcome to React</h1>
            </main>
            <footer>
                <p className="left">
                    Follow me on{' '}
                    <a href="https://www.instagram.com/rafi_sharkar_0777/?fbclid=IwAR3pJ8vJ3loL1TxmzuSwKyiDDHB2U_l-ej6n84htH9nxNKV_RWxP1avB_Cc">
                        <FaInstagram className="footer__icon" />
                        
                    </a>{' '}
                    channel
                </p>
                <p className="right">Let's explore with &#8766; by Rafi Sharkar</p>
            </footer>
        </div>
    );
};

export default App;
