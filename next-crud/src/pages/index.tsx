import Layout from "../components/Layout";
import Cliente from "../core/Cliente";
import Tabela from "../core/Tabela";

const listaClientes = [
    new Cliente('Ana', 31, '1'),
    new Cliente('Júlia', 27, '2'),
    new Cliente('Clara', 19, '3'),
    new Cliente('Guilherme', 48, '4'),
    new Cliente('Daniels', 24, '5')
];

export default function Home() {
  return (
    <div className='flex justify-center h-screen items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white'>
      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={listaClientes}></Tabela>
      </Layout>
    </div>
  )
}
