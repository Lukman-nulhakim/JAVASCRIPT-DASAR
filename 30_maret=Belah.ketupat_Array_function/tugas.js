// STAR PR belah ketupat
// for (var a = 1; a <= 5; a++) {
//     for (var b = 1; b <= a; b++) {
//         document.write("*")
//     }
//     document.write("<br>")
//     if (a == 5) {
//         for (var c = 1; c <= a; c++) {
//             for (var d = c; d <= a; d++) {
//                 document.write("*")
//             }
//             document.write("<br>")
//         }
//     }
// }
// document.write("<br>")

// for (var e = 1; e <= 5; e++) {
//     for (var f = 5; f >= e; f--) {
//         document.write("_")
//     }
//     for (var g = 1; g <= e; g++) {
//         document.write("*")
//     }
//     for (var h = 1; h <= e - 1; h++) {
//         document.write("*")
//     }
//     document.write("<br>")
//     if (e == 5) {
//         for (i = 1; i <= e; i++) {
//             for (var j = 1; j <= i; j++) {
//                 document.write("_")
//             }
//             for (var k = 5; k >= i; k--) {
//                 document.write("*")
//             }
//             for (var l = 5; l >= i + 1; l--) {
//                 document.write("*")
//             }
//             document.write("<br>")
//         }
//     }
// }
// END PR belah ketupat


// ----- Start array -------
// var nama = ["edutech", "rajif", "greenlake"];
// console.log(nama);

// var jurusan = ["otomotif", "IT", "industri"];
// console.log(jurusan);

// ini paggilan spesifik :
// var jurusan = [];
// jurusan[0] = "otomotif";
// jurusan[1] = "IT";
// jurusan[2] = "industri";
// console.log(jurusan[2]);

// var nilai = [5, 4, 3, 2, 1];
// document.write(nilai);
// document.write("<br>");

// var siswa = [1, 2, 3, 4, 5];
// for (var i = 0; i < siswa.length; i++) {
//     document.write(siswa[i]);
// }

// var nama = Array("eri", "ari", "erik");
// console.log(nama);

// menghitung var nama menggunakan length
// var nama = "edutech";
// var panjang = nama.length;
// console.log(panjang);



// ----FUNCTION-----
// function nama() {
//     document.write("edutech");
// }
// nama();

// function nama() {
//     var penduduk = ["ari", "erik", "ani"];
//     console.log(penduduk);
// }
// nama()



//---panggil lebih dari 1 aray----
// function nama() {
//     var penduduk = [
//         ["ari", "erik"],
//         ["ani", "eni"],
//         ["rian", "topik", "imam"]
//     ];
//     console.log(penduduk[0][0]);
//     console.log(penduduk[2][2]);
// }
// nama();

// var penduduk = [
//     ["ari", "erik"],
//     ["ani", "eni"],
//     ["rian", "topik", "imam"]
// ];
// console.log(penduduk[2][1]);
//----------------------------------------------------------

//UNPAS belah ketupat
for (let a = 0; a < 6; ++a) {
    for (b = 0; b <= a; b++) {
        document.write('*');
    }
    document.write('<br>');
}
for (let c = 5; c > 0; --c) {
    for (d = 0; d < c; d++) {
        document.write('*');
    }
    document.write('<br>');
}