import React from 'react';

function Supercharge() {
    return (
        <section className="container">
			<div>
				<h2>
					Supercharge your workflow
				</h2>
				<p>
					We’ve got the tools to boost your productivity.
				</p>
			</div>
			<div className="flex">
				<div>
					<img src="./img/icon-blacklist.svg" alt="list" />
					<h3>Create blacklists</h3>
					<p>
						Ensure sensitive information never makes its way to your clipboard
						by excluding certain sources.
					</p>
				</div>
				<div>
					<img src="./img/icon-text.svg" alt="text" />
					<h3>
						Plain text snippets
					</h3>
					<p>
						Remove unwanted formatting from copied text for a consistent look.
					</p>
				</div>
				<div>
					<img src="./img/icon-preview.svg" alt="preview" />
					<h3>
						Sneak preview
					</h3>
					<p>
						Quick preview of all snippets on your Clipboard for easy access.
					</p>
				</div>
			</div>
		</section>
    );
}

export default Supercharge;