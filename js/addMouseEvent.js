function addMouseEvent(obj,fn){	

	function fnWheel(ev){
		var oEvent = ev||event;
		var down =false;
		//chrome
		if(oEvent.wheelDelta){
			if(oEvent.wheelDelta<0){
				down = true;
			}else{
				down = false;
			}
			
		}else{
			//FF
			if(oEvent.detail>0){
				down = true;
			}else{
				down = false;
			}	
		}
		fn(down);
		//阻止默认事件
		oEvent.preventDefault&&oEvent.preventDefault();
		return false;
	}
	obj.onmousewheel = fnWheel;
	obj.addEventListener&&obj.addEventListener('DOMMouseScroll',fnWheel,false);
}
