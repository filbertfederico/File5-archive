//fucntion declaration
function add(firstNumber, secondNumber){
    var result = firstNumber + secondNumber;
    alert(result);
    return result;
}

//calling function
// add(100,20);
// var hasil = add(10, 2);
//alert(hasil)

// var hasil2 = add(100, add(200, 55));
//alert(hasil2);

// var hasil3 = add(add(1, 2), add(3, 4));
//alert(hasil3);


function doSomething(paramKalimat){
    return paramKalimat;
}
//declaration
function makeGreetings(paramKalimat){
    var finalGreeting = "hello" + paramKalimat;
    return finalGreeting;
}

alert(makeGreetings("students"));

var kalimatAkhir = makeGreetings(makeGreetings("loop"));
alert (kalimatAkhir);