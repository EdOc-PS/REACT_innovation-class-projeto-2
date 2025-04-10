import style from './seaarchbar.module.css'
export default function Search() {

    return (
      <>
        <div className={style.container_search}>
            <input type="text" name="" id="" placeholder='Digite um usuário do Github'/>
            <button className={style.btn_search}><i class="fi fi-rr-search"></i></button>
        </div>
      </>
    )
  }
  