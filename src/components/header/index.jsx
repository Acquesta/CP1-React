import './style.css'

export default function Header({titulo, subtitulo, botao, img}) {
    return(
        <>
            <div className="header">
                <div className="infos">
                    <h1>{titulo}</h1>
                    <h3>{subtitulo}</h3>
                    <button className='header__button'>{botao}</button>
                </div>
                <img className='header__img' src={img} alt="imagem de um cara pulando sendo editada" />
            </div>
        </>
    )
}