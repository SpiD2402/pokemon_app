import { useEffect, useState } from "react";
import { fetchPokemonList } from "../helpers/PokemonApi.jsx";
import {DetailPokemon} from "./DetailPokemon.jsx";
import {Box, CircularProgress} from "@mui/material";

export const CardPokemon = ({name}) => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);


    const limit = 40; //

    console.log(name)
    const listPokemon = async () => {
        try {
            const data = await fetchPokemonList(limit);
            setPokemon(data) // Añade nuevos Pokémon a la lista
            setLoading(false); // Termina de cargar, cambiar a `false`
        } catch (error) {
            console.log(error);
            setLoading(false); // Asegurarse de cambiar `loading` incluso en caso de error
        }
    };

    useEffect(() => {
        listPokemon();
    }, []);

    const filteredPokemon = name
        ? pokemon.filter((poke) => poke.name.toLowerCase().includes(name.toLowerCase()))
        : pokemon;

    return (
        <div>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress size={60}/>
                </Box>
            ) : (
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 "}>
                    {filteredPokemon.length > 0 ? (
                        filteredPokemon.map((poke, index) => (
                            <div key={index} className={"mx-auto mb-3"}>
                                <DetailPokemon poke={poke}/>
                            </div>
                        ))
                    ) : (
                        <p>No Pokémon found</p>
                    )}
                </div>
            )}
        </div>

    );
};
