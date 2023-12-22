// add some bubbles, because people like bubbles
var bubbleboxes = document.getElementsByClassName("bubblebox");
// space out the z indexes
var step = 145 / bubbleboxes.length;
for (var i = 0; i < bubbleboxes.length; i++) {
    var bubbleCount = 10;
    while (bubbleCount--) {
        var bubble = document.createElement("img");
        bubble.className = "bubble";
        bubble.src = `./images/point1_bubble/${(Math.ceil(Math.random() * 10))}.webp`;
        bubble.style.width = (5 + (Math.random() * 20)) + '%';
        bubbleboxes[i].appendChild(bubble);
        bubble.style.left = (Math.random() * 100) + "%";
        bubble.style.animation = "bubble-float";
        bubble.style['animation-duration'] = (5 + (Math.random() * 10)) + 's';
        bubble.style['animation-delay'] = (Math.random() * 20) + 'ms';
        bubble.style['animation-iteration-count'] = 'infinite';
    }

    bubbleboxes[i].style.transform = "translateZ(-" + (step * i) + "px)"
}