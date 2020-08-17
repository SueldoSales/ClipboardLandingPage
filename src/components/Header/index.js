import React from 'react';

function Header() {
    return (
        <header>
			<div className="container container-small">
				<img src="./img/logo.svg" alt="logo" />
				<h1>
					A history of everything you copy
				</h1>
				<p>
					Clipboard allows you to track and organize everything you copy.
					Instantly access your clipboard on all your devices.
				</p>

				<div>
					<button className="btn btn-primary">
						Download for iOS
					</button>
					<button className="btn btn-secondary">
						Download for Mac
					</button>
				</div>
			</div>
		</header>
    );
}

export default Header;
