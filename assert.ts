class Bird{
    fly(){
        console.log("pajaro");
    }
    layEggs(){
        console.log("Pone huevos");
    }
}

class Fish{

    constructor(){

    }
    swim(){
        console.log("Pez");
    }
    layEggs(){
        console.log("Pone huevos");
    }
}

function getAnimal() : Fish | Bird {
    var a : Fish = new Fish();
    return a;
}

let pet = getAnimal();
console.log(getAnimal());
pet.layEggs();

if((<Fish>pet).swim){
    (<Fish>pet).swim();
}else if ((<Bird>pet).fly){
    (<Bird>pet).fly();
}

