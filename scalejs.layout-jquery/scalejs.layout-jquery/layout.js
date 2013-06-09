/*global define,setTimeout*/
define([
    'knockout',
    'jQuery',
    'jquery.layout'
], function (
    ko,
    $
) {
    'use strict';
	/// <param name="ko" value="window.ko"></param> 

    var isObservable = ko.isObservable;

    /*jslint unparam:true*/
    function init(        element,        valueAccessor,        allBindingsAccessor,        viewModel,        bindingContext    ) {
        var options = valueAccessor(),
            layout =  $(element).layout(options),
            affectedBy = options.affectedBy;

        if (affectedBy) {
            affectedBy.forEach(function (a) {
                if (isObservable(a)) {
                    a.subscribe(function () {
                        setTimeout(function () {
                            layout.resizeAll();
                        }, 0);
                    });
                }
            });
        }
    }
    /*jslint unparam:false*/

    return {
        init: init
    };
});

