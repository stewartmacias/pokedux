import React from 'react';
import { Grid, Icon, Image, Label } from 'semantic-ui-react';
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants';
import './styles.css';


const PokemonCard = ({ pokemon }) => {
    return (
        <Grid.Column mobile={16} tablet={8} computer={4} >
            <div className='PokemonCard'>
                <Icon name='favorite' color={FAV_COLOR} />
                <Image centered src={pokemon.sprites.front_default} alt='Pokemon Front' />
                <p className='PokemonCard-title'>{pokemon.name}</p>
                {pokemon.types.map((type) => (<Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name}`} > {type.type.name} </Label>))}
            </div>
        </Grid.Column>
    )
}

export default PokemonCard