//your JS code here. If required.
let btn = document.getElementById("enterBtn");
let ptag = document.getElementById("status");
function changeText(){
	let h1tag = document.createElement("h1");
	h1tag.innerText="Entered Metaverse";
	ptag.appendChild(h1tag);
}