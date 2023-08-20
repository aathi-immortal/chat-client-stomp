const socket = new SockJS('https://chatserverstomp.azurewebsites.net/ws');
const stompClient = Stomp.over(socket);
let mm;
stompClient.connect({},(frame)=>
{
    console.log("connect" + frame);
    console.log("fhytyty");
    stompClient.subscribe("/chatroom",(message)=>
{
 console.log(message);   
 console.log("kooooooooooooooooooooo");
    message = JSON.parse(message.body);
    displayMessage(message);
    
});

const publicMessage = { content: "Hello, public chat!" };
stompClient.send('/app/message', {}, JSON.stringify(publicMessage));


        
});
function displayMessage(message)
{
const chatBox = document.getElementById("chat-box");
const button = document.getElementById("send-button")
button.innerHTML = "hhhhh";
console.log("inside the display" + message.content);
chatBox.innerHTML = message;
}    

// stompClient.send("/app/message",{},JSON.stringify({content:"hello frds"}));




// if(stompClient.connected)
// {
    
// }
// console.log("jijiji");
