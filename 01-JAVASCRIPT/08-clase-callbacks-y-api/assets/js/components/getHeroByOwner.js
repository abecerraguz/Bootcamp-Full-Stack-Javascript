import superHeroe  from '../../data/heroes.js'

export const getHeroByOwner = ( owner ) => {
    return superHeroe.filter( hero => hero.owner === owner )
}