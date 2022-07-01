let img;
let colores;

function preload(){
    img = loadImage('./jurassic world.jpg');
}
function setup(){
    createCanvas(2000, 2000);
    pixelator();
    img.updatePixels();
    image(img, 0, 0);
}
function pixelator(){
    for(let i=0; i<img.width; i+=1){
        for(let j=0; j<img.height; j+=1){
            colores = img.get(i, j);
            img.set(i, j, (colores[0]*0.3)+(colores[1]*0.59)+(colores[2]*0.11));
        }
    }
}
console.log(colores);