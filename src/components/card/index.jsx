import './style.css'

export default function Card({titulo, descricao, icon, numero, cor}){
    return(
        <>
            <div className="card" style={{backgroundColor: cor}}>
                <div className="top">
                    <h2>{numero}</h2>
                    <img className='card__img' src={icon} alt='Icone da marca'  />
                </div>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </>
    )
}