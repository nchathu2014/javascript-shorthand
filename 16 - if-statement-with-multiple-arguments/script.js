/**
 * Created by UCHATNU on 6/23/2016.
 */

function foo(type){

    if(type === "dog"){
        doDog();
    }else if(type === "cat"){
        doCat();
    }else if(type === "parrot"){
        doParrot();
    }else if(type === "lion"){
        doLion();
    }else{
        doElse();
    }

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


foo("cat");