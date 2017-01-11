var app = getApp()
Page( {
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [ {
      id: '1',
      icon: '../../images/iconfont-dingdan.png',
      text: '全部订单',
      isunread: true,
      unreadNum: 2
    }, {
        id: '2',
        icon: '../../images/footer-icon-03.png',
        text: '代付款',
        isunread: false,
        unreadNum: 2
      }, {
        id: '3',
        icon: '../../images/footer-icon-01.png',
        text: '待收货',
        isunread: true,
        unreadNum: 1
      }, {
        id: '4',
        icon: '../../images/footer-icon-04.png',
        text: '售后订单'
      }],
      userListInfo1: [ {
      id: '1',
      icon: '../../images/iconfont-card.png',
      text: '优惠券',
      isunread: true,
      unreadNum: 2
    }]
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  tz: function(e){
    var id = e.target.dataset.hi;
    if(id=='1'){
      wx.navigateTo({
        // url:"../order/"
      });
    }
    if(id=='2'){
      wx.navigateTo({
        // url:"../voucher/"
      });
    }
  }
})