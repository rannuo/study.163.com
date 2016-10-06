;(function(){
		var noticeHtml = 
		'<div id="notice" class="notice-f">\
			<div class="notice">\
				<div class="notice-left">网易云课堂微专业，帮你掌握专业技能，令你求职或加薪多一份独特优势！<a href="http://study.163.com/smartSpec/intro.htm#/smartSpecIntro" target="_blank">立即查看&gt;</a></div>\
				<div id="notice-close" class="notice-right"><i></i>不再提醒</div>\
			</div>\
		</div>';

		EventUtil.addHandler(window,'load',function(){
			document.getElementById('notice-wrap').appendChild(html2node(noticeHtml));
			var notice = document.getElementById('notice');
			var noticeClose = document.getElementById('notice-close');
			noticeClose.onclick = function(){
				notice.style.display = 'none';
				cookieUtil.set('noticed',true);
			}
			if(cookieUtil.get('noticed')){
				notice.style.display = 'none';
			}else{
				notice.style.display = 'block';
			};
		});
	}())