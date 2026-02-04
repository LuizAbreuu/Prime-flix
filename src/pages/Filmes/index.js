import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css';

import api from '../../services/api';

function Filmes(){
    const {id} = useParams();
    const navigation = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`,{
                params: {
                    api_key: "96c740117c268f6db089cb8c4b06a053",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                navigation("/", { replace:true })
                return;
            })
        }

        loadFilme();

        return() => {
            console.log("Componente desmontado");
        }

    }, [navigation, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvo = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvo.some( (filmesSalvo) => filmesSalvo.id === filme.id)

        if(hasFilme){
            alert("ja tem esse filme na sua lista!")
            return;
        }

        filmesSalvo.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvo));
        alert("Filme salvo com sucesso!");
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes....</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
                        Trailer
                    </a>
                </button>

            </div>
        </div>
    )
}

export default Filmes;
