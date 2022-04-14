let inc = 0.005;

function setup(){
    let bttn = document.getElementById("bttn");
    bttn.addEventListener("click",function(){
        noiseSeed(2012);
        setup();
});
    let yoff = 0;

    loadPixels();
    for(let y = 0; y < 100; y++){
        let xoff = 0;
        for(let x = 0; x < 100; x++){
            let index = (x + y * 100) * 4;
            let r = noise(xoff, yoff) * 255;
            //let r = random(0,255);    //statika na televiziji
            pixels[index] = Math.floor(r);      
            pixels[index+1] = Math.floor(r);
            pixels[index+2] = Math.floor(r);
            pixels[index+3] = 255;

            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
}