function hyoji2(){
var str="ハンバーグと鶏肉のトマト煮";
var cnt=document.timer2.moji2.value.length;
  if(cnt<13){
    document.timer2.moji2.value=str.substr(0,cnt+1);}
else{
  document.timer2.moji2.value="";
}
setTimeout("hyoji2()",1000);}