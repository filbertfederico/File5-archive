alert("lol");
// fungsi id utk nyambungin ke script 
//loop

var count =0;
while(count<5){
    alert("pre calculation" + count);
    count = count+1;
    alert("post calculation" + count);


    // count++ mirip dgn count = count + 1 -> setiap count muncul ditambah satu
}
    alert("condition invalid, now out of while:" + count);

for(var i=0;i<3;i++) {

    for(var j=0;j<1;j++){
        document.getElementById("result").innerHTML +="*";
    }
    
    document.getElementById("result").innerHTML +="<br>";
    
}
