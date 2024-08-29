import './style.css'

export default function Header({titulo, subtitulo, botao, img}) {
    return(
        <>
            <div className="header">
                <div className="infos">
                    <h1>{titulo}</h1>
                    {subtitulo ? <h3>{subtitulo}</h3> : false}
                    {botao ? <button className='header__button'>{botao}</button> : false}
                    
                </div>
                {img ? <img className='header__img' src={img} alt="imagem de um cara pulando sendo editada"/> : false}
            </div>
        </>
    )
}