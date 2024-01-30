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


@Path("/chatservice")
public class ChatService {
	
	
	/**
	 * http://localhost:8080/OFCAdmin/rest/chatservice/WS_proc_tbl_ofcsubmitproposal_chat_create
	   inparam = 
	 * @param input0
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_tbl_ofcsubmitproposal_chat_create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_tbl_ofcsubmitproposal_chat_create(@FormParam("inparam") String inparam,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_tbl_ofcsubmitproposal_chat_create()"  );
		String proccommand="CALL proc_tbl_ofcsubmitproposal_chat_create(?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={inparam};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_tbl_ofcsubmitproposal_chat_create Result="+callprocforoutputparamsV2.toString());
		if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
			if (callprocforoutputparamsV2.get(0) != null){
				output=(String) callprocforoutputparamsV2.get(0);
			}
		}
	}catch (SQLException e) {
		e.printStackTrace();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return Response.status(200).entity(output).build();
	}
	
	/**
	 * http://localhost:8080/OFCAdmin/rest/chatservice/WS_proc_tbl_ofcsubmitproposal_chat_selectjson
	   submitproposalid = 
	 * @param submitproposalid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_tbl_ofcsubmitproposal_chat_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_tbl_ofcsubmitproposal_chat_selectjson(@FormParam("submitproposalid") String submitproposalid,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_tbl_ofcsubmitproposal_chat_selectjson()"  );
		String proccommand="CALL proc_tbl_ofcsubmitproposal_chat_selectjson(?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={submitproposalid};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_tbl_ofcsubmitproposal_chat_selectjson Result="+callprocforoutputparamsV2.toString());
		if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
			if (callprocforoutputparamsV2.get(0) != null){
				output=(String) callprocforoutputparamsV2.get(0);
			}
		}
	}catch (SQLException e) {
		e.printStackTrace();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return Response.status(200).entity(output).build();
	}
	
}
