import './App.css'
import NotFound from './components/not-found/notfound'
import Perfil from './components/perfil-card/perfil'
import Search from './components/search-bar/searchbar'

export default function App() {


  return (
    <>
      <main>
        <section className='section_main'>
          <div className='container_title'>
              <i class="fi fi-brands-github"></i>
              <h1>Perfil <strong>Github</strong></h1>
          </div>
          <div className='container_search'>
            <Search/>
          </div>
          <div className='container_response'>
            <Perfil/>
          </div>
        </section>
      </main>
    </>
  )
}

