
//GLOBAL VARIABLES

let width = 500
let height = 500; 

let text1, text2, save, cnv, img; 

//let n;
//let a=[];

let audio = [];
let images = [];




//FUNZIONI

function preload() {

//IMAGES
    //for (let n=1; n<3; n++) {
	//let aimg= loadImage('assets/images/a'+ n +'.jpg')
	//a.push(aimg)//a
	images[0] = loadImage('assets/images/a.jpg')//a
	images[1] = loadImage('assets/images/s.png')//s
	images[2] = loadImage('assets/images/d.jpg')//d
	images[3] = loadImage('assets/images/f.png')//f
	images[4] = loadImage('assets/images/g.jpg')//g
	images[5] = loadImage('assets/images/h.jpg')//h
	images[6] = loadImage('assets/images/j.png')//j
	images[7] = loadImage('assets/images/k.jpg')//k
	images[8] = loadImage('assets/images/l.jpeg')//l
	images[9] = loadImage('assets/images/q.jpg')//q
	images[10] = loadImage('assets/images/w.jpg')//w
	images[11] = loadImage('assets/images/e.jpg')//e
	images[12] = loadImage('assets/images/r.jpg')//r
	images[13] = loadImage('assets/images/h.jpg')//t
	images[14] = loadImage('assets/images/y.jpg')//y
	images[15] = loadImage('assets/images/u.jpg')//u
	images[16] = loadImage('assets/images/i.jpg')//i
	images[17] = loadImage('assets/images/o.jpg')//o
	images[18] = loadImage('assets/images/p.jpg')//p
	images[19] = loadImage('assets/images/z.jpg')//z
	images[20] = loadImage('assets/images/x.jpg')//x
	images[21] = loadImage('assets/images/c.jpg')//c
	images[22] = loadImage('assets/images/v.jpg')//v
	images[23] = loadImage('assets/images/b.jpeg')//b
	images[24] = loadImage('assets/images/n.jpeg')//n
	images[25] = loadImage('assets/images/m.jpg')//m
	//}

//SOUNDS
	audio[0] = loadSound('assets/sounds/A.wav')//a
	audio[1] = loadSound('assets/sounds/S.wav');//s
	audio[2] = loadSound('assets/sounds/D.wav');//d
	audio[3] = loadSound('assets/sounds/F.wav');//f
	audio[4] = loadSound('assets/sounds/G.wav');//g
	audio[5] = loadSound('assets/sounds/H.wav');//h
	audio[6] = loadSound('assets/sounds/J.wav');//j
	audio[7] = loadSound('assets/sounds/K.wav');//k
	audio[8] = loadSound('assets/sounds/L.wav');//l
	audio[9] = loadSound('assets/sounds/Q.wav');//q
	audio[10] = loadSound('assets/sounds/W.wav');//w
	audio[11] = loadSound('assets/sounds/E.wav');//e
	audio[12] = loadSound('assets/sounds/R.wav');//r
	audio[13] = loadSound('assets/sounds/T.wav');//t
	audio[14] = loadSound('assets/sounds/Y.wav');//y
	audio[15] = loadSound('assets/sounds/U.wav');//u
	audio[16] = loadSound('assets/sounds/I.wav');//i
	audio[17] = loadSound('assets/sounds/O.wav');//o
	audio[18] = loadSound('assets/sounds/P.wav');//p
	audio[19] = loadSound('assets/sounds/Z.wav');//z
	audio[20] = loadSound('assets/sounds/X.wav');//x
	audio[21] = loadSound('assets/sounds/C.wav');//c
	audio[22] = loadSound('assets/sounds/V.wav');//v
	audio[23] = loadSound('assets/sounds/B.wav');//b
	audio[24] = loadSound('assets/sounds/N.wav');//n
	audio[25] = loadSound('assets/sounds/M.wav');//m

//FONTS
	Roboto = loadFont('assets/fonts/Roboto/Roboto-Regular.ttf');
}


//TESTO
function createText1(){
	text1= createDiv("Type a letter <br> to load a photo <br> and press a number <br> from 1 to 6 <br> to play with it");
	text1.style(" position: absolute; background-color:black; width: 1000px;; color: white; text-align: center; font-family: Roboto, sans-serif; font-size: 60px")
	text1.position((windowWidth - width*2) / 2, (windowHeight - height) / 2);
}

function createText2(){
	text1= createDiv("Press 0 to save your design");
	text1.style(" position: absolute; width: 1000px;; color: white; text-align: center; font-family: Roboto, sans-serif; font-size: 15px")
	text1.position((windowWidth - width*2) / 2, ((windowHeight - height) / 2 )+ height+ 30);
}




function setup() {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	
//canvas
	let cnv= createCanvas(width, height); 
	background("black");
	cnv.position(x, y);

//testo
	createText1()
}


function keyPressed() {

	text1.hide()
	createText2()

//LETTERS
	if  (key == 'a') {
		audio[0].play();
		image(images[0], 0, 0, width, height)
		img= get(0, 0, width, height)

	} else if (key == 's') {
		audio[1].play();
		image(images[1], 0, 0, width, height)
		img= get(0, 0, width, height)

	} else if (key == 'd') {
		audio[2].play();
		image(images[2], 0, 0, width, height)
		img= get(0, 0, width, height)

	} else if (key == 'f') {
		audio[3].play();
		image(images[3], 0, 0, width, height)
		img= get(0, 0, width, height)

	}	else if (key == 'g') {
		audio[4].play();
		image(images[4], 0, 0, width, height)
		img= get(0, 0, width, height)

	}	else if (key == 'h') {
		audio[5].play();
		image(images[5], 0, 0, width, height)
		img= get(0, 0, width, height)

	}else if (key == 'j') {
		audio[6].play();
		image(images[6], 0, 0, width, height)
		img= get(0, 0, width, height)

	}else if (key == 'k') {
		audio[7].play();
		image(images[7], 0, 0, width, height)
		img= get(0, 0, width, height)

	}else if (key == 'l') {
		audio[8].play();
		image(images[8], 0, 0, width, height)
		img= get(0, 0, width, height)

	}else if (key == 'q') {
		audio[9].play();
		image(images[9], 0, 0, width, height)
		img= get(0, 0, width, height)

	}else if (key == 'w') {
		audio[10].play();
		image(images[10], 0, 0, width, height)
		img= get(0, 0, width, height)

	}else if (key == 'e') {
		audio[11].play();
		image(images[11], 0, 0, width, height)
		img= get(0, 0, width, height)

	}else if (key == 'r') {
		audio[12].play();
		image(images[12], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 't') {
		audio[13].play();
		image(images[13], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'y') {
		audio[14].play();
		image(images[14], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'u') {
		audio[15].play();
		image(images[15], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'i') {
		audio[16].play();
		image(images[16], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'o') {
		audio[17].play();
		image(images[17], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'p') {
		audio[18].play();
		image(images[18], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'z') {
		audio[19].play();
		image(images[19], 0, 0, width, height);
	img= get(0, 0, width, height)

	}else if (key == 'x') {
		audio[20].play();
		image(images[20], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'c') {
		audio[21].play();
		image(images[21], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'v') {
		audio[22].play();
		image(images[22], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'b') {
		audio[23].play();
		image(images[23], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'n') {
		audio[24].play();
		image(images[24], 0, 0, width, height);
		img= get(0, 0, width, height)

	}else if (key == 'm') {
		audio[25].play();
		image(images[21], 0, 0, width, height);
		img= get(0, 0, width, height)


//NUMBERS
	}else if (key == '1') { //RANDOM RECT
	
			for (let i=0; i<1000; i++) {
				const x = random(0, width);
				const y = random(0, height);
				const myColor = get(x,y);
				rectMode(CENTER);
				fill (myColor);
				noStroke();
				rect(x,y, 8);
				}
			
	} else if (key == '2') {  //ERODE
		let e=1; 
		e++
		filter(ERODE,e);
		
	} else if (key == '3') {  //DILATATE
		let d=1; 
		d++
		filter(DILATE, d);

	} else if (key == '4') {  //POSTERIZE
		let p=10;
		p-=1
		filter(POSTERIZE,p);

	} else if (key == '5') {  //INVERT
		let i= 0.1;
		i+=0.1
		filter(INVERT,i);

	}  else if (key == '6') {  //BLUR
		let b=1; 
		b++
		filter(BLUR, b);
	}  


	else if (key == '0') {  //SAVE
		
		img= get( 0, 0, width, height);
		console.log(img)
		img.save('artwork', 'png');
	} 
	
}