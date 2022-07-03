import Cliente from "./Cliente";

interface TabelaProps{
    clientes: Cliente[];
}

export default function Tabela(props: TabelaProps){
    function renderizaCabecalho(){
        return (
            <tr>
                <td>ID</td>
                <td>NOME</td>
                <td>IDADE</td>
                <td>AÇÕES</td>
            </tr>
        );
    }

    function renderizaCorpo(){
        if(props.clientes.length === 0)
            return ( <tr><td>Nenhum cliente encontrado.</td></tr> );

        return props.clientes.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                    <td>ações</td>
                </tr>
            )
        });
    }

    return (
        <table className="w-full">
            <thead className="">
                {renderizaCabecalho()}
            </thead>
            <tbody>
                {renderizaCorpo()}
            </tbody>
        </table>
    );
}