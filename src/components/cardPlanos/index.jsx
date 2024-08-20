import './style.css'

function CardPlano() {
    return ( 
        <div className='cardPlano'>
            <h3>Individual</h3>
            <div className="cardPlanos__infos">
                <p>1 Usuário</p>
                <h4>10 vídeos <span className='bold'>R$15</span></h4>
            </div>
            <button className="cardPlano__button">
                Cadastrar
            </button>
        </div>
     );
}

export default CardPlano;