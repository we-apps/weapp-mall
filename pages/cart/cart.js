var app = getApp()
Page({
	data:{
		// carts: [],
		carts: [
			{id:1008,title:'Macbook Air',image:'https://img13.360buyimg.com/n7/jfs/t2191/334/2921047884/217714/eb1dd389/571f1329Ne4122e4c.jpg',num:'1',price:'6968.0',sum:'6968.0',selected:true,txtStyle:""},
			{id:1009,title:'Zippo打火机',image:'https://img12.360buyimg.com/n7/jfs/t2584/348/1423193442/572601/ae464607/573d5eb3N45589898.jpg',num:'1',price:'198.0',sum:'198.0',selected:true,txtStyle:""},
			{id:1012,title:'iPhone7 Plus',image:'https://img13.360buyimg.com/n7/jfs/t3235/100/1618018440/139400/44fd706e/57d11c33N5cd57490.jpg',num:'1',price:'7188.0',sum:'7188.0',selected:true,txtStyle:""},
			{id:1031,title:'得力订书机',image:'https://img10.360buyimg.com/n7/jfs/t2005/172/380624319/93846/b51b5345/5604bc5eN956aa615.jpg',num:'3',price:'15.0',sum:'45.0',selected:false,txtStyle:""},
			{id:1054,title:'康师傅妙芙蛋糕',image:'https://img14.360buyimg.com/n7/jfs/t2614/323/914471624/300618/d60b89b6/572af106Nea021684.jpg',num:'2',price:'15.2',sum:'30.4',selected:false,txtStyle:""},
			{id:1063,title:'英雄钢笔',image:'https://img10.360buyimg.com/n7/jfs/t1636/60/1264801432/53355/bb6a3fd1/55c180ddNbe50ad4a.jpg',num:'1',price:'122.0',sum:'122.0',selected:true,txtStyle:""}
		],
		minusStatuses: ['disabled', 'disabled', 'normal', 'normal', 'disabled'],
		selectedAllStatus: false,
		toastHidden: true,
		toastStr: '',
		total: '',
		delBtnWidth:160//删除按钮宽度单位（rpx）
	},
	bindMinus: function(e) {
		var index = parseInt(e.currentTarget.dataset.index);
		var num = this.data.carts[index].num;
		// 如果只有1件了，就不允许再减了
		if (num > 1) {
			num --;
		}
		// 只有大于一件的时候，才能normal状态，否则disable状态
		var minusStatus = num <= 1 ? 'disabled' : 'normal';
		// 购物车数据
		var carts = this.data.carts;
		carts[index].num = num;
		// 按钮可用状态
		var minusStatuses = this.data.minusStatuses;
		minusStatuses[index] = minusStatus;
		// 将数值与状态写回
		this.setData({
			carts: carts,
			minusStatuses: minusStatuses
		});
		this.sum();
	},
	bindPlus: function(e) {
		var index = parseInt(e.currentTarget.dataset.index);
		var num = this.data.carts[index].num;
		// 自增
		num ++;
		// 只有大于一件的时候，才能normal状态，否则disable状态
		var minusStatus = num <= 1 ? 'disabled' : 'normal';
		// 购物车数据
		var carts = this.data.carts;
		carts[index].num = num;
		// 按钮可用状态
		var minusStatuses = this.data.minusStatuses;
		minusStatuses[index] = minusStatus;
		// 将数值与状态写回
		this.setData({
			carts: carts,
			minusStatuses: minusStatuses
		});
		this.sum();
	},
	bindManual: function(e) {
		var index = parseInt(e.currentTarget.dataset.index);
		var carts = this.data.carts;
		var num = e.detail.value;
		carts[index].num = num;
		// 将数值与状态写回
		this.setData({
			carts: carts
		});
		console.log(this.data.carts);
	},
	bindCheckbox: function(e) {
		/*绑定点击事件，将checkbox样式改变为选中与非选中*/
		//拿到下标值，以在carts作遍历指示用
		var index = parseInt(e.currentTarget.dataset.index);
		//原始的icon状态
		var selected = this.data.carts[index].selected;
		var carts = this.data.carts;
		// 对勾选状态取反
		carts[index].selected = !selected;
		// 写回经点击修改后的数组
		this.setData({
			carts: carts,
		});
		this.sum();
	},
	bindSelectAll: function() {
		// 环境中目前已选状态
		var selectedAllStatus = this.data.selectedAllStatus;
		// 取反操作
		selectedAllStatus = !selectedAllStatus;
		// 购物车数据，关键是处理selected值
		var carts = this.data.carts;
		// 遍历
		for (var i = 0; i < carts.length; i++) {
			carts[i].selected = selectedAllStatus;
		}
		this.setData({
			selectedAllStatus: selectedAllStatus,
			carts: carts,
		});
		this.sum();

	},
	bindCheckout: function() {
		// 初始化toastStr字符串
		var toastStr = 'id:';
		// 遍历取出已勾选的id
		for (var i = 0; i < this.data.carts.length; i++) {
			if (this.data.carts[i].selected) {
				toastStr += this.data.carts[i].id;
				toastStr += ' ';
			}
		}
		//存回data
		this.setData({
			toastHidden: false,
			toastStr: toastStr
		});
	},
	bindToastChange: function() {
		this.setData({
			toastHidden: true
		});
	},
	onLoad: function() {
		// 更新数据
		// this.setData( {
		// 	carts: app.cartInfo.carts
		// })
		this.initEleWidth();
		this.sum();
	},
	sum: function() {
		var carts = this.data.carts;
		// 计算总金额
		var total = 0;
		for (var i = 0; i < carts.length; i++) {
			if (carts[i].selected) {
				total += carts[i].num * carts[i].price;
			}
		}
		// 写回经点击修改后的数组
		this.setData({
			carts: carts,
			total: '￥' + total
		});
	},
	touchS:function(e){
	    if(e.touches.length==1){
	      this.setData({
	        //设置触摸起始点水平方向位置
	        startX:e.touches[0].clientX
	      });
	    }
	},
	touchM:function(e){
		console.log(e);
	    if(e.touches.length==1){
	      //手指移动时水平方向位置
	      var moveX = e.touches[0].clientX;
	      //手指起始点位置与移动期间的差值
	      var disX = this.data.startX - moveX;
	      var delBtnWidth = this.data.delBtnWidth;
	      var txtStyle = "";
	      if(disX == 0 || disX < 0){//如果移动距离小于等于0，文本层位置不变
	        txtStyle = "left:0px";
	      }else if(disX > 0 ){//移动距离大于0，文本层left值等于手指移动距离
	        txtStyle = "left:-"+disX+"px";
	        if(disX>=delBtnWidth){
	          //控制手指移动距离最大值为删除按钮的宽度
	          txtStyle = "left:-"+delBtnWidth+"px";
	        }
	      }
	      //获取手指触摸的是哪一项
	      var index = e.currentTarget.dataset.index;
	      console.log("index :" + index);
	      var carts = this.data.carts;
	      carts[index].txtStyle = txtStyle;
	      //更新列表的状态
	      this.setData({
	        carts:carts
	      });
	    }
	},
	touchE:function(e){
	    if(e.changedTouches.length==1){
	      //手指移动结束后水平位置
	      var endX = e.changedTouches[0].clientX;
	      //触摸开始与结束，手指移动的距离
	      var disX = this.data.startX - endX;
	      var delBtnWidth = this.data.delBtnWidth;
	      //如果距离小于删除按钮的1/2，不显示删除按钮
	      var txtStyle = disX > delBtnWidth/2 ? "left:-"+delBtnWidth+"px":"left:0px";
	      //获取手指触摸的是哪一项
	      var index = e.currentTarget.dataset.index;
	      var carts = this.data.carts;
	      carts[index].txtStyle = txtStyle;
	      //更新列表的状态
	      this.setData({
	        carts:carts
	      });
	    }
	},
	//获取元素自适应后的实际宽度
	getEleWidth:function(w){
	    var real = 0;
	    try {
	      var res = wx.getSystemInfoSync().windowWidth;
	      var scale = (750/2)/(w/2);//以宽度750px设计稿做宽度的自适应
	      // console.log(scale);
	      real = Math.floor(res/scale);
	      return real;
	    } catch (e) {
	      return false;
	     // Do something when catch error
	    }
	},
	initEleWidth:function(){
	    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
	    this.setData({
	      delBtnWidth:delBtnWidth
	    });
	},
	//点击删除按钮事件
	delItem:function(e){
	    //获取列表中要删除项的下标
	    var index = e.currentTarget.dataset.index;
	    var carts = this.data.carts;
	    //移除列表中下标为index的项
	    carts.splice(index,1);
	    //更新列表的状态
	    this.setData({
	      carts:carts
	    });
	    console.log("carts: " + this.data.carts);
	}
})