const TombolHitung = document.getElementById("hitungPengeluaran")
const hasilHitungan = document.getElementById("output");
const tombolHapusHasil = document.getElementById("hapusHasil");

TombolHitung.addEventListener("click", function() {
    const SemuaNamaPengeluaran = document.querySelectorAll('input[name="keterangan"]');
    const semuaPengeluaran = document.querySelectorAll('input[name="pengeluaran"]');

    let total = 0;
    let cetakan = "";

    for(let p = 0; p < semuaPengeluaran.length; p++){
        const namaPengeluaran = SemuaNamaPengeluaran[p].value;
        const pengeluaran = Number(semuaPengeluaran[p].value);
        total = total + pengeluaran;
        cetakan = cetakan + `
        <p>Nama Pengeluaran: ${namaPengeluaran}</p>
        <p>Pengeluaran: ${pengeluaran}</p>
        `;
    }
    cetakan = cetakan + `
    <p>Total pengeluaran: ${total}</p>`;

    hasilHitungan.innerHTML = cetakan;
});

tombolHapusHasil.addEventListener("click", function(){
    hasilHitungan.remove();
});



