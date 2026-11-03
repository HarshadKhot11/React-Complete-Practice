import {NavBar} from '../NavBar';
import {NavLink, Outlet} from "react-router";

export function Dashboard(){
    return(<>
    <NavBar/>
    <aside style={{ display: "flex", gap: "10px" }}>
        <NavLink to ="profile" className="nav-link" style={{color:"black", fontWeight:"400"}}>Profile</NavLink>
        <NavLink to = "order" className="nav-link" style={{color:"black", fontWeight:"400"}}>Order</NavLink>
        <NavLink to="setting" className="nav-link" style={{color:"black", fontWeight:"400"}}>Setting</NavLink>
        <NavLink to="axiosPrac" className="nav-link" style={{color:"black", fontWeight:"400"}}>AxiosPrac</NavLink>
    </aside>
    
    
    <main>
        <Outlet />
    </main>
    
    </>)
}