import React from 'react';

function ReviewItem({ user, date, stars, title, content, like, dislike, comment }) {
	return (
		<div className="review">
			<div className="review-body">
				<div className="row">
					<div className="col-12 col-md-auto">
						{/* Avatar */}
						<div className="avatar avatar-xxl mb-6 mb-md-0">
							<span className="avatar-title rounded-circle">
								<i className="fa fa-user" />
							</span>
						</div>
					</div>
					<div className="col-12 col-md">
						{/* Header */}
						<div className="row mb-6">
							<div className="col-12">
								{/* Rating */}
								<div className="rating font-size-sm text-dark" data-value={stars || 0}>
									<div className="rating-item">
										<i className="fas fa-star" />
									</div>
									<div className="rating-item">
										<i className="fas fa-star" />
									</div>
									<div className="rating-item">
										<i className="fas fa-star" />
									</div>
									<div className="rating-item">
										<i className="fas fa-star" />
									</div>
									<div className="rating-item">
										<i className="fas fa-star" />
									</div>
								</div>
							</div>
							<div className="col-12">
								{/* Time */}
								<span className="font-size-xs text-muted">
									{user.name || ''}, <time dateTime="2019-07-25">{date || ''}</time>
								</span>
							</div>
						</div>
						{/* Title */}
						<p className="mb-2 font-size-lg font-weight-bold">{title || ''}</p>
						{/* Text */}
						<p className="text-gray-500">{content || ''}</p>
						{/* Footer */}
						<div className="row align-items-center">
							<div className="col-auto d-none d-lg-block">
								{/* Text */}
								<p className="mb-0 font-size-sm">Was this review helpful?</p>
							</div>
							<div className="col-auto mr-auto">
								{/* Rate */}
								<div className="rate">
									<a
										className="rate-item"
										data-toggle="vote"
										data-count={like || 0}
										href="#"
										role="button"
									>
										<i className="fe fe-thumbs-up" />
									</a>
									<a
										className="rate-item"
										data-toggle="vote"
										data-count={dislike || 0}
										href="#"
										role="button"
									>
										<i className="fe fe-thumbs-down" />
									</a>
								</div>
							</div>
							<div className="col-auto d-none d-lg-block">
								{/* Text */}
								<p className="mb-0 font-size-sm">Comments ({comment?.length || 0})</p>
							</div>
							<div className="col-auto">
								{/* Button */}
								<a className="btn btn-xs btn-outline-border" href="#!">
									Comment
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{comment?.length > 0 &&
				comment.map((subcmt, i) => {
					const { user, date, stars, title, content, like, dislike, comment } = subcmt;
					return (
						<div className="review review-child">
							<div className="review-body">
								{/* Content */}
								<div className="row">
									<div className="col-12 col-md-auto">
										{/* Avatar */}
										<div className="avatar avatar-xxl mb-6 mb-md-0">
											<span className="avatar-title rounded-circle">
												<i className="fa fa-user" />
											</span>
										</div>
									</div>
									<div className="col-12 col-md">
										{/* Header */}
										<div className="row mb-6">
											<div className="col-12">
												{/* Rating */}
												<div className="rating font-size-sm text-dark" data-value={stars || 0}>
													<div className="rating-item">
														<i className="fas fa-star" />
													</div>
													<div className="rating-item">
														<i className="fas fa-star" />
													</div>
													<div className="rating-item">
														<i className="fas fa-star" />
													</div>
													<div className="rating-item">
														<i className="fas fa-star" />
													</div>
													<div className="rating-item">
														<i className="fas fa-star" />
													</div>
												</div>
											</div>
											<div className="col-12">
												{/* Time */}
												<span className="font-size-xs text-muted">
													{user?.name || 0}, <time dateTime="2019-07-14">{date || ''}</time>
												</span>
											</div>
										</div>
										{/* Title */}
										<p className="mb-2 font-size-lg font-weight-bold">{title || ''}</p>
										{/* Text */}
										<p className="text-gray-500">{content || ''}</p>
										{/* Footer */}
										<div className="row align-items-center">
											<div className="col-auto d-none d-lg-block">
												{/* Text */}
												<p className="mb-0 font-size-sm">Was this review helpful?</p>
											</div>
											<div className="col-auto mr-auto">
												{/* Rate */}
												<div className="rate">
													<a
														className="rate-item"
														data-toggle="vote"
														data-count={like || 0}
														href="#"
														role="button"
													>
														<i className="fe fe-thumbs-up" />
													</a>
													<a
														className="rate-item"
														data-toggle="vote"
														data-count={dislike || 0}
														href="#"
														role="button"
													>
														<i className="fe fe-thumbs-down" />
													</a>
												</div>
											</div>
											<div className="col-auto d-none d-lg-block">
												{/* Text */}
												<p className="mb-0 font-size-sm">Comments ({comment?.length || 0})</p>
											</div>
											<div className="col-auto">
												{/* Button */}
												<a className="btn btn-xs btn-outline-border" href="#!">
													Comment
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default ReviewItem;
