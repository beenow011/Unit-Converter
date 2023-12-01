import { useState } from "react";
import TypeInput from "./components/TypeInput";
import InputBox from "./components/InputBox";
import useSetType from "./hooks/useSetType";
// import len from "./hooks/useSetType";
function App() {
  // const [count, setCount] = useState(0);

  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("km");
  const [val, setVal] = useState(0);
  const [convertVal, setConvertedVal] = useState(0);
  const unitInfo = useSetType(from);
  const len = ["mile", "km", "yard", "m", "cm", "foot", "inch", "mm"];
  const convert = () => {
    setConvertedVal(val / unitInfo[to]);
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedVal(0);
    setVal(0);
  };
  return (
    <div className="w-full h-screen  pt-32 bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="bg-black/30 md:w-[20%] rounded-xl m-auto shadow-2xl shadow-black hover:shadow-md">
        <h1 className="font-mono text-7xl text-[#ACC8E5] text-center ">
          unit Converter
        </h1>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
            console.log(convertVal);
          }}
        >
          <div className="bg-white/30 lg:bg-[url('assets/bg.jpg')] bg-cover bg-center h-64 sm:w-1/2 md:w-1/3 lg:w-[50%] xl:w-[50%] m-auto rounded-md flex flex-col items-center mt-16 ">
            {/* <TypeInput /> */}
            <div className="flex gap-10 items-center justify-center  flex-col md:flex-row  pt-20 ">
              <InputBox
                msg="from"
                len={len}
                val={val}
                unit={from}
                onUnitChange={(unit) => setFrom(unit) && setVal(val)}
                onValueChange={(val) => setVal(val)}
              />
              <button
                onClick={swap}
                className="bg-blue-500 text-white w-24 h-10 rounded-md shadow-black shadow-md hover:bg-blue-700"
              >
                Swap
              </button>
              <InputBox
                msg="to"
                len={len}
                val={convertVal}
                unit={to}
                onUnitChange={(unit) => setTo(unit)}
                disable
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 rounded-md text-white w-64 h-24 md:h-12 justify-center mt-6 md:mt-12 hover:bg-blue-700 shadow-md shadow-black"
            >
              Convert
            </button>
          </div>
        </form>
      </div>
      <p className="text-center pt-5 text-xl text-white hover:text-blue-300 absolute bottom-0 p-6 border-black border-2 rounded-md m-3 hover:bg-black hover:text-white">
        <a href="https://github.com/beenow011/Unit-Converter">github</a>
      </p>
    </div>
  );
}

export default App;
