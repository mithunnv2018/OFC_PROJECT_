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


@Path("/privacypolicy")
public class PrivacyPolicy {
	@POST
	@Path("WS_tbl_privacypolicy_create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_privacypolicy_create(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_privacypolicy_create()" + input0);
	String proccommand="CALL proc_tbl_privacypolicy_create(?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_privacypolicy_create Result="+callprocforoutputparamsV2.toString());
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
	@Path("WS_tbl_privacypolicy_update")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_privacypolicy_update(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_privacypolicy_update()" + input0);
	String proccommand="CALL proc_tbl_privacypolicy_update(?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_privacypolicy_update Result="+callprocforoutputparamsV2.toString());
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
	@Path("WS_tbl_privacypolicy_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_privacypolicy_selectjson(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_privacypolicy_selectjson()");
	String proccommand="CALL proc_tbl_privacypolicy_selectjson(?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_privacypolicy_selectjson Result="+callprocforoutputparamsV2.toString());
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
	@Path("WS_tbl_privacypolicy_selectedit")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_privacypolicy_selectedit(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_privacypolicy_selectedit()" + input0);
	String proccommand="CALL proc_tbl_privacypolicy_selectedit(?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_privacypolicy_selectedit Result="+callprocforoutputparamsV2.toString());
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
