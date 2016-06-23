/**
 * Created by UCHATNU on 6/23/2016.
 */

function foo(variable1){

    if (!(variable1 == undefined)) {
        return variable1;
    } else{
        return anotherFoo();
    }

}

function anotherFoo(){
    return "NUWAN"
}

var t;
console.log(foo(t));