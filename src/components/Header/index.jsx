import { Container, MobileMenu } from './styles'
import Logo from "../../assets/images/logo.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {

    const [isMenuActive, setIsMenuActive] = useState(false)

    function handleMenu() {
        setIsMenuActive(!isMenuActive)
    }

    return(
        <Container>
            <Link to="/" onClick={handleMenu}>
                <img src={Logo} alt="" className='header__logo' />
            </Link>

            <div className="header__mobileMenuBackground" data-active={isMenuActive} onClick={handleMenu}>
            </div>
            
            <div className="header__account" data-active={isMenuActive}>
                <Link to='register' onClick={handleMenu}>Register</Link>
                <Link to='login' onClick={handleMenu} className='header__accountLogin'>Login</Link>
            </div>

            <MobileMenu onClick={handleMenu} data-active={isMenuActive}>
                <div className='stick first-stick'></div>
                <div className='stick second-stick'></div>
                <div className='stick third-stick'></div>
            </MobileMenu>
        </Container>
    )
}