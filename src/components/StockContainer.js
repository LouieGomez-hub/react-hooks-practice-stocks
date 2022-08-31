import React, {useState, useEffect} from "react";
import Stock from "./Stock";

function StockContainer() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((stocks) => setStocks(stocks))
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
