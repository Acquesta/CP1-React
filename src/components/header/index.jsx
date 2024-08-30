import Icone from '../icone'
import './style.css'

export default function Header({titulo, subtitulo, botao, img, icones, barra, input, botao2}) {
    return(
        <>
            <div className="header">
                <div className="infos">
                    <h1>{titulo}</h1>
                    {subtitulo ? <h3>{subtitulo}</h3> : false}
                    {botao ? <button className='header__button'>{botao}</button> : false}
                    <div className='icones'>
                        {icones ? icones.map((src) => <Icone src={src}> </Icone>) : false}
                    </div>
                </div>
                {barra ? <div className='barra'></div> : false}
                {input ?( 
                    <div className='inputs'>
                        <div className='input'>
                            <label>Nome:</label>
                            <input type="text" />
                        </div>
                        <div className='input'>
                            <label>E-mail:</label>
                            <input type="text" />
                        </div>
                        <div className='input-mensagem'>
                            <label>Mensagem: </label>
                            <textarea/>
                        </div>
                        <div className='botao'>
                        <button className='contato__button'>{botao2}</button>
                        </div>
                    </div>
                ) : false}
                {img ? <img className='header__img' src={img} alt="imagem de um cara pulando sendo editada"/> : false}
            </div>
        </>
    )
}