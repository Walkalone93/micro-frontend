import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Landing() {
  const history = useHistory();
  
  function goToPricing() {
    history.push('/pricing');
  }

  return (
    <React.Fragment>
      <h2>
        Landing page
      </h2>
      <button type="button" onClick={goToPricing}>
        Pricing
      </button>      
    </React.Fragment>
  );
}
