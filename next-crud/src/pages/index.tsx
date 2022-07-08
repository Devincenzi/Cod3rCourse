import Botao from "../components/Botao";
import Entrada from "../components/Entrada";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../core/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const { selecionarCliente, excluirCliente, listarClientes, novoCliente, salvarCliente, cancelarCliente, consultaCliente, cliente, listaClientes, tabelaVisivel, busca } = useClientes();

  return (
    <div className='flex justify-center h-screen items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white'>
      <Layout titulo='Cadastro Simples'>

        {tabelaVisivel ?
          <>
            <div className="flex justify-between mb-2">
              <Entrada textolabel="" valor={busca} placeholder={"Busca..."} valorMudou={consultaCliente} />
              <Botao onclick={novoCliente} cor={'hover:bg-green-700 active:bg-green-900'}>Novo Cliente</Botao>
            </div>

            <Tabela clientes={listaClientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}/>
          </>
          : <Formulario cliente={cliente} cancelado={cancelarCliente} clienteMudou={salvarCliente}/>}
      </Layout>
    </div>
  )
}
