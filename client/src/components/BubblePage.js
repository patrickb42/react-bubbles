import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(
    () => {
      (async () => {
        try {
          const response = await axiosWithAuth().get('http://localhost:5000/api/colors');
          setColorList(response.data)
        } catch (error) {
          console.error(error.response);
        }
      })();
    },
    []
  );

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
