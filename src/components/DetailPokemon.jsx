import {
    Card,
    CardContent,
    Typography,
    Chip,
    Box,
    LinearProgress, CardMedia,
} from "@mui/material";
import React, {memo} from "react";


export const DetailPokemon =memo(({ poke }) => {
    return (
        <Card  sx={{ width:"22rem", height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                className="mx-auto"
                component="img"
                image={poke.image}
                alt={poke.name}
                sx={{

                    p: 2,
                    width: "15rem",
                    height: "15rem",
                    objectFit: "contain",
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
                    {poke.name}
                </Typography>
                <Box mb={2}>
                    <Typography variant="subtitle1" gutterBottom>
                        Types:
                    </Typography>
                    {poke.types?.map((type, index) => (
                        <Chip
                            key={index}
                            label={type.type.name}
                            size="small"
                            sx={{ mr: 0.5, mb: 0.5, textTransform: 'capitalize' }}
                        />
                    ))}
                </Box>
                <Box mb={2}>
                    <Typography variant="subtitle1" gutterBottom>
                        Abilities:
                    </Typography>

                    {poke.abilities?.map((ability, index) => (
                        <Chip
                            key={index}
                            label={ability.ability.name}
                            variant="outlined"
                            size="small"
                            sx={{ mr: 0.5, mb: 0.5, textTransform: 'capitalize' }}
                        />
                    ))}
                </Box>
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Stats:
                    </Typography>
                    {poke.stats.map((stat, index) => (
                        <Box key={index} mb={1}>
                            <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                                {stat.stat.name}: {stat.base_stat}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={(stat.base_stat / 255) * 100}
                                sx={{ height: 8, borderRadius: 5 }}
                            />
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
});
