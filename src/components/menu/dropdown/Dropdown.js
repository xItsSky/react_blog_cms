import React from "react";
import './Dropdown.css'

function getClass(value) {
    if(value)
        return 'dropdown displayed';
    else
        return 'dropdown hide';
}

function Dropdown(props) {
    let {elements, displayed} = props;
    return (
        <ul className={ getClass(displayed) }>
            { elements.map((element) =>
                <li key={ element.id } className="dropdown_elt"><a href={ element.redirect } className="dropdown_elt_text">{ element.name } </a></li>
            ) }
            <div className="float_clear" />
        </ul>
    );
}
export default Dropdown;