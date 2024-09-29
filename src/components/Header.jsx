import { TextField} from "@mui/material";

export const Header = ({value,targetFunc}) => {
    return (
        <div>
            <div className={"mb-5"}>
                <div className={"grid grid-cols-12"}>
                    <div className={"col-span-12  sm:col-span-5  flex items-center py-2"}>
                        <h1 className={"text-4xl  text-yellow-500 font-bold tracking-widest "}>Pokemon</h1>
                    </div>
                    <div className={"col-span-12 sm:col-span-7 "}>
                        <div className={"flex  items-center justify-end gap-5 py-2"}>
                            <TextField className={"w-96"} id="outlined-basic" label="Search Pokemon"
                                       value={value}
                                       onChange={targetFunc}
                                       variant="outlined"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}
