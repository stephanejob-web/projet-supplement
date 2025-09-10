import "./App.css";
import Cards from "./components/Cards.tsx";

function App() {
  return (
    <div className="m-10">
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

      <Cards
        leftItems={[
          "Gratuit avec nombreuses ressources",
          "Lecture fluide et intuitive",
          "Synchronisation multi-appareils",
        ]}
        rightItems={[
          "Accès à de multiples versions bibliques",
          "Notes et surlignages personnalisés",
          "Outils d’étude avancés",
          "Extensible avec des Bibles d’étude et commentaires",
        ]}
        color="bg-emerald-600"
        url="https://i0.wp.com/www.proclaimanddefend.org/wp-content/uploads/2023/10/OliveTrees.png?fit=994%2C560&ssl=1"
        alt="Illustration Olive Tree Bible Study"
      />
      <Cards
        leftItems={[
          "Gratuit et sécurisé",
          "Confidentialité garantie",
          "Disponible sur tous les appareils",
        ]}
        rightItems={[
          "Chiffrement de bout en bout",
          "Protection contre le tracking",
          "Interface moderne et intuitive",
          "Extensible avec Proton Drive, VPN et Calendar",
        ]}
        color="bg-violet-700"
        url="https://cdn.next.ink/inpactv7/data-next/images/bd/wide-linked-media/12221.jpg"
        alt="Illustration Proton Mail"
      />
    </div>
  );
}

export default App;
