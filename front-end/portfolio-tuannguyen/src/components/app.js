import { h } from 'preact';

import Nav from '../components/Nav'
import HeroSection from '../components/heroSection'
import SkillsSection from '../components/skillsSection'
import ProjectsSection from '../components/projectSection'
import ContactSection from '../components/contactSection'
import Footer from '../components/Footer'

const App = () =>
{
	return (
		<>
			<Nav />
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
		</>
	)
}

export default App;
