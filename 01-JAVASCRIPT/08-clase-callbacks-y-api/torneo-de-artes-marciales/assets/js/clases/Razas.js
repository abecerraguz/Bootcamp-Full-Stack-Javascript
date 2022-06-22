import Personaje from './Personajes.js'

class Saiyajin extends Personaje{

    constructor( nombre, img, poder, raza ){
        super(nombre, img, poder, raza)
    }

    /*
        PODER DE PELEA SE INCREMENTA EN UN 80%:
        1000----->100%
          X ----->80%

        x*100% = 1000*80% 

            1000*80%
        x = ------------
                100*
        x = 800

        EL PODER DE PELEA QUEDA EN : 1800
    */

    Transformacion(){
        let poder = this.getPoder();
        this.setPoder( poder * 1.8 )
    }
}


class Humano extends Personaje{
    constructor( nombre, img, poder, raza ){
        super(nombre, img, poder, raza)
    }

    /*
        PODER DE PELEA SE INCREMENTA EN UN 80%:
        1000----->100%
          X ----->20%

        x*100% = 1000*20% 

             1000*20%
        x = ------------
               100*
        x = 200

        EL PODER DE PELEA QUEDA EN : 1200
    */

    Coraje(){
        let poder = this.getPoder();
        this.setPoder( poder * 1.2 )
    }
}

export { Saiyajin, Humano }