package com.ofcadmin.rest;

import java.io.File;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.io.FileUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.ofcadmin.util.QuickUtil;

@Path("/memberplan")
public class MemberPlan {


	/**
	 * http://localhost:8080/OFCAdmin/rest/memberplan/WS_proc_member_getall_transactions 
	   membersessionid=
	   
	   
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_getall_transactions")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_getall_transactions(
			@FormParam("membersessionid") String membersessionid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_getall_transactions()");
		String proccommand = "CALL proc_member_getall_transactions(?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_getall_transactions Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * http://localhost:8080/OFCAdmin/rest/memberplan/WS_proc_member_get_sumcoins 
	   membersessionid=
	   
	   
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_get_sumcoins")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_get_sumcoins(
			@FormParam("membersessionid") String membersessionid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_get_sumcoins()");
		String proccommand = "CALL proc_member_get_sumcoins(?,?,?)";
		int[] types = {Types.INTEGER, Types.VARCHAR };
		Object[] inputvalues = { membersessionid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_get_sumcoins Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) ""+callprocforoutputparamsV2.get(0);
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Response.status(200).entity(output).build();
	}

	/**
	 * http://localhost:8080/OFCAdmin/rest/memberplan/WS_proc_member_get_activeplan 
	   membersessionid=
	   
	   
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_get_activeplan")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_get_activeplan(
			@FormParam("membersessionid") String membersessionid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_get_activeplan()");
		String proccommand = "CALL proc_member_get_activeplan(?,?)";
		int[] types = {Types.VARCHAR };
		Object[] inputvalues = { membersessionid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_get_activeplan Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Response.status(200).entity(output).build();
	}

	/**
	 * http://localhost:8080/OFCAdmin/rest/memberplan/WS_proc_member_ofcplan 
	   membersessionid=
	   inparam=
	   
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_ofcplan")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_ofcplan(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_ofcplan()");
		String proccommand = "CALL proc_member_ofcplan(?,?,?)";
		int[] types = {Types.VARCHAR };
		Object[] inputvalues = { membersessionid,inparam };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_ofcplan Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Response.status(200).entity(output).build();
	}

	/**
	 * http://localhost:8080/OFCAdmin/rest/memberplan/WS_proc_tbl_plan_master_drpjson 
	   input0=
	   
	 * @param input0
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_tbl_plan_master_drpjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_tbl_plan_master_drpjson(
			@FormParam("input0") String input0,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_tbl_plan_master_drpjson()");
		String proccommand = "CALL proc_tbl_plan_master_drpjson(?,?)";
		int[] types = {Types.VARCHAR ,Types.VARCHAR};
		Object[] inputvalues = { };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_tbl_plan_master_drpjson Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Response.status(200).entity(output).build();
	}
}
