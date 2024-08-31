// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [textColor, setTextColor] = useState("#ffffff");
//   const [bgColor, setBgColor] = useState("#000");
//   const [statusInp, setStatusInp] = useState("");
//   const [allStatus, setAllStatus] = useState([]);

//   function addStatus() {
//     console.log("textColor", textColor);
//     console.log("bgColor", bgColor);
//     console.log("statusInp", statusInp);
//     setAllStatus((prevStatuses) => [
//       {
//         text: statusInp,
//         bgcolor: bgColor,
//         textColor: textColor,
//         timeRemaining: 30, // Corrected property name
//       },
//       ...prevStatuses,
//     ]);
//     setStatusInp("");
//     setBgColor("#000");
//     setTextColor("#ffffff");
//   }

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setAllStatus((prevStatuses) =>
//         prevStatuses
//           .map((status) => ({
//             ...status,
//             timeRemaining: status.timeRemaining - 1
//           }))
//           .filter((status) => status.timeRemaining > 0)
//       );
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <div className="w-full border border-black h-[100px] my-5 flex justify-center items-center">
//         <input
//           type="text"
//           value={statusInp}
//           placeholder="Enter Your Status"
//           className="border border-black h-[50px] px-3 w-[300px] rounded-lg"
//           onChange={(e) => setStatusInp(e.target.value)}
//         />
//         <div className="mx-5">
//           <label htmlFor="Bg Color">Bg Color</label>
//           <br />
//           <input
//             type="color"
//             onChange={(e) => setBgColor(e.target.value)}
//             value={bgColor}
//           />
//         </div>
//         <div>
//           <label htmlFor="Text Color">Text Color</label>
//           <br />
//           <input
//             type="color"
//             onChange={(e) => setTextColor(e.target.value)}
//             value={textColor}
//           />
//         </div>
//         <button
//           className="mx-5 h-[50px] w-[100px] rounded-xl bg-blue-600 text-white font-bold"
//           onClick={addStatus}
//         >
//           Add
//         </button>
//       </div>
//       <div className="h-[78vh] border border-black flex justify-center flex-wrap">
//         {allStatus.map((status, index) => (
//           <div
//             key={index}
//             className="relative h-[100px] w-[200px] my-5 mx-4 rounded-lg"
//             style={{ backgroundColor: status.bgcolor, color: status.textColor }}
//           >
//             <h1 className="text-center mt-4 text-3xl capitalize">
//               {status.text}
//             </h1>
//             <p className="absolute bottom-0 right-0 me-2">
//               {status.timeRemaining}s
//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [textColor, setTextColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#000");
  const [statusInp, setStatusInp] = useState("");
  const [allStatus, setAllStatus] = useState([]);

  function addStatus() {
    console.log("textColor", textColor);
    console.log("bgColor", bgColor);
    console.log("statusInp", statusInp);
    setAllStatus((prevStatuses) => [
      {
        text: statusInp,
        bgcolor: bgColor,
        textColor: textColor,
        timeRemaining: 30, // Corrected property name
      },
      ...prevStatuses,
    ]);
    setStatusInp("");
    setBgColor("#000");
    setTextColor("#ffffff");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAllStatus((prevStatuses) =>
        prevStatuses
          .map((status) => ({
            ...status,
            timeRemaining: status.timeRemaining - 1,
          }))
          .filter((status) => status.timeRemaining > 0)
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      {/* Input Section */}
      <div className="w-full max-w-3xl p-5 border rounded-lg shadow-lg mb-8 flex flex-col md:flex-row justify-center items-center gap-5">
        <input
          type="text"
          value={statusInp}
          placeholder="Enter Your Status"
          className="border-2 border-black h-[50px] px-3 w-full md:w-[300px] rounded-xl"
          onChange={(e) => setStatusInp(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <label htmlFor="Bg Color" className="mr-2">Bg Color</label>
          <input
            type="color"
            onChange={(e) => setBgColor(e.target.value)}
            value={bgColor}
            className="w-10 h-10 p-1"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="Text Color" className="mr-2">Text Color</label>
          <input
            type="color"
            onChange={(e) => setTextColor(e.target.value)}
            value={textColor}
            className="w-10 h-10 p-1"
          />
        </div>
        <button
          className="h-[50px] w-[100px] rounded-xl bg-blue-600 text-white font-bold transition delay-10000 ease-out hover:bg-black"
          onClick={addStatus}
        >
          Add
        </button>
      </div>

      {/* Status Display Section */}
      <div className="flex justify-center flex-wrap">
        {allStatus.map((status, index) => (
          <div
            key={index}
            className="relative h-[150px] w-[200px] mx-3 my-3 rounded-lg shadow-md"
            style={{ backgroundColor: status.bgcolor, color: status.textColor }}
          >
            <h1 className="text-center mt-4 text-2xl capitalize">
              {status.text}
            </h1>
            <p className="absolute bottom-2 right-2 text-sm">
              {status.timeRemaining}s
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
