import { Component } from "react";
import { menudata } from "./menudata";
// import Footer from "../Footer";
import "./Navbarstyles.css";
class Navbar extends Component{
    state = {clicked: false};
    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="logo">React <i className="fab fa-react">
                    </i></h1>
                <div className="menu-icons" onClick = {this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>

                    </i>
                    </div>    
                <ul className={this.state.clicked? "nav-menu active" : "nav-menu"}>
                    {menudata.map((item,index)=>{
                       return(
                        <div className="eachItem">
                        <li key={index}><a href={item.url} className={item.cName}>
                        <i className={item.icon}></i>{item.title}</a></li>
                        </div>

                       ) 
                    })}
                     

                </ul>
            
            </nav>
        );
    }
}
export default Navbar;