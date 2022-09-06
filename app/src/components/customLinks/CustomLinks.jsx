import React from 'react'
import { Link } from 'react-router-dom';

let CustomLinks = (props) => {
  return (
    <Link style={{textDecoration: "none", color: `${props.CustomColorValue}`, scrollBehavior: "smooth"}} to={`#${props.pageValue}`}>{props.pageValue}</Link>
  )
}

export default CustomLinks