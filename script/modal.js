
var follow = document.getElementById('follow');
var modal = document.getElementById('modal');
var close = modal.querySelector('.modal-close');
EventUtil.addHandler(follow,'click', function(){
	modal.style.display = 'block';
});
EventUtil.addHandler(close,'click',function(){
	modal.style.display = 'none';
});