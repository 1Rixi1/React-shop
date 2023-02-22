const Header = () => {
	return (
		<nav>
			<div className='nav-wrapper nav-header green lighten-1'>
				<a href='#' className='brand-logo'>
					Logo
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a href='sass.html'>Movie</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export { Header }
