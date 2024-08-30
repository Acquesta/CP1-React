import Header from "../components/header";
import IconDisc from "../../public/iconDisc.png"
import IconTT from "../../public/iconTT.png"
import IconIG_white from "../../public/iconIG_white.png"

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