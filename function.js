(function(){
    alert("Now im ready");
})(); // self calling fun()


//closure function
function f1(){

    a = 10;
    b = 20;

    function f2(){
       return a + b;
    }

    c =  f2();
    alert(c);
}

f1();


