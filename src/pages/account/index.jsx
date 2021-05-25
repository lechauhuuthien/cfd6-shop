import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import AccountAddressEdit from './components/AccountAddressEdit';
import AccountAddresses from './components/AccountAddresses';
import AccountInfo from './components/AccountInfo';
import AccountOrder from './components/AccountOrder';
import AccountOrders from './components/AccountOrders';
import AccountPayment from './components/AccountPayment';
import AccountPaymentEdit from './components/AccountPaymentEdit';
import AccountWishlist from './components/AccountWishlist';

function AccountPage() {
	/*------------------------------*/
	const { url } = useRouteMatch();
	/*------------------------------*/
	return (
		<section className="pt-7 pb-12">
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						{/* Heading */}
						<h3 className="mb-10">My Account</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-3">
						{/* Nav */}
						<nav className="mb-10 mb-md-0">
							<div className="list-group list-group-sm list-group-strong list-group-flush-x">
								<NavLink
									className="list-group-item list-group-item-action dropright-toggle active"
									to={`${url}/orders`}
								>
									Orders
								</NavLink>
								<NavLink
									className="list-group-item list-group-item-action dropright-toggle "
									to={`${url}/wishlist`}
								>
									Wishlist
								</NavLink>
								<NavLink
									className="list-group-item list-group-item-action dropright-toggle "
									to={`${url}/info`}
								>
									Personal Info
								</NavLink>
								<NavLink
									className="list-group-item list-group-item-action dropright-toggle "
									to={`${url}/addresses`}
								>
									Addresses
								</NavLink>
								<NavLink
									className="list-group-item list-group-item-action dropright-toggle "
									to={`${url}/payment-method`}
								>
									Payment Methods
								</NavLink>
								<a className="list-group-item list-group-item-action dropright-toggle" href="#!">
									Logout
								</a>
							</div>
						</nav>
					</div>
					<div class="col-12 col-md-9 col-lg-8 offset-lg-1">
						<Switch>
							<Route path={`${url}/wishlist`} component={AccountWishlist} />
							<Route path={`${url}/info`} component={AccountInfo} />
							<Route path={`${url}/addresses`} component={AccountAddresses} />
							<Route path={`${url}/addresses-edit`} component={AccountAddressEdit} />
							<Route path={`${url}/payment-method`} component={AccountPayment} />
							<Route path={`${url}/payment-edit`} component={AccountPaymentEdit} />
							<Route path={`${url}/orders/:slug`} component={AccountOrder} />
							<Route path={`${url}/orders`} component={AccountOrders} />
							<Route path={`${url}`} component={AccountOrders} />
						</Switch>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AccountPage;
