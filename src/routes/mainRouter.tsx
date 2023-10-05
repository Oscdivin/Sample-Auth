import {createBrowserRouter} from "react-router-dom"

import Multifrom from "../multiFrom/Multifrom"
// import StepOne from "../multiFrom/StepOne"
// import StepThree from "../multiFrom/StepThree"
import Home from "../multiFrom/Home"
import Sigin from "../multiFrom/Sigin"
import StepThree from "../multiFrom/Openaccount"


export const mainRoter = createBrowserRouter([
{
    path:"//df",
    element:<Multifrom/>,
    
},
// {
//     path:"/",
//     index:true,
//     element:<StepOne/>,
    
// },
{
    path:"/",
    index:true,
    element:<Sigin/>,
    
},
{
    path:"/house",
    index:true,
    element:<StepThree/>,
},
{
    path:"/Home",
    index:true,
    element:<Home/>,
},
])