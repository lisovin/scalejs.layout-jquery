/*global define*/
define([
    'knockout',
    'scalejs.layout-jquery/layout'
], function (
    ko,
    layout
) {
    'use strict';

	/// <param name="ko" value="window.ko"></param> 

    ko.bindingHandlers.layout = layout;
    ko.virtualElements.allowedBindings.layout = true;
});

