var movingRect, fixedRect; 
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() { 
  createCanvas(1200,600);
   fixedRect= createSprite(600, 200, 50, 50);
    fixedRect.shapeColor="green";
     movingRect= createSprite(400, 800, 80, 50); 
     movingRect.shapeColor="green";
     
     gameObject1 = createSprite(100,200,70,70); 
     gameObject1.shapeColor=" green";
      gameObject1.debug = true;

       gameObject2 = createSprite(200,200,70,70); 
       gameObject2.shapeColor=" green";
        gameObject2.debug = true; 

        gameObject3 = createSprite(400,100,70,70); 
        gameObject3.shapeColor=" green"; 
        gameObject3.debug = true; 

        gameObject4 = createSprite(400,200,70,70); 
        gameObject4.shapeColor=" green"; 
     gameObject4.debug = true;

     movingRect.velocityY=-8;
     gameObject3.velocityY=8;
     } 

     function draw() 
     { 
       background("black"); 
       //movingRect.x = World.mouseX;
       //movingRect.y = World.mouseY; 
  //if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    // && fixedRect.x - movingRect.x< movingRect.width/2+fixedRect.width/2
    // &&movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
     //&& fixedRect.y - movingRect.y< movingRect.height/2+fixedRect.height/2  ) 
  //{ 
   // fixedRect.shapeColor="yellow"; 
   // movingRect.shapeColor="yellow"; 
  //} 
  //else { 
    //fixedRect.shapeColor="blue"; 
   // movingRect.shapeColor="blue";
  // } 
   bounceOff(movingRect,gameObject3);

   
   drawSprites();
   }
   