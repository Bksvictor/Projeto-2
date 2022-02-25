var obstacle1,obstacle2,obstacle3,obstacle14,obstacle5,Ball,edges
var imgball

function preload(){
imgball = loadImage("./images/Ball.png")

}

function setup(){
    createCanvas(600,600)
   

    obstacle1 = createSprite(100,200,60,100)
    obstacle2 = createSprite(250,200,60,100)
    obstacle3 = createSprite(400,200,60,100)
    obstacle4 = createSprite(150,400,150,60)
    obstacle5 = createSprite(420,400,150,60)

    Ball = createSprite(80,80,30,30)

    Ball.addImage(imgball)
    Ball.scale = 0.15
    Ball.debug = false
    Ball.setCollider("circle",0,0,100)

    Ball.velocityX  = 5
    Ball. velocityY = 5

edges = createEdgeSprites()
    
 
}
function draw(){ 
    background(100)
     Ball.bounceOff(edges)


colideobstacle(Ball,obstacle1)
colideobstacle(Ball,obstacle2)
colideobstacle(Ball,obstacle3)
colideobstacle(Ball,obstacle4)
colideobstacle(Ball,obstacle5)


drawSprites()


}

function colideobstacle(objeto,obstacle){
objeto.bounceOff(obstacle)

}