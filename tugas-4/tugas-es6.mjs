// 1. Data : daftar transaksi belanja (7 data)
const transaksi = [
    { id: 1, barang: 'Beras', harga: 65000, qty: 2, kategori: 'Makanan'},
    { id: 2, barang: 'Minyak goreng', harga: 38000, qty: 3, kategori: 'Makanan'},
    { id: 3, barang: 'Sabun mandi', harga: 4500, qty: 10, kategori: 'Kebersihan'},
    { id: 4, barang: 'Deterjen', harga: 21000, qty: 2, kategori: 'Kebersihan'},
    { id: 5, barang: 'Buku tulis', harga: 5000, qty: 12, kategori: 'Alat Tulis'},
    { id: 6, barang: 'Pulpen', harga: 3000, qty: 20, kategori: 'Alat Tulis'},
    { id: 7, barang: 'Teh Celup', harga: 12000, qty: 4, kategori: 'Makanan'},

];

// 2. Filter: ambil hanya transaksi dengan kategori tertentu
const saringKategori = (data, pilihan) =>
    data.filter(({ kategori }) => kategori === pilihan);

// 3. Map : buat daftar baru yang berisi subtotal (harga x qty) tiap barang
const hitungSubtotal = (data) =>
    data.map(({ barang, harga, qty }) => ({
        barang: barang,
        subtotal: harga * qty,
    }));

// 4. Reduce : jumlahkan semua subtotal menjadi satu angka total
const hitungTotal = (data) =>
    data.reduce((total, { subtotal }) => total + subtotal, 0);

// 5. Fungsi kecil untuk mencetak satu baris laporan
const cetak = ({ barang, subtotal }) =>
    console.log(barang + ': Rp ' + subtotal.toLocaleString('id-ID'));


// === Menjalankan Program ===
console.log('==== Semua Transaksi ====');
const semuaSubtotal = hitungSubtotal(transaksi);
semuaSubtotal.forEach(cetak);
console.log('Total: Rp ' + hitungSubtotal(semuaSubtotal).toLocaleString('id-ID'));

console.log('');
console.log('==== Kategori Makanan Saja ====');
const makanan = saringKategori(transaksi, 'Makanan');
const subtotalMakanan = hitungSubtotal(makanan);
subtotalMakanan.forEach(cetak);
console.log('Total Makanan: Rp ' + hitungTotal(subtotalMakanan).toLocaleString('id-ID'));