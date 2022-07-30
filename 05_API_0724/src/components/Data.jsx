// rafce を入力後 tabキーを押す
import React from "react";
import Form from "./Form";

// 1.useStateとuseEffectをimportします🤗
import { useState, useEffect } from "react";

const Data = () => {
    // 2.useStateを準備します🤗
    const [house, setHouse] = useState([]);
    const [data, setData] = useState([]);


    // 3.useEffectを用いて、houseAPIのデータを取得します🤗（欲しいデータに精査して）
    useEffect(() => {
        // 3-1. fetchDataというおまじないを作成する
        const fetchData = async () => {
            // APIのデータを取得する
            const response = await fetch(
                `https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=20101&to=20134&station=02590`
            );
            // console.log(response, "response");

            // jsonにしてjsで操作できるように変換する
            const data = await response.json();
            console.log(data, "data"); //jsonに変換されたデータ

            //resultsって？コンソールログでチェックします🤗
            const houseList = data.results;
            console.log(houseList, "houseList");

            // useStateを使ってhouseListの精査したデータを保持します🤗
            setHouse(houseList);
        };
        // 3-2 fetchDataを実行します
        fetchData();
    }, []);

    return (
        <div className="ViewBox">
            {/* {house.map((item, index) => (
                <View key={index} houseItem={index} onClick={handleClick}/>
            ))} */}
        </div>
        //
    );
};

export default Data;