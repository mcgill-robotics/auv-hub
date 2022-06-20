import type { FunctionalComponent } from 'preact';
import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const MenuToggle: FunctionalComponent = () => {
	const [sidebarShown, setSidebarShown] = useState(false);

	useEffect(() => {
		const body = document.getElementsByTagName('body')[0];
		if (sidebarShown) {
			body.classList.add('mobile-sidebar-toggle');
		} else {
			body.classList.remove('mobile-sidebar-toggle');
		}
	}, [sidebarShown]);

	return (
		<button
			type="button"
			aria-pressed={sidebarShown ? 'true' : 'false'}
			id="menu-toggle"
			onClick={() => setSidebarShown(!sidebarShown)}
		>
			<svg
				width="2em"
				height="2em"
				fill="none"
				viewBox="0 0 25 25"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
			<span className="sr-only">Toggle sidebar</span>
		</button>
	);
};

export default MenuToggle;
