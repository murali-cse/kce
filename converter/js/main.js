window.onload = ()=>{
document.getElementById('output').readOnly="true";
}
function conv(){
	var x=document.getElementById('select').value;
	var y=document.getElementById('outputSelect').value;
	var inp=document.getElementById('input').value;
	var out=document.getElementById('output');
	if(x==y){
		out.value=inp;
	}
	else if(x=='c' && y!='f' || x=='f' && y!='c'|| x=='kg' && y!='lb' || x=='lb' && y!='kg' || x=='m' && y!='y' || x=='y' && y!='m'){
		out.value="Sorry ! Can't Convert";
	}
	if(x=='y' && y=='m'){
		out.value=inp/1.094;
	}
	if(x=='m' && y=='y'){
		out.value=inp*1.094;
	}
	if(x=='kg' && y=='lb'){
		var lb=(inp*2.205);
		out.value=lb;
	}
	if(x=='lb' && y=='kg'){
		var kg=(inp/2.205);
		out.value=kg;
	}
	if(x=='c' && y=='f'){
		var f=(inp*(9/5))+32;
		out.value=f;
	}
	if(x=='f' && y=='c'){
		var c=(inp-32)*(5/9);
		out.value=c;
	}
}
