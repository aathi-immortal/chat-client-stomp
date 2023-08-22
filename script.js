
var stompClient = null;
var notificationCount = 0;

$(document).ready(function() {
    console.log("Index page is ready");
    connect();

    document.getElementById("send").addEventListener("click",(event)=>
    {
        
        event.preventDefault();
        sendMessage();
    })

});

function connect() {
    var socket = new SockJS("https://chatserverstomp.azurewebsites.net/ws");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        stompClient.subscribe('/chatroom/public', function (message) {
            message = JSON.parse(message.body);
            message = message.messageContent;
            displayMessage(message);
            
            
        });

        
    });
}



function sendMessage() {
    console.log("sending message");
    message =  JSON.stringify({'messageContent': $("#message-input").val()});
    
    stompClient.send("/app/message", {},message);
}



function displayMessage(messageContent) {
    // if()
    let card = document.getElementById("message-list");
    
    card.innerHTML += `<div><p>${messageContent}</p></div>`;



} 


