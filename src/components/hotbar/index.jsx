import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Hotbar() {
    return(
        <>
            <ul>
                <li>
                    <NavLink 
                        to = '/'
                        className = 'navLink'
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = '/sobre'
                        className = 'navLink'
                    >
                        Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = '/contato'
                        className = 'navLink'
                    >
                        Contato
                    </NavLink>
                </li>
            </ul>
        </>
    )
}