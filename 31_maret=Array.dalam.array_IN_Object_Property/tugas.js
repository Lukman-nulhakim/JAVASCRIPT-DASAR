// // Tugas Array dalam Array
// function teluknaga() {
//     var tanjungPasir = [
//         [
//             [
//                 [1, 2, 3],
//                 [
//                     [
//                         [88, 99, 100]
//                     ]
//                 ],
//                 [
//                     [],
//                     ["lukman", "rangga"]
//                 ]
//             ],
//             [],
//             [00],
//             []
//         ],

//         [4],
//         [5],
//         [
//             [
//                 [
//                     [77, 88, 99],
//                     [100, 200, 300]
//                 ]
//             ],
//             []
//         ]

//     ];
//     console.log(tanjungPasir[3][0][0][1][1]);
// }
// teluknaga();


//-------MATERI----------
// Object, Properti, dan isi dari properti

// function rt02() {
//     var nama = {
//             namaPenduduk: "edutech",
//             alamat: "cipondoh",
//             jenisKelamin: "pria",
//             jumlahAnak: 4
//         }
//         // di bawah ini properti diluar object
//     nama.domisili = "jakbar";

//     // console.log(nama.namaPenduduk);
//     // console.log(nama.jenisKelamin);
//     // console.log(nama.jumlahAnak);
//     console.log(nama.domisili);
// }
// rt02()


// function karyawan() {
//     var divisiIT = {
//         nama: "ali",
//         status: {
//             karyawanHarian: "harian",
//             karyawanKontrak: "kontrak",
//             karyawanTetap: {
//                 tetap5tahun: 5,
//                 tetap10tahun: 10,
//                 tetap15tahun: 15
//             }
//         },
//         gaji: 42390
//     }
//     console.log(divisiIT.nama);
//     console.log(divisiIT.status.karyawanTetap.tetap15tahun);
//     console.log(divisiIT.gaji);
// }
// karyawan()


//----Penggunaan IN------
// function karyawan() {
//     var dataKaryawan = {
//         nama: "ali ",
//         alamat: " cipondoh ",
//         gaji: 12345,
//         bagian: " frontEnd"
//     }
//     for (var a in dataKaryawan) {
//         document.write(dataKaryawan[a]);
//     }
// }
// karyawan();