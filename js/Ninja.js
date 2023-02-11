class Ninja{
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    drinkSake(){
        console.log(`${this.nombre} is drinking`);
    }
}