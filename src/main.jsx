import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from "./component/About.jsx";
import HomeItem from './component/HomeItem.jsx';
import SearchItem from './component/SearchItem.jsx';
import { store } from './store/store.js';
import { Provider } from "react-redux";
import InfoProduct from './component/InfoProduct.jsx';
import Addcart from './component/Addcart.jsx';
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: "",
    element: <Home />,
    children: [{
      path: "",
      element: <HomeItem />
    }]
  },
  {

    path: "about",
    element: <About />
  },
  {
    path: "searchitem",
    element: <SearchItem />
  },
  {
     path:"infoproduct",
     element:<InfoProduct/>
  },
  {
    path:"addcart",
    element:<Addcart/>
  }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
