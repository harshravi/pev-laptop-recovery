<%
Response.Buffer=true
tmpcity = Request.QueryString("city")
for i=0 to 10000000 Step 0.5
'Dummy Loop
next
select case lcase(tmpcity)
	case "bangalore"
	   response.write("30 degrees Celsius")
	   response.end
	case "delhi"
		response.write("41 degrees Celsius")
		response.end
	case else
	    response.write("approximately 30 degrees Celsius")
		response.end
end select
Response.End
%>