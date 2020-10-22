var dog, dogObject, happyDog, foodS, foodStock;
var database;


function preload()
{
  dog = loadImage("Dog.png");
          happyDog = loadImage("happydog.png");
}
function setup() {
	createCanvas(500, 500);
  
               dogSprite = createSprite(250, 300, 30, 30);
    dogSprite.addImage(dog);
    dogSprite.scale = 0.3;
database=firebase.database();
    foodStock=database.ref('food');
              foodStock.on("value", readStock);}
function readStock(data)
{
  foodS=data.val();
}
function writeStock(x)
{
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  } 
  database.ref('/').update({
    food : x
  })
}
function draw() {  
 background(0,204,204);
       if(keyWentDown(UP_ARROW))
       {
  writeStock(foodS-1);
  dogSprite.addImage(happyDog);
}

drawSprites();
textSize(20);
fill("black");
        text("Food Remaining : "+foodS, 120, 150);
textSize(20);
                    fill("black");
  text("Note : Press UP_ARROW Key To Feed Drago Milk!", 35,70);
}

