/**
 * Created by UCHATNU on 6/23/2016.
 */

function foo(variable1){

    var cases ={
        0:doZero,
        1:doOne,
        2:doTwo,
        3:doThree
    };
    var fn = cases[variable1];
    fn ? fn() : doDefault();

/*
    if(cases[variable1]){
        cases[variable1]();
    }else{
        doDefault();
    }
*/





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

    function doDefault(){
        console.log("I am the default");
    }
}

foo(3);