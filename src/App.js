import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Route';
import banner from './img/00.png'

function App() {
  return (
    <div  className="hero bg-fixed"
    style={{ backgroundImage: `url(${banner})` }}
 
  >
      <div className="hero-overlay "></div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
