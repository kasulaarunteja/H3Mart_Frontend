import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import "../App.css";

const Coin = () => {
  const [limit, setLimit] = useState(25);
  let items = useSelector((store) => store.data);
  items = items.slice(0, limit);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getData());
  }, [limit]);

  return (
    <div>
      <table
        className="table table-hover"
        style={{
          width: "75%",
          margin: "auto",
          border: "0.01px solid white",
          borderRadius: "50%",
        }}
      >
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th scope="col">Market Cap</th>
            <th scope="col">VWAP (24hr)</th>
            <th scope="col">Supply</th>
            <th scope="col">Volume (24hr)</th>
            <th scope="col">Change(24hr)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((ele) => {
            return (
              <tr>
                <td>{ele.rank}</td>
                <td>
                  <img
                    src={`https://assets.coincap.io/assets/icons/${ele.symbol.toLowerCase()}%402x.png`}
                    alt="crypto"
                    className="symbol"
                    height="40px"
                    w="40px"
                  />
                  {ele.name} <br />
                  <p style={{ marginLeft: "7%" }}>{ele.symbol}</p>
                </td>

                <td>${parseFloat(ele.priceUsd).toFixed(2)}</td>
                <td>
                  {Math.abs(ele.marketCapUsd) >= 1.0e9
                    ? (Math.abs(ele.marketCapUsd) / 1.0e9).toFixed(2) + "b"
                    : Math.abs(ele.marketCapUsd) >= 1.0e6
                    ? (Math.abs(ele.marketCapUsd) / 1.0e6).toFixed(2) + "m"
                    : Math.abs(ele.marketCapUsd) >= 1.0e3
                    ? (Math.abs(ele.marketCapUsd) / 1.0e3).toFixed(2) + "k"
                    : Math.abs(ele.marketCapUsd)}
                </td>

                <td>{parseFloat(ele.vwap24Hr).toFixed(2)}</td>
                <td>
                  {Math.abs(ele.supply) >= 1.0e9
                    ? (Math.abs(ele.supply) / 1.0e9).toFixed(2) + "b"
                    : Math.abs(ele.supply) >= 1.0e6
                    ? (Math.abs(ele.supply) / 1.0e6).toFixed(2) + "m"
                    : Math.abs(ele.supply) >= 1.0e3
                    ? (Math.abs(ele.supply) / 1.0e3).toFixed(2) + "k"
                    : Math.abs(ele.supply)}
                </td>
                <td>
                  {Math.abs(ele.volumeUsd24Hr) >= 1.0e9
                    ? (Math.abs(ele.volumeUsd24Hr) / 1.0e9).toFixed(2) + "b"
                    : Math.abs(ele.volumeUsd24Hr) >= 1.0e6
                    ? (Math.abs(ele.volumeUsd24Hr) / 1.0e6).toFixed(2) + "m"
                    : Math.abs(ele.volumeUsd24Hr) >= 1.0e3
                    ? (Math.abs(ele.volumeUsd24Hr) / 1.0e3).toFixed(2) + "k"
                    : Math.abs(ele.volumeUsd24Hr)}
                </td>
                {ele.changePercent24Hr < 0 ? (
                  <td className="coin-percent red">
                    {parseFloat(ele.changePercent24Hr).toFixed(2)}%
                  </td>
                ) : (
                  <td className="coin-percent green">
                    {parseFloat(ele.changePercent24Hr).toFixed(2)}%
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        style={{ margin: "40px" }}
        className="btn btn-primary"
        onClick={() => setLimit(() => limit + 25)}
      >
        Load More
      </button>
    </div>
  );
};

export default Coin;
