import './App.css';
import CampaignList from './components/CampaignList';
import FundraisingInputScreen from './components/FundraisingInputScreen'
import Login from './components/Login';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import DonationScreen from './components/DonationScreen';
import Error from './components/Error';
import bgImg from '../src/Images/funds2.png'

function App() {
  
  const myStyle={
      backgroundImage: "url(" +bgImg + ")",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
  };

 

  const routes= createBrowserRouter([
      {
          path: '/',
          element: <RootLayout />,
          errorElement: <Error />,
          children :[
              { path: '/', element: <Login /> },
              { path: 'listCampaign', element: <CampaignList /> },
              { path: 'raiseFunds', element: <FundraisingInputScreen /> },
              { path: 'donation', element: <DonationScreen /> },
          ]
      } 
  ])
return (
  <div style={myStyle}>
    <div>
        <RouterProvider router={routes} />
    </div>
  </div>
);
}

export default App;

