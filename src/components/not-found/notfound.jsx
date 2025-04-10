import style from './notfound.module.css'
export default function NotFound() {

    return (
      <>
        <div className={style.container_found}>
           <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
           <p>Tente novamente.</p>
        </div>
      </>
    )
  }
  