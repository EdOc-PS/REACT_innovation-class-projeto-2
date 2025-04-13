import "./App.css";
import { useState } from "react";
import NotFound from "./components/not-found/notfound";
import Perfil from "./components/perfil-card/perfil";
import Search from "./components/search-bar/searchbar";

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
              <img src="/public/loading.gif" alt="" />
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
