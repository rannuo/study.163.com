

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
<<<<<<< HEAD

function html2node(str){
    var container = document.createElement('div');
    container.innerHTML = str;
    return container.children[0];
}
		
=======


>>>>>>> origin/master
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
<<<<<<< HEAD

/**
 * [get description]
 * @param  {String}   url      请求url地址 如var url = "http://study.163.com/webDev/couresByCategory.htm" ;
 * @param  {Object}   options  请求参数为js字面量对象形式 如var options = {pageNo:1,psize:20,type:10};
 * @param  {Function} callback 请求成功回调的函数必须传入一个参数表示接受xhr.responseText
 * 
 */
function get(url,options,callback) {
    //1.创建xhr对象
    var xhr = new XMLHttpRequest();
    //2. 在open方法之前监听redaystatechange
    xhr.onreadystatechange = function () {
        //2.1 判断readyState==4
        if(xhr.readyState==4){
            //2.2 判断状态码
            if( (xhr.status>=200 && xhr.status<300) || xhr.status==304 ){
                callback(xhr.responseText);
            }
            else{
                console.log("ajax请求不成功,错误状态码为："+xhr.status);
            }
        }   
    }
    //如果传入的参数不为空
    if(!!options){
        url = url+"?"+serialize(options);
        console.log("请求参数经过序列化后的url地址："+url);
    }
    //请求参数序列化的方法
    function serialize(data) {
        if(!data){//再次对参数判断确保返回为字符串
            return "";
        }
        var arry = [];
        for(var name in data){
            //如果name属性不是data原型对象上的属性或则name.value属性值为function则跳出循环。
            if( (!data.hasOwnProperty(name)) || typeof data[name]==="function" ){
                continue ;
            }
            //求出value值
            var value = data[name].toString();
            //对name 和进行编码
            name = encodeURIComponent(name);
            value = encodeURIComponent(value);
            var item = name + "=" + value;
            arry.push(item);
        }
        return arry.join("&");
    }
    //3.open方法  url地址要加上option序列化
    xhr.open("get",url,true);
    //xhr.setReuestHeader("Content-Type","application/x-www-form-urlencoded");头部信息表单编码 可以省略
    //xhr.setReuestHeader("MyHeader","MyValue");自定义头部信息 可以省略
    //4.send方法
    xhr.send(null);//get方法必须传入null
    //如果是post请求则为send(serialize(formdata));
}

/**
 * AJAX请求POST方法的封装
 * @param  {String}   url      请求资源的url
 * @param  {Object}   options  请求的查询参数
 * @param  {Function} callback 请求的回调函数，接收XMLHttpRequest对象的responseText属性作为参数
 * @return {void}              无
 */
function post(url, options, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(callback){
        if(xhr.readyState == 4){
            if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                callback(xhr.responseText);
            }else{
                alert('Request wos unsuccessful: ' + xhr.status);
            }
        }
    }
    xhr.open('post',url,true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.send(serialize(options));
}
    
/**
 * 将对象序列化
 * @param  {Object} data 待序列化的对象
 * @return {String}      序列化后的字符串
 */
function serialize(data){
    if(!data) return '';
    var pairs = [];
    for(var name in data){
        if(!data.hasOwnProperty(name)) continue;
        if(typeof data[name] === 'function') continue;
        var value = data[name].toString();
        name = encodeURIComponent(name);
        value =  encodeURIComponent(value);
        pairs.push(name+'='+value);
    }
    return pairs.join('&');
}
=======
>>>>>>> origin/master
