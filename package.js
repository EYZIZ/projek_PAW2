let selectedPackage = {
    name: '',
    price: 0,
    duration: '',
    location: ''
};

function choosePackage(name, price, duration) {
    selectedPackage.name = name;
    selectedPackage.price = price;
    selectedPackage.duration = duration;
}

function chooseDestination(destination, price) {
    selectedPackage.location = destination;
    selectedPackage.price = price;

    alert(`Anda telah memilih destinasi ${destination} dalam ${selectedPackage.name} dengan harga Rp.${selectedPackage.price} selama ${selectedPackage.duration}`);
}

function goToConfirm() {
    if (selectedPackage.location === '') {
        alert('Silakan pilih destinasi wisata terlebih dahulu!');
        return;
    }

    localStorage.setItem('package', selectedPackage.name);
    localStorage.setItem('price', selectedPackage.price);
    localStorage.setItem('duration', selectedPackage.duration);
    localStorage.setItem('location', selectedPackage.location);

    window.location.href = 'confirm.html';
}

function goBack() {
    window.history.back();
}
