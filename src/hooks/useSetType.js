import { useEffect , useState } from "react";

function useSetType(type,from,to,val){
    
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://akshayanand.herokuapp.com/api/unit/?type=${type}&from=${from}&to=${to}&value=${val}`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[type,from,to,val])
    return data;
}
export default useSetType;