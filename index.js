/* 一、头部*/
/* 1、默认隐藏子菜单
 * 2、鼠标移入：显示当前子菜单
 * 3、鼠标移出：隐藏子菜单
 */
var menu = $('#header #example-navbar-collapse li.menu');
var submenu = $('#header #example-navbar-collapse li.menu ul.wrap');
submenu.css('display', 'none');
menu.mouseover(
	function() {
		$(this).find('.wrap').slideToggle(500);
		$(this).siblings().find('.wrap').css('display', 'none');
	}
);
menu.mouseout(
	function() {
		submenu.css('display', 'none');
	}
);

/* 头部新增的搜索提示框 */
/* 给输入框增加键盘onkeyup事件：
	    循环比较数组中的每个元素与输入值是否匹配
			若匹配显示，否则隐藏*/
	
var lis=$('#header ul.mycourse li');
$('#myInput').keyup(
		function(){
				for(var i=0;i<lis.length;i++){
						if(lis[i].innerHTML.toUpperCase().indexOf($('#myInput').val().trim().toUpperCase())>-1){
								lis[i].style.display='block';
						}else{
								lis[i].style.display='none';
						}
				}
		}
);
			


/*四、我们的成员*/
/* 1、鼠标移入照片上，出现个人介绍
   2、鼠标移出照片，隐藏个人介绍
   3、每隔10秒，随机显示另外3位成员信息*/

var timer = setInterval(fun, 5000);
var div = $('.our-member .data-item div');
var p = $('.our-member .data-item p');
div.mouseover(
	function() {
		$(this).siblings('p').show(500);
		clearInterval(timer);
	}
);
div.mouseout(
	function() {
		p.hide(500);
		timer = setInterval(fun, 5000);
	}
);
// 定义同学对象数组
// 定义学生的构造函数
function Student(id, name, hometown, motto, title) {
	this.id = id;
	this.name = name;
	this.hometown = hometown;
	this.motto = motto;
	this.title = title;
}
// 创建若干对象
var yd1 = new Student(1, '夏阳', '台州', '细节决定成败，态度决定一切', '班长');
var yd2 = new Student(2, '杨翌', '丽水', '心态决定命运，自信走向成功', '团支书');
var yd3 = new Student(3, '郑良靖', '温州', '最美的年龄为最纯的梦想尽最大的努力', '纪律委员');
var yd4 = new Student(4, '夏启田', '温州', '细节决定成败，态度决定一切', '心理委员');
var yd5 = new Student(5, '陈用群', '温州', '心态决定命运，自信走向成功', '412寝室');
var yd6 = new Student(6, '陈一颖', '台州', '最美的年龄为最纯的梦想尽最大的努力', '团副');

// 创建班级学生对象数组
var yd1701 = [yd1, yd2, yd3, yd4, yd5, yd6];
// 计时器重复执行的函数：随机产生3个学生id，将页面是的照片，座右铭，介绍都替换成该学生
function fun() {
//	console.log('123');
	// 产生3个[0,7)的随机数
	for(var i = 0; i <3; i++) {
		var random = Math.floor(Math.random() * 6);
//		$('.our-member .data-item div.item1 img').attr('src','img/pic/' + random + '.jpg');
//		div.eq('i').find('img').src = 'img/pic/' + random + '.jpg';
        var img='img/pic/' + yd1701[random].id + '.jpg'
		div.eq(i).find('img').attr('src',img);
		p.eq(i).text(yd1701[random].motto);
		var str= yd1701[random].title + "：" +
			yd1701[random].name + "，" + yd1701[random].hometown;
		p.eq(i).siblings('h4').text(str);
	}
}

/*我们的活动*/
/* 鼠标移入：背景颜色变化，字体图标颜色变化
   鼠标移出：变回原样*/
var event_item=$('.our-event .data-item .item');
event_item.mouseover(
	function(){
		$(this).css('background','#1DA2E2');
		$(this).children().css('color','white');
		
	}
);
event_item.mouseout(
	function(){
		$(this).css('background','white');
		$(this).find('span').css('color','#1DA2E2');
		$(this).find('h3').css('color','#919191');
		$(this).find('h4').css('color','#919191');
	}
);

/* 我们的课程 */
/* 鼠标移入某个li，该li特殊显示，其余li普通样式
     将该li的class name设置为card-item card-active，其他li的class name为card-item */
var li=$('.our-course .data-course ul.card-area li.card-item');
li.mouseover(
		function(){
			$(this).attr('class','card-item card-active');
			$(this).siblings().attr('class','card-item');
});

/* 右边：返回顶部 */
/* 1、首先将最下面返回顶部的箭头隐藏
   2、当滚动条的位置处于顶部100像素以下时，返回顶部的箭头出现，否则隐藏
	 3、当点击“返回顶部箭头”后，回到页面顶部位置
	 4、鼠标移入右边每块出现相应内容，移出隐藏(右边每块的背景色和图片在css中已设置)*/
	$('#slider-goTop') .hide();
	$(window).scroll(
			function(){
					if($(window).scrollTop()>100){
							$('#slider-goTop').fadeIn();
					}else{
							$('#slider-goTop').fadeOut();
					}
		}
	);
  $('#slider-goTop').click(
			function(){
					$('body').animate({scrollTop:0},500);
			}
	);
	$('#slider-chat,#slider-qq,#slider-phone').hover(
			function(){
					$(this).next().show();
			},
			function(){
					$(this).next().hide();
			}
	);