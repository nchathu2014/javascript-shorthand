/**
 * Created by UCHATNU on 6/23/2016.
 */

function myFunction() {

    for(var obj in arguments){
        console.log(arguments[obj])
    }
}
myFunction( "String", 1, [1,2,3], {"id":100,"name":"Nuwan"}, true );