let counter = 30;

function setup(){
  noCanvas();//limit animation
  
  var timer = select('#timer');
  timer.html('30'); //insert text


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
  
  function timeIt(){
    counter;
    timer.html(counter);
  }
  
  setInterval(timeIt, 1000);//native function 1000ms =1 s
  //request animationframe is also another func


function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               
      if(inMessage.message.question == true){
        background(0);
        counter --;
        }
      }


