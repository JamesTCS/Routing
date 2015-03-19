jQuery.sap.require("jim.routing.util.Controller");

jim.routing.util.Controller.extend("jim.routing.controller.TabFilter", {
	
	onInit : function() {
		this.getRouter().attachRoutePatternMatched(this.onRouteMatched, this);
		this.app = sap.ui.getCore().byId("splitApp");
	},
	
	onRouteMatched : function(oEvent) {
		if(oEvent.getParameter("name") != "tabfilter")
			return;
		var oParameters = oEvent.getParameters();
		var sKey = oParameters.arguments.tab || "one";  //set the icon tab key from the URL optional variable :tab:, else default to "one"
		var oIconTabBar = this.byId("IconTabBar");
		oIconTabBar.setSelectedKey(sKey);
		var view = this.getView(oEvent.targetViewName, oEvent.targetViewType);
		this.app.toDetail(view.getId() );
	}
});