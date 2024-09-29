import {CardPokemon} from "./components/CardPokemon.jsx";
import {Header} from "./components/Header.jsx";
import {useState} from "react";

export const PokemonMain = () => {
    const [input,setInput] = useState("");

    const  targetInput=(event)=>{
        setInput(event.target.value)
    }

    return (
        <div className={"py-5 px-12 "}>
            <Header value={input} targetFunc={targetInput} />
            <CardPokemon name={input}/>
        </div>


    )
}
