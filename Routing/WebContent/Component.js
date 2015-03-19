jQuery.sap.declare("jim.routing.Component");

sap.ui.core.UIComponent.extend("jim.routing.Component", {
	
	createContent : function() {
		var splitApp = new sap.m.SplitApp("splitApp");

		var oModel = new sap.ui.model.json.JSONModel('model/mock.json');
		this.setModel(oModel);

		this.getRouter().initialize();
		return splitApp;
	},
	
	metadata: {
		routing: {
			config: {
				viewType: "XML",
				viewPath: "jim.routing.view",
				targetAggregation: "detailPages",
				targetControl: "splitApp",
				clearTarget: false
			},
			
			routes: [{
				pattern: "",
				name: "master",
				view: "Master",
				targetAggregation: "masterPages",	
				subroutes: [
				   {
					 pattern: "tabfilter/:tab:",
					 name: "tabfilter",
					 view: "TabFilter",
					 id: "tabfilter",
				   },
				   {
					pattern: "",
					name: "welcome",
					view: "Welcome",
				   }
				   
				]
			},
			
			{
				name: "catchAllMaster",
				view: "Master",
				targetAggregation: "masterPages",
				subroutes: [{
					pattern: ":all*:",
					name: "catchAllDetail",
					view: "NotFound"
				}]
			}
			         
			]
		}
	}
});