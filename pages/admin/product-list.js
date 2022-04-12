import React from 'react';
import PropTypes from 'prop-types';

// components

import TableDropdown from 'components/Dropdowns/TableDropdown.js';

// layout for page

import Admin from 'layouts/Admin.js';

export default function Tables() {
	return (
		<>
			<div className="flex flex-wrap mt-4 h-full">
				<div className="w-full mb-12 px-4">
					<CardTable />
				</div>
			</div>
		</>
	);
}

function CardTable({ color }) {
	return (
		<>
			<div
				className={
					'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
					(color === 'light' ? 'bg-white' : 'bg-blueGray-700 text-white')
				}
			>
				<div className="rounded-t mb-0 px-4 py-3 border-0">
					<div className="flex flex-wrap items-center">
						<div className="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3
								className={
									'font-semibold text-lg ' +
									(color === 'light' ? 'text-blueGray-700' : 'text-white')
								}
							>
								Card Tables
							</h3>
						</div>
					</div>
				</div>
				<div className="block w-full overflow-x-auto">
					{/* Projects table */}
					<table className="items-center w-full bg-transparent border-collapse">
						<thead>
							<tr>
								<th
									className={
										'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
										(color === 'light'
											? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
											: 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
									}
								>
									Tên sản phẩm
								</th>
								<th
									className={
										'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
										(color === 'light'
											? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
											: 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
									}
								>
									Budget
								</th>
								<th
									className={
										'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
										(color === 'light'
											? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
											: 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
									}
								>
									Status
								</th>
								<th
									className={
										'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
										(color === 'light'
											? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
											: 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
									}
								>
									Users
								</th>
								<th
									className={
										'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
										(color === 'light'
											? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
											: 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
									}
								>
									Completion
								</th>
								<th
									className={
										'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
										(color === 'light'
											? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
											: 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
									}
								></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
									<img
										src="/img/bootstrap.jpg"
										className="h-12 w-12 bg-white rounded-full border"
										alt="..."
									></img>{' '}
									<span
										className={
											'ml-3 font-bold ' +
											+(color === 'light' ? 'text-blueGray-600' : 'text-white')
										}
									>
										Argon Design System
									</span>
								</th>
								<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
									$2,500 USD
								</td>
								<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
									<i className="fas fa-circle text-orange-500 mr-2"></i> pending
								</td>
								<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
									<div className="flex">
										<img
											src="/img/team-1-800x800.jpg"
											alt="..."
											className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
										></img>
										<img
											src="/img/team-2-800x800.jpg"
											alt="..."
											className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
										></img>
										<img
											src="/img/team-3-800x800.jpg"
											alt="..."
											className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
										></img>
										<img
											src="/img/team-4-470x470.png"
											alt="..."
											className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
										></img>
									</div>
								</td>
								<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
									<div className="flex items-center">
										<span className="mr-2">60%</span>
										<div className="relative w-full">
											<div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
												<div
													style={{ width: '60%' }}
													className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
												></div>
											</div>
										</div>
									</div>
								</td>
								<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
									<TableDropdown />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

CardTable.defaultProps = {
	color: 'light',
};

CardTable.propTypes = {
	color: PropTypes.oneOf(['light', 'dark']),
};

function Row({ title, description, content, price, tiket }) {
	return (
		<tr>
			<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
				<img
					src="/img/bootstrap.jpg"
					className="h-12 w-12 bg-white rounded-full border"
					alt="..."
				></img>{' '}
				<span
					className={
						'ml-3 font-bold ' +
						+(color === 'light' ? 'text-blueGray-600' : 'text-white')
					}
				>
					{title}
				</span>
			</th>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
				$2,500 USD
			</td>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
				<i className="fas fa-circle text-orange-500 mr-2"></i> pending
			</td>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
				<div className="flex">
					<img
						src="/img/team-1-800x800.jpg"
						alt="..."
						className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
					></img>
					<img
						src="/img/team-2-800x800.jpg"
						alt="..."
						className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
					></img>
					<img
						src="/img/team-3-800x800.jpg"
						alt="..."
						className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
					></img>
					<img
						src="/img/team-4-470x470.png"
						alt="..."
						className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
					></img>
				</div>
			</td>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
				<div className="flex items-center">
					<span className="mr-2">60%</span>
					<div className="relative w-full">
						<div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
							<div
								style={{ width: '60%' }}
								className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
							></div>
						</div>
					</div>
				</div>
			</td>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
				<TableDropdown />
			</td>
		</tr>
	);
}

Tables.layout = Admin;
