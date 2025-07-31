function changeColor(color) {
    const carImage = document.getElementById('carImage');
    if (color === 'blue') {
        carImage.src = 'https://static-assets.tatamotors.com/Production/www-tatamotors-com-NEW/wp-content/uploads/2024/07/front-image-without-branding-Curvv-ICE-hires-scaled.jpg'; 
    } else if (color === 'red') {
        carImage.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/50355/curvv-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80'; // (Example red version)
    } else if (color === 'white') {
        carImage.src = 'https://imgd.aeplcdn.com/370x208/n/cw/ec/50355/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80'; // (Example white version)
    }
}
