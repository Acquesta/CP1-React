import Card from '../card'
import './style.css'

export default function Cards(){
    return(
        <>
            <div className="cards">
                <Card
                    titulo = 'Youtube'
                    descricao = 'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.'
                    icon = '../../../public/iconYT.png'
                    numero = '01'
                    cor = '#F1C2B0'
                />
                <Card
                    titulo = 'Tiktok'
                    descricao = 'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.'
                    icon = '../../../public/iconTTk.png'
                    numero = '02'
                    cor = '#F9EB98'
                />
                <Card
                    titulo = 'FaceBook'
                    descricao = 'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.'
                    icon = '../../../public/iconFC.png'
                    numero = '03'
                    cor = '#C0D9DD'
                />
                <Card
                    titulo = 'Instagram'
                    descricao = 'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.'
                    icon = '../../../public/iconIG.png'
                    numero = '04'
                    cor = '#6975E8'
                />
            </div>
        </>
    )
}