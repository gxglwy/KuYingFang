var addre = document.location.toString();
var path = SitePath+'index.php?s=vod-show-id-'+SiteCid;
//var hrefs =(/html/.test(addre)==false)?addre:path;   //动态或者伪静态时使用
var hrefs =(/php/.test(addre)==true)?addre:path;       //静态时使用
for(var i=0;i<3;i++){
	hrefd =hrefs.replace(/\-order\-\w+\-/,'-');
	href =hrefd.replace(/\-order\-\w+/,'');
	href=href.replace(/\.html/,'');
	$("#ord a").eq(i).attr("href",href+$("#ord a").eq(i).attr("href"))
}
function showyear(){
	var $html='';
	var $year=year;
	var href =hrefs.replace(/\-year\-\d+/,'');
	href=href.replace(/\.html/,'');
	$("#yearall").attr("href",href);
	for(i=2013;i>1999;i--){
		if($year==''){
			$('#divYear a:eq(0)').addClass("Year");
		}
		if(i==$year){
			$html+='<a href="'+href+'-year-'+i+'.html" class="Year"><span></span>'+i+'</a> ';
		}
		else{
			$html+='<a href="'+href+'-year-'+i+'.html"><span></span>'+i+'</a> ';
		}
	}
	$('#yearhtml').html($html);
}
function showarea(){
	var $html='';
	var hrefd =hrefs.replace(/\-area\-\S+\-year/,'-year');
	var href =hrefd.replace(/\-area\-\S+/,'');
	href=href.replace(/\.html/,'');
	$("#areaall").attr("href",href);
	var $area=area;
	var array_str=['大陆','香港','台湾','欧美','韩国','日本','英国','法国','德国'];
	for(var key in array_str){
		if($area==''){
			$('#divArea a:eq(0)').addClass("Area");
		}
		if($area==array_str[key]){
			$html+='<a href="'+href+'-area-'+encodeURIComponent(array_str[key])+'.html" class="Area"><span></span>'+array_str[key]+'</a>';
		}
		else{
			$html+='<a href="'+href+'-area-'+encodeURIComponent(array_str[key])+'.html"><span></span>'+array_str[key]+'</a>';
		}
	}
	$('#areahtml').html($html);
}
function showletter(){
	var $html='';
	var href =hrefd.replace(/\-letter\-\S+/,'');
	href=href.replace(/\.html/,'');
	$("#letterall").attr("href",href);
	var $letter=letter;
	var array_strb=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	for(var key in array_strb){
		if($letter==''){
			$('#divletter a:eq(0)').addClass("letter");
		}
		if($letter==array_strb[key]){
			$html+='<a href="'+href+'-letter-'+encodeURIComponent(array_strb[key])+'.html" class="letter"><span></span>'+array_strb[key]+'</a>';
		}
		else{
			$html+='<a href="'+href+'-letter-'+encodeURIComponent(array_strb[key])+'.html"><span></span>'+array_strb[key]+'</a>';
		}
	}
	$('#letterhtml').html($html);
}
function showactor(){
	var $html='';
	var href =hrefd.replace(/\-actor\-\S+/,'');
	href=href.replace(/\.html/,'');
	$("#actorall").attr("href",href);
	var $actor=actor;
	var array_strb=['周星驰','成龙','李连杰','刘德华','甄子丹','周润发','梁朝伟','林正英','周迅','谢霆锋','姜文','葛优','李丽珍','朱茵','舒淇'];
	for(var key in array_strb){
		if($actor==''){
			$('#divactor a:eq(0)').addClass("actor");
		}
		if($actor==array_strb[key]){
			$html+='<a href="'+href+'-actor-'+encodeURIComponent(array_strb[key])+'.html" class="actor"><span></span>'+array_strb[key]+'</a>';
		}
		else{
			$html+='<a href="'+href+'-actor-'+encodeURIComponent(array_strb[key])+'.html"><span></span>'+array_strb[key]+'</a>';
		}
	}
	$('#actorhtml').html($html);
}
function showactor2(){
	var $html='';
	var href =hrefd.replace(/\-actor\-\S+/,'');
	href=href.replace(/\.html/,'');
	$("#actorall").attr("href",href);
	var $actor=actor;
	var array_strb=['胡歌','刘诗诗','张嘉译','海清','杨幂','文章','孙俪','钟汉良','张国立','吴秀波','李小璐','孙红雷','林志颖','林心如','唐嫣'];
	for(var key in array_strb){
		if($actor==''){
			$('#divactor2 a:eq(0)').addClass("actor");
		}
		if($actor==array_strb[key]){
			$html+='<a href="'+href+'-actor-'+encodeURIComponent(array_strb[key])+'.html" class="actor"><span></span>'+array_strb[key]+'</a>';
		}
		else{
			$html+='<a href="'+href+'-actor-'+encodeURIComponent(array_strb[key])+'.html"><span></span>'+array_strb[key]+'</a>';
		}
	}
	$('#actorhtml2').html($html);
}
if($("#areahtml").length>0){showarea();}
if($("#yearhtml").length>0){showyear();}
if($("#letterhtml").length>0){showletter();}
if($("#actorhtml").length>0){showactor();}
if($("#actorhtml2").length>0){showactor2();}