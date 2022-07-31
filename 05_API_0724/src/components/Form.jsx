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

    if (startDate == null || endDate == null) {
      alert('日付を選択してください');
    }

    const fetchData = async () => {
      const response = await fetch(
        `https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=${startDate['startDate']}&to=${endDate['endDate']}&city=13102`
      )
      const data = await response.json();
      console.log(data.data.CityPlanning);
      setData(data.data)


      if (data.status === 'ERROR') {
        alert('日付を選択してください。')
      }
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
      <table class="table table-striped">
        <tbody>
          <thead>
            <tr>
              <th scope="col">取引の種類</th>
              <th scope="col">都市計画</th>
              <th scope="col">地区名</th>
              <th scope="col">面積（平方メートル）</th>
              <th scope="col">取引価格（総額）</th>
              <th scope="col">建物の構造</th>
              <th scope="col">面積（平方メートル）</th>
            </tr>
          </thead>
          {data.map((item, index) => (

            <tr key={index}>
              <Item
                id={item.index}
                type={item.Type}
                cityPlanning={item.CityPlanning}
                districtName={item.DistrictName}
                area={item.Area}
                tradePrice={item.TradePrice}
                structure={item.Structure}
                buildingYear={item.BuildingYear}
              /></tr>
          ))}
        </tbody>
      </table>

      {/* {house.map((item, index) => (data => <div key={index}>{data.Area}</div>))} */}


    </div>
  )
}

export default Form