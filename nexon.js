function changeColor(color) {
    const carImage = document.getElementById('car-image');

    if (color === 'white') {
        carImage.src = 'https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon/9675/1739519153339/Pristine-White_e4e4e4.jpg?tr=w-898'; // white car image
    }
    else if (color === 'black') {
        carImage.src = 'https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon/9675/1739519153339/Carbon-Black_191919.jpg?tr=w-898'; // black car image
    }
    else if (color === 'blue') {
        carImage.src = 'https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon/9675/1739519153339/Royal-Blue_141d3c.jpg?tr=w-898'; // blue car image
    }
    else if (color === 'ocean blue') {
        carImage.src = 'https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon/9675/1739519153339/Pristine-White-DT_3a5460.jpg?tr=w-898'; // red car image
    }
}
