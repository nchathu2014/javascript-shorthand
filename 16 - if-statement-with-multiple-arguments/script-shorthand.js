/**
 * Created by UCHATNU on 6/23/2016.
 */


function foo(type){

    var types = {

        dog:doDog,
        cat:doCat,
        parrot:doParrot,
        lion:doLion

    };

    var fn = types[type];
        fn ? fn():doElse();
}

function doDog(){
    console.log("DOG");
}

function doCat(){
    console.log("CAT");
}

function doParrot(){
    console.log("PARROT");
}

function doLion(){
    console.log("LION");
}

function doElse(){
    console.log("Do Else");
}

foo("Cat");