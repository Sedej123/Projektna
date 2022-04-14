//pomozne spremenljivke
let cols, rows;
let w = 20;
let grid = [];
let current;

let stack = [];

//basic setup, generacija grida
function setup() {
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    //frameRate(5);

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    current = grid[0];
}

//odgovorno za izris
function draw(){
    background(51);

    for(let i = 0; i < grid.length; i++){
        grid[i].show();
    }

    current.visited = true;
    current.highlight();
    let next = current.checkNeighbours();
    if(next){
        next.visited = true;

        stack.push(current);

        removeWalls(current, next);

        current = next;
    }
    else if(stack.length > 0){
        current = stack.pop();
    }
   
}

function index(i, j){
    if(i < 0 || j < 0 || i > cols-1 || j > rows-1){
        return -1;
    }

    return j+i*cols;
}

class Cell{
    constructor(i,j){
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true]; //top, right, bottom, left
        this.visited = false;
    }

    show() {
        let x = this.i*w;
        let y = this.j*w;

        stroke(255);
        if(this.walls[0]){
            line(x, y, x + w, y);
        }
        if(this.walls[1]){
            line(x + w, y, x + w, y + w);
        }
        if(this.walls[2]){
            line(x + w, y + w, x, y + w);
        }
        if(this.walls[3]){
            line(x, y + w, x, y);
        }

        if(this.visited){   //obiskane obarva
            noStroke();
            fill(255, 0, 255, 100);
            rect(x,y,w,w);
        }
    }
    checkNeighbours(){
        let neighbours = [];
        let top = grid[index(this.i,this.j-1)];
        let right = grid[index(this.i+1,this.j)];
        let bottom = grid[index(this.i,this.j+1)];
        let left = grid[index(this.i-1,this.j)];

        if(top && !top.visited){    //edge case, ce obstaja in ni bil obiskan ga dodaj
            neighbours.push(top);
        }
        if(left && !left.visited){
            neighbours.push(left);
        }
        if(bottom && !bottom.visited){
            neighbours.push(bottom);
        }
        if(right && !right.visited){
            neighbours.push(right);
        }

        if(neighbours.length > 0){
            let tmp = floor(random(0, neighbours.length));
            return neighbours[tmp];
        }
        else {
            return undefined;   //to dela nekak
        }
    }
    highlight(){
        let x = this.i*w;
        let y = this.j*w;
        noStroke();
        fill(0, 0, 255, 100);
        rect(x, y, w, w);
    }
}
function removeWalls(a, b) {
    let x = a.i - b.i;
    if(x == 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    }
    else if(x == -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    let y = a.j - b.j;
    if(y == 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    }
    else if(y == -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}