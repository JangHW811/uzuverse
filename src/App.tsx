import './App.css';
import AboutUzuverse from './templates/AboutUzuverse';
import CallaborateWithUs from './templates/CallaborateWithUs';
import HorizontalBlank from './templates/common/HorizontalBlank';
import Community from './templates/Community';
import Footer from './templates/Footer';
import Header from './templates/Header';
import Roadmap from './templates/Roadmap';
import BannerSlider from './templates/Slider';

function App() {
  return (
    <div className='App'>
      <Header />
      <BannerSlider />
      <HorizontalBlank height={100} />
      <AboutUzuverse />
      <HorizontalBlank height={100} />
      <Community />
      <HorizontalBlank height={160} />
      <Roadmap />
      <HorizontalBlank height={150} />
      <CallaborateWithUs />
      <HorizontalBlank height={150} />
      <Footer />
    </div>
  );
}

export default App;
