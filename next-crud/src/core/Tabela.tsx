import { isUndefined } from "util";
import { IconeEditar, IconeExcluir } from "../components/Icones";
import Cliente from "./Cliente";

interface TabelaProps{
    clientes: Cliente[];
    clienteSelecionado?: (cliente: Cliente) => void;
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;

    function renderizaCabecalho(){
        return (
            <tr>
                <td className="p-2">ID</td>
                <td className="p-2">NOME</td>
                <td className="p-2">IDADE</td>
                {exibirAcoes ? <td className="text-center p-2">AÇÕES</td> : ""}
            </tr>
        );
    }

    function renderizaCorpo(){
        if(props.clientes.length === 0)
            return ( <tr><td colSpan={4} className='text-center'>Nenhum cliente encontrado.</td></tr> );

        return props.clientes.map((cliente, i) => {
            let cssLinha = i % 2 === 0 ? "bg-indigo-200" : "bg-indigo-100";
            return (
                <tr key={cliente.id} className={cssLinha}>
                    <td className="px-2 py-1">{cliente.id}</td>
                    <td className="px-2 py-1">{cliente.nome}</td>
                    <td className="px-2 py-1">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : ""}
                </tr>
            )
        });
    }

    function renderizarAcoes(cliente: Cliente){
        const buttonEditar = <button onClick={() => props.clienteSelecionado(cliente)} className="rounded-full hover:bg-indigo-50 p-1 m-1 text-green-600">{IconeEditar}</button>
        const buttonExcluir = <button onClick={() => props.clienteExcluido(cliente)} className="rounded-full hover:bg-indigo-50 p-1 m-1 text-red-500">{IconeExcluir}</button>
        
        return (
            <td className="text-center px-2 py-1">
                {props.clienteSelecionado ? buttonEditar : ""}
                {props.clienteExcluido ? buttonExcluir : ""}

                {/* <button className="rounded-full hover:bg-indigo-50 p-1 m-1 text-green-600">{IconeEditar}</button> */}
                {/* <button className="rounded-full hover:bg-indigo-50 p-1 m-1 text-red-500">{IconeExcluir}</button> */}
            </td>
        );
    }

    return (
        <table className="w-full rounded-lg overflow-hidden">
            <thead className="font-bold bg-gradient-to-t from-indigo-400 to-indigo-500">
                {renderizaCabecalho()}
            </thead>
            <tbody>
                {renderizaCorpo()}
            </tbody>
        </table>
    );
}