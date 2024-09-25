window.onload = function() {
    const packageName = localStorage.getItem('package');
    const price = localStorage.getItem('price');
    const duration = localStorage.getItem('duration');
    const location = localStorage.getItem('location');

    document.getElementById('confirm-name').innerText = `Nama: ${localStorage.getItem('name')}`;
    document.getElementById('confirm-package').innerText = `Paket: ${packageName}`;
    document.getElementById('confirm-price').innerText = `Harga: Rp. ${parseInt(price).toLocaleString()}`;
    document.getElementById('confirm-duration').innerText = `Durasi: ${duration}`;
    document.getElementById('confirm-location').innerText = `Destinasi: ${location}`;

    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Pesanan berhasil dikonfirmasi! Terima kasih telah memesan.');
        localStorage.clear(); // Hapus data yang tersimpan
        window.location.href = 'index.html'; // Kembali ke halaman utama
    });
}

function goToMain() {
    window.location.href = 'index.html';
}
