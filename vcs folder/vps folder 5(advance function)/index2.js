alert("2th script is set")

//callback function

function myBurger(param1, param2, paramcallback)  {
alert("I eat my burger.\nit has "+ param1 +" and "+ param2 );
paramcallback();
}

// .\n itu enter

function successCallback() {
    alert("great taste");
}

function errorCallback() {
    alert("nub burger");
}

myBurger("lettuce", "cheese", successCallback);
myBurger("tomato", "bacon", errorCallback);

alert("sceond function");

function myHotdog(param3, param4, paramcallback) {
    alert("I eat my hotdog.\nit has "+ param3 +" and "+param4 );
    paramcallback();
}

function successCallback() {
    alert("great taste");
}

function errorCallback() {
    alert("nub burger");
}

myBurger("buns", "sausage", successCallback);

// anonymous function
myBurger("ice cream", "nata de coco", function (){
    alert("is this even a burger?");
});