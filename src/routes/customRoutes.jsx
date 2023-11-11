import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Donation from '../pages/Donation/Donation'
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage'
import DetailPage from "../pages/DetailPage/DetailPage";
import DonateContainer from "../components/DonateContainer/DonateContainer";
import ErrorElement from "../components/ErrorElement/ErrorElement";

const donatedItems = JSON.parse(localStorage.getItem('donatedItems'))
console.log('costom router', donatedItems?.length)
const previouslyDonatedItemsLength = donatedItems?.length

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
    loader: () => fetch('./data.json')
  },
  {
    path: '/donation',
    element: <Donation />,
    children: [
      {
        path: '/donation/',
        element: <DonateContainer />
      },
      {
        path: '/donation/:id',
        element: <DetailPage />,
        loader: () => fetch('./data.json')
      }
    ]
  },
  {
    path: '/statistics',
    element: <StatisticsPage length={previouslyDonatedItemsLength} />,
    // loader: localStorage ? JSON.parse(localStorage.getItem('donatedItems')).length : 0
  }, 
  // {
    // path: '/donation/:id',
    // loader: () => fetch('./data.json')
  // }
]);

export default customRouter;