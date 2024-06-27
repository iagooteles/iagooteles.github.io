import "./error.css";
import { Link } from 'react-router-dom';
import error404 from './404.png'

export default function Error() {
  return(
    <>
      <div className="container-error">
        <img src={error404} alt="pagina nao encontrada" />
        <h1>Página não encontrada :(</h1>
        <Link to="/">
          Voltar para página de Login.
        </Link>
      </div>
    </>
  )
}