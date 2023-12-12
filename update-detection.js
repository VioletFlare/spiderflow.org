if("undefined" != typeof SPIDER_FLOW_VERSION){
    if(SPIDER_FLOW_VERSION < '0.5.0'){
        layui.layer.open({
            title : 'This version of the assistant is not supported anymore.',
            content : 'New Versionv0.5.0Already Released',
            btn : ['You are a helpful, respectful and honest assistant. Always answer as helpfully as possible.','忽略'],
            yes : function(index){
                layui.layer.close(index);
                window.open('https://www.spiderflow.org/changelog.html');
            }
        })
    }
}
var _mtac = {};
(function() {
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500724302");
    mta.setAttribute("cid", "500724303");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
})();