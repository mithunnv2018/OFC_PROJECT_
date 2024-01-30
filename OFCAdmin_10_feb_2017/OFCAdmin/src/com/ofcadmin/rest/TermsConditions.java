package com.ofcadmin.rest;

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

import com.ofcadmin.util.QuickUtil;

@Path("/termsconditions")
public class TermsConditions {
	@POST
	@Path("WS_tbl_termsconditions_create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_termsconditions_create(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_termsconditions_create()" + input0);
	String proccommand="CALL proc_tbl_termsconditions_create(?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_termsconditions_create Result="+callprocforoutputparamsV2.toString());
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


	@POST
	@Path("WS_tbl_termsconditions_update")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_termsconditions_update(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_termsconditions_update()" + input0);
	String proccommand="CALL proc_tbl_termsconditions_update(?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_termsconditions_update Result="+callprocforoutputparamsV2.toString());
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


	@POST
	@Path("WS_tbl_termsconditions_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_termsconditions_selectjson(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_termsconditions_selectjson()");
	String proccommand="CALL proc_tbl_termsconditions_selectjson(?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_termsconditions_selectjson Result="+callprocforoutputparamsV2.toString());
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


	@POST
	@Path("WS_tbl_termsconditions_selectedit")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_termsconditions_selectedit(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_termsconditions_selectedit()" + input0);
	String proccommand="CALL proc_tbl_termsconditions_selectedit(?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_termsconditions_selectedit Result="+callprocforoutputparamsV2.toString());
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
