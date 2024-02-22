//*===DOM===

function page1() {
  document.getElementById("page1").style.display = "inline";
  document.getElementById("page3").style.display = "none";
  // document.getElementById("page3").style.display = 'inline'
}
function page2() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "inline";
  // document.getElementById("page3").style.display = 'inline'
}
function page3() {
  // document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "inline";
}
function page4() {
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "inline";
}

let user = {
  nama: "",
  gender: "",
  umur: "",
  tinggi: "",
  berat: "",
};

let formInputUser = document.getElementById("form-input-user");
formInputUser.addEventListener("submit", buttonSubmit, true);
function buttonSubmit(e) {
  e.preventDefault();
  // console.log(user);

  user = {
    nama: e.target["inputNama"].value,
    gender: e.target["inputJenisKelamin"].value,
    umur: e.target["inputUmur"].value,
    tinggi: e.target["inputTinggi"].value,
    berat: e.target["inputBeratBadan"].value,
  };
  if (!user.nama || !user.gender || !user.umur || !user.tinggi || !user.berat) {
    alert("Semua inputan harus diisi !");
  } else {
    document.getElementById("name-user").innerText = user.nama;
    document.getElementById("name-user3").innerText = user.nama;
    page2();
  }
  // page2();
  // console.log(user);

  // let resultCalorieMaintenance = calorieMaintenance(user);
  // console.log(resultCalorieMaintenance);
  // window.location.href = "inputmakanan.html";
}

//?=======================================================================================
// Create function maintenaceCalorie untuk menghitung kalori hairan user, input berupa data diri user dalam bentuk object.
// rumus menghitung kalori harian
// Untuk laki-laki: 66,5 + (13,75 x berat badan dalam kilogram) + (5,003 x tinggi badan dalam cm) – (6,75 x usia)
// Untuk wanita: 655,1 + (9,563 x berat badan dalam kilogram) + (1,850 x tinggi badan dalam cm) – (4,676 x usia)
function calorieMaintenance(user) {
  //your code here
  // console.log(user, "line 8");
  let dailyCalorie = "";
  if (user.gender === "pria") {
    dailyCalorie =
      66.5 + 13.75 * user.berat + 5.003 * user.tinggi - 6.75 * user.umur;
  } else if (user.gender === "wanita") {
    dailyCalorie =
      655.1 + 9.563 * user.berat + 1.85 * user.tinggi - 4.676 * user.umur;
  }

  return dailyCalorie;
}

// angka kalori harian user .

// ?================================================================================
let makanan = [];

let formInputMakanan = document.getElementById("form-input-makanan");
formInputMakanan.addEventListener("submit", buttonSubmitMakanan, true);
function buttonSubmitMakanan(e) {
  e.preventDefault();
  // console.log(user);
  makanan = [
    e.target["makan-pagi"].value,
    e.target["makan-siang"].value,
    e.target["makan-malam"].value,
  ];
  console.log("user", user);
  console.log("makanan", makanan);

  // window.location.href = "inputmakanan.html";
  dietku(user, makanan);
  page3();
}

// Hitung total kalori yang dikosumsi oleh user pada function calorieConsume, dengan input berupa makanan yang dikonsumsi oleh user, inputan berupa array. dan hasil output nya adalah jumlah kalori bertipe data number
let db_makanan = [
  { nama: "Bubur Ayam", calorie: 200 },
  { nama: "Bubur Sum-Sum", calorie: 178 },
  { nama: "Sate Padang", calorie: 466 },
  { nama: "Nasi Uduk", calorie: 506 },
  { nama: "Nasi Padang", calorie: 500 },
  { nama: "Nasi Goreng", calorie: 267 },
  { nama: "Mie Instan", calorie: 168 },
  { nama: "Mie Goreng", calorie: 211 },
  { nama: "Gado-Gado", calorie: 295 },
  { nama: "Siomay", calorie: 361 },
  { nama: "Ikan lele goreng", calorie: 105 },
  { nama: "Ikan salmon panggang", calorie: 171 },
  { nama: "Udang goreng tepung", calorie: 150 },
  { nama: "Bakso sapi", calorie: 202 },
  { nama: "Chicken nugget", calorie: 297 },
  { nama: "Telur orak arik", calorie: 199 },
  { nama: "Telur rebus", calorie: 68 },
  { nama: "Telur dadar", calorie: 93 },
  { nama: "Telur ceplok", calorie: 92 },
  { nama: "Tempe goreng", calorie: 118 },
  { nama: "Tempe bacem", calorie: 157 },
  { nama: "Tahu bacem", calorie: 119 },

  // { nama: "", calorie: 211 }, lanjutin kalo ada tambahan
];
for (let i = 0; i < db_makanan.length; i++) {
  const el = db_makanan[i];
  const optionElem = document.createElement("option");
  optionElem.value = el.nama;
  optionElem.textContent = el.nama;

  document.getElementById("makan-pagi").appendChild(optionElem.cloneNode(true));
  document
    .getElementById("makan-siang")
    .appendChild(optionElem.cloneNode(true));
  document.getElementById("makan-malam").appendChild(optionElem);
}

function calorieConsume(makanan, db_makanan) {
  //your code here
  // console.log(makanan, "line 40");
  let totalCalorie = 0;
  for (let i = 0; i < makanan.length; i++) {
    const indexConsume = makanan[i];
    for (let i = 0; i < db_makanan.length; i++) {
      const indexDB = db_makanan[i];

      if (indexConsume === indexDB.nama) {
        totalCalorie += indexDB.calorie;
      }
    }
  }

  return totalCalorie;
}
// ?=============================================================
/* panggil sub function sebelumnya untuk di proses pada funtion dietku. 
jika kalori yang dikonsumsi lebih kecil dari pada kalori maintenance/harian. maka tamplikan
"SELAMAT, KAMU BERHASIL DIET HARI INI"
jika tidak (sebaliknya) , maka tampilkan 
"KAMU MELEBIHI BATAS KALORI HARIAN KAMU, YUK LEBIH KONSISTEN LAGI"
*/
function dietku(user, makanan) {
  //your code here
  let result = "";
  let resultCalorieMaintenance = calorieMaintenance(user);
  // console.log(resultCalorieMaintenance);
  let resultCalorieConsume = calorieConsume(makanan, db_makanan);
  // console.log(resultCalorieConsume)
  let defisitCal = Math.abs(resultCalorieMaintenance - resultCalorieConsume);
  if (resultCalorieMaintenance > resultCalorieConsume) {
    result = ` <p class="text-center fs-2">
          Selamat, kamu berhasil Defisit <span  style="color:yellow">${defisitCal.toFixed(
            2
          )}</span> kkal hari ini
        </p>`;
  } else {
    result = `<p class="text-center fs-2">
          Kamu melebihi batas konsumsi kalori sebanyak <span style="color:yellow">${defisitCal.toFixed(
            2
          )}</span> kkal hari ini. YUK LEBIH KONSISTEN!!
        </p>`;
  }
  document.getElementById("result-box").innerHTML = result;
  return result;
}

// let nama = document.getElementById("inputNama").value;
// let umur = document.getElementById("inputUmur").value;
// let tinggi = document.getElementById("inputTinggi").value;
// let berat = document.getElementById("inputBeratBadan").value;
// let gender = document.getElementById("inputJenisKelamin").value;

// const makanan = ["Bubur Ayam", "Nasi Padang", "Nasi Goreng"];
// console.log(dietku(user, makanan));

//  jadi :

// const makanan = {
//     makanPagi: "Bubur ayam",
//     makanSiang: "Nasi padang",
//     makanMalam: "Nasi goreng",
// };

// atau
// let user1 = {
//     nama: "padila",
//     gender: "pria",
//     umur: 25,
//     berat: 64,
//     makanan: {
//         makanPagi: "Bubur ayam",
//         makanSiang: "Nasi padang",
//         makanMalam: "Nasi goreng",
//     },
// };
