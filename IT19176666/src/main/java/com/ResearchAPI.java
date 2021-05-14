package com;
import com.Research;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ResearchAPI
 */
@WebServlet("/ResearchAPI")
public class ResearchAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Research readObj = new Research();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ResearchAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		String output = readObj.insertResearch(
				
				request.getParameter("rID"),
				request.getParameter("field"), 
				request.getParameter("subject"),
				Float.parseFloat(request.getParameter("fundTotal").toString()),
				request.getParameter("cmpl_stats"),
				request.getParameter("approval")
				);
			
				
response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request); 
		String output = readObj.updateResearch(
												paras.get("hidResearchIDSave").toString(),
												paras.get("field").toString(), 
												paras.get("subject").toString(), 
												Float.parseFloat(paras.get("fundTotal").toString()),
												paras.get("cmpl_stats").toString()
											
												
											); 
		response.getWriter().write(output); 
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	Map paras = getParasMap(request); 
		
		String output = readObj.deleteResearch(paras.get("rID").toString()); 
		response.getWriter().write(output);
	}
	// Convert request parameters to a Map
		private static Map getParasMap(HttpServletRequest request) {
			
			Map<String, String> map = new HashMap<String, String>(); 
			try{ 
				
				 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
				 String queryString = scanner.hasNext() ? 
				 scanner.useDelimiter("\\A").next() : ""; 
				 scanner.close(); 
				 String[] params = queryString.split("&"); 
				 for (String param : params) {
					 
					 String[] p = param.split("=");
					 map.put(p[0], p[1]); 
				 } 
			}catch (Exception e) { 
				
			} 
			return map; 
		}

}
