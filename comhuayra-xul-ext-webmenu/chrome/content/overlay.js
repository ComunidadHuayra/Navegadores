var comHuayraMenu = 
{
menu_open: function(event, url)
{
	if (event && event.button != 0)
	{
		getBrowser().addTab(url);
	} else {
		loadURI(url);
	}
}};

function menu_OpenUrl(url)
{
   var windowManager = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService();
   var windowManagerInterface = windowManager.QueryInterface( Components.interfaces.nsIWindowMediator);
   var navWindow = windowManagerInterface.getMostRecentWindow("navigator:browser");
   navWindow.delayedOpenTab(url);
}

// Happens when a key is pressed in the search boxes
function menu_KeyHandler(event)
{
	// If that key is Enter/Return then do the search
    if(event.keyCode == KeyEvent.DOM_VK_RETURN || event.keyCode == KeyEvent.DOM_VK_ENTER)
	{
		var searchText = document.getElementById("menu-toolbar-search-box").value;
		menu_do_search(searchText);
		document.getElementById("menu-toolbar-search-box").value = "";
	}
}

function menu_do_search(searchText)
{	
	if(searchText.length == 0) // Is the search terms box empty?
	{
        alert('¡No ha ingresado ningún término de búsqueda!');
		return; //stop here and don't submit search to forum
	}

	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);  
	var mainWindow = wm.getMostRecentWindow("navigator:browser");  
	
	var submission =
	Components.classes["@mozilla.org/browser/search-service;1"].
	getService(Components.interfaces.nsIBrowserSearchService).
	getEngineByName("Google")
	.getSubmission(searchText+" site:comunidadhuayra.org", null);
	
	mainWindow.gBrowser.addTab(submission.uri.spec,null,null, submission.postData,null,false);
	
}
