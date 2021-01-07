import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) =>(
    <div className='header'>Hello, {props.name}</div>
)

const Text =({name})=>{
    if(name==="Remir")
        return(
        <div className="name">You are great</div>
        )
    else
        return(
            <div className="name">You are looser</div>
        )
    }

Header.propTypes = {
    name: PropTypes.string
}

Header.defaultProps = {
    name: "noname"
}

export { Header}
export { Text}