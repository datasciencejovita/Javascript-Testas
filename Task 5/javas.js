/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintin5.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

var items = 
    [
            { 
            "id": "1", 
            "name": "John Smith", 
            "age": 20, 
            "hasDog": true 
        },
            { 
            "id": "2", 
            "name": "Ann Smith", 
            "age": 24, 
            "hasDog": false 
        },
        { 
            "id": "3", 
            "name": "Tom Jones", 
            "age": 31, 
            "hasDog": true 
        },
        { 
            "id": "4", 
            "name": "Rose Peterson", 
            "age": 17, 
            "hasDog": false 
        },
        { 
            "id": "5", 
            "name": "Alex John", 
            "age": 25, 
            "hasDog": true 
        },
        { 
            "id": "6", 
            "name": "Ronald Jones", 
            "age": 63, 
            "hasDog": true 
        },
        { 
            "id": "7", 
            "name": "Elton Smith", 
            "age": 16, 
            "hasDog": true 
        },
        { 
            "id": "8", 
            "name": "Simon Peterson", 
            "age": 30, 
            "hasDog": false 
        },
        { 
            "id": "9", 
            "name": "Daniel Cane", 
            "age": 51, 
            "hasDog": true 
        }
      ];

var adults = items.filter(function(item) {
return item.age > 18
})
.map(function(item){
    return item.name;
});

console.log(adults)


var dogs = items.filter(function(item) {
    return item.hasDog == true
    })
    .map(function(item){
        return item.name;
    });
    
    console.log(dogs)

// žinau, kad negalima kode palikt console.log, palikau tik dėl lengvesnio funkcijos patikrinimo






