function checklist(obj,n){
	
	for(i=1;i<7;i++){
		var list=document.getElementById('new'+i);
		list.style.display="none";
		var li=document.getElementById('li'+i);
		li.className="";
	}
	obj.className="on";
	var list=document.getElementById('new'+n);
	list.style.display="block";
}
