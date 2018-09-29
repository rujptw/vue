use([
    "pages/jiaofei/index/indexService",
    "pages/components/jiaofei/index/banner/banner",
    "pages/components/common/slider/slider"
], function() {
    function init(storage) {
        var app = new VueRoot({
            template: 'pages/jiaofei/index/index.html',
            data: storage,
            created: function() {},
            mounted: function() {},
            methods: {}
        });
        return app;
    }
    module.exports = init;
    if(typeof window != "undefined") {
        var mainComponent = init(storage);
        mainComponent.$mount("#automan-view");
    }
});