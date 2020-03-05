"use strict";


var city1 = {};
city1.name = "ГородN";
city1.population = 10e6;

var city2 = {name: "ГородМ", population: 10e6};

city1.getName = function (){
    return city1.name;
}

city2.getName = function(){
    return city2.name;
}



console.log(city1.getName());
console.log(city2.getName());

city1.exportStr = function(){
    for(let key in city1){
        if(typeof city1[key] == 'function'){
            continue;
        }
        console.log(`${key} = ${city1[key]}`);
    }
}

city2.exportStr = function(){
    for(let key in city2){
        if(typeof city2[key] == 'function'){
            continue;
        }
        console.log(`${key} = ${city2[key]}`);
    }
}

city1.exportStr();
city2.exportStr();