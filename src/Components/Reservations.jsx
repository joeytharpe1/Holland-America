import React, { useState, useEffect } from "react";
import { List } from "../Data/Data";
import ResData from "./ResData";


const Reservations = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    (async () => {
      const results = List;
      //   console.log(results);
      setDatas(results);
    })();
  }, [setDatas]);

  return datas.map((data, index) => (
    <div key={index}>
        <ResData data={data} />
    </div>
  ));
};

export default Reservations;
