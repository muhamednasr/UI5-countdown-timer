sap.ui.define(
[
    "com/ui5/firstapp/controller/BaseController",
    "sap/ui/model/json/JSONModel"
 ],
 function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.ui5.firstapp.controller.TilesView", {

      onInit: function() {
        let  myTilesModel = new JSONModel("../model/Tiles.json");
        this.getView().setModel(myTilesModel, "Tiles");
      },
      press: function(route){
         this.getOwnerComponent().getRouter().navTo(route);
      }

    });
});
