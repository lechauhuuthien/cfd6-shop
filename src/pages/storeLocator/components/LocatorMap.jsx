import React from 'react';

function LocatorMap() {
	return (
		<section className="py-12 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-5 col-lg-4">
						{/* Card */}
						<div className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 shadow" data-simplebar>
							<div className="card-body">
								{/* Heading */}
								<p className="font-weight-bold">Baldwin Hills Crenshaw Plaza</p>
								<p className="text-gray-500">Mönckebergstrasse 11 20095 Hamburg, Germany</p>
								<p>
									<strong>Phone:</strong> <br />
									<a className="text-gray-500" href="tel:6-146-389-574">
										6-146-389-574
									</a>
								</p>
								<p className="mb-0">
									<strong>Store Hours:</strong> <br />
									<span className="text-gray-500">10 am - 10 pm EST, 7 days a week</span>
								</p>
							</div>
							<div className="card-body border-top">
								{/* Heading */}
								<p className="font-weight-bold">Stonewood Center</p>
								<p className="text-gray-500">Largo Corsia Dei Servi 3 20122 Milan, Italy</p>
								<p>
									<strong>Phone:</strong> <br />
									<a className="text-gray-500" href="tel:6-146-389-574">
										6-146-389-574
									</a>
								</p>
								<p className="mb-0">
									<strong>Store Hours:</strong> <br />
									<span className="text-gray-500">10 am - 10 pm EST, 7 days a week</span>
								</p>
							</div>
							<div className="card-body border-top">
								{/* Heading */}
								<p className="font-weight-bold">Shalyapin Palace</p>
								<p className="text-gray-500">
									Block 5, 5th Floor, Harcourt Centre, Harcourt Road Dublin, Ireland
								</p>
								<p>
									<strong>Phone:</strong> <br />
									<a className="text-gray-500" href="tel:6-146-389-574">
										6-146-389-574
									</a>
								</p>
								<p className="mb-0">
									<strong>Store Hours:</strong> <br />
									<span className="text-gray-500">10 am - 10 pm EST, 7 days a week</span>
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-7 col-lg-8">
						{/* Map */}
						<div className="embed-responsive embed-responsive-4by3">
							<div
								className="embed-responsive-item"
								data-toggle="map"
								data-markers='[{"position": [53.5508748,9.9985808], "info": "<div class=\"card card-sm\"><div class=\"card-body\"><p class=\"mb-2 font-weight-bold\">Baldwin Hills Crenshaw Plaza</p><p class=\"mb-3 text-gray-500\">Mönckebergstrasse 11 20095 Hamburg, Germany</p><p class=\"mb-1 font-weight-bold\">Phone:</p><p class=\"mb-3 text-grat-500\">6-146-389-574</p><p class=\"mb-1 font-weight-bold\">Store Hours:</p><p class=\"mb-0 text-grat-500\">10 am - 10 pm EST, 7 days a week</p></div>"}, {"position": [45.4646477,9.1935083], "info": "<div class=\"card card-sm\"><div class=\"card-body\"><p class=\"mb-2 font-weight-bold\">Stonewood Center</p><p class=\"mb-3 text-gray-500\">Largo Corsia Dei Servi 3 20122 Milan, Italy</p><p class=\"mb-1 font-weight-bold\">Phone:</p><p class=\"mb-3 text-grat-500\">6-146-389-574</p><p class=\"mb-1 font-weight-bold\">Store Hours:</p><p class=\"mb-0 text-grat-500\">10 am - 10 pm EST, 7 days a week</p></div>"}, {"position": [53.332769,-6.2663917], "info": "<div class=\"card card-sm\"><div class=\"card-body\"><p class=\"mb-2 font-weight-bold\">Shalyapin Palace</p><p class=\"mb-3 text-gray-500\">Block 5, 5th Floor, Harcourt Centre, Harcourt Road Dublin, Ireland</p><p class=\"mb-1 font-weight-bold\">Phone:</p><p class=\"mb-3 text-grat-500\">6-146-389-574</p><p class=\"mb-1 font-weight-bold\">Store Hours:</p><p class=\"mb-0 text-grat-500\">10 am - 10 pm EST, 7 days a week</p></div>"}]'
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LocatorMap;
