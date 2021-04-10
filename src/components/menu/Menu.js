import React from "react";
import Dropdown from "./dropdown/Dropdown";
import './Menu.css'
import logo from '../../resources/logo.svg';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed : false
        }

        this.setDisplayState = this.setDisplayState.bind(this);
    }

    setDisplayState(event) {
        event.preventDefault();
        this.setState(({ displayed }) => ({ displayed: !displayed }));
        console.log(">" + this.state.displayed);
    }

    getButtonText() {
        if(!this.state.displayed)
            return "☰";
        else
            return " X ";
    }

    render() {
        return (
            <div className="menu">
                <div>
                    <button onClick={ this.setDisplayState } className="menu_btn" >{ this.getButtonText() }</button>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="left_panel">
                    <Dropdown elements={ this.props.elements } displayed={ this.state.displayed } />
                </div>
            </div>
        );
    }
}

export default Menu;