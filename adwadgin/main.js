var sett=document.getElementById("setting");
var title=document.getElementById("title");
var bodyy=document.getElementById("bd");
var st=document.getElementById("searchbar");
var mod=document.getElementById("mode");
function cwpp(){
    location.reload();
}
function disptime(){  
    var today=new Date();  
    var hh=today.getHours();  
    var mm=today.getMinutes();  
    var ss= today.getSeconds(); 
    var ww =today.getDay(); 
    if(mm<10){  
        mm='0'+mm;  
    }
    if (ss < 10) {
        ss = '0' + ss;
    }
    if(ww==1){
        document.getElementById("subtitle").innerHTML="星期一"+"</a>" ;
    }
    else if(ww==2){
        document.getElementById("subtitle").innerHTML="星期二"+"</a>" ;
    }
    else if(ww==3){
        document.getElementById("subtitle").innerHTML="星期三"+"</a>" ;
    }
    else if(ww==4){
        document.getElementById("subtitle").innerHTML="星期四"+"</a>" ;
    }
    else if(ww==5){
        document.getElementById("subtitle").innerHTML="星期五"+"</a>" ;
    }
    else if(ww==6){
        document.getElementById("subtitle").innerHTML="星期六"+"</a>" ;
    }
    else if(ww==7){
        document.getElementById("subtitle").innerHTML="星期天"+"</a>" ;
    }
    document.getElementById("title").innerHTML=hh+":"+mm+":"+ss+"</a>" ;
    
}   
function changemode(){
    mo=document.getElementById("mode").textContent;
    if(mo=="bing") document.getElementById("mode").innerHTML="baidu"+"</a>";
    if(mo=="baidu") document.getElementById("mode").innerHTML="bilibili"+"</a>";
    if(mo=="bilibili") document.getElementById("mode").innerHTML="bing"+"</a>";
}
function search(){
    moded=document.getElementById("mode").textContent;
    keyw=document.getElementById("searchbar").value;
    //alert(document.getElementById("mode").textContent);
    //alert((st=document.getElementById("searchbar").value))
    if(moded=="bing"){
        window.open('http://www.bing.com/search?q='+keyw,'_blank');
    }
    if(moded=="baidu"){
        window.open('https://www.baidu.com/s?wd='+keyw,'_blank');
    }
    if(moded=="bilibili"){
        window.open('https://search.bilibili.com/all?keyword='+keyw,'_blank');
    }
}
var mytime = setInterval("disptime()",100); 