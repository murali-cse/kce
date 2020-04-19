var count=0;
var v;

function todo(){
	v=document.getElementById('todo').value;
	if(v=="" || v==" "){
		document.getElementById('error').innerHTML = "*please enter something.. ";
	}
	else{
		document.getElementById('error').innerHTML = "";
		

		var p=document.createElement("p");
		count+=1;	
		p.setAttribute("id","l"+count);
		p.innerHTML=" "+v;
		document.getElementById('list').append(p);

		var sp=document.createElement("span");
		sp.setAttribute("id","s"+count);
		document.getElementById('l'+count).append(sp);

		var b=document.createElement('i');
		b.setAttribute("class","fa fa-trash");
		b.setAttribute("id","l"+count);
		b.setAttribute("onclick","del(this.id)");
		document.getElementById('s'+count).append(b);
		document.getElementById('todo').contentEditable = "true";
		document.getElementById('todo').value=" ";
	}
}
function del(id){
	document.getElementById(id).remove();
}