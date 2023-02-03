
import './App.css';
import Header from './components/Header';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import data from "./data/data.json";
import Offer from './components/Offer'
import Saprator from './components/Saprator';
import StarProducts from './components/StarProducts.js';
import HotAccesseryMenu from './components/HotAccesseryMenu';
import HotAccessery from './components/HotAccessery.js';
import ProductReview from './components/ProductReview.js';
import Videos from './components/Videos.js';
import InPress from './components/InPress.js';
import Footer from './components/Footer.js';
import { ColorRing } from 'react-loader-spinner'

window.onload = (event) => {
  document.getElementById("loading").style.display = "none";
};
function App() {
  return (
    <>
      <div id='loading' className="loader">
        <ColorRing color="#ff6900" />
      </div>

      <BrowserRouter>
        <PreNavbar />
        <Header />
        <Banner start={data.banner.start} />
        <Offer offer={data.offer} />
        <Saprator data='START PRODUCT' />
        <StarProducts starProduct={data.starProduct} />
        <Saprator data='HOT ACCESSORIES' />
        <HotAccesseryMenu />
        <Routes>
          <Route exact path='/' element={<><HotAccessery home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} /></>} />
          <Route exact path='/music' element={<><HotAccessery music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} /></>} />
          <Route exact path='/smartDevices' element={<><HotAccessery smartDevices={data.hotAccessories.smartDevice} smartDevCover={data.hotAccessoriesCover.smartDevice} /></>} />
          <Route exact path='/lifeStyle' element={<><HotAccessery lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} /></>} />
          <Route exact path='/mobileAccessories' element={<><HotAccessery mobile={data.hotAccessories.mobileAccessories} mobileCover={data.hotAccessoriesCover.mobileAccessories} /></>} />
        </Routes>
        <Saprator data='PRODUCT REVIEWS' />
        <ProductReview review={data.productReviews} />
        <Saprator data='VIDEOS' />
        <Videos videos={data.videos} />
        <Saprator data='IN THE PRESS' />
        <InPress end={data.banner.end} />
        <Footer footer={data.footer} />
      </BrowserRouter>
    </>
  );
}

export default App;
