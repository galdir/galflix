import React from "react";

function ButtonLink(props){
    // props => { className: "o que for passado", href: "o que for passado"}
    console.log(props);
    return(
        <a href={props.className} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;