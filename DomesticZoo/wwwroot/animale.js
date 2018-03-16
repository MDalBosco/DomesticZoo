class Animal {
    constructor(name, color, toys, birth) {

        this.name = name;
        this.color = color;
        this.birth = birth;
        this.toys = toys;
      
    }

}
    class Dog extends Animal {
        constructor(name, color, toys, birth,obj_padrone) {

            super(name, color, toys, birth);

            this.weight = 3;
            this.owner = obj_padrone;
    }
    
}

    class Cat extends Animal {
        constructor(name, color, toys, birth,obj_padrone) {
            
            super(name, color, toys, birth);

            this.weight = 1;
            this.owner = obj_padrone;
        }
        
    }   

    class Owner {
        constructor(name,address,telephone)
        {
            this.name = name;
            this.adress = address;
            this.telephone = telephone;
        }
    }

//Creazione anagrafica animali
    
class SituationBox {
    constructor(date) {
        this.date = date;
        this.remaining_space = 3;
        this.array_animals = [];
    }
    
    
}

class Box {
    constructor() {
        this.box_array =[];
    }
   
    get_Box_Date(date) {

        if (this.box_array.length == 0) {
            var situation_box = new SituationBox();
            situation_box.date = date;
            this.box_array.push(situation_box);
            return situation_box;
        }
        else
        {
          
                if (this.box_array.some(x => x.date == date))
                {
                    var situation_box = this.box_array.filter(x => x.date == date);
                    return situation_box[0];
                }
                
                else {
                    var situation_box = new SituationBox();
                    situation_box.date = date;
                    this.box_array.push(situation_box);
                    return situation_box;
                }
         
        }
        
    }

    addAnimal(animal,situation_box)
    {
        if (situation_box.remaining_space >= animal.weight) {
            situation_box.array_animals.push(animal);
            situation_box.remaining_space -= animal.weight;

            console.log(animal.name);
            
            GetCell().innerHTML = animal.name;
            GetCell().style.backgroundColor = animal.color;
        }
        else
        {
            alert("Impossibile inserire altri animali");
            
        }
       
     }
    
} 

