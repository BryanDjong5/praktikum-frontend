const TombolHitung = document.getElementById("hitungPengeluaran")
const hasilHitungan = document.getElementById("output");
const tombolHapusHasil = document.getElementById("hapusHasil");

hasilHitungan.innerHTML = `
    <h2>Hasil Pengeluaran</h2>
`;

TombolHitung.addEventListener("click", function() {
    const SemuaNamaPengeluaran = document.querySelectorAll('input[name="keterangan"]');
    const semuaPengeluaran = document.querySelectorAll('input[name="pengeluaran"]');

    let total = 0;
    let cetakan = `
    <h2>Hasil Pengeluaran</h2>`;

    let jumlahData = 0;

    for(let p = 0; p < semuaPengeluaran.length; p++){
        const namaPengeluaran = SemuaNamaPengeluaran[p].value;
        const pengeluaran = Number(semuaPengeluaran[p].value);

        if(namaPengeluaran === "" || pengeluaran == ""){
            continue;
        }
        
        total = total + pengeluaran;
        jumlahData++;
        cetakan = cetakan + `
        <p>Nama Pengeluaran: ${namaPengeluaran}</p>
        <p>Pengeluaran: ${pengeluaran.toLocaleString("id-ID")}</p>
        `;
    }
    cetakan = cetakan + `
    <p>Jumlah data pengeluaran: ${jumlahData} </p>
    <p>Total pengeluaran: ${total.toLocaleString("id-ID")}</p>`;

    hasilHitungan.innerHTML = cetakan;
});

tombolHapusHasil.addEventListener("click", function(){
    hasilHitungan.innerHTML = `
    <h2>Hasil Pengeluaran</h2>
`;
});



