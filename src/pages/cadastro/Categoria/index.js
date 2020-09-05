import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);// teste é a primeira categoria  
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values, // pega tudo que ja tem dentro de values e incrementa com a proxima linha
      [chave]: valor, // caso a chave nao exista no objeto ela sera criada por causa dos colchetes e o valor ser associado
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:  {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        //console.log('voce tentou enviar o form')
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais);
      }}>


        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
        label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
        label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />


        {/* <div>
          <label>
            Descrição:
          <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />

          </label>
        </div> */}
        {/*        <div>
          <label>
            Cor:
          <input
              type="color"
              name="cor"
              value={values.color}
              onChange={handleChange}
            />

          </label>
        </div> */}

        <button>
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
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