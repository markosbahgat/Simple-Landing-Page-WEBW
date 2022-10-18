const HeroSection = () => {
	return (
		<div className='relative w-full'>
			<div className='w-full absolute top-0 left-0'>
				<img
					src='/assets/heroBackground.png'
					alt='hero background'
					className='lg:w-full lg:h-full object-cover w-screen h-[100vh]'
				/>
			</div>

			<div className='relative pt-6 pb-16 sm:pb-24 lg:pb-32'>
				<main className='mx-auto mt-16 w-full sm:mt-24 flex items-center lg:mt-32'>
					<div className='lg:grid lg:grid-cols-12 lg:gap-8 lg:px-20 md:px-10 px-5 xl:px-32 items-center justify-center'>
						<div className='sm:text-center md:mx-auto md:max-w-xl lg:col-span-6 lg:text-left'>
							<h1>
								<span className='block text-base font-semibold text-white sm:text-lg lg:text-base xl:text-lg'>
									Advanced Platform
								</span>
								<span className='mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl'>
									<span className='block text-white'>
										Take your team to the next level
									</span>
								</span>
							</h1>
							<p className='mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
								Anim aute id magna aliqua ad ad non deserunt
								sunt. Qui irure qui lorem cupidatat commodo.
							</p>
							<div className='mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left'>
								<button
									type='submit'
									className='mt-3 w-full rounded-md border border-transparent text-[#FF6057] px-12 py-3 text-base font-medium bg-white   sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center'>
									About Us
								</button>
							</div>
						</div>
						<div className='relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center'>
							<img
								src='/assets/heroSection.png'
								alt='hero section'
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</main>
			</div>
			<div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
					<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
						<img
							className='h-12'
							src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
							alt='Tuple'
						/>
					</div>
					<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
						<img
							className='h-12'
							src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
							alt='Mirage'
						/>
					</div>
					<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
						<img
							className='h-12'
							src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
							alt='StaticKit'
						/>
					</div>
					<div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
						<img
							className='h-12'
							src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
							alt='Transistor'
						/>
					</div>
					<div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
						<img
							className='h-12'
							src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
							alt='Workcation'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
