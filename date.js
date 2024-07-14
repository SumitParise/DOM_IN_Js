Time = () =>{
    document.getElementById('op').innerHTML=new Date();
    
}


showTime = () => it =  setInterval((Time),1000);

 stopTime = () =>  clearInterval(it);


 delay = () =>{
     setTimeout(()=>{
        alert("sorry for late")
    },5000);
 }


 function f1(){

    a = 10;
    b = 20;

    function f2(){
        a + b;
    }

    c =  f2();
    console.log(c);
}

f1();