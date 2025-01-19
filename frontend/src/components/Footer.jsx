import React from 'react';
import '../Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    This job list was made for CS-4B, hoping that it would help increase the chance of us getting an internship/OJT for our last requirement.
                    We know that the field is competitive and saturated, but I believe that we can make it through. Good luck to us all :3
                </p>
                <p className="credits">Created by: <strong>jkdev</strong></p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/jkyledev/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/jkagullo" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
