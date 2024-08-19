import './style.css'

export default function Header() {
    return(
        <>
            <div className="header">
                <div className="infos">
                    <h1>Crie seus vídeos online</h1>
                    <h3>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</h3>
                    <button>Começar agora!</button>
                </div>
                <img src="../../../public/HeroImage.png" alt="imagem de um cara pulando sendo editada" />
            </div>
        </>
    )
}