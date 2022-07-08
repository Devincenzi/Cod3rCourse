import ColecaoCliente from "../firebase/bd/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../firebase/ClienteRepositorio";
import { useEffect, useState } from "react";
import useFormouTabela from "./useFormouTabela";

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente();

    const {tabelaVisivel, exibirForm, exibirTabela} = useFormouTabela();

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);
    const [busca, setBusca] = useState();
    
    useEffect(listarClientes, []);

    function listarClientes(){
      repo.obterTodos().then(listaClientes => {
        setListaClientes(listaClientes);
        exibirTabela();
      });
    }
  
    function selecionarCliente(cliente: Cliente){
      setCliente(cliente);
      exibirForm();
    }
  
    function cancelarCliente(){
      exibirTabela();
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio());
      exibirForm();
    }
    
    async function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente);
      listarClientes();
    }
    
    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente);
      listarClientes();
    }

    async function consultaCliente(consulta: any){
        setBusca(consulta);
        repo.consultar(consulta).then(listaClientes => setListaClientes(listaClientes));
    }

    return {
        cliente,
        listaClientes,
        tabelaVisivel,
        busca,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        listarClientes,
        cancelarCliente,
        consultaCliente
    }
}