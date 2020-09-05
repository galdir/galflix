import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';


function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor inicial');

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }

  const [values, setValues] = useState(valoresIniciais);


  return (
    <PageDefault>
      <h1>Cadastro de Categoria:  {nomeDaCategoria}</h1>

      <form style={{background: nomeDaCategoria}} onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        console.log('voce tentou enviar o form')
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ])
      }}>
        <div>
          <label>
            Nome da Categoria:
          <input
              type="text"
              value={nomeDaCategoria}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                //console.log('[nomeDaCategoria]', nomeDaCategoria);
                //console.log('[infosDoEvento.targe.value]', infosDoEvento.target.value);
                setNomeDaCategoria(infosDoEvento.target.value)
              }}
            >
            </input>
          </label>
        </div>
        <div>
          <label>
            Descrição:
          <textarea
              type="text"
              value={nomeDaCategoria}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                //console.log('[nomeDaCategoria]', nomeDaCategoria);
                //console.log('[infosDoEvento.targe.value]', infosDoEvento.target.value);
                setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />

          </label>
        </div>
        <div>
          <label>
            Cor:
          <input
              type="color"
              value={nomeDaCategoria}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                //console.log('[nomeDaCategoria]', nomeDaCategoria);
                //console.log('[infosDoEvento.targe.value]', infosDoEvento.target.value);
                setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />

          </label>
        </div>

        <button>
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;