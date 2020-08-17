import React from 'react';

function Footer() {
    return (
        <footer>
			<div className="container flex">
				<div>
					<img src="./img/logo.svg" alt="logo" />
				</div>
				<ul className="links">
					<li><a href="https://sueldosales.github.io/">FAQs</a></li>
					<li><a href="https://sueldosales.github.io/">Contact Us</a></li>
					<li><a href="https://sueldosales.github.io/">Privacy Policy</a></li>
					<li><a href="https://sueldosales.github.io/">Press Kit</a></li>
					<li><a href="https://sueldosales.github.io/">Install Guide</a></li>
				</ul>
				<ul className="social">
					<li>
						<a href="https://sueldosales.github.io/"><i className="fab fa-facebook"></i></a>
					</li>
					<li>
						<a href="https://sueldosales.github.io/"><i className="fab fa-twitter"></i></a>
					</li>
					<li>
						<a href="https://sueldosales.github.io/"><i className="fab fa-instagram"></i></a>
					</li>
				</ul>
			</div>
		</footer>
    );
}

export default Footer;