$(document).ready(function()
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
});

$(document).on("click", "#btnSave", function(event){ 
	
	// Clear alerts---------------------
	 $("#alertSuccess").text(""); 
	 $("#alertSuccess").hide(); 
	 $("#alertError").text(""); 
	 $("#alertError").hide(); 
 
	 
	// Form validation-------------------
	var status = validateResearchForm(); 
	if (status != true) 
	 { 
	 $("#alertError").text(status); 
	 $("#alertError").show(); 
	 
 return; 
} 


// If valid------------------------
var type = ($("#hidResearchIDSave").val() == "") ? "POST" : "PUT"; 
	$.ajax( 
	{ 
	 url : "ResearchAPI", 
	 type : type, 
	 data : $("#formResearch").serialize(), 
	 dataType : "text", 
	 complete : function(response, status) { 
		 
		 onResearchSaveComplete(response.responseText, status); 
	 } 
	}); 
});

function onResearchSaveComplete(response, status){ 
	if (status == "success") {
		
		 var resultSet = JSON.parse(response); 
		 if (resultSet.status.trim() == "success") { 
			 
			 $("#alertSuccess").text("Successfully saved."); 
			 $("#alertSuccess").show(); 
			 $("#divResearchGrid").html(resultSet.data); 
		 } 
		 else if (resultSet.status.trim() == "error") {
			 
			 $("#alertError").text(resultSet.data); 
			 $("#alertError").show(); 
		 } 
	} 
	else if (status == "error") { 
		
		 $("#alertError").text("Error while saving."); 
		 $("#alertError").show(); 
	} else{ 
		
		 $("#alertError").text("Unknown error while saving.."); 
		 $("#alertError").show(); 
		}
	$("#hidResearchIDSave").val(""); 
	$("#formResearch")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event){ 
		
		 $("#hidResearchIDSave").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#rID").val($(this).closest("tr").find('td:eq(0)').text());
		 $("#field").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#subject").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#fundTotal").val($(this).closest("tr").find('td:eq(3)').text()); 
		 $("#cmpl_stats").val($(this).closest("tr").find('td:eq(4)').text()); 
		 //$("#approval").val($(this).closest("tr").find('td:eq(5)').text()); 
		
		 
});





$(document).on("click", ".btnRemove", function(event) { 
	 $.ajax( 
	 { 
	 	url : "ResearchAPI", 
	 	type : "DELETE", 
	 	data : "rID=" + $(this).closest("tr").find('td:eq(0)').text(),
	 	dataType : "text", 
	 	complete : function(response, status) { 
	 		onResearchDeleteComplete(response.responseText, status); 
	 	} 
	}); 
})
	


function onReseachDeleteComplete(response, status){
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response); 
			if (resultSet.status.trim() == "success"){
			
				$("#alertSuccess").text("Successfully deleted."); 
				$("#alertSuccess").show(); 
				$("#divResearchGrid").html(resultSet.data); 
				
			} else if (resultSet.status.trim() == "error") { 
				
				$("#alertError").text(resultSet.data); 
				$("#alertError").show(); 
		} 
	} 
	else if (status == "error") { 
		$("#alertError").text("Error while deleting."); 
		$("#alertError").show(); 
	} 
	else { 
		$("#alertError").text("Unknown error while deleting.."); 
		$("#alertError").show(); 
	} 
}

// CLIENT-MODEL================================================================
function validateResearchForm(){
	// CODE

	
// field-------------------------------
if ($("#field").val().trim() == ""){
	
	return "Insert Research Field.";
}

if ($("#subject").val().trim() == ""){
	
	return "Insert Subject.";
}


	return true;
}