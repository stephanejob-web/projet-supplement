import "./App.css";
import Cards from "./components/Cards.tsx";

function App() {
  return (
    <div>
      <Cards
        leftItems={[
          "Gratuit et open source",
          "Compatibilité universelle",
          "Multiplateforme",
        ]}
        rightItems={[
          "Fonctionnalités avancées",
          "Léger et performant",
          "Personnalisable",
          "Extensible",
        ]}
        color="bg-amber-500"
        url="https://cdn.lesnumeriques.com/optim/tutorial/23/237366/86982211-comment-convertir-une-video-youtube-en-mp3-avec-vlc__w1280.jpg"
        alt="Illustration VLC"
      />
    </div>
  );
}

export default App;
