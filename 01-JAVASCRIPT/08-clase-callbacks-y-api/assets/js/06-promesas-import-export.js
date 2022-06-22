import { getHeroeById } from './components/getHeroeById.js'

const getHeroeId = ( id )=>{

    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{

            const hero = getHeroeById( id )

            hero ?  resolve( hero ) : reject('Lo sentimos el hero no existe')

            // if( hero ){
            //     resolve( hero )
            // }else{
            //     reject('Lo sentimos el hero no existe')
            // }

        },2000)
    })

}

getHeroeId(1)
.then( hero => {
    console.log(`El heroe es: ${hero.name}`)
})
.catch(err => console.log(err))