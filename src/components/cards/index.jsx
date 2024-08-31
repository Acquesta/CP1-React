import Card from '../card'
import './style.css'

import IconTY from '../../assets/iconYT.png'
import IconTTK from '../../assets/iconTTK.png'
import IconFC from '../../assets/iconFC.png'
import IconIG from '../../assets/iconIG.png'

let listaCards = [
    {
        titulo: 'Youtube',
        descricao: 'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.',
        icon: IconTY,
        numero: '01',
        cor: '#F1C2B0'
    },
    {
        titulo: 'Tiktok',
        descricao: 'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.',
        icon: IconTTK,
        numero: '02',
        cor: '#F9EB98'
    },
    {
        titulo: 'FaceBook',
        descricao: 'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.',
        icon: IconFC,
        numero: '03',
        cor: '#C0D9DD'
    },
    {
        titulo: 'Instagram',
        descricao: 'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.',
        icon: IconIG,
        numero: '04',
        cor: '#6975E8'
    }
]

export default function Cards(){
    console.log(listaCards[0].icon.IconTY);
    return(
        <>
            <div className="cards">
                {listaCards.map((card) => 
                        <Card
                            key={card.numero}
                            titulo = {card.titulo}
                            descricao = {card.descricao}
                            icon = {card.icon}
                            numero = {card.numero}
                            cor = {card.cor}
                        />
                    )
                }
            </div>
        </>
    )
}