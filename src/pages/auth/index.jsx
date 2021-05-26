import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import NewForm from './components/NewForm';
import ReturnForm from './components/ReturnForm';

function AuthPage() {
	/*------------------------------*/
	const { user } = useSelector((store) => store.auth);
	/*------------------------------*/
	if (user) return <Redirect to="/" />;
	return (
		<section className="py-12">
			<div className="container">
				<div className="row">
					<ReturnForm />
					<NewForm />
				</div>
			</div>
		</section>
	);
}

export default AuthPage;
