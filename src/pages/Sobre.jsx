import Header from "../components/header";
import Planos from "../components/planos";

export default function Sobre(){
    return(
        <>
            <Header 
                titulo = 'Bem-vindo à revolução dos vídeos!'
                subtitulo = 'Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.'
                botao = 'Baixe o app'
                img = '../../../public/SobreImage.png'
            />
            <Planos />
        </>
    )
}