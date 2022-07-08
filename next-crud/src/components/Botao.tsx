interface BotaoProps{
    cor?: string;
    children: any;
    classes?: string;
    onclick?: () => void;
}

export default function Botao(props: BotaoProps){
    return (
        <button onClick={props.onclick} className={`bg-green-600 text-white rounded-md p-2 hover:shadow-md ${props.cor} ${props.classes}`}>
            {props.children}
        </button>
    )
}