import { useState,useEffect } from "react";
const len = ["mile", "km", "yard", "m", "cm", "foot", "inch", "mm"];

const conversion={
   "mile":{
        "mile":1.0,
        "km":1.609,
        "yard":1760.0,
        "m":1609.344,
        "cm":160934.4,
        "foot":5280.0,
        "inch":63360.0,
        "mm":1609000.0
        },
        "km":{
            "mile": 1.60934,
            "km": 1,
            "yard": 0.0009144,
            "m": 0.001,
            "cm": 0.00001,
            "foot": 0.0003048,
            "inch": 0.0000254,
            "mm": 0.000001
          },
          "yard":{
            "mile": 1760,
            "km": 1093.6133,
            "yard": 1,
            "m": 1.09361,
            "cm": 0.0109361,
            "foot": 0.333333,
            "inch": 0.0277778,
            "mm": 0.00109361
          },
          "m":{
            "mile": 1609.34,
            "km": 1000,
            "yard": 0.9144,
            "m": 1,
            "cm": 0.01,
            "foot": 0.3048,
            "inch": 0.0254,
            "mm": 0.001
          },
          "cm": {
            "mile": 160934,
            "km": 100000,
            "yard": 91.44,
            "m": 100,
            "cm": 1,
            "foot": 30.48,
            "inch": 2.54,
            "mm": 0.1
          },
          "foot":{
            "mile": 5280,
            "km": 3280.84,
            "yard": 3,
            "m": 3.28084,
            "cm": 0.0328084,
            "foot": 1,
            "inch": 0.0833333,
            "mm": 0.00328084
          },
          "inch":{
            "mile": 63360,
            "km": 39370.1,
            "yard": 36,
            "m": 39.3701,
            "cm": 0.393701,
            "foot": 12,
            "inch": 1,
            "mm": 0.0393701
          },
          "mm":{
            "mile": 1609344,
            "km": 1000000,
            "yard": 914.4,
            "m": 1000,
            "cm": 10,
            "foot": 304.8,
            "inch": 25.4,
            "mm": 1
          },

};

function useSetType(unit){
    const [data,setData]=useState({});
    useEffect(()=>{
        setData((conversion[unit]));
  },[unit]);
    return data;
}

export default useSetType;