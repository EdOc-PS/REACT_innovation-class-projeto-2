import { useState } from "react";
import style from "./seaarchbar.module.css";
import { GET } from "../../service/get";

export default function Search({ setPerfilData, setNotFound, setLoading }) {
  const [perfil, setPerfil] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    try {
      const result = await GET(perfil);
      if (result.message === "Not Found") {
        console.error("Erro na busca do perfil:", result.message);
        setNotFound(true);
      } else {
        setPerfilData(result);
        setNotFound(false);
      }
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container_search}>
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        value={perfil}
        onChange={(e) => setPerfil(e.target.value)}
      />
      <button className={style.btn_search} onClick={handleSearch}>
        <i className="fi fi-rr-search"></i>
      </button>
    </div>
  );
}
