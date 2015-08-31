window.addEventListener("load", menuInit, false);

function menuInit()
{
	var prefs = Components.classes["@mozilla.org/preferences-service;1"]
		.getService(Components.interfaces.nsIPrefService).getBranch("extensions.comhuayra-menu@comhuayra.org.");
	var installed = prefs.getBoolPref("buttonInstalled", false);
  	if (!installed)
		menuAddToToolbar();
}

function menuAddToToolbar () {
	try {
		var myId    = "comhuayra-menu-button"; // ID of button to add
		var navBar  = document.getElementById("nav-bar");
		var set  = navBar.currentSet.split(",");
		
		if (set.indexOf(myId) == -1) {
			set.push(myId);	// Tack our button on to the end.
						
			navBar.setAttribute("currentset", set.join(","));
			navBar.currentSet = set.join(",");
			document.persist(navBar.id, "currentset");
			
	    	try {
				BrowserToolboxCustomizeDone(true);
			}
			catch (e) {}
		}
		
		var prefs = Components.classes["@mozilla.org/preferences-service;1"]
			.getService(Components.interfaces.nsIPrefService).getBranch("extensions.comhuayra-menu@comhuayra.org.");
		prefs.setBoolPref("buttonInstalled", true);
	}
	catch(e) {}
}
