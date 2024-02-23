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

function insertDataIntoTable(data) {
    const table = document.querySelector("#calorieTable");
    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                    <td>${i + 1}</td>
                    <td>${data[i].nama}</td>
                    <td>${data[i].calorie}</td>
                </tr>`;
        table.innerHTML += row;
    }
}

insertDataIntoTable(db_makanan);
