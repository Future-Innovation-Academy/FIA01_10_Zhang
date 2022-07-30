import React from "react";

// 1.データを受け取りましょう🤗
const Item = ({
  id,
  type,
  cityPlanning,
  districtName,
  area,
  tradePrice,
  structure,
  buildingYear,
}) => {
  return (
    <div className="Item">
      {/* ポケモンのデータが渡ってくるのでそれを表示します🤗 */}
      <div>番号: {id}</div>
      <div>取引の種類: {type}</div>
      <div>都市計画: {cityPlanning}</div>
      <div>地区名: {districtName}</div>
      <div>	面積（平方メートル）: {area}</div>
      <div>取引価格（総額）: {tradePrice}</div>
      <div>建物の構造: {structure}</div>
      <div>建築年: {buildingYear}</div>
    </div>
  );
};

export default Item;