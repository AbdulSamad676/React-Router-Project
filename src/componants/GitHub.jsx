import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
	// this hook returns the data from the loader
	const data = useLoaderData();

	return (
		<div className='flex flex-col justify-center  bg-gray-700 m-4 text-center p-4 text-white text-2xl'>
			<img
				className='mx-auto rounded-full'
				src={data.avatar_url}
				alt='profile'
				height={200}
				width={200}
			/>
			<p className='mt-3 font-bold'>{data.name}</p>
			<p className='mb-3 p-4 font-thin'>{data.bio}</p>
		</div>
	);
}

export default GitHub;

// this async await call will be assigned to the loader in the Github Route
export const githubInfo = async () => {
	const response = await fetch('https://api.github.com/users/AbdulSamad676');
	return response.json();
};
