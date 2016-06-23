/**
 * Created by UCHATNU on 6/23/2016.
 */

function foo(variable1){

    switch (variable1){
        case 0:doZero();break;
        case 1:doOne();break;
        case 2:doTwo();break;
        case 3:doThree();break;
        default:console.log("default")

    };

    function doZero(){
        console.log("0000000000000");
    }

    function doOne(){
        console.log("1111111111111");
    }

    function doTwo(){
        console.log("2222222222222");
    }

    function doThree(){
        console.log("3333333333333");
    }

}

foo(2);