function fibonacci(num){
    if (num <= 1) {
        console.log("sudah sampai akhir, return 1");
        return 1;
    }
    console.log("fibonacci("+num-1+")+fibonacci("+num-2+")");
    return fibonacci(num - 1) + fibonacci(num - 2);
}


fibonacci(50);

var ultah = 18;
var kalimatSusah = "Dirgaharyu Indonesia ke-" + ultah-1 + ",merdeka";