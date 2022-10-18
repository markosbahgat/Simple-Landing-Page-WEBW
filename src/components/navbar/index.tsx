import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { LOGO } from 'shared';

const navigation = [
	{ name: 'Browser', to: '#' },
	{ name: 'BootCamps', to: '#' },
	{ name: 'How It Works', to: '#' },
	{ name: 'Testemonial', to: '#' }
];

type Props = {};

const Navbar = (props: Props) => {
	return (
		<Popover>
			<nav
				className='w-full absolute z-10 top-5 left-[50%] translate-x-[-50%] mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6'
				aria-label='Global'>
				<div className='flex flex-1 items-center'>
					<div className='flex w-full items-center justify-between md:w-auto'>
						<Link to='/'>
							<span className='sr-only'>Sevty</span>
							<LOGO />
						</Link>
						<div className='-mr-2 flex items-center md:hidden'>
							<Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
								<span className='sr-only'>Open main menu</span>
								<Bars3Icon
									className='h-6 w-6'
									aria-hidden='true'
								/>
							</Popover.Button>
						</div>
					</div>
					<div className='hidden md:ml-10 md:block md:space-x-10'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.to}
								className='font-medium text-white hover:text-gray-200'>
								{item.name}
							</Link>
						))}
					</div>
				</div>
				<div className='hidden text-right md:block'>
					<span className='inline-flex rounded-md '>
						<Link
							to='/'
							className='inline-flex items-center rounded-md  bg-gradient-to-l from-[#AB68A8] to-[#FF6057] px-8 py-2 text-base font-medium text-white'>
							About Us
						</Link>
					</span>
				</div>
			</nav>

			<Transition
				as={Fragment}
				enter='duration-150 ease-out'
				enterFrom='opacity-0 scale-95'
				enterTo='opacity-100 scale-100'
				leave='duration-100 ease-in'
				leaveFrom='opacity-100 scale-100'
				leaveTo='opacity-0 scale-95'>
				<Popover.Panel
					focus
					className='absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'>
					<div className='overflow-hidden rounded-lg bg-[#FF6057] shadow-md ring-1 ring-black ring-opacity-5'>
						<div className='flex items-center justify-between px-5 pt-4'>
							<div>
								<LOGO />
							</div>
							<div className='-mr-2'>
								<Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='sr-only'>
										Close main menu
									</span>
									<XMarkIcon
										className='h-6 w-6'
										aria-hidden='true'
									/>
								</Popover.Button>
							</div>
						</div>
						<div className='space-y-1 px-2 pt-2 pb-3'>
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.to}
									className='block rounded-md px-3 py-2 text-base font-medium text-white'>
									{item.name}
								</Link>
							))}
						</div>
						<Link
							to='/'
							className='block w-full bg-[#FF6057] px-5 py-3 text-center font-medium text-white '>
							Log in
						</Link>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default Navbar;
