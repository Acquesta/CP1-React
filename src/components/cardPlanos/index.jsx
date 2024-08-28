import './style.css'

function CardPlano({ fundo, corBotao, borda, titulo, inputs, textoBotao, img }) {
    return ( 
        <div className='cardPlano'>
            <h3 style={{backgroundColor: fundo}}>{titulo}</h3>
            <div className="cardPlanos__infos">
                {inputs.map(plano => (
                    <div key={plano.title} className="infos__texto">
                        <p>{plano.label}</p>
                        <h4>{plano.input}<span className='bold'> {plano.span}</span></h4>
                    </div>
                ))}
                <img src={img} alt="" />
                <button style={{backgroundColor: fundo, color: corBotao, border: borda == false ? 'none' : '2px solid #EBE9E9' }} className="cardPlano__button">
                    {textoBotao}
                </button>
                
            </div>
        </div>
     );
}

export default CardPlano;