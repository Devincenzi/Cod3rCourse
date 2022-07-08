interface EntradaProps{
    textolabel: string;
    tipo?: 'text' | 'number';
    valor: any;
    readonly?: boolean;
    placeholder?: string;
    valorMudou?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps){
    return (
        <div className="flex flex-col">
            <label>{props.textolabel}</label>
            <input type={props.tipo ?? 'text'} 
                value={props.valor} 
                readOnly={props.readonly} 
                className={`p-2 border border-indigo-500 rounded-lg ${props.readonly ? "bg-gray-100" : ""}`}
                onChange={e => props.valorMudou?.(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>
    );
}