import './style.css'

export default function Header({titulo, subtitulo, botao}) {
    return(
        <>
            <div className="header">
                <div className="infos">
                    <h1>{titulo}</h1>
                    <h3>{subtitulo}</h3>
                    <button>{botao}</button>
                </div>
                <img className='header__img' src="../../../public/HeroImage.png" alt="imagem de um cara pulando sendo editada" />
            </div>
        </>
    )
}