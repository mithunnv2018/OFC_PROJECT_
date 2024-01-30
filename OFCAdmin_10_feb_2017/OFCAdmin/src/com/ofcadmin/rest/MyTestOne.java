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

@Path("/project")
public class MyTestOne {

	 public MyTestOne() {
		 System.out.println("MyTestOne.MyTestOne()");
	}
	
	 @POST
		@Path("create")
		@Produces(MediaType.APPLICATION_JSON)
		public Response create(@FormParam("input") String projectobj,@FormParam("fileupload") String fupload,
				@Context HttpServletRequest request,@Context HttpServletResponse response){
			System.out.println("MyApp.wS_tbl_project_master_create()");
			
			String proccommand="CALL proc_tbl_project_master_create(?,?,?,?,?)";
//			String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
			int[] types={Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
			Object[] inputvalues={projectobj,fupload};
			String createSQLQuery;
			String output="";
			try { 
				ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
				System.out.println("proc_tbl_milestones_project_create Result="+callprocforoutputparamsV2.toString());
				if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
					if (callprocforoutputparamsV2.get(0) != null){
//						output=(String) callprocforoutputparamsV2.get(0);
						
						String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
						
						String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
						String object = (String) callprocforoutputparamsV2.get(0);
						
						JSONArray jsonArray = new JSONArray(object);
						if(jsonArray.length()>0){
						for(int i=0;i<jsonArray.length();i++){
							JSONObject jsonObject = jsonArray.getJSONObject(i);
							String uploadfile_path=jsonObject.getString("uploadfile_path");
							String uploadfile_type=jsonObject.getString("uploadfile_type");
							String uploadfile_status=jsonObject.getString("uploadfile_status");
							String uploadfile_filename=jsonObject.getString("uploadfile_filename");
							String uploadfile_actulalfilename=jsonObject.getString("uploadfile_actulalfilename");
							
							String oldfile=uploadedFileLocation+uploadfile_actulalfilename;
							String newfile=realuploadedFileLocation+uploadfile_filename;
							
							File file2 = new File(oldfile);
							File filenew = new File(newfile);
							if(uploadfile_status.equalsIgnoreCase("Yes")){
								FileUtils.copyFile(file2, filenew);
								boolean delete = file2.delete();
								System.out.println(oldfile+" deleted here ="+delete);
							}
							if(uploadfile_status.equalsIgnoreCase("Delete")){
								
							}
					
							
						}
						
					}
				}
					if (callprocforoutputparamsV2.get(1) != null){
						output=(String) callprocforoutputparamsV2.get(1);
						System.out.println("MyApp.wS_tbl_project_master_create() :" + output);
					}
//					if (callprocforoutputparamsV2.get(2) != null){
//						output=(String) callprocforoutputparamsV2.get(2);
//						System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//					}
			 }
			}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return Response.status(200).entity(output).build();
		}
		
		@POST
		@Path("selectall")
		@Produces(MediaType.APPLICATION_JSON)
		public Response selectall(@FormParam("input") String input)
				{
			System.out.println("MyApp.wS_tbl_project_master_selectall()" + input);
			
			String proccommand="CALL proc_tbl_project_master_selectjson(?)";
//			String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
			int[] types={Types.VARCHAR};
			Object[] inputvalues={};
			String createSQLQuery;
			String output="";
			try { 
				ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
				System.out.println("proc_tbl_project_master_selectjson Result="+callprocforoutputparamsV2.toString());
				if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
					if (callprocforoutputparamsV2.get(0) != null){
						output=(String) callprocforoutputparamsV2.get(0);
						
//						String object = (String) callprocforoutputparamsV2.get(0);
				}
					
//					if (callprocforoutputparamsV2.get(2) != null){
//						output=(String) callprocforoutputparamsV2.get(2);
//						System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//					}
			 }
			}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			System.out.println("MyApp.wS_tbl_project_master_selectall()" + output);
			return Response.status(200).entity(output).build();
		}
		
		@POST
		@Path("selectedit")
		@Produces(MediaType.APPLICATION_JSON)
		public Response selectedit(@FormParam("input") String input)
				{
			System.out.println("MyApp.wS_tbl_project_master_selectedit()" + input);
			
			String proccommand="CALL proc_tbl_project_master_selectedit(?,?)";
//			String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
			int[] types={Types.VARCHAR};
			Object[] inputvalues={input};
			String createSQLQuery;
			String output="";
			try { 
				ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
				System.out.println("proc_tbl_project_master_selectedit Result="+callprocforoutputparamsV2.toString());
				if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
					if (callprocforoutputparamsV2.get(0) != null){
						output=(String) callprocforoutputparamsV2.get(0);
						
//						String object = (String) callprocforoutputparamsV2.get(0);
				}
					
//					if (callprocforoutputparamsV2.get(2) != null){
//						output=(String) callprocforoutputparamsV2.get(2);
//						System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//					}
			 }
			}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			
			} catch (Exception e) {
				e.printStackTrace();
			}
			System.out.println("MyApp.wS_tbl_project_master_selectedit()"+ output);
			return Response.status(200).entity(output).build();
		}

		@POST
		@Path("update")
		@Produces(MediaType.APPLICATION_JSON)
		public Response update(@FormParam("input") String input,@FormParam("fileupload") String fupload,
				@Context HttpServletRequest request,@Context HttpServletResponse response){
			
			System.out.println("MyApp.wS_tbl_project_master_update()" + input);
			System.out.println("MyApp.wS_tbl_project_master_update()" + fupload);
			
			String proccommand="CALL proc_tbl_project_master_update(?,?,?,?,?)";
//			String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
			int[] types={Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
			Object[] inputvalues={input,fupload};
			String createSQLQuery;
			String output="";
			try { 
				ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
				System.out.println("proc_tbl_project_master_update Result="+callprocforoutputparamsV2.toString());
				if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
					if (callprocforoutputparamsV2.get(0) != null){
//						output=(String) callprocforoutputparamsV2.get(0);
						
						String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
						
						String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
						String object = (String) callprocforoutputparamsV2.get(0);
						
						JSONArray jsonArray = new JSONArray(object);
						if(jsonArray.length()>0){
						for(int i=0;i<jsonArray.length();i++){
							JSONObject jsonObject = jsonArray.getJSONObject(i);
							String uploadfile_path=jsonObject.getString("uploadfile_path");
							String uploadfile_type=jsonObject.getString("uploadfile_type");
							String uploadfile_status=jsonObject.getString("uploadfile_status");
							String uploadfile_filename=jsonObject.getString("uploadfile_filename");
							String uploadfile_actulalfilename=jsonObject.getString("uploadfile_actulalfilename");
							
							String oldfile=uploadedFileLocation+uploadfile_actulalfilename;
							String newfile=realuploadedFileLocation+uploadfile_filename;
							
							File file2 = new File(oldfile);
							File filenew = new File(newfile);
							if(uploadfile_status.equalsIgnoreCase("Yes")){
								FileUtils.copyFile(file2, filenew);
								boolean delete = file2.delete();
								System.out.println(oldfile+" deleted here ="+delete);
							}
							if(uploadfile_status.equalsIgnoreCase("Delete")){
								
							}
					
							
						}
						
					}
				}
					if (callprocforoutputparamsV2.get(1) != null){
						output=(String) callprocforoutputparamsV2.get(1);
						System.out.println("MyApp.wS_tbl_project_master_update()" + output);
					}
//					if (callprocforoutputparamsV2.get(2) != null){
//						output=(String) callprocforoutputparamsV2.get(2);
//						System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//					}
			 }
			}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			
			return Response.status(200).entity(output).build();
		}	 
}
