

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.sabiduria = 10;
    }
    speakWisdom(){
        const mensage = super.drinkSake();
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.'); 
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
}