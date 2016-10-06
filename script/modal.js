;(function(){
var follow = document.getElementById('follow');
var modal = document.getElementById('modal');
var close = modal.querySelector('.modal-close');
var form = document.getElementById('login');
var user_info = document.getElementById('user_info');
var password_info = document.getElementById('password_info');
var btn = document.getElementById('login-btn');

EventUtil.addHandler(follow,'click', function(){
	if(!cookieUtil.get('followSuc')){
		modal.style.display = 'block';
	}
});
EventUtil.addHandler(close,'click',function(){
	modal.style.display = 'none';
});


//账号验证
EventUtil.addHandler(form.username,'focus',function(){
	user_info.innerHTML = '';
});
EventUtil.addHandler(form.username,'blur',validateUserName);


//密码验证
EventUtil.addHandler(form.password,'focus',function(){
	password_info.innerHTML = '';
})
EventUtil.addHandler(form.password,'blur',validatePassword);


//提交按钮 
EventUtil.addHandler(form,'submit',function(event){
	event = EventUtil.getEvent(event);
	if(validateUserName()&&validatePassword()){
		alert('账号密码正确');
		get('http://study.163.com/webDev/login.htm',{userName:md5(form.username.value),password:md5(form.password.value)},
		loginSuc);

	}else{
		alert('账号或密码错误')
		
	}
	EventUtil.preventDefault(event);
});


function loginSuc(data){
	get('http://study.163.com/webDev/attention.htm',{},followSuc);
	modal.style.display = 'none';
}
function followSuc(){
	document.getElementById('follow-wrap').style.display = 'none';
	document.querySelector('.followed').style.display = 'inline-block';
	cookieUtil.set('followSuc','1')
}
function validateUserName(){
	if(/^studyOnline$/.test(form.username.value)){
		user_info.innerHTML = '账号正确';
		user_info.style.color = 'green';
		return true;
	}else{
		user_info.innerHTML = '账号错误';
		user_info.style.color = 'red';
		return false;
	}
}

function validatePassword(){
	if(/^study\.163\.com$/.test(form.password.value)){
		password_info.innerHTML = '密码正确';
		password_info.style.color = 'green';
		return true;

	}else{
		password_info.innerHTML = '密码错误';
		password_info.style.color = 'red';
		return false;
	}
}})();