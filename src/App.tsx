import './App.css'
import Header from "./components/Header.tsx";
import Cards from "./components/Cards.tsx";

function App() {

    return (
        <div>
            <Cards
                title="Gratuit et open source"
                title1="compatibilite universelle"
                title2="multiplateforme"
                title3="fonctionnalités avancées"
                color="bg-amber-500"
                title4="ler et performant"
                title5="Personnalisable"
                title6="extensible"
                url="https://cdn.lesnumeriques.com/optim/tutorial/23/237366/86982211-comment-convertir-une-video-youtube-en-mp3-avec-vlc__w1280.jpg"
            />
        </div>
    )
}

export default App
