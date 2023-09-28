import React from 'react';
import BiddingPage from './BiddingPage';

const item = {
  name: 'iPhone 12 Pro',
  description: 'A brand new iPhone 12 Pro with 256GB storage',
  startingPrice: 1000,
  currentBid: 1100,
};

const Bid = () => {
  return <BiddingPage item={item} />;
};

export default Bid;
