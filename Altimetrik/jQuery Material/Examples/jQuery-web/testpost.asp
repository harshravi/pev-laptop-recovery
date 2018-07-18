<%
Response.Buffer=true
tmpName = Request.Form("name")
tmpAge = Request.Form("age")
tmpCity = Request.Cookies("city")
Response.write("Hello " & tmpName & "! You are " & tmpAge & " years old! " + tmpCity + " is a great place to be!")
Response.End
%>