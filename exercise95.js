// 95. Write a JavaScript program to add an event listener to an element with the ability to use event delegation. 

const addEvent = (element, ev, fn , opt) => element.addEventListener(ev, fn, ...Object.values(opt));

const sayHelloWorld = _ => console.log("Hello world !");

// Add the event to the button !
addEvent(
	document.querySelector("button#mainButton"),
	"click",
	sayHelloWorld,
	{dispatchEventInThe_Capturing_Phase : false}
);


//document.getElementById("p[data-target-name = 'David']");

