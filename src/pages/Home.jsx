import Cards from "../components/cards";
import Header from "../components/header";
import HeroImage from '../../public/HeroImage.png'

function Home() {
    return ( 
        <>
        <Header 
            titulo = 'Crie seus vídeos online'
            subtitulo = 'Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.'
            botao = 'Começar agora!'
            img = {HeroImage}
        />
        <Cards />
        </>
     );
}

export default Home;