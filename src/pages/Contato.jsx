import Header from "../components/header";
import IconDisc from "../assets/iconDisc.png"
import IconTT from "../assets/iconTT.png"
import IconIG_white from "../assets/iconIG_white.png"

export default function Contato(){
    const icones = [IconTT, IconIG_white, IconDisc]
    
    return(
        <>
            <Header 
                titulo = 'Dúvidas e suporte, entre em contato: '
                icones = {icones}
                barra = {true}
                input= {true}
                botao2 = "Enviar"
            />
        </>
    )
}