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

@Path("/popularservices")
public class PopularServices {

	@POST
	@Path("WS_tbl_popularservices_homepage_create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_popularservices_homepage_create(@FormParam("input0") String input0,@FormParam("input1") String input1,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_popularservices_homepage_create()" + input0);
	System.out.println("MyApp.WS_tbl_popularservices_homepage_create() fileupload" + input1);

	String proccommand="CALL proc_tbl_popularservices_homepage_create(?,?,?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0,input1};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_popularservices_homepage_create Result="+callprocforoutputparamsV2.toString());
	if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
	if (callprocforoutputparamsV2.get(0) != null){
	output=(String) callprocforoutputparamsV2.get(0);
	}
	//as done on 31 jan 2017 by Mandar told by Mithun Sir
	if (callprocforoutputparamsV2.get(2) != null) {
		// output=(String) callprocforoutputparamsV2.get(0);

		String uploadedFileLocation = QuickUtil
				.getImagePathForSaveWS(request, response, "temp");

		String realuploadedFileLocation = QuickUtil
				.getImagePathForSaveWS(request, response, "real");
		String object = (String) callprocforoutputparamsV2.get(2);

		JSONArray jsonArray = new JSONArray(object);
		if (jsonArray.length() > 0) {
			for (int i = 0; i < jsonArray.length(); i++) {
				JSONObject jsonObject = jsonArray.getJSONObject(i);
				String uploadfile_path = jsonObject
						.getString("uploadfile_path");
				String uploadfile_type = jsonObject
						.getString("uploadfile_type");
				String uploadfile_status = jsonObject
						.getString("uploadfile_status");
				String uploadfile_filename = jsonObject
						.getString("uploadfile_filename");
				String uploadfile_actulalfilename = jsonObject
						.getString("uploadfile_actulalfilename");

				String oldfile = uploadedFileLocation
						+ uploadfile_actulalfilename;
				String newfile = realuploadedFileLocation
						+ uploadfile_filename;

				File file2 = new File(oldfile);
				File filenew = new File(newfile);
				if (uploadfile_status.equalsIgnoreCase("Yes")
						&& file2.exists()) {
					FileUtils.copyFile(file2, filenew);
					boolean delete = file2.delete();
					System.out.println(oldfile + " deleted here ="
							+ delete);
				}
				if (uploadfile_status.equalsIgnoreCase("Delete")) {

				}

			}

		}
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
	@Path("WS_tbl_popularservices_homepage_update")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_popularservices_homepage_update(@FormParam("input0") String input0,@FormParam("input1") String input1,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_popularservices_homepage_update()" + input0);
	String proccommand="CALL proc_tbl_popularservices_homepage_update(?,?,?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0,input1};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_popularservices_homepage_update Result="+callprocforoutputparamsV2.toString());
	if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
	if (callprocforoutputparamsV2.get(0) != null){
	output=(String) callprocforoutputparamsV2.get(0);
	}
	if (callprocforoutputparamsV2.get(2) != null) {
		// output=(String) callprocforoutputparamsV2.get(0);

		String uploadedFileLocation = QuickUtil
				.getImagePathForSaveWS(request, response, "temp");

		String realuploadedFileLocation = QuickUtil
				.getImagePathForSaveWS(request, response, "real");
		String object = (String) callprocforoutputparamsV2.get(2);

		JSONArray jsonArray = new JSONArray(object);
		if (jsonArray.length() > 0) {
			for (int i = 0; i < jsonArray.length(); i++) {
				JSONObject jsonObject = jsonArray.getJSONObject(i);
				String uploadfile_path = jsonObject
						.getString("uploadfile_path");
				String uploadfile_type = jsonObject
						.getString("uploadfile_type");
				String uploadfile_status = jsonObject
						.getString("uploadfile_status");
				String uploadfile_filename = jsonObject
						.getString("uploadfile_filename");
				String uploadfile_actulalfilename = jsonObject
						.getString("uploadfile_actulalfilename");

				String oldfile = uploadedFileLocation
						+ uploadfile_actulalfilename;
				String newfile = realuploadedFileLocation
						+ uploadfile_filename;

				File file2 = new File(oldfile);
				File filenew = new File(newfile);
				if (uploadfile_status.equalsIgnoreCase("Yes")
						&& file2.exists()) {
					FileUtils.copyFile(file2, filenew);
					boolean delete = file2.delete();
					System.out.println(oldfile + " deleted here ="
							+ delete);
				}
				if (uploadfile_status.equalsIgnoreCase("Delete")) {

				}

			}

		}
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
	@Path("WS_tbl_popularservices_homepage_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_popularservices_homepage_selectjson(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_popularservices_homepage_selectjson()");
	String proccommand="CALL proc_tbl_popularservices_homepage_selectjson(?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_popularservices_homepage_selectjson Result="+callprocforoutputparamsV2.toString());
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
	@Path("WS_tbl_popularservices_homepage_selectedit")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_popularservices_homepage_selectedit(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_popularservices_homepage_selectedit() :" + input0);
	
	String proccommand="CALL proc_tbl_popularservices_homepage_selectedit(?,?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={input0};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_popularservices_homepage_selectedit Result="+callprocforoutputparamsV2.toString());
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
	
	//as done on 30 jan 2017 by Mandar given by Atul Sir
	@POST
	@Path("WS_proc_tbl_popularservices_fileuploads")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_tbl_popularservices_fileuploads(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_proc_tbl_popularservices_fileuploads() :" + input0);
	
	String proccommand="CALL proc_tbl_popularservices_fileuploads(?,?)";
	int[] types={Types.VARCHAR};
	Object[] inputvalues={input0};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_popularservices_homepage_selectedit Result="+callprocforoutputparamsV2.toString());
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
