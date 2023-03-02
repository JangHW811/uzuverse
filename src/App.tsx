import './App.css';
import AboutUzuverse from './templates/AboutUzuverse';
import HorizontalBlank from './templates/common/HorizontalBlank';
import Community from './templates/Community';
import Header from './templates/Header';
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
    </div>
  );
}

export default App;
