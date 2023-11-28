alert("script ready");
// variable global
function hitungLuas() {
// variable local
    var panjang = 0;
    panjang = document.getElementById("inputPanjang").value;

    var lebar = 0;
    lebar = document.getElementById("inputLebar").value;

    var luas = panjang * lebar;
    document.getElementById("pLuas").innerHTML = luas;
}
function hitungKeliling() {
    var panjang = 0;
    panjang = document.getElementById("inputPanjang").value;

    var lebar = 0;
    lebar = document.getElementById("inputLebar").value;

    var keliling = (2 * panjang) + (2 * lebar);
    document.getElementById("pKeliling").innerHTML = keliling;

// tutup kurung itu utk buat naymbungin ke java script
}
