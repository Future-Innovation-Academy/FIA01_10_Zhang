import React from 'react'
import { useState, useEffect } from "react";
import Data from './Data';
import Item from './Item';


const Form = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState([]);
  const [house, setHouse] = useState([]);


  function handleChange1(e) {
    setStartDate(toStringFromDate(e.target.value));

  }

  function handleChange2(e) {
    setEndDate(toStringFromDate(e.target.value));
  }

  function toStringFromDate(date) {
    var year = date.substring(0, 4);
    var month = parseInt(date.substring(5, 7));
    var season;

    if (month <= 3) {
      season = 1;
    } else if (month <= 6) {
      season = 2;
    } else if (month <= 9) {
      season = 3;
    } else {
      season = 4;
    }

    return year + season;
  }
  const handleClick = async (startDate, endDate) => {

    const fetchData = async () => {
      const response = await fetch(
        `https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=${startDate['startDate']}&to=${endDate['endDate']}&city=13102`
      )
      const data = await response.json();
      console.log(data);
      const houseList = data.results;
      setHouse(houseList);
    };
    fetchData();
  }


  return (
    <div className="App">


      <div>
        <label for="Start">Start date:</label>
        <input type="date" id="start" name="startDate" max="2021-12-13"
          onChange={handleChange1}
          value={startDate}></input>
      </div>

      <p>{startDate}</p>

      <div>
        <label for="End">Start date:</label>

        <input type="date" id="end" name="endDate" max="2021-12-13"
          onChange={handleChange2}
          value={endDate}>
        </input>
      </div>


      <p>{endDate}</p>

      {/* <Data startDate={startDate} endDate={endDate}></Data> */}

      <button type="button" className="btn btn-primary" onClick={() => handleClick({ startDate }, { endDate })}>検索</button>

      {/* {data.map((item, index) => (
        <div key={index}>
           <Item
        id={item.index}
        type={item.Type}
        cityPlanning={item.CityPlanning}
        districtName={item.DistrictName}
        area={item.Area}
        tradePrice={item.TradePrice}
        structure={item.Structure}
        buildingYear={item.BuildingYear}
      />
        </div>
      ))} */}

      {/* {house.map((item, index) => (data => <div key={index}>{data.Area}</div>))} */}


    </div>
  )
}

export default Form