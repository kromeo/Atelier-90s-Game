/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * remote controller that sends a variable to all the listening devices
 */

// server variables

var dataServer;
var pubKey = 'pub-c-f000b371-1290-4c26-b12f-f36c29fe965b';
var subKey = 'sub-c-35f7f7e2-5a7b-11e9-8df3-c6b3364936ee';

//input variables

var points=0;

var channelName = "gameShow";

function setup() 
{
  getAudioContext().resume();
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  

   // initialize pubnub
  dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
dataServer.addListener({ message: readIncoming });
  dataServer.subscribe({channels: [channelName]});
}

function draw() 
{
buttons()
}

function buttons(){

    sendButton = createButton('PLAYER 1');
    sendButton.position(0, height/2);
    sendButton.mousePressed(sendTheMessage);
    sendButton.size(100,100);

    sendButton = createButton('PLAYER 2');
    sendButton.position(200, height/2);
    sendButton.mousePressed(sendTheMessagetwo);
    sendButton.size(100,100);

    sendButton = createButton('PLAYER 3');
    sendButton.position(400, height/2);
    sendButton.mousePressed(sendTheMessagethree);
    sendButton.size(100,100);

    sendButton = createButton('PLAYER 4');
    sendButton.position(600, height/2);
    sendButton.mousePressed(sendTheMessagefour);
    sendButton.size(100,100);

    

    sendTheMessage();
    sendTheMessagetwo();
    sendTheMessagethree();
    sendTheMessagefour();

  }

function sendTheMessage() {

  points +1;

  //publish the number to everyone.
  dataServer.publish(
    {
      channel: channelName,
      player:playerOne
}
}

function sendTheMessagetwo() {

  points +1;

  //publish the number to everyone.
  dataServer.publish(
    {
      channel: channelName,
      player:playerTwo
}
}

function sendTheMessagethree() {

  points +1;

  //publish the number to everyone.
  dataServer.publish(
    {
      channel: channelName,
      player:playerThree
}
}

function sendTheMessagefour() {

  points +1;

  //publish the number to everyone.
  dataServer.publish(
    {
      channel: channelName,
      player:playerFour
}
}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{  
whichPlayer = inMessage.message.player;
        

        console.log(whichPlayer)

}

unction windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}


