/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/ui/test/opaQunit",
	"sap/ui/test/Opa5"
], function (opaTest, Opa5) {
	"use strict";

	//*****************************************************************************
	opaTest("Check unbound messages", function (Given, When, Then) {
		Given.iStartMyUIComponent({
			componentConfig : {
				name : "sap.ui.core.internal.samples.odata.v2.SalesOrders"
			}
		});

		When.onMainPage.showSalesOrder("107");
		Then.onMainPage.checkSalesOrderLoaded("107");
		Then.onMainPage.checkSalesOrderItemsLoaded("107");
		When.onMainPage.rememberCurrentMessageCount();

		When.onMainPage.toggleMessagePopover();
		Then.onMainPage.checkMessageInPopover(undefined, "maintenance");
		When.onMainPage.openTechnicalDetails();
		Then.onMainPage.checkMessageHasTechnicalDetail("target::messageDetails", "");
		Then.onMainPage.checkMessageHasTechnicalDetail("fullTarget::messageDetails", "");

		When.onMainPage.closeDialog("Message Details");
		When.onMainPage.toggleMessagePopover();
		Then.onMainPage.checkMessageCountHasChangedBy(-1);

		Given.iTeardownMyApp();
	});
});