import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../hooks/useFormValidate';
import { updateUser } from '../../../redux/reducers/authReducer';
import { daysInMonth, generateArrayOfYears } from '../../../services/commonFunctions';

function AccountInfo() {
	/*------------------------------*/
	const [dayInfo, setDayInfo] = useState({ active: 1, days: new Array(31).fill('day') });
	const [monthInfo, setMonthInfo] = useState({
		active: 'January',
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
	});
	const [yearInfo, setYearInfo] = useState({
		active: new Date().getFullYear(),
		years: generateArrayOfYears(50),
	});
	/*------------------------------*/
	const dispatch = useDispatch();
	const { user } = useSelector((store) => store.auth);
	const { first_name, last_name, email, birthday, gender } = user;
	/*------------------------------*/
	useEffect(() => {
		if (birthday) {
			let birthdaySplit = birthday?.trim().split(',');
			if (birthdaySplit?.length === 3) {
				setDayInfo({ ...dayInfo, active: +birthdaySplit[0].trim() });
				setMonthInfo({ ...monthInfo, active: birthdaySplit[1].trim() });
				setYearInfo({ ...yearInfo, active: +birthdaySplit[2].trim() });
			}
		}
	}, [birthday]);
	/*------------------------------*/
	function onDateSelect(e) {
		let value = e.target.value;
		let name = e.target.name;
		let monthIndex = 1;
		let dayNumber = 0;
		switch (name) {
			case 'date':
				setDayInfo({
					...dayInfo,
					active: value,
				});
				break;
			case 'month':
				monthIndex = monthInfo?.months.indexOf(monthInfo?.active);
				dayNumber = daysInMonth(monthIndex, yearInfo.active);
				setMonthInfo({
					...monthInfo,
					active: value,
				});
				if (Number(dayNumber) > 0) {
					setDayInfo({
						...dayInfo,
						days: new Array(dayNumber).fill('day'),
					});
				}
				break;
			case 'year':
				monthIndex = monthInfo?.months.indexOf(monthInfo?.active);
				dayNumber = daysInMonth(monthIndex + 1, Number(value));
				setYearInfo({
					...yearInfo,
					active: value,
				});
				if (Number(dayNumber) > 0) {
					setDayInfo({
						...dayInfo,
						days: new Array(dayNumber).fill('day'),
					});
				}
				break;

			default:
				break;
		}
	}
	/*------------------------------*/
	let { form, onInputChange, error, check } = useFormValidate(
		{
			first_name: first_name,
			last_name: last_name,
			currentPass: '',
			newPass: '',
			gender: gender,
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
				currentPass: {
					// required: true,
					// min: 6,
					// max: 32,
				},
				newPass: {
					// required: true,
					// min: 6,
					// max: 32,
				},
			},
		}
	);
	/*------------------------------*/
	async function _update() {
		let error = check();
		if (Object.keys(error).length === 0) {
			const { first_name, last_name, currentPass, newPass, gender } = form;
			let updatedBirthday = dayInfo.active + ',' + monthInfo.active + ',' + yearInfo.active;
			try {
				let res = await dispatch(
					updateUser({ first_name, last_name, gender, birthday: updatedBirthday })
				);

				res && alert(res);
			} catch (error) {
				alert(error);
			}
		}
	}
	/*------------------------------*/
	return (
		<form>
			<div className="row">
				<div className="col-12 col-md-6">
					{/* Email */}
					<div className="form-group">
						<label htmlFor="accountFirstName">First Name *</label>
						<input
							className="form-control form-control-sm"
							id="accountFirstName"
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
				<div className="col-12 col-md-6">
					{/* Email */}
					<div className="form-group">
						<label htmlFor="accountLastName">Last Name *</label>
						<input
							className="form-control form-control-sm"
							id="accountLastName"
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
						<label htmlFor="accountEmail">Email Address</label>
						<input
							className="form-control form-control-sm"
							id="accountEmail"
							type="email"
							placeholder="Email Address *"
							defaultValue={email}
							disabled
						/>
					</div>
				</div>
				<div className="col-12 col-md-6">
					{/* Password */}
					<div className="form-group">
						<label htmlFor="accountPassword">Current Password *</label>
						<input
							className="form-control form-control-sm"
							id="accountPassword"
							type="password"
							placeholder="Current Password *"
							name="currentPass"
							onChange={onInputChange}
							value={form.currentPass}
							required
						/>
						{error.currentPass && <p className="error-text">{error.currentPass}</p>}
					</div>
				</div>
				<div className="col-12 col-md-6">
					{/* Password */}
					<div className="form-group">
						<label htmlFor="AccountNewPassword">New Password *</label>
						<input
							className="form-control form-control-sm"
							id="AccountNewPassword"
							type="password"
							placeholder="New Password *"
							name="newPass"
							onChange={onInputChange}
							value={form.newPass}
							required
						/>
						{error.newPass && <p className="error-text">{error.newPass}</p>}
					</div>
				</div>
				<div className="col-12 col-lg-6">
					{/* Birthday */}
					<div className="form-group">
						{/* Label */}
						<label>Date of Birth</label>
						{/* Inputs */}
						<div className="form-row">
							<div className="col-auto">
								{/* Date */}
								<label className="sr-only" htmlFor="accountDate">
									Date
								</label>
								<select
									className="custom-select custom-select-sm"
									id="accountDate"
									name="date"
									onChange={onDateSelect}
								>
									{dayInfo?.days &&
										dayInfo.days.map((day, i) => {
											return (
												<option key={i} value={i + 1} selected={i + 1 === dayInfo?.active}>
													{i + 1}
												</option>
											);
										})}
								</select>
							</div>
							<div className="col">
								{/* Date */}
								<label className="sr-only" htmlFor="accountMonth">
									Month
								</label>
								<select
									className="custom-select custom-select-sm"
									id="accountMonth"
									name="month"
									onChange={onDateSelect}
								>
									{monthInfo?.months &&
										monthInfo.months.map((month, i) => {
											return (
												<option
													key={i}
													value={month}
													selected={month.toLowerCase() === monthInfo?.active.toLowerCase()}
												>
													{month}
												</option>
											);
										})}
								</select>
							</div>
							<div className="col-auto">
								{/* Date */}
								<label className="sr-only" htmlFor="accountYear">
									Year
								</label>
								<select
									className="custom-select custom-select-sm"
									id="accountYear"
									name="year"
									onChange={onDateSelect}
								>
									{yearInfo?.years &&
										yearInfo.years.map((year, i) => {
											return (
												<option key={i} value={year} selected={year === yearInfo?.active}>
													{year}
												</option>
											);
										})}
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-6">
					{/* Gender */}
					<div className="form-group mb-8">
						<label>Gender</label>
						<div className="btn-group-toggle" data-toggle="buttons">
							<label className="btn btn-sm btn-outline-border active">
								<input
									type="radio"
									name="gender"
									value="male"
									defaultChecked
									onClick={onInputChange}
								/>{' '}
								Male
							</label>
							<label className="btn btn-sm btn-outline-border">
								<input type="radio" name="gender" value="female" onClick={onInputChange} /> Female
							</label>
						</div>
					</div>
				</div>
				<div className="col-12">
					{/* Button */}
					<button
						className="btn btn-dark"
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							_update();
						}}
					>
						Save Changes
					</button>
				</div>
			</div>
		</form>
	);
}

export default AccountInfo;
