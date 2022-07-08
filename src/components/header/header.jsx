import { NavLink } from 'react-router-dom';

export const Header = () => {

    const navLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
            margin: isActive ? '15px' : '15px',
        }
    }

    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
            <NavLink style={navLinkStyle} to='/about'>About</NavLink>
        </nav>
    )

}