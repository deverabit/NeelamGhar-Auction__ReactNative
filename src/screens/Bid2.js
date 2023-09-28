import React from 'react';
import BiddingPage from './BiddingPage';
import BiddingPage2 from './BiddingPage2';

const item = {
  name: 'Nikon 900D',
  description: 'The zoom power of the COOLPIX P900 is nothing short of spectacular.',
  startingPrice: 40000,
  currentBid: 50000,
};

const Bid2= () => {
  return <BiddingPage2 item={item} />;
};

export default Bid2;
