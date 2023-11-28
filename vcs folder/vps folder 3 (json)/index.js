alert("script is ready");
// ray = [....]
var JsonRestaurantMenu = [
    {
        "RestaurantName":"Mcdonalds",
        "RestaurantMenus":["Big Mac", "French Fries", "Fanta Float", ""]
    },{
       "RestaurantName":"Burger King",
       "RestaurantMenus":["Whooper Jr.", "Black Pepper Beef Burger", "Lemon Tea", ""] 
    },{
        "RestaurantName":"Domino Pizza",
        "RestaurantMenus":["Meatzza", "Cola-Cola", "American Classic Cheeseburger", ""]
    },{
        "RestaurantName":"Pepper Lunch",
        "RestaurantMenus":["Salmon Pepper Rice", "Beef Pepper Rice", "Blackcurrant", ""]
    },{}];
var IndexRestaurant=4;
var IndexMenus=3;

function randomizeRestaurant(){
    do {
    IndexRestaurant = Math.floor((Math.random() * 4));
    } while(IndexRestaurant == 4)
    document.getElementById("RestaurantResult").innerHTML = JsonRestaurantMenu[IndexRestaurant].RestaurantName;
}

function randomizeMenus(){
    do {
    IndexMenus = Math.floor((Math.random() * 3));
    } while(IndexMenus == 3)
    document.getElementById("menuResult").innerHTML = JsonRestaurantMenu[IndexRestaurant].RestaurantMenus[IndexMenus];
}
