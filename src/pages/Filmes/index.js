import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from '../../services/api';

function Filmes(){
    const {id} = useParams();

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`,{
                params: {
                    api_key: "96c740117c268f6db089cb8c4b06a053",
                    language: "pt-BR",
                }
            })
        }

    }, [])

    return(
        <div>
            <h1>
                Bem vindo a Pagina de sobre Filmes;
            </h1>
        </div>
    )
}

export default Filmes;
