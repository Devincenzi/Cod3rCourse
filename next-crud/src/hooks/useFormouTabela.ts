import { useState } from "react";

export default function useFormouTabela(){
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

    const exibirTabela = () => setVisivel("tabela");
    const exibirForm = () => setVisivel("form");

    return {
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirForm
    }
}