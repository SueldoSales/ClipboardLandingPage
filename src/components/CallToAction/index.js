import React from 'react';

function CallToAction() {
    return (
        <section className="container container-small m4">
			<h2>
				Clipboard for iOS and Mac OS
			</h2>
			<p>
				Available for free on the App Store. Download for Mac or iOS, sync with
				iCloud and you’re ready to start adding to your clipboard.
			</p>
			<div>
				<button className="btn btn-primary">
					Download for iOS
				</button>
				<button className="btn btn-secondary">
					Download for Mac
				</button>
			</div>
		</section>
    );
}

export default CallToAction;