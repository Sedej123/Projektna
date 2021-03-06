//let xoff1 = 0;    //potrebno za cebelica movement
//let xoff2 = 1000;

let inc  = 0.005;
let start = 0;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(51);
    stroke(255);
    noFill();
    beginShape();

    let xoff = start;

    for(let x = 0; x < width; x++){
        stroke(255);
        //let y = random(height); //graf random vrednosti
        let y = noise(xoff) * height; //graf noise vrednosti, very smooth
        //let y = height/2 + sin(xoff) * height/2; //graf sinusa(nek dev. creation brez detailov)
        //let y = noise(xoff)*100 + height/2 + sin(xoff) * height/2; //extra bizaz ki doda oroginalnem stvoru

        vertex(x, y);

        xoff += inc;
        
    }

    endShape();
    start += inc;
    /*
    let x = map(noise(xoff1), 0, 1, 0, width);
    let y = map(noise(xoff2), 0, 1, 0, height);

    xoff1 += 0.02;
    xoff2 += 0.02;

    ellipse(x, y, 24, 24);  //cebelica type movement, very nice
    */

    //noLoop();
}