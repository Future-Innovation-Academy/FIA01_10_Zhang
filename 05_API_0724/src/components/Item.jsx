import React from "react";

// 1.データを受け取りましょう🤗
const Item = ({
  // id,
  type,
  cityPlanning,
  districtName,
  area,
  tradePrice,
  structure,
  buildingYear,
}) => {
  return (


    <tr>
      <th scope="row">{type}</th>
      <td>{cityPlanning}</td>
      <td>{districtName}</td>
      <td>{area}</td>
      <td>{tradePrice}</td>
      <td>{structure}</td>
      <td>{buildingYear}</td>
    </tr>

  );
};

export default Item;