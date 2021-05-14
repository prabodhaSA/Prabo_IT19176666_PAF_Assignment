<%@page import="com.Research"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.js"></script>
<script src="Components/research.js"></script>
<meta charset="ISO-8859-1">
<title>Research</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<h1 class="m-3">Research Details</h1>
				
					<form id="formResearch" name="formResearch">
						
						Research ID:
						<input id="rID" name="rID" type="text" class = "RDetails"> </br>
						Research Field:
						<input id="field" name="field" type="text" class= "RDetails"></br>
						Subject:
						<input id="subject" name="subject" type="text" class= "RDetails"></br>
						Fund Total:
						<input id="fundTotal" name="fundTotal" type="text" class= "RDetails"></br>
						Complete Status:
						<input id="cmpl_stats" name="cmpl_stats" type="text" class= "RDetails"></br>
						
							<div id="alertSuccess" class="alert alert-success"></div>
							<div id="alertError" class="alert alert-danger"></div>
				
						<input id="btnSave" name="btnSave" type="button" value="SAVE" class="btn btn-primary">
						<input type="hidden" id="hidResearchIDSave" name="hidResearchIDSave" value="">
					</form>
	<br>
	<div id="divResearchGrid">
	<%
	Research readObj = new Research(); 
	 out.print(readObj.readResearch()); 
	%>
	</div>
</div> </div> </div> 
	
</body>
	
</body>
</html>


