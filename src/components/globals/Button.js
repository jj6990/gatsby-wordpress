import React from 'react'
import BtnStyle from '../../styles/buttons/BtnStyle'

const Button = (props) => {
    return (
        <BtnStyle className={`btn-${props.btnClass}`} btnClass={props.btnClass} >
            {props.text}
        </BtnStyle>
    )
}

export default Button