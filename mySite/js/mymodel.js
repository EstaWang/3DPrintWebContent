/**
 * Created by shuying on 2014/12/1.
 */
 
 //添加事件函数
function addListener(obj,fn,ev){
	if(window.addEventListener){
		obj.addEventListener(ev,fn,false);
		}
	else if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
		}
	else{
		obj['on'+ev]=fn;
		}
	}
function removeListener(obj,fn,ev){
	if(window.removeListener){
		obj.removeListener(ev,fn,false);
		}
	else if(obj.attachEvent){
		obj.detachEvent("on" + ev, fn);  
		}
	else{
		delete obj['on'+ev];
		}
	}
	
//点赞，收藏，差评
function giveView(){
	var flag=false;
	//原始选项
	var option=['点赞','差评','收藏'];
	//变化选项
	var newOption=['取消','已收藏'];
	var myview=document.getElementById('myview');
	var oDiv=myview.getElementsByTagName('div');
	var len=oDiv.length;
	//添加点击事件
	for(var i=0;i<len;i++){
		//闭包，时间委托为每个按钮添加事件
		(function(num){addListener(oDiv[num],function(){
			var oSpan=this.getElementsByTagName('span')[0];
			if(oSpan.innerHTML==option[num]){
				if(num==2){
					oSpan.innerHTML=newOption[1];
					}
				else{
					if(!flag){
					oSpan.innerHTML=newOption[0];
					}
					flag=true;
				}
				}
			else{
				if(num!=2){
				oSpan.innerHTML=option[num];
				flag=false;
				}
			}
			},'click')})(i);
	}
}
//为窗口载入添加事件
addListener(window,giveView,'load');