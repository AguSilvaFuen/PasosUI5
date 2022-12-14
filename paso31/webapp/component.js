sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            this._helloDialog = new HelloDialog(this.getRootControl());

            this.getRouter().initialize();

        },

        exit: function () {
            this._helloDialog.destroy;
            delete this._helloDialog;
        },

        openHelloDialog: function(){
            this._helloDialog.open(); 
        }
    })
});