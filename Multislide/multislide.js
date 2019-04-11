/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * Receiver file that cycles through images based on the input from the controller 
 */

// server variables

var dataServer;
var subKey = 'sub-c-35f7f7e2-5a7b-11e9-8df3-c6b3364936ee';

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "gameShoww";


//image variables
var img = [];
var totalImages = 16;
var nextQuestion = false;
var questionNumber = 0;

function preload() 
{
  //rather than making separate variables we are loading them all into an array
  for (var i = 0; i<totalImages; i++) 
  {
    img[i] = loadImage("load/img" + (i+1) + ".jpg");
  }

}


function setup() 
{
  getAudioContext().resume();
  createCanvas(windowWidth, windowHeight);
  background(255);
  


   // initialize pubnub
  dataServer = new PubNub(
  {
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming });
  dataServer.subscribe({channels: [channelName]});

}

function draw() 
{
  fill(0);
  textSize(60);
  // text(questionNumber,(width/2)-2.5,(height/2)+5);
}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               
      if(inMessage.message.question == true){
        background(255);
        image(img[inMessage.message.slide],0,0, (img[inMessage.message.slide].width*2) - 130, img[inMessage.message.slide].height + 330); //show the image corresponds to the slide number in the array
        questionNumber = inMessage.message.slide;
        if (questionNumber > 16){
          questionNumber = 1
        }
      }
}
