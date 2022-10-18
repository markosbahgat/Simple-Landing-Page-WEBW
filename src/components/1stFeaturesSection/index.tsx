import React from 'react';

import { Link } from 'react-router-dom';

type Props = {};

const FirstFeaturesSection = (props: Props) => {
	return (
		<div className='relative  pt-16 pb-32'>
			<div className='lg:mx-auto lg:grid lg:max-w-[90%] lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
				<div className='mx-auto max-w-xl px-4 sm:px-6 lg:mx-0  lg:py-16 lg:px-0'>
					<div>
						<div className='w-20 h-1 bg-[#FF6057] rounded-md'></div>
						<div className='mt-6'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
								Best Platform for the technological Era
							</h2>
							<p className='mt-4 text-lg text-gray-500'>
								Semper curabitur ullamcorper posuere nunc sed.
								Ornare iaculis bibendum malesuada faucibus
								lacinia porttitor. Pulvinar laoreet sagittis
								viverra duis. In venenatis sem arcu pretium
								pharetra at. Lectus viverra dui tellus ornare
								pharetra.
							</p>
							<div className='mt-6'>
								<Link
									to='/'
									className='text-base font-medium text-[#FF6057] shadow-sm '>
									Learn About Our Success
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-12 sm:mt-16 lg:mt-0 w-full'>
					<div className='relative lg:m-0 w-full h-full lg:px-0 '>
						<img
							className='w-full h-full absolute object-contain'
							src='/assets/thirdSection.png'
							alt='Inbox user interface'
						/>
						<div className='w-[1000px] h-[1000px] absolute top-[50%] translate-y-[-50%] -right-[100%]  -z-10'>
							<img
								src='/assets/rectShape.png'
								alt='rect'
								className='w-full h-full object-contain '
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstFeaturesSection;
