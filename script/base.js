

//跨浏览器事件对象
var EventUtil = {
	addHandler : function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			element['on'+type] = handler;
		}
	},
	getEvent: function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	removeHandler: function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type] = null;
		}
	},
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
};


//window对象
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
		oldonload();
		func();
		}
	}
};


//cookie对象
var cookieUtil = {

	get: function (name){
		var cookieName = encodeURIComponent(name)+'=',
			cookieStart = document.cookie.indexOf(cookieName),
			cookieValue = null;

		if(cookieStart > -1){
			var cookieEnd = document.cookie.indexOf(';',cookieStart);
			if(cookieEnd==-1){
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length, cookieEnd));
		}

		return cookieValue;
	},

	set: function (name,value,expires,path,domain,secure){
		var cookieText = encodeURIComponent(name)+'='+encodeURIComponent(value);

		if(expires instanceof Date){
			cookieText += "; expires="+expires.toGMTString();
		}

		if(path){
			cookieText += ";path="+path;
		}

		if(domain){
			cookieText += "; domain="+domain;
		}

		if(secure){
			cookieText += "; secure";
		}

		document.cookie = cookieText;
	},

	unset: function(name,path,domain,domain,secure){
		this.set(name,"",new Date(0),path,domain,secure);
	}
};
