import { Link } from 'react-router-dom'
import './style.css'

export default function Hotbar() {
    return(
        <>
            <ul>
                <li>
                    <Link 
                        to = '/'
                        className = 'navLink'
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to = '/sobre'
                        className = 'navLink'
                    >
                        Sobre
                    </Link>
                </li>
                <li>Contato</li>
            </ul>
        </>
    )
}