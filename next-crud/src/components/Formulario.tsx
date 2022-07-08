import { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

interface FormularioProps{
    cliente: Cliente;
    clienteMudou?: (cliente: Cliente) => void;
    cancelado: () => void;
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? "");
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    const entradaid = <Entrada readonly textolabel='ID' valor={id} tipo='text' />

    return (
        <div>
            {id ? entradaid : ""}
            <Entrada textolabel='Usuário' valor={nome} valorMudou={setNome} />
            <Entrada textolabel='Idade' valor={idade} tipo='number' valorMudou={setIdade}/>

            <div className='mt-3 text-right'>
                <Botao onclick={props.cancelado} cor='bg-gray-500 hover:bg-gray-700 active:bg-gray-800'>Cancelar</Botao>
                <Botao onclick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} classes='ml-2 mr-2' cor='bg-blue-500 hover:bg-blue-600 active:bg-blue-800'>Enviar</Botao>
            </div>
        </div>
    );
}