import React from 'react';

import Header from './components/Header';
import Keep from './components/Keep';
import Access from './components/Access';
import Supercharge from './components/Supercharge';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Keep />
      <Access />
      <Supercharge />
      <SocialProof />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
