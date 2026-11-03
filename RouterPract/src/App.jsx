import { BrowserRouter,Routes,Route} from "react-router";

import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Products";
import { PageNotFound } from "./Pages/PageNotFound";
import GetUser from "./Pages/Dashboard/AxiosPrac";

import {Dashboard} from "./Pages/Dashboard/Dashboard";
import { Profile } from "./Pages/Dashboard/Profile";
import { Order } from "./Pages/Dashboard/Order";
import { Setting } from "./Pages/Dashboard/Setting";
import  AxiosPrac  from "./Pages/Dashboard/AxiosPrac";



export function App(){
  return(<>
  
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home />}/>

        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile/>} />
        <Route path="order" element={<Order />} />
        <Route path="setting" element={<Setting />} />  
        <Route path="axiosPrac" element={<AxiosPrac/>}/>
        </Route>

        
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>

  </>)
}