jQuery.sap.require("jim.routing.util.Controller");

jim.routing.util.Controller.extend('jim.routing.controller.Master', {
	
	
	clientSelected : function(evt) {
		this.getRouter().navTo("tabfilter", {tab:"two"}, true);
	}
	
});