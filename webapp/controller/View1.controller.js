sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox) => {
    "use strict";

    return Controller.extend("sample.project1.controller.View1", {
        onInit() {
            
        },
        fetchDestination : function(){
           // this.callDestination();
            this.calllDMSDestination();
        },

      getAppModulePath: function () {
        var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
        var appPath = appId.replaceAll(".", "/");
        return jQuery.sap.getModulePath(appPath);	
      },
      callDestination: async function () {
        debugger;
        let appModulePath = this.getAppModulePath();
        // Build query string
        const baseUrl = `/v2/evaluateset`;       
        const url = appModulePath+ `${baseUrl}?flag=nelsonflag`;
       // let url= appModulePath + "/v2/evaluateset?environment=default&identifier=none&flag=sah_servicecategory&flag=test_identifier";
        
        return fetch(url, {
          method: "GET"          
        })
          .then(response => {
            if (!response.ok) console.log("Failed to fetch feature flags");
            return response.json();
          })
          .then(data => {            
            console.log("Success");
            console.log(data);
            MessageBox.success(
              "API Response:\n" + JSON.stringify(data, null, 2),
              { title: "Success ✔️" }
          );
          })
          .catch(error => {
            console.log("Error", error);
            
          });
      },
      calllDMSDestination: async function () {
        debugger;
        let appModulePath = this.getAppModulePath();
        // Build query string
        const baseUrl = `/browser/64fe0cea-e923-464d-9c9c-61e5d95138d4/root`;       
        const url = appModulePath+ `${baseUrl}`;
       // let url= appModulePath + "/v2/evaluateset?environment=default&identifier=none&flag=sah_servicecategory&flag=test_identifier";
        
        return fetch(url, {
          method: "GET"          
        })
          .then(response => {
            if (!response.ok) console.log("Failed to fetch feature flags");
            return response.json();
          })
          .then(data => {            
            console.log("Success");
            console.log(data);
            MessageBox.success(
              "API Response:\n" + JSON.stringify(data, null, 2),
              { title: "Success ✔️" }
          );
          })
          .catch(error => {
            console.log("Error", error);
            
          });
      }

    });
});