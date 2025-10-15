import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">ANDRIANARIMALALA Andy Anthony</span>
            <br />
            <b>Développeur Web & Mobile</b>
            <br />
            Antananarivo, Madagascar
            <br />
            <b>Email :</b> andy7andria@gmail.com | <b>Tél :</b> 034 03 640 69
            <br />
            <b>GitHub :</b>{" "}
            <a
              href="https://github.com/andyandria7"
              target="_blank"
              rel="noreferrer"
            >
              github.com/andyandria7
            </a>
            <br />
            <br />

            <h3 className="purple">🎓 Formation</h3>
            <ul>
              <li>
                <b>2020 - 2023 :</b> Licence en Informatique, Risques et
                Décisions – <b>Université ESMIA</b>
              </li>
              <li>
                <b>2023 - 2024 :</b> Formation en Développement Web –{" "}
                <b>HOPES Formation</b> (Antsahavola)
              </li>
              <li>
                <b>2025 :</b> Formation en Développement Mobile (Java & React
                Native) – <b>Nir’Info</b> (Ampefiloha)
              </li>
            </ul>

            <h3 className="purple">💼 Expériences Professionnelles</h3>
            <ul>
              <li>
                <b>2022 - 2023 :</b> Stagiaire Développeur de Jeux –{" "}
                <b>Infinity Creative</b> (Antsakaviro)
                <br />
                <i>C#, Unity, Krita</i>
              </li>
              <li>
                <b>2023 - 2024 :</b> Stagiaire Développeur Web Full-Stack –{" "}
                <b>Hulsia</b> (Tsiadana)
                <br />
                <i>Laravel, Vue.js, Inertia.js</i>
              </li>
              <li>
                <b>2025 :</b> Stagiaire Développeur Mobile –{" "}
                <b>Nir’Info</b> (Ampefiloha)
                <br />
                <i>React Native (Expo), CodeIgniter 4, JWT</i>
              </li>
            </ul>

            <h3 className="purple">🧩 Projets Académiques & Personnels</h3>
            <ul>
              <li>
                <b>React Native :</b> Puzzle – Application mobile éducative
              </li>
              <li>
                <b>CodeIgniter 4 + ReactJS + React Native :</b> Application
                d’investissement mobile avec dashboard web
              </li>
              <li>
                <b>Laravel :</b> Blog avec intelligence artificielle – Site
                e-commerce
              </li>
              <li>
                <b>Laravel + Vue.js + Inertia.js :</b> Application de commande
                de pizza
              </li>
              <li>
                <b>Vue.js :</b> Jeu de Tic Tac Toe – Application de quiz
              </li>
              <li>
                <b>Java :</b> Examen – Gestion de stock – Générateur de requêtes
                (vente de voiture)
              </li>
              <li>
                <b>Android (Java) :</b> Application de vente en ligne (PHP + App
                mobile)
              </li>
            </ul>

            <h3 className="purple">🛠️ Compétences Techniques</h3>
            <p>
              <b>Langages :</b> JavaScript, PHP, Java, C#
              <br />
              <b>Frameworks :</b> Laravel, CodeIgniter 4, Vue.js, React.js,
              React Native
              <br />
              <b>Outils :</b> Git/GitHub, MySQL, TailwindCSS, Bootstrap, Figma
            </p>

            <h3 className="purple">🎯 Centres d’intérêt</h3>
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Musique
            </li>
            <li className="about-activity">
              <ImPointRight /> Films, séries et animés
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
