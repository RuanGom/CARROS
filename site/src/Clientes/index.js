
import './index.scss';
import { Link } from 'react-router-dom';

function Clientes() {
  return (
    <div className="page2">
      <aside>
        <img className='logo' src='/assets/images/logo.png'></img>
        <div>
          <h1>Elite</h1>
          <h1>Wheelz</h1>
        </div>

        <div>
          <img className='icons' src='/assets/images/1.svg'></img>
          <a>Home</a>
        </div>

        <div className='hover'>
          <img className='icons' src='/assets/images/2.png'></img>
          <Link to={'/'}>Clientes</Link>
        </div>

        <div>
          <img className='icons' src='/assets/images/3.png'></img>
          <Link to={'/Carros'}>Veículos</Link>
        </div>

        <div>
          <img className='icons' src='/assets/images/4.png'></img>
          <Link to={'/Locação'}>Locações</Link>
        </div>

      </aside>


      <div className='cont'>
        <header>
          <h2>Olá, que bom que você voltou!</h2>
          <h1>A</h1>
        </header>


        <h1>Controle de Clientes</h1>

        <nav>
          <h1>Novo Cliente</h1>

          <div>
            <label>Nome</label>
            <input></input>
          </div>

          <div>
            <label>Email</label>
            <input></input>
          </div>

          <div>
            <label>Telefone</label>
            <input></input>
          </div>

          <div>
            <label>CPF</label>
            <input></input>
          </div>

          <div>
            <label>CNH</label>
            <input></input>
          </div>

          <button>Salvar</button>

        </nav>

        <nav>
          <h1>Lista de Clientes</h1>

          <nav>
            <div className='listarclientes'>
              <label>Nome</label>
              <input></input>

            </div>
            <button className='lupa'>
              <img src='/assets/images/lupa.jpg'></img>
            </button>
          </nav>

          <table>
            <thead>
              <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Email</th>
              <th></th>
              </tr>
            </thead>
            <tbody>

            <tr>
              <td>Bruno de Oliveira</td>
              <td>123.123.123-00</td>
              <td>(11) 9999-4444</td>
              <td>bruno@gmail.com</td>
              <img src='/assets/images/lixo.svg'></img>
              <img src='/assets/images/edit.svg'></img>
            </tr>

            <tr>
              <td>Helen Bernardo de Oliveira</td>
              <td>123.123.123-00</td>
              <td>(11) 9999-4444</td>
              <td>helen@gmail.com</td>
              <img src='/assets/images/lixo.svg'></img>
              <img src='/assets/images/edit.svg'></img>
            </tr>

            <tr>
              <td>Felipe Rocha Negro</td>
              <td>123.123.123-00</td>
              <td>(11) 9999-4444</td>
              <td>felipe@gmail.com</td>
              <img src='/assets/images/lixo.svg'></img>
              <img src='/assets/images/edit.svg'></img>
            </tr>

            <tr>
              <td>Luiz Fernando da Silva</td>
              <td>123.123.123-00</td>
              <td>(11) 9999-4444</td>
              <td>luiz@gmail.com</td>
              <img src='/assets/images/lixo.svg'></img>
              <img src='/assets/images/edit.svg'></img>
            </tr>

            </tbody>
          </table>


        </nav>




      </div>

    </div>
  );
}

export default Clientes;
