import React, { useState } from "react";

const Uniswap = () => {
  const [showUniswap, setShowUniswap] = useState(false);

  const handleBuyClick = () => {
    setShowUniswap(true);
  };

  return (
    <div>
      <button onClick={handleBuyClick}>Buy</button>
      {showUniswap && (
        <iframe
          title="Uniswap Interface"
          src="https://app.uniswap.org/"
          //   src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
          width="100%"
          height="800px"
          style={{ border: "none" }}
        />
      )}
    </div>
  );
};

export default Uniswap;
