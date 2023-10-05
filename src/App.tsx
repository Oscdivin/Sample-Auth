// import {  } from "react-router-dom"
// const App = () => {
//   return (
//     <div>
//       <div className="bg-[#f4f4f4f3] text-[#000] w-[100%] h-[10vh]
//        justify-center items-center flex border-[solid red 1px] max-[500px]:flex">
//         <div className="bg-[none] w-[90%] h-[10vh] flex items-center justify-between">
// <div className="">
//   Divine Osinachi
// </div>
// <div className="bg-[none] w-[48%] h-[10vh] items-center justify-center 
// cursor-pointer flex gap-4 max-[500px]:hidden">
// <div>Home </div>
// <div>About </div>
// <div>Us </div>
// <div>Prouject</div>
// </div>
// <button className="border-black py-[7px] px-[12px] bg-white
//  text-black border-[1px] flex justify-center 
//  max-[768px]:hidden max-[500px]:flex">
// Login Now!
// </button>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default App

// import StepOne from "./multiFrom/StepOne"



// const App = () => {
//   return (
//     <div className="">
//       <div className="w-full h-[100vh] flex justify-center items-center bg-[#000]">
//       <div className="w-[50%] h-[80vh] flex justify-center items-center bg-[#fff]">
// <form action="" className="min-h-[10vh] bg-[red] w-[400px] flex items-center justify-center flex-col">
// <div>Log</div>
// <input className="w-full h-[30px] bg-[#fff]"></input>
// <input className="w-full h-[30px] bg-[#fff]"></input>
// <input className="w-full h-[30px] bg-[#fff]"></input>
// <input className="w-full h-[30px] bg-[#fff]"></input>
// <button className="py-[18px] px-[25px] justify-center items-center flex bg-[green]">Submit</button>
// </form>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default App




import { RouterProvider } from "react-router-dom";
import { mainRoter } from "./routes/mainRouter";
// import Multiform from "./multiForm/Multiform";
// import { mainRouter } from "./routes/mainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoter} />
    </div>
  );
};

export default App;