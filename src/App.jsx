import { useState } from "react";
import TypeInput from "./components/TypeInput";
import InputBox from "./components/InputBox";
import useSetType from "./hooks/useSetType";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-[url('assets/bg.jpg')] bg-cover bg-center pt-64 ">
      <div className="bg-black/30 md:w-[20%] rounded-xl m-auto shadow-2xl shadow-black hover:shadow-md">
        <h1 className="font-mono text-7xl text-[#ACC8E5] text-center ">
          Unit Converter
        </h1>
      </div>
      <div>
        <div className="bg-white/30 flex gap-10 items-center justify-center  mt-20 h-64 w-[50%] m-auto rounded-md flex-col md:flex-row">
          <TypeInput />
          <InputBox msg="from" />
          <InputBox msg="to" />
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default App;
