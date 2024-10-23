import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../store/models/characterSlice';
import {
    Grid,
    Pagination,
    Container,
    CircularProgress,
    Typography,
} from '@mui/material';
import CharacterCard from './CharacterCard';
import { RootState, AppDispatch } from '../store/store';

const CharacterList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { characters, loading, error } = useSelector((state: RootState) => state.characters);

    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 8;

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Erro: {error}</Typography>;

    const totalPages = Math.ceil(characters.length / itemsPerPage);
    const currentCharacters = characters.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Lista de Personagens
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {currentCharacters.map((character) => (
                    <Grid item key={character.name} xs={12} sm={6} md={4} lg={3}>
                        <CharacterCard character={character} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                sx={{ 
                    alignSelf: 'center', 
                    mt: 2,
                    '& .MuiPaginationItem-root': {
                        color: 'white',
                    },
                    '& .MuiPaginationItem-outlined': {
                        borderColor: 'white',
                    },
                }}
            />
        </Container>
    );
};

export default CharacterList;
