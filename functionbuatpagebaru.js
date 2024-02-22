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
  // { nama: "", calorie: 211 }, lanjutin kalo ada tambahan
];

function insertDataIntoTable(data) {
  const table = document.querySelector("#calorieTable");
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                    <td>${i}</td>
                    <td>${data[i].nama}</td>
                    <td>${data[i].calorie}</td>
                </tr>`;
    table.innerHTML += row;
  }
}

insertDataIntoTable(db_makanan);
