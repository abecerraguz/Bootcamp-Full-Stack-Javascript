class Personaje {

    constructor( nombre, img, poder, raza ){
        
        let _nombre = nombre;
        let _img = img;
        let _poder = poder;
        let _raza = raza

        this.getNombre = () => _nombre;
        this.getImg = () => _img;
        this.getPoder = () => _poder;
        this.setPoder = (nuevo_Poder) => _poder = nuevo_Poder;
        this.getRaza = () => _raza;

    }

    get Nombre(){
        return this.getNombre();
    }

    get Img(){
        return this.getImg();
    }

    get Poder(){
        return this.getPoder();
    }

    set Poder(nuevo_Poder){
        this.setPoder(nuevo_Poder);
    }

    get Raza(){
        return this.getRaza();
    }
}

export default Personaje