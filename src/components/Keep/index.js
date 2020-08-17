import React from 'react';

function Keep() {
    return (
        <section className="container">
			<div className="container container-small">
				<h2>
					Keep track of your snippets
				</h2>
				<p>
					Clipboard instantly stores any item you copy in the cloud, meaning you
					can access your snippets immediately on all your devices. Our Mac and
					iOS apps will help you organize everything.
				</p>
			</div>

			<div className="flex">
				<div>
					<img src="./img/image-computer.png" alt="computer" />
				</div>

				<div>
					<h3>
						Quick Search
					</h3>
					<p>
						Easily search your snippets by content, category, web address,
						application, and more.
					</p>

					<h3>
						iCloud Sync
					</h3>
					<p>
						Instantly saves and syncs snippets across all your devices.
					</p>

					<h3>
						Complete History
					</h3>
					<p>
						Retrieve any snippets from the first moment you started using the
						app.
					</p>
				</div>
			</div>
		</section>
    );
}

export default Keep;