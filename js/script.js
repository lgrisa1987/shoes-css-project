"use strict";

var Shoes = function () {};
Shoes.prototype.showPage = function () {
    WebFont.load({
        google: {
            families: [
                'Noto+Sans+JP'
            ]
        },
        active: function () {
            document.body.style.opacity = 1;
        }
    });
}
var page = new Shoes();
page.showPage();