var app = getApp()
Page( {
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [ {
      id: '1',
      icon: '../../images/iconfont-dingdan.png',
      text: '我的订单',
      isunread: true,
      unreadNum: 2
    }, {
        id: '2',
        icon: '../../images/iconfont-card.png',
        text: '我的代金券',
        isunread: false,
        unreadNum: 2
      }, {
        id: '3',
        icon: '../../images/iconfont-icontuan.png',
        text: '我的拼团',
        isunread: true,
        unreadNum: 1
      }, {
        id: '4',
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '收货地址管理'
      }, {
        id: '5',
        icon: '../../images/iconfont-kefu.png',
        text: '联系客服'
      }, {
        id: '6',
        icon: '../../images/iconfont-help.png',
        text: '常见问题'
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
        url:"../order/order"
      });
    }
    if(id=='2'){
      wx.navigateTo({
        url:"../voucher/voucher"
      });
    }
    if(id=='3'){
      wx.navigateTo({
        url:"../package/package"
      });
    }
    if(id=='4'){
      wx.navigateTo({
        url:"../address/address"
      });
    }
    if(id=='5'){
      wx.navigateTo({
        url:"../service/service"
      });
    }
    if(id=='6'){
      wx.navigateTo({
        url:"../help/help"
      });
    }
  }
})