import './App.css';
import media from './constants/media';
import useMediaQuery from './hooks/useMediaQuery';
import AboutUzuverse from './templates/AboutUzuverse';
import CallaborateWithUs from './templates/CallaborateWithUs';
import HorizontalBlank from './templates/common/HorizontalBlank';
import Community from './templates/Community';
import Footer from './templates/Footer';
import Header from './templates/Header';
import Roadmap from './templates/Roadmap';
import BannerSlider from './templates/Slider';

function App() {
  const isMobile = useMediaQuery(media.mobileMaxWidth);
  return (
    <div className='App'>
      <Header />
      <BannerSlider />
      <HorizontalBlank height={isMobile ? 50 : 100} />
      <AboutUzuverse />
      <HorizontalBlank height={isMobile ? 0 : 100} />
      <Community />
      <HorizontalBlank height={isMobile ? 60 : 160} />
      <Roadmap />
      <HorizontalBlank height={isMobile ? 50 : 150} />
      <CallaborateWithUs />
      <HorizontalBlank height={isMobile ? 45 : 150} />
      <Footer />
    </div>
  );
}

export default App;
