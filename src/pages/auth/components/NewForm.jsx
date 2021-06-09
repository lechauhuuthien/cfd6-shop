import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../hooks/useFormValidate';
import { register } from '../../../redux/reducers/authReducer';

function NewForm() {
	/*------------------------------*/
	const { registerError } = useSelector((store) => store.auth);
	const [confirmWrong, setConfirmWrong] = useState(false);
	const dispatch = useDispatch();
	/*------------------------------*/
	let { form, onInputChange, error, check } = useFormValidate(
		{
			first_name: '',
			last_name: '',
			username: '',
			password: '',
			confirm_password: '',
		},
		{
			rule: {
				first_name: {
					required: true,
					pattern: 'name',
				},
				last_name: {
					required: true,
					pattern: 'name',
				},
				username: {
					required: true,
					pattern: 'email',
				},
				password: {
					required: true,
					min: 6,
					max: 32,
				},
				confirm_password: {
					required: true,
					min: 6,
					max: 32,
				},
			},
		}
	);
	/*------------------------------*/
	async function _register() {
		let error = check();
		if (Object.keys(error).length === 0) {
			const { first_name, last_name, username, password, confirm_password } = form;
			if (password.trim() === confirm_password.trim()) {
				dispatch(register({username, password}));
				setConfirmWrong(false);
			} else {
				setConfirmWrong(true);
			}
		}
	}
	/*------------------------------*/
	return (
		<div className="col-12 col-md-6">
			{/* Card */}
			<div className="card card-lg">
				<div className="card-body">
					{/* Heading */}
					<h6 className="mb-7">New Customer</h6>
					{registerError && <p className="error-text">{registerError}</p>}
					{/* Form */}
					<form>
						<div className="row">
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerFirstName">
										First Name *
									</label>
									<input
										className="form-control form-control-sm"
										id="registerFirstName"
										type="text"
										placeholder="First Name *"
										name="first_name"
										onChange={onInputChange}
										value={form.first_name}
										required
									/>
									{error.first_name && <p className="error-text">{error.first_name}</p>}
								</div>
							</div>
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerLastName">
										Last Name *
									</label>
									<input
										className="form-control form-control-sm"
										id="registerLastName"
										type="text"
										placeholder="Last Name *"
										name="last_name"
										onChange={onInputChange}
										value={form.last_name}
										required
									/>
									{error.last_name && <p className="error-text">{error.last_name}</p>}
								</div>
							</div>
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerEmail">
										Email Address *
									</label>
									<input
										className="form-control form-control-sm"
										id="registerEmail"
										type="email"
										placeholder="Email Address *"
										name="username"
										onChange={onInputChange}
										value={form.username}
										required
									/>
									{error.username && <p className="error-text">{error.username}</p>}
								</div>
							</div>
							<div className="col-12 col-md-6">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerPassword">
										Password *
									</label>
									<input
										className="form-control form-control-sm"
										id="registerPassword"
										type="password"
										placeholder="Password *"
										name="password"
										onChange={onInputChange}
										value={form.password}
										required
									/>
									{error.password && <p className="error-text">{error.password}</p>}
								</div>
							</div>
							<div className="col-12 col-md-6">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerPasswordConfirm">
										Confirm Password *
									</label>
									<input
										className="form-control form-control-sm"
										id="registerPasswordConfirm"
										type="password"
										placeholder="Confrm Password *"
										name="confirm_password"
										onChange={onInputChange}
										value={form.confirm_password}
										required
									/>
									{error.confirm_password && <p className="error-text">{error.confirm_password}</p>}
								</div>
							</div>
							<div className="col-12 col-md-auto">
								{/* Link */}
								{confirmWrong && <p className="error-text">Xác nhận mật khẩu sai!</p>}
								<div className="form-group font-size-sm text-muted">
									By registering your details, you agree with our Terms &amp; Conditions, and
									Privacy and Cookie Policy.
								</div>
							</div>
							<div className="col-12 col-md">
								{/* Newsletter */}
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input
											className="custom-control-input"
											id="registerNewsletter"
											type="checkbox"
										/>
										<label className="custom-control-label" htmlFor="registerNewsletter">
											Sign me up for the Newsletter!
										</label>
									</div>
								</div>
							</div>
							<div className="col-12">
								{/* Button */}
								<button
									className="btn btn-sm btn-dark"
									type="submit"
									onClick={(e) => {
										e.preventDefault();
										_register();
									}}
								>
									Register
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default NewForm;
