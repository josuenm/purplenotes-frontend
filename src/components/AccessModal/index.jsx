import { Container, InputContainer, InputSubmit, RevealContainer } from './styles'
import logo from '../../assets/images/logo.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export function AccessModal({ children }) {
    return (
        <Container>
            <img src={logo} alt="" />
            <p className='AccessModal__title'>Your notes in the cloud</p>
            {children}
        </Container>
    )
}

export function Input({value, change, label, type, password}) {

    const [isReveal, setIsReveal] = useState(false)
    const [passwordType, setPasswordType] = useState('password')

    function handleIsReveal() {
        if(isReveal) {
            setIsReveal(false)
            setPasswordType('password')
        } else {
            setIsReveal(true)
            setPasswordType('text')
        }
    }

    return(
        <InputContainer>
            <input 
            type={password ? passwordType : type} 
            name={label} 
            value={value} 
            onChange={({target}) => change(target.value)} 
            data-focus={value !== '' ? true : false} />
            <label htmlFor={label}>{label}</label>

            { password && (
                <RevealContainer>
                    {isReveal 
                        ? <span><VisibilityIcon onClick={handleIsReveal} /></span> 
                        : <span><VisibilityOffIcon onClick={handleIsReveal} /></span>
                    }
                </RevealContainer>
            )}
        </InputContainer>
    )
}

export function Submit({value, isDisabled}) {
    return(
        <InputSubmit type="submit" value={value} data-disabled={isDisabled} />
    )
}