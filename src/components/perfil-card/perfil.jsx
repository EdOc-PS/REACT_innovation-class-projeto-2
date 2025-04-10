import style from "./perfil.module.css";
export default function Perfil() {
  return (
    <>
      <div className={style.container_perfil}>
        <img
          src="https://wendellcarvalho.com.br/wp-content/uploads/2023/07/Saiba-o-que-e-uma-pessoa-temperamental-e-como-esse-comportamento-pode-afetar-diferentes-areas-da-vida.jpg"
          alt=""
        />
        <div className={style.container_text}>
          <h1>Nome</h1>
          <p>
            Lorem ipsum dolor sit amet. Vel repellat voluptatibus aut modi
            dolorum ut vitae illum qui velit tempora. Et quod cupiditate qui
            quaerat ipsam ut aspernatur architecto non voluptatem delectus hic
            tenetur soluta sit quas deserunt aut fuga totam. Hic dolore voluptas
            et aliquid ipsa sit assumenda fugiat At nobis molestiae qui internos
            itaque qui quisquam ratione quo adipisci voluptates.
          </p>
        </div>
      </div>
    </>
  );
}
