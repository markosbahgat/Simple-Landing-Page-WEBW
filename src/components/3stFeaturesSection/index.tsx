import React from 'react';
import { Link } from 'react-router-dom';

const features = [
	{
		name: 'Competitive rates',
		description:
			'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
		icon: '/assets/icon1.png',
		color: '#F1291E'
	},
	{
		name: 'No hidden fees',
		description:
			'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
		icon: '/assets/icon2.png',
		color: '#36C5AD'
	},
	{
		name: 'Instant transfers',
		description:
			'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
		icon: '/assets/icon2.png',
		color: '#CB4BF8'
	},
	{
		name: 'Reminder emails',
		description:
			'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
		icon: '/assets/icon1.png',
		color: '#56E65B'
	}
];
type Props = {};
function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}
const ThirdFeaturesSection = (props: Props) => {
	return (
		<div className='overflow-hidden  my-40'>
			<div className='relative mx-auto max-w-[90%] py-12 px-4 sm:px-6 lg:px-8'>
				<div className='relative lg:grid lg:grid-cols-3 lg:gap-x-20 gap-20'>
					<div className='lg:col-span-1'>
						<div className='w-20 h-1 bg-[#FF6057] rounded-md'></div>
						<div className='mt-6'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
								Best Platform for the technological Era
							</h2>
							<p className='mt-4 text-lg text-gray-500'>
								Semper curabitur ullamcorper posuere nunc sed.
								Ornare iaculis bibendum malesuada faucibus
								lacinia porttitor. Pulvinar laoreet sagittis
								viverra duis.
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
					<dl className='mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0'>
						{features.map((feature, index) => (
							<div key={index}>
								<dt>
									<div
										className={classNames(
											`flex h-16 w-16 items-center justify-center rounded-full  text-white`
										)}
										style={{
											backgroundColor: feature.color
										}}>
										<img
											src={feature.icon}
											className='h-6 w-6'
											aria-hidden='true'
											alt='icon'
										/>
									</div>
									<p className='mt-5 text-lg font-medium leading-6 text-gray-900'>
										{feature.name}
									</p>
								</dt>
								<dd className='mt-2 text-base text-gray-500'>
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default ThirdFeaturesSection;
