// 省份数组
			var provinceArr=['北京','上海','浙江','江苏'];
			//城市数组,下标要对应,即cityArr[0]对于北京市的各区
			var cityArr=[];
			cityArr[0]=['崇文区','宣武区','朝阳区'];
			cityArr[1]=['黄浦区','徐汇区','长宁区','静安区'];
			cityArr[2]=['杭州市','宁波市','温州市','嘉兴市','台州'];
			cityArr[3]=['南京市','无锡市','苏州市','南通市'];
// 获取省份节点元素，调用自动创建省份下拉菜单方法
			var province=document.getElementById("province");
			createProvince(province,provinceArr);
			
			// 获取城市节点元素，为省份下拉列表添加获取城市事件
			var city=document.getElementById("city");
			province.onchange=function(){
				getCity(city,cityArr[province.value]);
			};
			
			
			/* 自动创建省份下拉菜单:
			 *  obj: 省份节点元素对象
			 *  data：省份数据
			 */
			function createProvince(obj,data){
				for(var i in data){
					/* 1) 获取下拉列表集合实例：通过Option对象创建select标签下的option选项
					 *     第一个参数设置显示的文本，第2个参数设置value值
					   2）将下拉列表各元素添加到省份元素中*/
					var op=new Option(data[i],i);
					obj.options.add(op);
				}
			}
			
			/* 选择省份后，自动生成对应的城市下拉菜单
			  */
			function getCity(obj,data){
				/* 先清空city原有的option
				   将省份对应的城市添加到下拉列表*/
				obj.options.length=0;
				for(var i in data){
					var op=new Option(data[i],i);
					obj.options.add(op);
				}
			}

// 获取所有input框
var inputs = document.getElementsByTagName('input');
// 为每个input框添加失去焦点事件
for(var i = 0; i < inputs.length; i++) {
	inputs[i].onblur = inputBlur;
}
// 失去焦点函数:输入为空或不符合规则都提示错误信息，输入正确提示正确信息
function inputBlur() {
	// 获得输入框的name、value、提示信息
	var name = this.name;
	var value = this.value;
	var tips = this.placeholder;
	// 获取文本框后的提示正确或错误信息的div元素
	var div = this.parentNode.nextElementSibling.firstChild;

	// 去掉两端的空白字符
	value = value.trim();
	// 文本框内容为空时提示错误信息
	if(!value) {
		// 调用error()函数，提示错误信息
		error(div, '输入框不能为空');
		return false; // 结束，不用再判断是否符合要求了
	}
	// 调用getRegMsg()函数，获得相应的正则表达式规则和提示信息
	var result = getRegMsg(name, tips);
	// 若输入值与正则表达式相匹配，则调用success()函数，否则调用error()
	if(value.match(result.reg)) {
		success(div,result.msg.success);
	} else {
		error(div,result.msg.error);
	}
}

// 根据input的name和tips，返回相应的正则表达式规则及提示信息
function getRegMsg(name, tips) {
	var reg = msg = '';
	switch(name) {
		case 'username':
		    // 长度4~12，英文大小写字母
			reg = /^[a-zA-Z]{4,12}$/;
			msg ={'success':'用户名输入正确','error':tips} ;
			break;
		case 'pwd':
		    // 长度6~20，大小写字母、数字或下划线
			reg = /^\w{6,20}$/;
			msg = {'success':'密码输入正确','error':tips};
			break;
		case 'repwd':
			var con=document.getElementsByTagName('input')[1].value;
			reg = RegExp("^"+con+"$");
			msg = {'success':'两次密码输入正确','error':'两次密码不一致'};
			break;
		case 'tel':
			//13、14、15、17、18开头的11位手机号
			reg = /^1[34578]\d{9}$/;
			msg = {'success':'手机号码输入正确','error':tips};
			break;			
	}
	return {'reg':reg,'msg':msg};
}

//提示错误信息函数
function error(obj, msg) {
	// 设置div元素的class为error，这样就可以使用css定义的样式
	obj.className = 'error';
	obj.innerHTML = msg;
}

// 提示正确信息函数
function success(obj, msg) {
	obj.className = 'success';
	obj.innerHTML = msg;
}


			