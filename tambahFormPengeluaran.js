const tombolTambah = document.getElementById("tambahLain");
const inputPengeluaran = document.getElementById("inputPengeluaran");
const tombolHapusInput = document.getElementById("hapusInput");

tombolTambah.addEventListener("click", function () {
    const dataInput = document.createElement("div");
    dataInput.className = "inputPengeluaran";

    dataInput.innerHTML = `
        <input type="text" placeholder="masukkan keterangan pengeluaran" name="keterangan">
        <input type="text" placeholder="Masukkan nominal pengeluaran" name="pengeluaran">
    `;

    inputPengeluaran.appendChild(dataInput);
});

tombolHapusInput.addEventListener("click", function () {

    const semuaInput = document.querySelectorAll(".inputPengeluaran");

    if (semuaInput.length > 1) {
        semuaInput[semuaInput.length - 1].remove();
    }
});
