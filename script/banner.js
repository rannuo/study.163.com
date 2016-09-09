// banner.js
	var viewport = document.querySelector('.banner');
	var imgs = document.querySelector('.banner-container').getElementsByTagName('img');
	var dots = document.querySelector('.banner-dots').getElementsByTagName('i');
	var index = 0;
	var preindex=0;
	imgs[index].style.opacity=1;

	var timer2 = null;
	function fadeIn(index){
		clearInterval(timer2);
		var beta = 0;
		timer2=setInterval(function(){
			if(beta==1){
				clearInterval(timer2);
			}else{
				beta +=0.1;
				imgs[index].style.opacity = beta;
			}
		},50);
	}


	var timer3 = null;
	function fadeOut(index) {
		clearInterval(timer3);
		var alpha = 1;
		timer3 = setInterval(function(){
			if(alpha==0){
				clearInterval(timer3);
			}else{
				alpha -= 0.1;
				imgs[index].style.opacity = alpha;
			}
		},50)

	}

	function animate(preindex,index) {
		fadeOut(preindex);
		fadeIn(index);
	}

	function showDot(index) {
		dots[preindex].className='';
		dots[index].className='ondot';
	}

	for(var i = 0;i <dots.length;i++){
		dots[i].onclick = function(){
			preindex=index;
			index=parseInt(this.getAttribute('index'));
			if(preindex===index){
				return;
			}else{
				animate(preindex,index);
				showDot(index);
			}
		}
	}

	var timer1 = null;
	function play(){
		clearInterval(timer1);
		timer1 = setInterval(function(){
			preindex=index;
			if(index==2){
				index=0;
			}else{
				index++;
			}
			animate(preindex,index);
			showDot(index);
		},2000);
	}

	function stop(){
		clearInterval(timer1);
	}

	play();
	viewport.onmouseover = stop;
	viewport.onmouseout = play;