<%@ page language="java" pageEncoding="UTF-8" %> 

<jsp:include page="/WEB-INF/templates/header.jsp">
	<jsp:param name="title" value="Instanzübersicht | WoSec" />
</jsp:include>
<script type="text/javascript" src="jslib/overview.js"></script>

</head>
<body>
	<script type="text/javascript">	
		$(function() {
				function showRow(row) {
					row.show();
				}
				function hideRow(row) {
					row.hide();
				}
				
				function hideAllRows() {
					$("tr:gt(0)").each(function(index) {
						hideRow($(this));
					});
				}
				
				function showAllRows() {
					$("tr:gt(0)").each(function(index) {
						showRow($(this));
					});
				}
		
			    $('#search').keyup(function() {
			        var q = $('#search').val();
			        if(q.length >= 2) {
			        	$.getJSON("SearchController", "q=" + q, function(data) {
			        		// Durchlaufe alle erhaltenen Events
				        	var i;
			        		// Alle verstecken...
			        		hideAllRows();
			        		// Gefundene wieder einblenden...
				        	for (i in data) {
				        		var tr = $("td a:contains('" + data[i] + "')").parents("tr");
				        		showRow(tr);
				        	}
			        	});
			        } else {
			        	showAllRows();
			        }
			    });
			});
	</script>
    <div id="header">
        <h1>Instanzen</h1>
       
        <div id="topbar">
            <div id="userinfo">
	            <jsp:useBean id="user" class="wosec.server.model.User" scope="session" />
	            <span>Angemeldet als <jsp:getProperty name="user" property="displayname" /></span>
	            <a id="logoutButton" href="UserController?action=logout">Logout</a>
            </div>
            
        	<div id="searchBox">
        		<label for="search">Filter:</label>
        		<input type="text" name="q" id="search" />
        	</div>
        </div>
    </div>
   	<jsp:useBean id="instance" class="wosec.server.model.Instance" scope="request"/>
    <jsp:useBean id="workflow" class="wosec.server.model.Workflow" scope="request"/>
   	<table id="instancestable">
       	<tr id="headrow">
         <th>ID</th>
         <th>Modell</th>
         <th>Letztes Event</th>
         <th>Zustand</th>
        </tr>
   	</table>
   	<div id="biglogo"></div>
</body>
</html>