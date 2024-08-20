import CardPlano from '../cardPlanos';
import './style.css'

function Planos() {
    return ( 
        <div className='container__planos'>
            <h2 className='titulo__planos'>Planos</h2>
            <div className="planos">
                <CardPlano />
                <CardPlano />
                <CardPlano />
            </div>
        </div>
     );
}

export default Planos;