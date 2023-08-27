import Footer from "./utils/Footer";
import Header from "./utils/Header";
import "./Home.css";
import foto from "../assets/foto.jpg";
const SUMMARY_TEXT='Привет! Меня зовут Владимир. Я живу в городе Минске. Я долгое время работал в сфере медицины и спорта. Несколько лет назад я начал обучаться программированию. Изначально это был язык java, позже я начал учиться на frontend разработчика. На данный момент я junior frontend developer. В этом проекте я описал свое обучение и мои проекты. '

function Home() {
  return (
    <>
      <Header />
      <Footer />
      <div className="content">
        <div className="content-box">
          <div className="foto-frame">
            <img className="foto" src={foto} alt="photo" />
           
          </div>
          <h2>Uladzimir Kazantsau</h2>
          <h3>front-end developer</h3>
        </div>
        <div className="content-box">
          <h3>Обо мне:</h3>
          {SUMMARY_TEXT}</div>
      </div>
    </>
  );
}

export default Home;
