import CarouselComponent from './CarouselComponent'
import WhatssapBtn from './WhatssapBtn';
import MetaPixel from  './MetaPixel'

import Maxlogo from './assets/max_logo2.png';

function App() {
  return (
    <div className="container-fluid">
      <MetaPixel />

      <div className="container mt-4 mb-4">
        <img src={Maxlogo} className="img-fluid" width={300} height={300} alt='Logo Marca Box Potato'></img>
      </div>

      <div className="mt-4 mb-4 container">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 bg-yellow">
              <h1 className="text-left mt-4 mb-4 alfa-slab-one-regular title align-center">
                Conheça nossos produtos!
              </h1>
            </div>
            <div class="col-sm-6 bg-white">
              <CarouselComponent />
            </div>
          </div>
        </div>
          <div className='bg-success mt-4 mb-4 rounded'>
            <WhatssapBtn />
          </div>
      </div>
    </div>
  );
}

export default App;
