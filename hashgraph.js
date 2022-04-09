
function setup() {
  createCanvas(900, 600);
  reset_sketch();
  
  
}

var lines = [];
var node_arr = [false, false, false, false, false, false, false, false];
var initial_node = 0;
var xpos2, xpos3, xpos4;


function reset_sketch(){
  lines = [];
  node_arr = [false, false, false, false, false, false, false, false];
  xpos2 = 0;
  xpos3 = 0;
  xpos4 = 0;
  
  background(0);
  fill(255);
  noStroke();
  textSize(24);
  text("Hashgraph Consensus Algorithm Visualised", 220, 20);
  col = color(0, 0, 0);
  strokeWeight(1.5);
  stroke(255);
  line(20, 560, 20, 40);
  line(80, 560, 80, 40);
  line(140, 560, 140, 40);
  line(200, 560, 200, 40);
  line(260, 560, 260, 40);
  line(320, 560, 320, 40);
  line(380, 560, 380, 40);
  line(440, 560, 440, 40);

  fill(255)
  textSize(16)
  noStroke();
  text("Alice", 5, 590);
  text("Bob", 65, 590);
  text("Carol", 118, 590);
  text("Dave", 180, 590);
  text("Ellen", 243, 590);
  text("Frank", 300, 590);
  text("Gina", 363, 590);
  text("Hank", 420, 590);
  
  textSize(14);
  text(" The hashgraph consensus algorithm is an asynchronus byzantine \n fault tolerant consensus algorithm which uses a gossip protocol \n to send information to nodes as well as how the nodes have talked \n to each other by sending the graph itself. It's not just gossiping \n about transactions, It's gossip about gossip. Once everyone has \n recieved the transaction as well as the graph, they can do virtual \n voting by just looking at the graph and know how everyone ought \n to vote and reach consensus.", 470, 60);
  
  //fill(node_col);
  ellipse(475, 220, 25, 25);
  
  text("- Solid nodes represent the first time the person has recieved \n the transaction.", 500, 220);
  
  stroke(255);
  strokeWeight(2);
  fill(0);
  ellipse(475, 270, 25, 25);
  
  noStroke();
  fill(255);
  text("- Hollow nodes represent a person previously has recieved and \n sent the transaction and wants to send it again.", 500, 270);
  
  text("Press any number 1-8 to start. Any other key will clear the graph.", 470, 320)
  
  text("Round 1", 470, 350);
  
  text("Round 2", 625, 350);
  
  text("Round 3", 790, 350);
}


function draw() {
  
  hashgraph(initial_node);
  
}

let node1, node2, node3, node4, node5, node6, node7, node8;

function name_node(node, num){
  if(node == 2){
    if(num == 20){
      node2 = "Alice";
    }
    else if(num == 80){
      node2 = "Bob";
    }
    else if(num == 140){
      node2 = "Carol";
    }
    else if(num == 200){
      node2 = "Dave";
    }
    else if(num == 260){
      node2 = "Ellen";
    }
    else if(num == 320){
      node2 = "Frank";
    }
    else if(num == 380){
      node2 = "Gina";
    }
    else if(num == 440){
      node2 = "Hank";
    }
  }
  else if(node == 3){
    if(num == 20){
      node3 = "Alice";
    }
    else if(num == 80){
      node3 = "Bob";
    }
    else if(num == 140){
      node3 = "Carol";
    }
    else if(num == 200){
      node3 = "Dave";
    }
    else if(num == 260){
      node3 = "Ellen";
    }
    else if(num == 320){
      node3 = "Frank";
    }
    else if(num == 380){
      node3 = "Gina";
    }
    else if(num == 440){
      node3 = "Hank";
    }
  }
  else if(node == 4){
    if(num == 20){
      node4 = "Alice";
    }
    else if(num == 80){
      node4 = "Bob";
    }
    else if(num == 140){
      node4 = "Carol";
    }
    else if(num == 200){
      node4 = "Dave";
    }
    else if(num == 260){
      node4 = "Ellen";
    }
    else if(num == 320){
      node4 = "Frank";
    }
    else if(num == 380){
      node4 = "Gina";
    }
    else if(num == 440){
      node4 = "Hank";
    }
  }
  else if(node == 5){
    if(num == 20){
      node5 = "Alice";
    }
    else if(num == 80){
      node5 = "Bob";
    }
    else if(num == 140){
      node5 = "Carol";
    }
    else if(num == 200){
      node5 = "Dave";
    }
    else if(num == 260){
      node5 = "Ellen";
    }
    else if(num == 320){
      node5 = "Frank";
    }
    else if(num == 380){
      node5 = "Gina";
    }
    else if(num == 440){
      node5 = "Hank";
    }
  }
  else if(node == 6){
    if(num == 20){
      node6 = "Alice";
    }
    else if(num == 80){
      node6 = "Bob";
    }
    else if(num == 140){
      node6 = "Carol";
    }
    else if(num == 200){
      node6 = "Dave";
    }
    else if(num == 260){
      node6 = "Ellen";
    }
    else if(num == 320){
      node6 = "Frank";
    }
    else if(num == 380){
      node6 = "Gina";
    }
    else if(num == 440){
      node6 = "Hank";
    }
  }
  else if(node == 7){
    if(num == 20){
      node7 = "Alice";
    }
    else if(num == 80){
      node7 = "Bob";
    }
    else if(num == 140){
      node7 = "Carol";
    }
    else if(num == 200){
      node7 = "Dave";
    }
    else if(num == 260){
      node7 = "Ellen";
    }
    else if(num == 320){
      node7 = "Frank";
    }
    else if(num == 380){
      node7 = "Gina";
    }
    else if(num == 440){
      node7 = "Hank";
    }
  }
  else if(node == 8){
    if(num == 20){
      node8 = "Alice";
    }
    else if(num == 80){
      node8 = "Bob";
    }
    else if(num == 140){
      node8 = "Carol";
    }
    else if(num == 200){
      node8 = "Dave";
    }
    else if(num == 260){
      node8 = "Ellen";
    }
    else if(num == 320){
      node8 = "Frank";
    }
    else if(num == 380){
      node8 = "Gina";
    }
    else if(num == 440){
      node8 = "Hank";
    }
  }
}

function keyPressed(){
  reset_sketch();
  
  if(key == '1'){
    node_arr[0] = true;
    node1 = "Alice";
    node_col = color(255, 0, 128);
    initial_node = 20;
  }
  else if(key == '2'){
    node_arr[1] = true;
    node1 = "Bob";
    node_col = color(0, 255, 128);
    initial_node = 80;
  }
  else if(key == '3'){
    node_arr[2] = true;
    node1 = "Carol";
    node_col = color(0, 128, 255);
    initial_node = 140;
  }
  else if(key == '4'){
    node_arr[3] = true;
    node1 = "Dave";
    node_col = color(128, 0, 255);
    initial_node = 200;
  }
  else if(key == '5'){
    node_arr[4] = true;
    node1 = "Ellen";
    node_col = color(255, 0, 255);
    initial_node = 260;
  }
  else if(key == '6'){
    node_arr[5] = true;
    node1 = "Frank";
    node_col = color(0, 0, 255);
    initial_node = 320;
  }
  else if(key == '7'){
    node_arr[6] = true;
    node1 = "Gina";
    node_col = color(255, 0, 0);
    initial_node = 380;
  }
  else if(key == '8'){
    node_arr[7] = true;
    node1 = "Hank";
    node_col = color(0, 255, 255);
    initial_node = 440;
  }
}

function hashgraph(xpos) {
  n_nodes = 0;
  for (i = 0; i < node_arr.length; i++) {
    if (node_arr[i] == true) {
      n_nodes++;
    }
  }
  if (n_nodes == 1) {
    while (true) {
      r = floor(random(0, 8));
      if (node_arr[r] == false) {
        break;
      }
    }
    stroke(node_col);
    strokeWeight(2);
      
    if(lines.length < 1){
      lines.push({
        start: createVector(xpos, 550),
        end: createVector(60 * r + 20, 400),
        p: 0
      })
      saved_r = r;
      name_node(2, 60 * saved_r + 20);
      noStroke();
      fill(255);
      text(node1 + " --> " + node2, 460, 380);
      
    }
    const animate_line = lines[0];    
    let mid = animate_line.start.copy().lerp(
      animate_line.end,animate_line.p);
    
    line(animate_line.start.x, animate_line.start.y, mid.x,
          mid.y);
    
    animate_line.p += 0.02;
    fill(node_col);
    ellipse(xpos, 550, 25, 25);
        
      
    
        
    if(animate_line.p > 0.99){
      stroke(node_col);
      node_arr[saved_r] = true;
      xpos2 = 60 * saved_r + 20;
      ellipse(xpos2, 400, 25, 25);
    } 
  }
    
  else if (n_nodes == 2) {
    
    while (true) {
      r = floor(random(0, 8));
      if (node_arr[r] == false) {
        break;
      }
    }
      
    while (true) {
      r2 = floor(random(0, 8));
      if(node_arr[r2] == false && r2 != r) {
        
        break;
      }
    }

    stroke(node_col);
    strokeWeight(2);
      
    if(lines.length < 3){
      lines.push({
        start: createVector(xpos, 500),
        end: createVector(60 * r + 20, 250),
        p: 0
      })
      noStroke();
      fill(255);
      
      saved_r = r;
      name_node(3, 60 * saved_r + 20);
      text(node1 + " --> " + node3, 610, 380);
      
      lines.push({
        start: createVector(xpos2, 400),
        end: createVector(60 * r2 + 20, 250),
        p: 0
      })
      saved_r2 = r2;
      name_node(4, 60 * saved_r2 + 20);
      
      text(node2 + " --> " + node4, 610, 410);
    }
      
    let animate_line = lines[1];    
    let mid = animate_line.start.copy().lerp(
      animate_line.end,animate_line.p);
    
    line(animate_line.start.x, animate_line.start.y, mid.x,
      mid.y);
    
    animate_line.p += 0.02;
    fill(0);
        
    ellipse(xpos, 500, 25, 25);
      
    let animate_line2 = lines[2];    
    let mid2 = animate_line2.start.copy().lerp(
      animate_line2.end,animate_line2.p);
    
    line( animate_line2.start.x, animate_line2.start.y, mid2.x,
      mid2.y);
    
    animate_line2.p += 0.02;
      
    
    if(animate_line.p > 0.99){
      node_arr[saved_r] = true;
      stroke(node_col);
      fill(node_col);
      xpos3 = 60 * saved_r + 20;
      ellipse(xpos3, 250, 25, 25);
    }
    if(animate_line2.p > 0.99){
      node_arr[saved_r2] = true;
      stroke(node_col);
      fill(node_col);
      xpos4 = 60 * saved_r2 + 20;
      ellipse(xpos4, 250, 25, 25);
    }
  }
      
  else if (n_nodes == 4) {
    while (true) {
      r = floor(random(0, 8));
      if (node_arr[r] == false) {
        break;
      }
    }
      
    while (true) {
      r2 = floor(random(0, 8));
      if(node_arr[r2] == false && r2 != r) {
        
        break;
      }
    }
    while (true) {
      r3 = floor(random(0, 8));
      if (node_arr[r3] == false && r3 != r && r3 != r2) {
        break;
      }
    }
      
    while (true) {
      r4 = floor(random(0, 8));
      if(node_arr[r4] == false && r4 != r && r4 != r2 && r4 != r3) {
        
        break;
      }
    }
    
    stroke(node_col);
    strokeWeight(2);
      
    if(lines.length < 4){
      lines.push({
        start: createVector(xpos, 450),
        end: createVector(60 * r + 20, 100),
        p: 0
      })
      noStroke();
      fill(255);
      
      saved_r = r;
      name_node(5, 60 * saved_r + 20);
      text(node1 + " --> " + node5, 770, 380);
      
      lines.push({
        start: createVector(xpos2, 350),
        end: createVector(60 * r2 + 20, 100),
        p: 0
      })
      saved_r2 = r2;
      name_node(6, 60 * saved_r2 + 20);
      text(node2 + " --> " + node6, 770, 410);
      
      lines.push({
        start: createVector(xpos3, 250),
        end: createVector(60 * r3 + 20, 100),
        p: 0
      })
      saved_r3 = r3;
      name_node(7, 60 * saved_r3 + 20);
      text(node3 + " --> " + node7, 770, 440);
      
      lines.push({
        start: createVector(xpos4, 250),
        end: createVector(60 * r4 + 20, 100),
        p: 0
      })
      saved_r4 = r4;
      name_node(8, 60 * saved_r4 + 20);
      text(node4 + " --> " + node8, 770, 470);
    }
    
    let animate_line = lines[3];    
    let mid = animate_line.start.copy().lerp(
      animate_line.end,animate_line.p);
    
    line(animate_line.start.x, animate_line.start.y, mid.x,
      mid.y);
    
    animate_line.p += 0.02;
    fill(0);
    ellipse(xpos, 450, 25, 25);
    
    let animate_line2 = lines[4];    
    let mid2 = animate_line2.start.copy().lerp(
      animate_line2.end,animate_line.p);
    
    line(animate_line2.start.x, animate_line2.start.y, mid2.x,
      mid2.y);
    
    animate_line2.p += 0.02;
    fill(0);
    ellipse(xpos2, 350, 25, 25);
    
    let animate_line3 = lines[5];    
    let mid3 = animate_line3.start.copy().lerp(
      animate_line3.end,animate_line.p);
    
    line(animate_line3.start.x, animate_line3.start.y, mid3.x,
      mid3.y);
    
    animate_line3.p += 0.02;
    
    let animate_line4 = lines[6];    
    let mid4 = animate_line4.start.copy().lerp(
      animate_line4.end,animate_line.p);
    
    line(animate_line4.start.x, animate_line4.start.y, mid4.x,
      mid4.y);
    
    animate_line4.p += 0.02;
    
    if(animate_line.p > 0.99){
      node_arr[saved_r] = true;
      stroke(node_col);
      fill(node_col);
      ellipse(60 * saved_r + 20, 100, 25, 25);
    }
    if(animate_line2.p > 0.99){
      node_arr[saved_r2] = true;
      stroke(node_col);
      fill(node_col);
      ellipse(60 * saved_r2 + 20, 100, 25, 25);
    }
    if(animate_line3.p > 0.99){
      node_arr[saved_r] = true;
      stroke(node_col);
      fill(node_col);
      ellipse(60 * saved_r3 + 20, 100, 25, 25);
    }
    if(animate_line3.p > 0.99){
      node_arr[saved_r2] = true;
      stroke(node_col);
      fill(node_col);
      ellipse(60 * saved_r4 + 20, 100, 25, 25);
    }
  }
}