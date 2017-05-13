/**
 * Created by liangkai on 2017/5/13.
 */
var box=document.getElementById("box");
var text=document.getElementById("text");
var btn=document.getElementById("btn");
var ul = document.createElement("ul");
ul.id="ul1";
ul.className="li1";
var div=document.createElement("div");
var div2=document.createElement("div2");
var date=new Date();
var year = date.getFullYear();
var yue = date.getMonth() + 1;
var ri = date.getDate();
var week = date.getDay();
var hour=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
var br=document.createElement("br");
btn.onclick=function() {
    //创建时间
    div=document.createTextNode(" "+year+"-"+yue+"-"+ri+"");
    div2=document.createTextNode(" "+hour+":"+min+":"+sec);
    var li = document.createElement("li");
    li.id="li";
    //创建删除功能
    var oA=document.createElement("a");
    oA.id="ddd";
    oA.href="#";
    oA.innerHTML="删除";
    oA.className="del";
    oA.style.display="block";

    //删除
    oA.onclick=function(){
        ul.removeChild(this.parentNode);
    };



    //解决兼容问题
    var ali=ul.children;
    if(ali.length==0){
        ul.appendChild(li);
    }
    else{
        ul.insertBefore(li,ali[0]);
    }
    //添加节点
    box.appendChild(ul);
    var textnode = document.createTextNode(text.value);


    li.appendChild(textnode);
    li.appendChild(oA);
    li.appendChild(div);
    li.appendChild(div2);

}

