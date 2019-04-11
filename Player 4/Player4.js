
var dataServer;
var pubKey = 'pub-c-f000b371-1290-4c26-b12f-f36c29fe965b';
var subKey = 'sub-c-35f7f7e2-5a7b-11e9-8df3-c6b3364936ee';

var img;

let playerFour = 4;

var points= 0;

var channelName = "gameShow";

function preload() {
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  img = createImg('https://i.pinimg.com/564x/96/e7/f2/96e7f29e948d2c99a209e9eba5ed69c6.jpg');
  img.hide();
  background(100);

dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });

  dataServer.addListener({ message: readIncoming });
  dataServer.subscribe({channels: [channelName]});
}

function draw() {
  image(img, 0,0,width,height); 

  //Points
fill(0);
textSize(60);
text("" + points,(width/2.3)-2.5,height/7);
  }


function mouseClicked(){
	sendTheMessage();
}

function sendTheMessage() {

  console.log("Player 4")

  //publish the number to everyone.
  dataServer.publish(
    {
      channel: channelName,
      player: playerFour
      })
    };


function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}




