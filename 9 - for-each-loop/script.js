/**
 * Created by UCHATNU on 6/23/2016.
 */

function myFunction() {

    for(var i=0;i<arguments.length;i++){
        console.log(typeof arguments[i]);
    }
}
myFunction( "String", 1, [1,2,3], {"id":100,"name":"Nuwan"}, true );