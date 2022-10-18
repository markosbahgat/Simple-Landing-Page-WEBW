import React from 'react';

type Props = {};

const PlatformOverViewSection = (props: Props) => {
	return (
		<div className='relative my-60'>
			<div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
				<div>
					<h2 className='text-lg font-thin text-[#8F8F8F]'>
						Advanced Customer Service Platform
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-[#3B3A3A] sm:text-4xl'>
						Platform Overview
					</p>
					<p className='mx-auto mt-5 max-w-prose text-sm text-[#8F8F8F]'>
						Phasellus lorem quam molestie id quisque diam aenean
						nulla in. Accumsan in quis quis nunc, ullamcorper
						malesuada. Eleifend condimentum id viverra nulla.
					</p>
				</div>
				<img
					className='rounded-lg'
					src='/assets/thirdSection.png'
					alt=''
				/>
			</div>
		</div>
	);
};

export default PlatformOverViewSection;
