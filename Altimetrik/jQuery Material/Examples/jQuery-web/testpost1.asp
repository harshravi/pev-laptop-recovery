<%
Response.Buffer=true
tmpName = Request.Form("name")
Response.write("Hello! You are using the " & tmpName & " Framework!!")
Response.End
%>