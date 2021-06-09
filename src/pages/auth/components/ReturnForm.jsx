import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../hooks/useFormValidate';
import { loginAction, register } from '../../../redux/reducers/authReducer';

function ReturnForm() {
	/*------------------------------*/
	const { loginError } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	/*------------------------------*/
	// let { form, onInputChange, error, check } = useFormValidate(
	// 	{
	// 		username: '',
	// 		password: '',
	// 	},
	// 	{
	// 		rule: {
	// 			username: {
	// 				required: true,
	// 				pattern: 'email',
	// 			},
	// 			password: {
	// 				required: true,
	// 				min: 6,
	// 				max: 32,
	// 			},
	// 		},
	// 	}
	// );
	/*------------------------------*/
	async function _login() {
		// let error = check();
		// if (Object.keys(error).length === 0) {
		// 	const { username, password } = form;
		// 	dispatch(loginAction({ username, password }));
		// }
	}
	/*------------------------------*/
	return (
		<div className="col-12 col-md-6">
			{/* Card */}
			<div className="card card-lg mb-10 mb-md-0">
				<div className="card-body">
					{/* Heading */}
					<h6 className="mb-7">Returning Customer</h6>
					{/* Form */}
					{loginError && <p className="error-text">{loginError}</p>}
					<form>
						<div className="row">
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="loginEmail">
										Email Address *
									</label>
									<input
										className="form-control form-control-sm"
										id="loginEmail"
										type="email"
										placeholder="Email Address *"
										name="username"
										{...register('username')}
										// onChange={onInputChange}
										// value={form.username}
										required
									/>
									{/* {error.username && <p className="error-text">{error.username}</p>} */}
								</div>
							</div>
							<div className="col-12">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="loginPassword">
										Password *
									</label>
									<input
										className="form-control form-control-sm"
										id="loginPassword"
										type="password"
										placeholder="Password *"
										name="password"
										// onChange={onInputChange}
										// value={form.password}
										required
									/>
									{/* {error.password && <p className="error-text">{error.password}</p>} */}
								</div>
							</div>
							<div className="col-12 col-md">
								{/* Remember */}
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="loginRemember" type="checkbox" />
										<label className="custom-control-label" htmlFor="loginRemember">
											Remember me
										</label>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-auto">
								{/* Link */}
								<div className="form-group">
									<a
										className="font-size-sm text-reset"
										data-toggle="modal"
										href="#modalPasswordReset"
									>
										Forgot Password?
									</a>
								</div>
							</div>
							<div className="col-12">
								{/* Button */}
								<button
									className="btn btn-sm btn-dark"
									type="submit"
									onClick={(e) => {
										e.preventDefault();
										_login();
									}}
								>
									Sign In
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ReturnForm;
