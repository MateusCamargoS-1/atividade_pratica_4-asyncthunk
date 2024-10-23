import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface Character {
    name: string;
    image: string;
    wizard: boolean;
    house?: string;
}

interface CharacterCardProps {
    character: Character;
}

const CharacterCard = ({ character }:CharacterCardProps) => {
    return (
        <Card sx={{ maxWidth: 345, m: 1 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={character.image}
                    alt={character.name}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Bruxo: {character.wizard ? 'Sim' : 'Não'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Casa: {character.house || 'Não Possui'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CharacterCard;
