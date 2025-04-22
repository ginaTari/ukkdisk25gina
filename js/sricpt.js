// bagian tampilan pertama aplikasi dijalankan
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fbarang").style.display = 'block'; //munculkan
    document.getElementById("tampil_data").style.display = 'none'; //sembunyi
})

// bagian fungsi hitung diskon
function hitungDiskon() {
    let namaBarang = document.getElementById('namaBarang').value.trim();
    let kategoriBarang = document.getElementById('kategoriBarang').value.trim();
    let harga = parseFloat(document.getElementById('harga').value);
    let diskon = parseFloat(document.getElementById('diskon').value);

    let nilaiDiskon, totalHarga;

    // Kondisi error
    let errors = [];

    // Validasi input
    if (!namaBarang) {
        errors.push("opps! Nama barang nya ko ga diisi? isi dulu yuk, supaya lengkap!");
    }
    if (!kategoriBarang) {
        errors.push("Kategori barang wajib diisi nihh");
    }
    if (!harga || isNaN(harga) || harga <= 0) {
        errors.push("Harga harus diisi dan harga harus lebih dari 0");
    }
    if (!diskon || isNaN(diskon) || diskon < 0 || diskon > 100) {
        errors.push("Diskon harus diisi dan berupa angka antara 0 - 100");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Perhitungan diskon
    nilaiDiskon = harga * (diskon / 100);
    totalHarga = harga - nilaiDiskon;

    // Fungsi format rupiah
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    // Level Promo
    let levelPromo = "";
    if (diskon <= 10) {
        levelPromo = "Diskon Biasa";
        alert("✨Yey! Kamu dapat *Promo Biasa*!  ");
    } else if (diskon <= 30) {
        levelPromo = "Diskon Menarik";
        alert("🎉 Asikk~ Promo Menarik nihh!  💸");
    } else if (diskon <= 50) {
        levelPromo = "Promo Super!";
        alert("Keren banget  Kamu dapet *Diskon Super!*  💃");
    } else if (diskon > 50) {
        levelPromo = "Diskon Terbesar!";
        alert("💥 WOW!! Ini *Diskon Terbesar*! hoki banget nihhh! 🏆🎁");
    }

    // Tanggal hari ini
    const tanggal = new Date().toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    // Tampilkan data
    document.getElementById('hasil_nama_barang').textContent = namaBarang;
    document.getElementById('hasil_kategori_barang').textContent = kategoriBarang;
    document.getElementById('hasil_diskon').textContent = formatRupiah(nilaiDiskon);
    document.getElementById('hasil_total_harga').textContent = formatRupiah(totalHarga);
    document.getElementById('hasil_level_promo').textContent = levelPromo;
    document.getElementById('hasil_tanggal').textContent = tanggal;

    document.getElementById("fbarang").style.display = 'none';
    document.getElementById("tampil_data").style.display = 'block';
}

// bagian fungsi tombol kembali 
function kembali() {
    document.getElementById("fbarang").style.display = 'block'; //muncul
    document.getElementById("tampil_data").style.display = 'none'; //sembunyi
}

// bagian fungsi tombol hapus
function hapus() {
    document.getElementById('fbarang').reset();
}

// Debugging: Cek apakah tombol dipanggil
document.getElementById('tombolHitung').addEventListener('click', function () {
    console.log("Tombol Hitung Dipanggil");
    hitungDiskon();  // Pastikan ini dipanggil saat tombol ditekan
});
