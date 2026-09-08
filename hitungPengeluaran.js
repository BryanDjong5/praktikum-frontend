const TombolHitung = document.getElementById("hitungPengeluaran");
const hasilHitungan = document.getElementById("output");
const tombolHapusHasil = document.getElementById("hapusHasil");

hasilHitungan.innerHTML = `
    <h2>Hasil Pengeluaran</h2>
`;

TombolHitung.addEventListener("click", function() {

    const SemuaNamaPengeluaran = document.querySelectorAll('input[name="keterangan"]');
    const semuaPengeluaran = document.querySelectorAll('input[name="pengeluaran"]');

    let total = 0;
    let jumlahData = 0;

    let cetakan = `
        <h2>Hasil Pengeluaran</h2>
    `;

    for(let p = 0; p < semuaPengeluaran.length; p++) {

        const namaPengeluaran = SemuaNamaPengeluaran[p].value;
        const pengeluaran = Number(semuaPengeluaran[p].value);

        if(namaPengeluaran === "" || semuaPengeluaran[p].value === "") {
            continue;
        }

        total = total + pengeluaran;
        jumlahData++;

        cetakan = cetakan + `
            <div class="dataHasil">

                <p>Nama Pengeluaran: ${namaPengeluaran}</p>

                <p>Pengeluaran: ${pengeluaran.toLocaleString("id-ID")}</p>

                <button type="button" class="hapusHasilData">Hapus</button>

            </div>
        `;
    }

    cetakan = cetakan + `
        <p>Jumlah data pengeluaran: ${jumlahData}</p>
        <p>Total pengeluaran: ${total.toLocaleString("id-ID")}</p>
    `;

    hasilHitungan.innerHTML = cetakan;
});


hasilHitungan.addEventListener("click", function(e) {

    if(e.target.classList.contains("hapusHasilData")) {

        const data = e.target.parentElement;

        data.remove();

    }

});

tombolHapusHasil.addEventListener("click", function() {

    hasilHitungan.innerHTML = `
        <h2>Hasil Pengeluaran</h2>
    `;

});



