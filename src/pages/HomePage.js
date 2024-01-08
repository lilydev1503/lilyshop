import Layout from '../components/layout/Layout';
import Banner from '../components/main/Banner';
import Categories from '../components/main/Categories';
import Trending from '../components/main/Trending';
import AfterService from '../components/main/AfterService';
import Contact from '../components/main/Contact';
import ChatPopup from '../components/ChatBox';

const HomePage = props => {
	return (
		<Layout>
			<Banner />
			<Categories />
			<Trending />
			<AfterService />
			<Contact />
			<ChatPopup />
		</Layout>
	);
};

export default HomePage;
