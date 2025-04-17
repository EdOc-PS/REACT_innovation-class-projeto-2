import "./App.css";
import { useState } from "react";
import NotFound from "./components/not-found/notfound";
import Perfil from "./components/perfil-card/perfil";
import Search from "./components/search-bar/searchbar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function App() {
  const [perfilData, setPerfilData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false); 
  return (
    <>
      <main>
        <section className="section_main">
          <div className="container_title">
            <i className="fi fi-brands-github"></i>
            <h1>
              Perfil <strong>Github</strong>
            </h1>
          </div>
          <div className="container_search">
            <Search setPerfilData={setPerfilData} setNotFound={setNotFound}  setLoading={setLoading}/>
          </div>
          <div className="container_response">
          {loading ? (
              <DotLottieReact className="icon_animated"
              src="https://lottie.host/4c0499e7-95aa-4eb1-904e-d9ccff0482f0/7NweWIdu8v.lottie"
              loop
              autoplay
            />
            ) : notFound ? (
              <NotFound />
            ) : perfilData ? (
              <Perfil
                login={perfilData.login}
                bio={perfilData.bio}
                avatar={perfilData.avatar_url}
              />
            ) : (
              <></>
            )}
          </div>

        </section>
      </main>
    </>
  );
}
