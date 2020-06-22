function preload(){
farmerimg=loadImage("images/download.png")
treeimg=loadImage("images/tree.png")
basketimg=loadImage("images/basket.png")
appleimg=loadImage("images/apple.png")
bananaimg=loadImage("images/banana.png")
monkey1img=loadImage("images/monkey1.png")
monkey2img=loadImage("images/monkey2.png")
}
function setup(){
    createCanvas(1200,500)
 farmer =createSprite(600,100)
    farmer.addImage(farmerimg)
    farmer.scale=.5
    appleGarden=createSprite(200,200)
    bananaGarden=createSprite(800,200)

}

function draw (){
background(0)

drawSprites();
text("x:"+mouseX+",y:"+mouseY,mouseX,mouseY)
if(keyDown(UP_ARROW)){
farmer.y=farmer.y-5

}
if(keyDown(DOWN_ARROW)){
    farmer.y=farmer.y+5
    
    }
    if(keyDown(LEFT_ARROW)){
        farmer.x=farmer.x-5
        
        }
        if(keyDown(RIGHT_ARROW)){
            farmer.x=farmer.x+5
            
            }
if (farmer.isTouching(appleGarden)){
    bg1=createSprite(600,250,1200,500)
    bg1.shapeColor="black";
    tree=createSprite(600,250)
    tree.addImage(treeimg)
    basket=createSprite(500,450)
    basket.addImage(basketimg)
    basket.scale=.3
    basket.x=mouseX
    var a = 1
    if(a=1){
    apple=createSprite(random(400,800),200)
    apple.scale=.1
    apple.addImage(appleimg)
    apple.velocityY=3
    }

 }
 if(farmer.isTouching(bananaGarden)){
    bg2=createSprite(600,250,1200,500)
    bg2.shapeColor="black";
    banana=createSprite(600,250)
    banana.addImage(bananaimg)
    banana.scale=.1
    monkey=createSprite(100,250)
    monkey.addImage(monkey1img)
    monkey.scale=.2
    if(keyDown(UP_ARROW)){
        monkey.y=monkey.y-5
        
        }
        if(keyDown(DOWN_ARROW)){
            monkey.y=monkey.y+5
            
            }
            if(keyDown(LEFT_ARROW)){
                monkey.x=monkey.x-5
                
                }
                if(keyDown(RIGHT_ARROW)){
                    monkey.x=monkey.x+5
                    
                    }
 }
}