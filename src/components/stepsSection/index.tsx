import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const steps = [
	{
		name: 'Market Research',
		description:
			'Vitae sed mi luctus laoreet. Cursus semper viverra facilisis et et some more.',
		href: '#',
		status: 'complete'
	},
	{
		name: 'Market Research',
		description:
			'Vitae sed mi luctus laoreet. Cursus semper viverra facilisis et et some more.',
		href: '#',
		status: 'complete'
	},
	{
		name: 'Market Research',
		description:
			'Vitae sed mi luctus laoreet. Cursus semper viverra facilisis et et some more.',
		href: '#',
		status: 'complete'
	}
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}
type Props = {};

const StepsSection = (props: Props) => {
	return (
		<div className='flex lg:flex-row flex-col my-20 items-center justify-center gap-20 max-w-[90%] mx-auto'>
			<div className='w-full md:w-1/2'>
				<div className='w-20 h-1 bg-[#FF6057] rounded-md'></div>
				<div className='mt-6'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
						Acceleration Process to Grow Your Business
					</h2>
					<p className='mt-4 text-lg text-gray-500'>
						Semper curabitur ullamcorper posuere nunc sed. Ornare
						iaculis bibendum malesuada faucibus lacinia porttitor.
						Pulvinar laoreet sagittis viverra duis. In venenatis sem
						arcu pretium pharetra at. Lectus viverra dui tellus
						ornare pharetra.
					</p>
					<div className='mt-6'>
						<Link
							to='/'
							className='inline-flex items-center rounded-md  bg-gradient-to-l from-[#AB68A8] to-[#FF6057] px-8 py-2 text-base font-medium text-white'>
							About Us
						</Link>
					</div>
				</div>
			</div>
			<nav aria-label='Progress' className='w-full md:w-1/2'>
				<ol role='list' className='overflow-hidden'>
					{steps.map((step, stepIdx) => (
						<li
							key={stepIdx}
							className={classNames(
								stepIdx !== steps.length - 1 ? 'pb-10' : '',
								'relative'
							)}>
							<>
								{stepIdx !== steps.length - 1 ? (
									<div
										className='absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-[#FF6057]'
										aria-hidden='true'
									/>
								) : null}
								<a
									href={step.href}
									className='group relative flex items-start'>
									<span className='flex h-9 items-center'>
										<span className='relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6057] group-hover:bg-[#FF6057]'>
											<CheckIcon
												className='h-5 w-5 text-white'
												aria-hidden='true'
											/>
										</span>
									</span>
									<span className='ml-4 flex min-w-0 flex-col'>
										<span className='text-sm font-medium'>
											{step.name}
										</span>
										<span className='text-sm text-gray-500 max-w-sm leading-8'>
											{step.description}
										</span>
									</span>
								</a>
							</>
						</li>
					))}
				</ol>
			</nav>
		</div>
	);
};

export default StepsSection;
