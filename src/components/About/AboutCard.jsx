import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis{" "}
            <span className="purple">
              ANDRIANARIMALALA Andy Anthony, développeur web spécialisé dans
              Vuejs et Laravel
            </span>
            . Titulaire d'une{" "}
            <span className="purple">
              licence en informatique, Risque et Décision
            </span>
            , de l'Université ESMIA à Mahamasina, et
            <span className="purple"> diplômé en développement web</span> de
            HOPES Formation à Andavamamba Anjezika.
            <br />
            <br />
            En 2019, j'ai obtenu mon{" "}
            <span className="purple">Baccalauréat série Technique</span> à
            l'ESCA, Antanimena, ainsi que mon
            <span className="purple"> diplôme de BEP</span> à Ampefiloha.
            <br />
            En 2021, j'ai commencé mon parcours dans le développement web en
            apprenant <span className="purple">les bases du web</span>, ce qui
            m’a permis de poser les fondations de mes compétences actuelles.
            <br />
            La même année, j’ai également effectué un{" "}
            <span className="purple">
              stage en tant que développeur junior à l'Association Infinity
              Creative
            </span>
            , où j’ai participé à un projet de{" "}
            <span className="purple">
              développement de jeux en C# avec Unity et Krita
            </span>
            .
            <br />
            En 2022, j'ai réalisé un{" "}
            <span className="purple">stage chez Hulsia à Tsiadana</span>,
            contribuant activement au <span className="purple">
               développement d'un site web avec Laravel
            </span>
            .
            <br />
            En 2024, j’ai poursuivi mon apprentissage avec une{" "}
            <span className="purple">
              formation en développement Java et mobile chez Nir'Info
            </span>{" "}
            à Ampandrana, où j’ai développé plusieurs projets, dont un{" "}
            <span className="purple">
              générateur de requêtes (vente de voiture)
            </span>
            , une{" "}
                 <span className="purple">application de gestion de stock</span> et
            un système <span className="purple">d'examen en Java</span>.
            <br />
            <br />
            Voici quelques-uns des{" "}
            <span className="purple">
              projets personnels et académiques
            </span>{" "}
            que j’ai réalisés :
            <br />
            <strong className="purple">JAVA :</strong> Examen – Gestion de stock
            – Générateur de requête (vente de voiture)
            <br />
            <strong className="purple">VUEJS :</strong> Jeu de Tic Tac Toe –
            Application de quiz
            <br />
            <strong className="purple">LARAVEL :</strong> Blog utilisant
            l’intelligence artificielle – Site e-commerce
            <br />
            <strong className="purple">
              LARAVEL + VUEJS + INERTIAJS :
            </strong>{" "}
            Application de commande de pizza
            <br />
            <strong className="purple">ANDROID :</strong> Application de{" "}
            <span className="purple">vente en ligne</span> (site web PHP et
            application mobile Java)
            <br />
            <br />
            Je suis passionné par l'apprentissage continu et toujours prêt à
            relever de nouveaux défis techniques pour perfectionner mes
            compétences.
            <br />
            <br />
            Mes loisirs !!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Film, serie, anime
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
