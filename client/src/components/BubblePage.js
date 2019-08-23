import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  console.log('Hello wORLD')
  const [colorList, setColorList] = useState([]);
  console.log(props, 'props')
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getData = () => {
    
    axiosWithAuth()
    .get('http://localhost:5000/api/colors', colorList)
    .then(res=> {setColorList(res.data)})
    // .then(res=> console.log(res, "res"))
    .catch(err => console.log(err))
console.log(props, 'props')

}

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      {
        colorList.map(item => {
          return <div key ={item.id}>{item}</div>
        })
      }
    </>
  );
};

export default BubblePage;
