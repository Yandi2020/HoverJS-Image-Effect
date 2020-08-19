//01. hover effect library

new hoverEffect({
    //the element we want to inject images
    parent: document.querySelector('.distortion'),

    //how strong the images change
    intensity: 0.2,

    //default setting for angle is 4, the angle of image changing 
    angle: Math.PI / 8,

    image1: 'img/004.jpg',
    image2: 'img/003.jpg',
    displacementImage: 'img/trans.png'

});