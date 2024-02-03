import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
	let { id } = useParams();
	return (
		<div className='bg-green-800 px-5 py-3 text-3xl mx-auto w-max text-center text-white'>
			<h2>User id:{id} </h2>
		</div>
	);
}

export default User;
