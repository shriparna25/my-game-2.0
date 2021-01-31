var startscreen, playbutton, playbutton_Img;
var gameState = 0;
var finalbg;
var doraemon_stable, doraemon_running ;
var doraemon;
var ground;
var coin_img, coin;
var sunio_img, nobita_img, gian_img;
var ob1_a_img, ob1_b_img, ob1_c_img;
var ob2_a_img, ob2_b_img, ob2__img, ob2_d_im;
var ob3_a_img, ob3_b_img, ob3_c_img;
var ob4_a_img, ob4_b_img, ob4_c_img;
var ob5_img, ob6_img;

function preload(){

startscreen = loadImage("startscreen.jpg");
playbutton_img = loadImage("play.png");

finalbg = loadImage("final background img.png")

doraemon_stable = loadAnimation("doraemon6.png");
doraemon_running = loadAnimation("doraemon1.png","doraemon2.png","doraemon3.png","doraemon4.png","doraemon5.png","doraemon6.png");

coin_img = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png","coin7.png","coin8.png","coin9.png","coin10.png");

gian_img = loadImg("gian.png");
sunio_img = loadImg("unio.png");
nobita_img = loadImg("nobita.png");

ob1_a_img = loadImage("obstacles/ob1_a.png");
ob1_b_img = loadImage("obstacles/ob1_b.png");
ob1_c_img = loadImage("obstacles/ob1_c.png");

ob2_a_img = loadImage("obstacles/ob2_a.png");
ob2_b_img = loadImage("obstacles/ob2_b.png");
ob2_c_img = loadImage("obstacles/ob2_c.png");

ob3_a_img = loadImage("obstacles/ob3_a.png");
ob3_b_img = loadImage("obstacles/ob3_b.png");
ob3_c_img = loadImage("obstacles/ob3_c.png");

ob4_a_img = loadImage("obstacles/ob4_a.png");
ob4_b_img = loadImage("obstacles/ob4_b.png");
ob4_c_img = loadImage("obstacles/ob4_c.png");

ob5_img = loadImage("obstacles/ob5_img.png");

ob6_img = loadImage("obstacles/ob6_img.png");




}

function setup(){
createCanvas(windowWidth-50, windowHeight-50 )

playbutton = createSprite(450, 200);
playbutton.visible = false;

doraemon = createSprite(width/2, height-100);
doraemon.addAnimation("stable", doraemon_stable);
doraemon.addAnimation("running", doraemon_running);
doraemon.visible = false;
doraemon.scale = 0.8;

doraemon.setCollider("circle", 0, 0, 100);

ground = createSprite(width*5, height-50, width*10, 20);
ground.visible = false;



}


function draw(){

if(gameState == 0){
    background(startscreen);
    playbutton.visible = true;
    playbutton.addImage(playbutton_img);
    playbutton.scale = 0.7;

    if(mousePressedOver(playbutton)){
        gameState= 1;
        playbutton.visible = false;
    }
}
else if(gameState === 1){   
    background("pink");
    image(finalbg, 0, 0, width*10 , height);
    doraemon.visible = true;


    if(keyWentDown("RIGHT_ARROW")){
        doraemon.velocityX = 5;
        doraemon.changeAnimation("running", doraemon_running);
    }

    if(keyWentUp("RIGHT_ARROW")){
        doraemon.velocityX = 0;
        doraemon.changeAnimation("stable", doraemon_stable);
    }

    if(keyDown("space")&& doraemon.y>=770){
        doraemon.velocityY = -20;

    }

    doraemon.velocityY += 0.5;
    doraemon.collide(ground);

    camera.position.x = doraemon.x;
    camera.position.y = height/2;
    if(ground.x%Math.round(random(200, 500))===0){
        Spawncoin();
    }
}



//console.log(doraemon.y)

drawSprites();
}

function Spawncoin(){

coin = createSprite(20, height/2);
coin.addAnimation("coins", coin_img);
coin.x = doraemon.x + 700;
coin.y = random(height/4, height/2);
coin.scale = 0.5;

}
