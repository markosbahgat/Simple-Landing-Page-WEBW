import HeroSection from 'components/heroSection';
import React from 'react';
import PlatformOverViewSection from 'components/platformOverviewSection';
import FirstFeaturesSection from 'components/1stFeaturesSection';
import SecondFeaturesSection from 'components/2ndFeaturesSection';
import Footer from 'components/footer';
import StepsSection from 'components/stepsSection';
import ThirdFeaturesSection from 'components/3stFeaturesSection';
type Props = {};

const Home = (props: Props) => {
	return (
		<main className='min-h-fit w-full overflow-hidden'>
			<HeroSection />
			<ThirdFeaturesSection />
			<SecondFeaturesSection />
			<PlatformOverViewSection />
			<FirstFeaturesSection />
			<StepsSection />
		</main>
	);
};

export default Home;
