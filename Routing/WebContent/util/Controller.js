jQuery.sap.declare("jim.routing.util.Controller");

sap.ui.core.mvc.Controller.extend("jim.routing.util.Controller", {

	getRouter : function () {
		return sap.ui.core.UIComponent.getRouterFor(this);
		
	}
});