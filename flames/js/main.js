window.onload = ()=>{
}
function calculate(){
let male=document.getElementById("male").value;
let female=document.getElementById("female").value;
for(var ii=0;ii<male.length;ii++){
	for(var jj=0;jj<female.length;jj++){
		if(male.charCodeAt(ii)===female.charCodeAt(jj)){
			male=male.substring(0, ii)+male.substring(ii+1,male.length);
			female=female.substring(0, jj)+female.substring(jj+1,female.length);
			jj=0;
			ii=0;
			break;
		}
	}
 }
console.log(male);
console.log(female);
let a=Array.from(male);
let b=Array.from(female);
let  total= a.length+b.length;
let count=0;
let j=0;
let t=0;
let dummyArray=[];
let f="flames";
let flames = Array.from(f);
for(;;){
	if(flames.length===1){
		let r=result(flames[0]);
		console.log(r);
		break;
	}
	else{
		for(let i=0;i<total;i++){
			for(j=0;j<flames.length;){
				if(count===(total-1)){
					t=j;
					let rem=flames.indexOf(flames[j]);
					if(rem > -1){
						flames.splice(rem,1);
					}
					count=0;
					if(j!=0){
						j=j;
					}
				}
				else{
					count++;
					j++;
				}
			}
			if(flames.length==1){
				break;
			}
		}
	}

}
}
function result(a){
	if(a=='f'){
		document.getElementById("out").remove();
		createDiv();
		friends();
	}
	if(a=='l'){
		document.getElementById("out").remove();
		createDiv();
		love();
	}
	if(a=='a'){
		document.getElementById("out").remove();
		createDiv();
		affection();
	}
	if(a=='m'){	
		document.getElementById("out").remove();
		createDiv();
		marriage();
	}
	if(a=='e'){
		document.getElementById("out").remove();
		createDiv();
		enemy();
	}
	if(a=='s'){
		document.getElementById("out").remove();
		createDiv();
		sister();
	}
}
function createDiv(){
	let div=document.createElement("div");
	div.setAttribute("id","out");
	document.getElementById("centerTag").append(div);
}

function friends(){
	document.getElementById("result").innerHTML = "Friends";
	let f=document.createElement("img");
	f.setAttribute("class","img-responsive");
	f.setAttribute("id","friends");
	f.setAttribute("src","https://media1.giphy.com/media/uiL5Zar1BySSAk7pNk/200.gif");
	document.getElementById("out").append(f);
	
}
function love(){
	document.getElementById("result").innerHTML = "Love";
	let f=document.createElement("img");
	f.setAttribute("class","img-responsive");
	f.setAttribute("id","love");
	f.setAttribute("src","https://thumbs.gfycat.com/FamousHappygoluckyDrafthorse-size_restricted.gif");
	document.getElementById("out").append(f);
}
function affection(){
	document.getElementById("result").innerHTML = "Affection";
	let f=document.createElement("img");
	f.setAttribute("id","affection");
	f.setAttribute("class","img-responsive");
	f.setAttribute("src","https://media.giphy.com/media/11k6U6oFGdAl8c/giphy.gif");
	document.getElementById("out").append(f);
	
	}
function marriage(){
	document.getElementById("result").innerHTML = "Marriage";
	let f=document.createElement("img");
	f.setAttribute("class","img-responsive");
	f.setAttribute("id","marriage");
	f.setAttribute("src","https://thumbs.gfycat.com/DeliciousInsidiousFireant-max-1mb.gif");
	document.getElementById("out").append(f);
	}
function enemy(){
	document.getElementById("result").innerHTML ="Enemy";
	let f=document.createElement("img");
	f.setAttribute("class","img-responsive");
	f.setAttribute("id","enemy");
	f.setAttribute("src","https://media1.tenor.com/images/27ec79cc5a0e05136f1b0f4fd5a28796/tenor.gif?itemid=10218425");
	document.getElementById("out").append(f);
	}
function sister(){
	document.getElementById("result").innerHTML = "sister";
	let f=document.createElement("img");
	f.setAttribute("class","img-responsive");
	f.setAttribute("id","sister");
	f.setAttribute("src","https://tamil.statusdp.com/videos/icon.php?id=1KfExpYGC98M03cN72NKVNwB111hMAmxd");
	document.getElementById("out").append(f);	
	}