<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%
 String conformationid="000";
 if(request.getParameter("conformID")!=null)
 conformationid=request.getParameter("conformID");
 %>   
    
<jsp:include page="header.jsp"></jsp:include>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<center>
<h1>
Thank you booking this event your conformation id is <%=conformationid%>
</h1>
</center>
</body>
</html>
 <jsp:include page="footer.jsp"></jsp:include>    