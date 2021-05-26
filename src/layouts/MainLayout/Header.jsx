import React from 'react';
import { Link } from 'react-router-dom';
import useTranslate from '../../hooks/useTranslate';

function Header() {
	/*------------------------------*/
	const { t } = useTranslate();
	/*------------------------------*/
	return (
		<>
			<div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
				<div className="container">
					{/* Promo */}
					<div className="mr-xl-8">
						<i className="fe fe-truck mr-2" />{' '}
						<span className="heading-xxxs">{t('Free shipping worldwide')}</span>
					</div>
					{/* Toggler */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#topbarCollapse"
						aria-controls="topbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					{/* Collapse */}
					<div className="collapse navbar-collapse" id="topbarCollapse">
						{/* Nav */}
						<ul className="nav nav-divided navbar-nav mr-auto">
							<li className="nav-item dropdown">
								{/* Toggle */}
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
									<img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." />{' '}
									{t('United States')}
								</a>
								{/* Menu */}
								<div className="dropdown-menu minw-0">
									<a className="dropdown-item" href="#!">
										<img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />
										{t('United States')}
									</a>
									<a className="dropdown-item" href="#!">
										<img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />
										{t('Canada')}
									</a>
									<a className="dropdown-item" href="#!">
										<img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />
										{t('Germany')}
									</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								{/* Toggle */}
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
									USD
								</a>
								{/* Menu */}
								<div className="dropdown-menu minw-0">
									<a className="dropdown-item" href="#!">
										USD
									</a>
									<a className="dropdown-item" href="#!">
										EUR
									</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								{/* Toggle */}
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
									{t('English')}
								</a>
								{/* Menu */}
								<div className="dropdown-menu minw-0">
									<a className="dropdown-item" href="#">
										{t('English')}
									</a>
									<a className="dropdown-item" href="#">
										{t('French')}
									</a>
									<a className="dropdown-item" href="#">
										{t('German')}
									</a>
								</div>
							</li>
						</ul>
						{/* Nav */}
						<ul className="nav navbar-nav mr-8">
							<li className="nav-item">
								<Link className="nav-link" to="/shipping">
									{t('Shipping')}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/faq">
									{t('FAQ')}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									{t('Contact')}
								</Link>
							</li>
						</ul>
						{/* Nav */}
						<ul className="nav navbar-nav flex-row">
							<li className="nav-item">
								<a className="nav-link text-gray-350" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</li>
							<li className="nav-item ml-xl-n4">
								<a className="nav-link text-gray-350" href="#!">
									<i className="fab fa-twitter" />
								</a>
							</li>
							<li className="nav-item ml-xl-n4">
								<a className="nav-link text-gray-350" href="#!">
									<i className="fab fa-instagram" />
								</a>
							</li>
							<li className="nav-item ml-xl-n4">
								<a className="nav-link text-gray-350" href="#!">
									<i className="fab fa-medium" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ----------------------------------------------------- */}

			<nav className="navbar navbar-expand-lg navbar-light bg-white">
				<div className="container">
					{/* Brand */}
					<Link className="navbar-brand" to="/">
						Shopper.
					</Link>
					{/* Toggler */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					{/* Collapse */}
					<div className="collapse navbar-collapse" id="navbarCollapse">
						{/* Nav */}
						<ul className="navbar-nav mx-auto">
							<li className="nav-item">
								{/* Toggle */}
								<Link className="nav-link" to="/">
									{t('Home')}
								</Link>
							</li>
							<li className="nav-item position-static">
								{/* Toggle */}
								<Link className="nav-link" to="/shop">
									{t('Catalog')}
								</Link>
							</li>
							<li className="nav-item ">
								{/* Toggle */}
								<Link className="nav-link" to="/shop">
									{t('Shop')}
								</Link>
							</li>
							<li className="nav-item dropdown">
								{/* Toggle */}
								<a className="nav-link" data-toggle="dropdown" href="#">
									{t('Pages')}
								</a>
								{/* Menu */}
								<div className="dropdown-menu">
									<div className="card card-lg">
										<div className="card-body">
											<ul className="list-styled font-size-sm">
												<li className="list-styled-item">
													<Link className="list-styled-link" to="/about">
														About
													</Link>
												</li>
												<li className="list-styled-item">
													<Link className="list-styled-link" to="/contact">
														Contact Us
													</Link>
												</li>
												<li className="list-styled-item">
													<Link className="list-styled-link" to="/store-locator">
														Store Locator
													</Link>
												</li>
												<li className="list-styled-item">
													<Link className="list-styled-link" to="/faq">
														FAQ
													</Link>
												</li>
												<li className="list-styled-item">
													<Link className="list-styled-link" to="/comming-soon">
														Coming Soon
													</Link>
												</li>
												<li className="list-styled-item">
													<Link className="list-styled-link" to="/404">
														404
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="nav-item ">
								{/* Toggle */}
								<Link className="nav-link" to="/blog">
									{t('Blog')}
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="docs/getting-started.html">
									{t('Docs')}
								</a>
							</li>
						</ul>
						{/* Nav */}
						<ul className="navbar-nav flex-row">
							<li className="nav-item">
								<a className="nav-link" data-toggle="modal" href="#modalSearch">
									<i className="fe fe-search" />
								</a>
							</li>
							<li className="nav-item ml-lg-n4">
								<Link className="nav-link" to="/account">
									<i className="fe fe-user" />
								</Link>
							</li>
							<li className="nav-item ml-lg-n4">
								<Link className="nav-link" to="/account/wishlist">
									<i className="fe fe-heart" />
								</Link>
							</li>
							<li className="nav-item ml-lg-n4">
								<a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
									<span data-cart-items={2}>
										<i className="fe fe-shopping-cart" />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
