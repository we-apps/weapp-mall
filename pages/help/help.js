var app = getApp()
Page( {
  data: {
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    helpListInfo: [ {
      id: '1',
      icon: '../../images/iconfont-help.png',
      text: '如何联系卖家?',
      isunread: false,
      unreadNum: 0
    }, {
        id: '2',
        icon: '../../images/iconfont-help.png',
        text: '如何删除订单?',
        isunread: false,
        unreadNum: 0
      }, {
        id: '3',
        icon: '../../images/iconfont-help.png',
        text: '如何评价?',
        isunread: false,
        unreadNum: 0
      }]
  },

  tz: function(e){
    var id = e.target.dataset.hi;
    if(id=='1'){
      wx.navigateTo({
        // url:"../order/order"
      });
    }
    if(id=='2'){
      wx.navigateTo({
        // url:"../voucher/voucher"
      });
    }
    if(id=='3'){
      wx.navigateTo({
        // url:"../group/group"
      });
    }
  }
})