/**
 * Created by UCHATNU on 6/23/2016.
 * Short-Hand the If-Else and after that make the code more readable
 */

var isAvailable;

//Short But Not Readable
/*function foo(x){
    return (x>10)? isAvailable=true : isAvailable=false;
}*/

function foo(x){
    var y = x>10;
    var z = isAvailable=true;
    return (y)? z : !z;
}

console.log(foo(81));
