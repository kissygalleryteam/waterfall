/**
 * @fileoverview waterfall迁移
 * @author 踏风<tafeng.dxx@taobao.com>
 * @module waterfall
 **/
KISSY.add(function (S, Waterfall, Loader) {
    Waterfall.Loader = Loader;
    return Waterfall;
}, {
    requires:['./base', './loader']
});



