import superHeroe  from '../../../data/heroes.js'

export const getHeroById = (id) =>{
    return superHeroe.find( hero => hero.id === id )
}
