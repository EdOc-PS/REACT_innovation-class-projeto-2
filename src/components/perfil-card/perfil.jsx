import style from "./perfil.module.css";
export default function Perfil(props) {
  return (
    <>
      <div className={style.container_perfil}>
        <img
          src={props.avatar}
          alt=""
        />
        <div className={style.container_text}>
          <h1>{props.login}</h1>
          <p>
            {props.bio}
          </p>
        </div>
      </div>
    </>
  );
}
