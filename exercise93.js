// 93. Write a JavaScript program to remove an event listener from an element.

const remove_EventListener = (element, ev, func) => element.removeEventListener(ev, func)

const fn = (ev) => {
	ev.preventDefault();
	console.log("Button clicked !");
};
document.querySelector("button#PressButton").addEventListener(
	"click",
	fn,	
	false // dispatch event in the bubbling phase not in the capturing phase
);
remove_EventListener(document.querySelector("button#PressButton"), "click", fn);
