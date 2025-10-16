import './footer.css'
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container1">
            <div className="footer-box">
                <ul className="ul1">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Info</li>
                    <li>Contact</li>
                    <li>Bookings</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul className="ul2">
                    <li>Style Guide</li>
                    <li>Licenses</li>
                    <li>Instructions</li>
                    <li>Changelog</li>
                    <li>Password</li>
                    <li>404</li>
                </ul>
                <ul className="ul3">
                    <li>© Latte Cafe 2022.</li>
                    <li>Built by Nikolai Bain.</li>
                    <li>Powered by Webflow.</li>
                </ul>
            </div>
            </div>
        </footer>
    );
};

export default Footer;