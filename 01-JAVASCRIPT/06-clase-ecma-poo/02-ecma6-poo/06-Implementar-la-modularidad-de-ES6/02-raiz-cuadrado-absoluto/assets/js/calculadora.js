export default {

    raiz: (a) => {
        if( a >= 0){
            return Math.sqrt(a);
        }else{
            return `${Math.sqrt(a*(-1))}i`
        }
    },
    cuadrado: (b) => {
        return Math.pow(a,2);
    },
    absoluto: (a) => {
        return Math.abs(a);
    }
    
}