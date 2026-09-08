const tombolTambah = document.getElementById("tambahLain");
const inputPengeluaran = document.getElementById("inputPengeluaran");
const tombolHapusInput = document.getElementById("hapusInput");

tombolTambah.addEventListener("click", function () {
    const dataInput = document.createElement("div");
    dataInput.className = "inputPengeluaran";

    dataInput.innerHTML = `
        <input type="text" placeholder="masukkan keterangan pengeluaran" name="keterangan">
        <input type="text" placeholder="Masukkan nominal pengeluaran" name="pengeluaran">
        <button type="button" class = "hapusKotakInput">Hapus 1 Kotak Input</button>
    `;

    inputPengeluaran.appendChild(dataInput);
});

inputPengeluaran.addEventListener("click", function (e) {

    if (e.target.classList.contains("hapusKotakInput")) {

        e.target.parentElement.remove();

    }

});

tombolHapusInput.addEventListener("click", function () {

    const semuaInput = document.querySelectorAll(".inputPengeluaran");

    for(let i = 1; i < semuaInput.length; i++){
        semuaInput[i].remove();
    }
});
