package com.ofcadmin.rest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.io.FileUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.ofcadmin.util.QuickUtil;
import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.BodyPartEntity;
import com.sun.jersey.multipart.FormDataBodyPart;
import com.sun.jersey.multipart.FormDataMultiPart;
import com.sun.jersey.multipart.FormDataParam;




@Path("/taskmanager")
public class MyApp {

//	private String sourceEmail="nifseabankar@gmail.com";
//    final String password = "mycollege"; // correct password for Gmail id
    
//		private String sourceEmail="eexamnifsengp@gmail.com";
//    final String password = "anandbankardirector"; // correct password for Gmail id
//    final String toEmail = "nifsengp@gmail.com";//fasttechinfo786@gmail.com"; // any destination email id

	public MyApp() {
		System.out.println("MyTestApp.MyTestApp()");
	}


	@POST
	@Path("WS_tbl_project_master_create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_tbl_project_master_create(@FormParam("input") String projectobj,@FormParam("fileupload") String fupload,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.wS_tbl_project_master_create()");
		
		String proccommand="CALL proc_tbl_project_master_create(?,?,?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={projectobj,fupload};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_milestones_project_create Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
//					output=(String) callprocforoutputparamsV2.get(0);
					
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
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
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
	@Path("WS_tbl_project_master_selectall")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_tbl_project_master_selectall(@FormParam("input") String input)
			{
		System.out.println("MyApp.wS_tbl_project_master_selectall()" + input);
		
		String proccommand="CALL proc_tbl_project_master_selectjson(?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
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
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
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
	@Path("WS_tbl_project_master_selectedit")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_tbl_project_master_selectedit(@FormParam("input") String input)
			{
		System.out.println("MyApp.wS_tbl_project_master_selectedit()" + input);
		
		String proccommand="CALL proc_tbl_project_master_selectedit(?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
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
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
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
	@Path("WS_tbl_project_master_update")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_tbl_project_master_update(@FormParam("input") String input,@FormParam("fileupload") String fupload,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		
		System.out.println("MyApp.wS_tbl_project_master_update()" + input);
		System.out.println("MyApp.wS_tbl_project_master_update()" + fupload);
		
		String proccommand="CALL proc_tbl_project_master_update(?,?,?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={input,fupload};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_project_master_update Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
//					output=(String) callprocforoutputparamsV2.get(0);
					
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
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
		 }
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		return Response.status(200).entity(output).build();
	}
	
	
	//CALL proc_tbl_milestones_project_create('{"project_id":"1","projmile_name":"abc","projmile_description":"abc","projmile_estimatedays":"4","projmile_remarks":"-","project_startdate":"","project_enddate":"","projmile_actualdaysrequired":"2","member_id":"1","status":"active"}','[{"fileName":"abc.jpg","fileType":"img","fileSrno":"1","filePath":"-","uploadfile_filename":"","fileStatus":"Yes"},{"fileName":"xyz.jpg","fileType":"img","fileSrno":"1","filePath":"-","uploadfile_filename":"","fileStatus":"Yes"}]',@a);
//	SELECT @a;
	@POST
	@Path("insertMilestonesProject")
	@Produces(MediaType.APPLICATION_JSON)
	public Response insertMilestonesProject(@FormParam("input") String enrollno,@FormParam("fileupload") String fupload,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		
		System.out.println("MyApp.insertTestone()" + enrollno);
		
		String proccommand="CALL proc_tbl_milestones_project_create(?,?,?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={enrollno,fupload};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_milestones_project_create Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
//					output=(String) callprocforoutputparamsV2.get(0);
					
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
					System.out.println("MyApp.insertMilestonesProject() 1 :" + output);
				}
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
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
	@Path("updateMilestonesProject")
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateMilestonesProject(@FormParam("input") String enrollno,@FormParam("fileupload") String fupload,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		
		System.out.println("MyApp.updateMilestonesProject()" + enrollno);
		System.out.println("MyApp.updateMilestonesProject()" + fupload);
		
		String proccommand="CALL proc_tbl_milestones_project_update(?,?,?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={enrollno,fupload};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_milestones_project_update Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
//					output=(String) callprocforoutputparamsV2.get(0);
					
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
					System.out.println("MyApp.updateMilestonesProject() 1 :" + output);
				}
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
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
	@Path("selectAllMilestone")
	@Produces(MediaType.APPLICATION_JSON)
	public Response selectAllMilestone(@FormParam("input") String enrollno)
			{
		
		System.out.println("MyApp.selectAllMilestone()" + enrollno);
		
		String proccommand="CALL proc_tbl_milestones_project_selectjson(?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_milestones_project_create Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
					output=(String) callprocforoutputparamsV2.get(0);
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
		 }
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("MyApp.proc_tbl_milestones_project_selectjson(): " + output);
		return Response.status(200).entity(output).build();
	}
	
	@POST
	@Path("selectAllfileuploadMilestone")
	@Produces(MediaType.APPLICATION_JSON)
	public Response selectAllfileuploadMilestone(@FormParam("input") String enrollno)
			{
		
		System.out.println("MyApp.selectAllfileuploadMilestone()" + enrollno);
		
		String proccommand="CALL proc_select_fileuploads(?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={"tbl_fileuploads_projectmilestones",enrollno};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_select_fileuploads Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
					output=(String) callprocforoutputparamsV2.get(0);
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
		 }
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("MyApp.selectAllfileuploadMilestone(): " + output);
		return Response.status(200).entity(output).build();
	}
	
	@POST
	@Path("selectEditMilestone")
	@Produces(MediaType.APPLICATION_JSON)
	public Response selectEditMilestone(@FormParam("input") String enrollno)
			{
		
		System.out.println("MyApp.selectEditMilestone()" + enrollno);
		
		String proccommand="CALL proc_tbl_milestones_project_selectedit(?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={enrollno};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_milestones_project_selectedit Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
					output=(String) callprocforoutputparamsV2.get(0);
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
		 }
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("MyApp.selectEditMilestone(): " + output);
		return Response.status(200).entity(output).build();
	}
	
	@POST
	@Path("selectdrpproject")
	@Produces(MediaType.APPLICATION_JSON)
	public Response selectdrpproject(@FormParam("input") String enrollno)
			{
		
		System.out.println("MyApp.selectdrpproject()" + enrollno);
		
		String proccommand="CALL proc_tbl_project_master_drpjson(?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_milestones_project_create Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
					output=(String) callprocforoutputparamsV2.get(0);
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
//				if (callprocforoutputparamsV2.get(2) != null){
//					output=(String) callprocforoutputparamsV2.get(2);
//					System.out.println("MyApp.insertMilestonesProject() 2 :" + output);
//				}
		 }
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("MyApp.selectdrpproject(): " + output);
		return Response.status(200).entity(output).build();
	}
	
	@POST
	@Path("updateTestone")
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateTestone(@FormParam("input") String enrollno){
		
		System.out.println("MyApp.updateTestone()" + enrollno);
		
		String proccommand="CALL proc_tbl_testone_updatejson(?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={enrollno};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(1) == null){
					output=(String) callprocforoutputparamsV2.get(0);
				}else{
					output=(String) callprocforoutputparamsV2.get(1);
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return Response.status(200).entity(output).build();
	}
	
	@POST
	@Path("selecttestone")
	@Produces(MediaType.APPLICATION_JSON)
	public Response selecttestone(@QueryParam("enrollno") String enrollno){
		
		System.out.println("MyApp.selecttestone()");
		
		String proccommand="CALL proc_testone_selectjson(?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={};
		String createSQLQuery;
		String output="";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				output=(String) callprocforoutputparamsV2.get(0);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return Response.status(200).entity(output).build();
	}
	
	
	@POST
	@Path("drpproject")
	@Produces(MediaType.APPLICATION_JSON)
	public Response drpproject(@FormParam("input") String enrollno){
		 
		System.out.println("MyApp.selecttestone()");
		 
		String proccommand="CALL proc_tbl_project_master_drpjson(?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={};
		String createSQLQuery;
		String output="";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				output=(String) callprocforoutputparamsV2.get(0);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return Response.status(200).entity(output).build();
	}
	
	@GET
	@Path("testOne")
	@Produces(MediaType.APPLICATION_JSON)
	public Response isTestOne(@QueryParam("enrollno") String enrollno){
		
		System.out.println("MyApp.isTestOne()");
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("test1", "Resulttest1");
		
		String output = jsonObject.toString();
		String proccommand="CALL mytestone()";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={};
		Object[] inputvalues={};
		JSONArray createSQLQuery=new JSONArray();
		try {
			createSQLQuery = QuickUtil.callprocforOutputwithoutparams(proccommand);
			System.out.println("Result="+createSQLQuery.toString());
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		output=createSQLQuery.toString();
		return Response.status(200).entity(output).build();
	}
	
	@GET
	@Path("testTwo")
	@Produces(MediaType.APPLICATION_JSON)
	public Response isTesttwo(@QueryParam("busname") String busname){
		System.out.println("MyApp.isTesttwo()");
		String output="";
		try {
			String proccommand="call proc_tbl_business_master_create(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			Object[] inputvalues={busname,"reg12","TAXNO12","2.0","mY bUSINES TEST FROM REST","tERMS OF PURCHAS FROM REST","AA@AAAA.CO","mYADD","TEST","TEST","TEST","TEST","TEST","1"};
			int[] types={Types.BOOLEAN,Types.VARCHAR,Types.VARCHAR,Types.VARCHAR,Types.VARCHAR};
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("Result="+callprocforoutputparamsV2);
		
			return Response.status(200).entity(callprocforoutputparamsV2.toString()).build();
		} catch (Exception e) {
			 e.printStackTrace();
		}
		return Response.status(200).entity(output).build();
	}

	@Path("files2")
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadFiles(final FormDataMultiPart multiPart) {

		System.out.println("MyApp.uploadFiles()");
		List<FormDataBodyPart> bodyParts = multiPart.getFields("files");

		StringBuffer fileDetails = new StringBuffer("");

		/* Save multiple files */
		for (int i = 0; i < bodyParts.size(); i++) {
			BodyPartEntity bodyPartEntity = (BodyPartEntity) bodyParts.get(i).getEntity();
			String fileName = bodyParts.get(i).getContentDisposition().getFileName();
			saveFile(bodyPartEntity.getInputStream(), fileName);
			fileDetails.append(" File saved at " + fileName);
		}

		/* Save File 2 */

		/*BodyPartEntity bodyPartEntity = ((BodyPartEntity) multiPart.getField("file2").getEntity());
		String file2Name = multiPart.getField("file2").getFormDataContentDisposition().getFileName();
		saveFile(bodyPartEntity.getInputStream(), file2Name);
		fileDetails.append(" File saved at /Volumes/Drive2/temp/file/" + file2Name);

		fileDetails.append(" Tag Details : " + multiPart.getField("tags").getValue());*/
		System.out.println(fileDetails);

		String output="success";
		return Response.status(200).entity(output).build();
//		return Response.ok(fileDetails.toString()).build();
	}
	
	@Path("/obsoletefiles2")
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadFiles2(@DefaultValue("") @FormDataParam("tags") String tags,
			@FormDataParam("files") List<FormDataBodyPart> bodyParts,
			@FormDataParam("files") FormDataContentDisposition fileDispositions
			) {

		StringBuffer fileDetails = new StringBuffer("");

		/* Save multiple files */
		String fileName = null;
		for (int i = 0; i < bodyParts.size(); i++) {
			/*
			* Casting FormDataBodyPart to BodyPartEntity, which can give us
			* InputStream for uploaded file
			*/
			BodyPartEntity bodyPartEntity = (BodyPartEntity) bodyParts.get(i).getEntity();
			 fileName = bodyParts.get(i).getContentDisposition().getFileName();

			saveFile(bodyPartEntity.getInputStream(), fileName);

			fileDetails.append(" File saved at /Volumes/Drive2/temp/file/" + fileName);
		}

		 
		fileDetails.append(" File saved at /Volumes/Drive2/temp/file/" + fileName);
		fileDetails.append(" Tag Details : " + tags);

		System.out.println(fileDetails);

		return Response.ok(fileDetails.toString()).build();
	}

	
	/**
	* This method is to copy the file from temp folder to realtemp final folder
	* DEMO REST CALL IS 
	* http://localhost:8080/Atultest/rest/atultest/submitfileupload?fileuploadarray=[{"name":"1.jpg"},{"name":"1.png"}]
	* MAKE 2 FOLDERS C://temp AND C://tempreal
	* @param filearray
	* @return
	*/
	@POST
	@Path("OLDsubmitfileupload")
	@Produces(MediaType.APPLICATION_JSON)
	public Response submitfileupload(@FormParam("fileuploadarray") String filearray,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		
		System.out.println("MyApp.submitfileupload()");
		try {
			String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
			
//			String uploadedFileLocation = "c://temp";
			String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
//			String realuploadedFileLocation = "c://tempreal";
			File file = new File(realuploadedFileLocation);
			if(file.exists()==false){
				file.createNewFile();
			}
			JSONArray arr=new JSONArray(filearray);
			if(arr!=null && arr.length()>0){
				for(int i=0;i<arr.length();i++){
					JSONObject jsonObject = arr.getJSONObject(i);
					String name=jsonObject.getString("name");
					String oldfile=uploadedFileLocation+name;
					String newfile=realuploadedFileLocation+name;
					
					File file2 = new File(oldfile);
					File filenew = new File(newfile);
					FileUtils.copyFile(file2, filenew);
					
//					if(filenew.exists()){
						boolean delete = file2.delete();
						System.out.println(oldfile+" deleted here ="+delete);
//					}
			
					
				}
			}
			System.out.println("File array struct="+filearray);
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONObject output=new JSONObject();
		output.put("issuccess", "true");
		
		return Response.status(200).entity(output.toString()).build();
	}

	@POST
	@Path("submitfileupload")
	@Produces(MediaType.APPLICATION_JSON)
	public Response submitfileupload2(@FormParam("fileuploadarray") String filearray,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		
		System.out.println("MyApp.submitfileupload()");
		try {
			String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
			
//			String uploadedFileLocation = "c://temp";
			String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
//			String realuploadedFileLocation = "c://tempreal";
			File file = new File(realuploadedFileLocation);
			if(file.exists()==false){
				file.createNewFile();
			}
			JSONArray arr=new JSONArray(filearray);
//			JSONArray arrtemp=new JSONArray();
//			
//			
//			if(arr!=null && arr.length()>0){
//				for(int i=0;i<arr.length();i++){
//					JSONObject jsonObject = arr.getJSONObject(i);
//					String name=jsonObject.getString("name");
//					String type=jsonObject.optString("type");
//					
//					String oldfile=uploadedFileLocation+name;
//					String newfile=realuploadedFileLocation+name;
//					 
//					JSONObject jsonObject2 = new JSONObject();
//					jsonObject2.put("fileName", name);
//					jsonObject2.put("fileType", type);
//					jsonObject2.put("filePath", "");//oldfile);
//					arrtemp.put(jsonObject2);
//					
//				}
//			}
			System.out.println("Sending JSON ="+arr.toString());
			String tablename="tbl_fileuploads_projectmilestones";
			String pkid=new Date().getTime()+"";
			String json=arr.toString();
			String proccommand="call proc_uploadfile_master_createjson(?,?,?,?)";
			Object[] inputvalues={tablename,pkid,json};
			int[] types={Types.VARCHAR};
			
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.isEmpty()==false){
			
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
			
						
			System.out.println("File array struct="+filearray);
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONObject output=new JSONObject();
		output.put("issuccess", "true");
		
		return Response.status(200).entity(output.toString()).build();
	}

	@POST
	@Path("submitfileuploadEdit")
	@Produces(MediaType.APPLICATION_JSON)
	public Response submitfileuploadEdit2(@FormParam("fileuploadarray") String filearray,
			@FormParam("editpk") String editpk,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		
		System.out.println("MyApp.submitfileuploadEdit2()");
		try {
			String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
			
//			String uploadedFileLocation = "c://temp";
			String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
//			String realuploadedFileLocation = "c://tempreal";
			File file = new File(realuploadedFileLocation);
			if(file.exists()==false){
				file.createNewFile();
			}
			JSONArray arr=new JSONArray(filearray);
//			JSONArray arrtemp=new JSONArray();
//			
//			
//			if(arr!=null && arr.length()>0){
//				for(int i=0;i<arr.length();i++){
//					JSONObject jsonObject = arr.getJSONObject(i);
//					String name=jsonObject.getString("name");
//					String type=jsonObject.optString("type");
//					
//					String oldfile=uploadedFileLocation+name;
//					String newfile=realuploadedFileLocation+name;
//					String uploadfile_filename="";
//					
//					File file2 = new File(newfile);
//					String fileStatus="";
//					if(file2.exists()){
//						fileStatus="No";
//						uploadfile_filename=name;
//					}
//					else{
//						fileStatus="Yes";
//					}
//					JSONObject jsonObject2 = new JSONObject();
//					jsonObject2.put("fileName", name);
//					jsonObject2.put("fileType", type);
//					jsonObject2.put("filePath", "");//oldfile);
//					jsonObject2.put("fileStatus", fileStatus);
//					jsonObject2.put("uploadfile_filename", uploadfile_filename);
//					arrtemp.put(jsonObject2);
//					
//				}
//			}
			System.out.println("Sending JSON ="+arr.toString());
			String tablename="tbl_fileuploads_projectmilestones";
			String pkid=editpk;
			String json=arr.toString();
			String proccommand="call proc_uploadfile_master_updatejson(?,?,?,?)";
			Object[] inputvalues={tablename,pkid,json};
			int[] types={Types.VARCHAR};
			
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.isEmpty()==false){
			
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
						filenew.delete();
					}
			
					
				}
			}
			
			}
			
						
			System.out.println("File array struct="+filearray);
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONObject output=new JSONObject();
		output.put("issuccess", "true");
		
		return Response.status(200).entity(output.toString()).build();
	}

/**
	* This is the method of rest to be called from primeng code for fileupload
	* REM the fileupload componment using has the name="files"  in syntax 
	* @param bodyParts
	* @param fileDispositions
	* @return
	*/
	@Path("multiplefiles")
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadFiles2(@FormDataParam("files") List<FormDataBodyPart> bodyParts,
			@FormDataParam("files") FormDataContentDisposition fileDispositions,
			@Context HttpServletRequest request,@Context HttpServletResponse response) {

		StringBuffer fileDetails = new StringBuffer("");
		
		String imagePathForSaveWS = QuickUtil.getImagePathForSaveWS(request, response, "temp");

		/* Save multiple files */

		for (int i = 0; i < bodyParts.size(); i++) {
			/*
			* Casting FormDataBodyPart to BodyPartEntity, which can give us
			* InputStream for uploaded file
			*/
			BodyPartEntity bodyPartEntity = (BodyPartEntity) bodyParts.get(i).getEntity();
			String fileName = bodyParts.get(i).getContentDisposition().getFileName();

//			saveFile(bodyPartEntity.getInputStream(), fileName);
			String uploadedFileLocation = imagePathForSaveWS + fileName;
			writeToFile(bodyPartEntity.getInputStream(), uploadedFileLocation);
			fileDetails.append(" File saved at " + uploadedFileLocation);
		}
		return Response.status(200).entity(fileDetails.toString()).build();

	}
	

	// save uploaded file to new location
	private void writeToFile(InputStream uploadedInputStream,
		String uploadedFileLocation) {

		try {
			OutputStream out = new FileOutputStream(new File(
					uploadedFileLocation));
			int read = 0;
			byte[] bytes = new byte[1024];

			out = new FileOutputStream(new File(uploadedFileLocation));
			while ((read = uploadedInputStream.read(bytes)) != -1) {
				out.write(bytes, 0, read);
			}
			out.flush();
			out.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}
	
	
	private void saveFile(InputStream file, String name) {
		
		OutputStream outputStream = null;

		try {
			 

			// write the inputStream to a FileOutputStream
			outputStream =
	                    new FileOutputStream(new File("c:\\Temp\\"+name));

			int read = 0;
			byte[] bytes = new byte[1024];

			while ((read = file.read(bytes)) != -1) {
				outputStream.write(bytes, 0, read);
			}

			System.out.println("Done!");

		} catch (IOException ie) {
			ie.printStackTrace();
		}
		finally {
			if (file != null) {
				try {
					file.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (outputStream != null) {
				try {
					// outputStream.flush();
					outputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}

			}
		}
	}


	
//	@GET
//	@Path("isStudentExist")
//	@Produces(MediaType.APPLICATION_JSON)
//	public Response isStudentExist(@QueryParam("enrollno") String enrollno){
//		System.out.println("MyApp.isStudentExist()");
//		
//		String whereclause="admissionEnrollno='"+enrollno+"'";
//		List<TblAdmissionMaster> retrieveWherClause = QuickUtil.retrieveWherClause(new TblAdmissionMaster(), "TblAdmissionMaster", whereclause);
//		String output="";
//		if(retrieveWherClause.size()>0)
//		{
//			TblAdmissionMaster tblAdmissionMaster = retrieveWherClause.get(0);
//			
//			String admissionBatchYear = tblAdmissionMaster.getAdmissionBatchYear();
//			String admissionCoursename = tblAdmissionMaster.getAdmissionCoursename();
//			String admissionEnrollno = tblAdmissionMaster.getAdmissionEnrollno();
//			Date admissionStudentDob = tblAdmissionMaster.getAdmissionStudentDob();
//			String admissionStudentGender = tblAdmissionMaster.getAdmissionStudentGender();
//			String admissionStudentName = tblAdmissionMaster.getAdmissionStudentName();
//			String admissionTypeofcourse = tblAdmissionMaster.getAdmissionTypeofcourse();
//			
//			JSONObject jsonObject = new JSONObject();
//			jsonObject.put("admissionTypeofcourse", admissionTypeofcourse);
//			jsonObject.put("admissionBatchYear",admissionBatchYear );
//			jsonObject.put("admissionCoursename",admissionCoursename );
//			jsonObject.put("admissionEnrollno",admissionEnrollno );
//			jsonObject.put("admissionStudentDob",admissionStudentDob.toString() );
//			jsonObject.put("admissionStudentGender",admissionStudentGender );
//			jsonObject.put("admissionStudentName",admissionStudentName );
//			 
//			
//			output=jsonObject.toString();//"success";
//			
//		}
//		else
//		{
//			output="failure";
//		}
//		return Response.status(200).entity(output).build();
//	}
//	
//	@GET
//	@Path("sendFormByMail")
//	public Response sendMailFormNifse(@QueryParam("name") String name,
//			@QueryParam("toEmail") String toEmailx, 
//			@QueryParam("emailsave") String emailsave,
//			@QueryParam("phone") String phone,
//			@QueryParam("coursetype") String coursetype,
//			@QueryParam("courseselected") String courseselected,
//			@QueryParam("comments") String comments) {
//
//		System.out.println("MyApp.sendMailFormNifse()");
//		Session sessionemail = doEmailInit();
//
//		String subject = "Nifse Enquiry Form";
//		String body = "Hello <br/>" + "Name :" + name + " <br/>"
//				+ "Email :" + emailsave + " <br/>" + "Phone :" + phone
//				+ " <br/>" + "Course Type :" + coursetype + " <br/>"
//				+ "Course Selected :" + courseselected + " <br/>"
//				+ "Comments :" + comments;
//
//		String fromemail = sourceEmail;
//		generateAndSendEmail(sessionemail, toEmailx, subject, body, fromemail);
//
// 
//		String output="success";
//		return Response.status(200).entity(output).build();
//
//	}
//	
//    
//    /**
//     * TO Initialize the email comnfig
//     * @return
//     */
//    public Session doEmailInit()
//    {
//  
//         Properties props = new Properties();
//         props.put("mail.smtp.host", "smtp.gmail.com");
//         props.put("mail.smtp.port", "587");
//         props.put("mail.smtp.auth", "true");
//         props.put("mail.smtp.starttls.enable", "true");
//  
//         System.out
//                 .println("NIFSE HERE\n2nd ===> create Authenticator object to pass in Session.getInstance argument..");
//  
//         Authenticator authentication = new Authenticator() {
//             protected PasswordAuthentication getPasswordAuthentication() {
//                 return new PasswordAuthentication(sourceEmail, password);
//             }
//         };
//         Session session = Session.getInstance(props, authentication);
//        
//         return session;
//    }
//
//	
//	public static void generateAndSendEmail(Session session, String toEmail, String subject,
//            String body,String fromemail) {
//        try {
//        	System.out.println("NIFSE MyApp.generateAndSendEmail()");
//            System.out.println("\n3rd ===> generateAndSendEmail() starts..");
// 
//            MimeMessage crunchifyMessage = new MimeMessage(session);
//            crunchifyMessage.addHeader("Content-type", "text/HTML; charset=UTF-8");
//            crunchifyMessage.addHeader("format", "flowed");
//            crunchifyMessage.addHeader("Content-Transfer-Encoding", "8bit");
// 
//            crunchifyMessage.setFrom(new InternetAddress(fromemail,
//                    "Nifse Enquriry Form"));
//            crunchifyMessage.setReplyTo(InternetAddress.parse(fromemail, false));
//            crunchifyMessage.setSubject(subject, "UTF-8");
//            crunchifyMessage.setSentDate(new Date());
//            crunchifyMessage.setRecipients(Message.RecipientType.TO,
//                    InternetAddress.parse(toEmail, false));
// 
//            // Create the message body part
//            BodyPart messageBodyPart = new MimeBodyPart();
//            messageBodyPart.setContent(body, "text/html");
// 
//            // Create a multipart message for attachment
//            Multipart multipart = new MimeMultipart();
// 
//            // Set text message part
//            multipart.addBodyPart(messageBodyPart);
// 
// 
// 			crunchifyMessage.setContent(multipart);
// 
//            System.out.println("\n5th ===> Finally Send message..");
// 
//            // Finally Send message
//            Transport.send(crunchifyMessage);
// 
//            System.out
//                    .println("\n6th ===> Email Sent Successfully With Image Attachment. Check your email now..");
//            System.out.println("\n7th ===> generateAndSendEmail() ends..");
// 
//        } catch (MessagingException e) {
//            e.printStackTrace();
//        } catch (UnsupportedEncodingException e) {
//            e.printStackTrace();
//        }
//    }
//	
//	@GET
//	@Path("getExamResult")
//	@Produces(MediaType.APPLICATION_JSON)
//	public Response getExamResult(@QueryParam("enrollno") String enrollno) {
//		System.out.println("MyApp.getExamResult()");
//		JSONObject jsonObj = new JSONObject();
//
//		try {
//			
//			String sql="SELECT a.student_name,a.student_id,a.exam_id,b.exam_sponsoringauth,b.exam_batchno,b.exam_division,b.exam_dateofexam FROM tbl_student_master a,tbl_exam_master b \r\n" + 
//					"WHERE a.student_enrollno='"+enrollno+"' AND a.exam_id=b.exam_id AND b.exam_status='active'";
//			
//			
//			
//			/*String whereclause = "studentEnrollno='" + enrollno + "' ";
//			List<TblStudentMaster> retrieveWherClause = QuickUtil
//					.retrieveWherClause(new TblStudentMaster(),
//							"TblStudentMaster", whereclause);*/
//			List<HashMap> createSQLQueryHashMap = QuickUtil.CreateSQLQueryHashMap(sql);
//			if (createSQLQueryHashMap.size() > 0) {
//				
//				String resultofexampassorfail="Pass";
//				Integer theorycount = 0;
//				Float theorymaxtotal = 0f;
//				Float theorymintotal = 0f;
//				Float theoryobtainedtotal = 0f;
//
//				Integer practicalcount = 0;
//				Float practicalmaxtotal = 0f;
//				Float practicalmintotal = 0f;
//				Float practicalobtainedtotal = 0f;
//
//				/*TblStudentMaster tblStudentMaster = retrieveWherClause.get(0);*/
//				HashMap hashMaptblStudentMaster = createSQLQueryHashMap.get(0);
//				Integer examId = (Integer) hashMaptblStudentMaster.get("exam_id");//tblStudentMaster.getExamId();
//				/*String whereclause2 = "examId=" + examId + " AND examStatus='active'";
//				List<TblExamMaster> retrieveWherClause2 = QuickUtil
//						.retrieveWherClause(new TblExamMaster(),
//								"TblExamMaster", whereclause2);*/
////				if (retrieveWherClause2.size() > 0) {
//				if(examId!=null){	
////					TblExamMaster tblExamMaster = retrieveWherClause2.get(0);
//
//					String studentName = (String) hashMaptblStudentMaster.get("student_name");//tblStudentMaster.getStudentName();
//					Integer studentId = (Integer) hashMaptblStudentMaster.get("student_id");//tblStudentMaster.getStudentId();
//
//					String examSponsoringauth = (String) hashMaptblStudentMaster.get("exam_sponsoringauth");//tblExamMaster.getExamSponsoringauth();
//					String examBatchno = (String) hashMaptblStudentMaster.get("exam_batchno");//tblExamMaster.getExamBatchno();
//					String examDivision = (String) hashMaptblStudentMaster.get("exam_division");//tblExamMaster.getExamDivision();
//					Date examDateofexam = (Date) hashMaptblStudentMaster.get("exam_dateofexam");//tblExamMaster.getExamDateofexam();
//
//					SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
//					String strdateofexam = df.format(examDateofexam);
//
//					jsonObj.put("studentName", studentName);
//					jsonObj.put("enrollno", enrollno);
//					jsonObj.put("examSponsoringauth", examSponsoringauth);
//					jsonObj.put("examBatchno", examBatchno);
//					jsonObj.put("dateofexam", strdateofexam);
//					jsonObj.put("examDivision", examDivision);
//					Integer theorycategoryid = null;
//					Integer practicalcategoryid = null;
//
//					JSONObject objpaperinfo = new JSONObject();
//					JSONObject objpaperinfoprac = new JSONObject();
//
//					String whereclause3 = "examId=" + examId;
//					List<TblMainCategoryMaster> retrieveWherClause3 = QuickUtil
//							.retrieveWherClause(new TblMainCategoryMaster(),
//									"TblMainCategoryMaster", whereclause3);
//					if (retrieveWherClause3.size() > 0) {
//
//						for (int k = 0; k < retrieveWherClause3.size(); k++) {
//							TblMainCategoryMaster tblMainCategoryMaster = retrieveWherClause3
//									.get(k);
//							String maincatName = tblMainCategoryMaster
//									.getMaincatName();
//							if (maincatName.equalsIgnoreCase("Theory")) {
//								theorycategoryid = tblMainCategoryMaster
//										.getMaincatId();
//							} else if (maincatName
//									.equalsIgnoreCase("Practical")) {
//								practicalcategoryid = tblMainCategoryMaster
//										.getMaincatId();
//							}
//						}
//
//						if (theorycategoryid != null) {
//							String whereclause4 = "maincatId="
//									+ theorycategoryid + "";
//							List<TblMainpaperMaster> retrieveWherClause4 = QuickUtil
//									.retrieveWherClause(
//											new TblMainpaperMaster(),
//											"TblMainpaperMaster", whereclause4);
//
//							for (int p = 0; p < retrieveWherClause4.size(); p++) {
//								TblMainpaperMaster tblMainpaperMaster = retrieveWherClause4
//										.get(p);
//								String mainpapName = tblMainpaperMaster
//										.getMainpapName();
//								Float mainpapMinmarks = tblMainpaperMaster
//										.getMainpapMinmarks();
//								int mainpapId = tblMainpaperMaster
//										.getMainpapId();
//
//								theorymintotal += mainpapMinmarks;
//
//								JSONObject obj1 = new JSONObject();
//								obj1.put("mainpapName", mainpapName);
//								obj1.put("mainpapMinmarks", mainpapMinmarks);
//
//								String whereclause5 = "mainpapId=" + mainpapId;
//								List<TblPapercategoryMaster> retrieveWherClause5 = QuickUtil
//										.retrieveWherClause(
//												new TblPapercategoryMaster(),
//												"TblPapercategoryMaster",
//												whereclause5);
//								for (int q = 0; q < retrieveWherClause5.size(); q++) {
//									TblPapercategoryMaster tblPapercategoryMaster = retrieveWherClause5
//											.get(q);
//									String papcatName = tblPapercategoryMaster
//											.getPapcatName();
//									Float papcatMaxmarks = tblPapercategoryMaster
//											.getPapcatMaxmarks();
//
//									theorymaxtotal += papcatMaxmarks;
//
//									if (papcatName.equalsIgnoreCase("PAPER")) {
//										obj1.put("papcatMaxmarks_PAPER",
//												papcatMaxmarks);
//										theorycount++;
//									} else if (papcatName
//											.equalsIgnoreCase("SESSIONAL")) {
//										obj1.put("papcatMaxmarks_SESSIONAL",
//												papcatMaxmarks);
//										theorycount++;
//									}
//								}
//
//								String whereclause6 = "mainpapId=" + mainpapId
//										+ " AND studentId=" + studentId + " ";
//								List<TblStudentmarksObtainedDetails> retrieveWherClause6 = QuickUtil
//										.retrieveWherClause(
//												new TblStudentmarksObtainedDetails(),
//												"TblStudentmarksObtainedDetails",
//												whereclause6);
//
//								if (retrieveWherClause6.size() > 0) {
//									TblStudentmarksObtainedDetails tblStudentmarksObtainedDetails = retrieveWherClause6
//											.get(0);
//									Float studmarksObtained = tblStudentmarksObtainedDetails
//											.getStudmarksObtained();
//									obj1.put("studmarksObtained",
//											studmarksObtained);
//
//									theoryobtainedtotal += studmarksObtained;
//
//									if(studmarksObtained<=mainpapMinmarks)
//									{
//										resultofexampassorfail="Fail";
//									}
//								}
//
//								objpaperinfo.put("THEORY_" + mainpapId, obj1);
//								// theorycount++;
//
//							}
//						}
//						if (practicalcategoryid != null) {
//							String whereclause4 = "maincatId="
//									+ practicalcategoryid + "";
//							List<TblMainpaperMaster> retrieveWherClause4 = QuickUtil
//									.retrieveWherClause(
//											new TblMainpaperMaster(),
//											"TblMainpaperMaster", whereclause4);
//
//							for (int p = 0; p < retrieveWherClause4.size(); p++) {
//								TblMainpaperMaster tblMainpaperMaster = retrieveWherClause4
//										.get(p);
//								String mainpapName = tblMainpaperMaster
//										.getMainpapName();
//								Float mainpapMinmarks = tblMainpaperMaster
//										.getMainpapMinmarks();
//								int mainpapId = tblMainpaperMaster
//										.getMainpapId();
//
//								practicalmintotal += mainpapMinmarks;
//
//								JSONObject obj1 = new JSONObject();
//
//								String whereclause5 = "mainpapId=" + mainpapId
//										+ " AND papcatName='PRACTICAL'";
//								List<TblPapercategoryMaster> retrieveWherClause5 = QuickUtil
//										.retrieveWherClause(
//												new TblPapercategoryMaster(),
//												"TblPapercategoryMaster",
//												whereclause5);
//								if (retrieveWherClause5.size() > 0) {
//									TblPapercategoryMaster tblPapercategoryMaster = retrieveWherClause5
//											.get(0);
//									String papcatName = tblPapercategoryMaster
//											.getPapcatName();
//									Float papcatMaxmarks = tblPapercategoryMaster
//											.getPapcatMaxmarks();
//
//									practicalmaxtotal += papcatMaxmarks;
//
//									obj1.put("papcatMaxmarks_PRAC",
//											papcatMaxmarks);
//
//								}
//
//								// start marks obtained practical
//								String whereclause6 = "mainpapId=" + mainpapId
//										+ " AND studentId=" + studentId + " ";
//								List<TblStudentmarksObtainedDetails> retrieveWherClause6 = QuickUtil
//										.retrieveWherClause(
//												new TblStudentmarksObtainedDetails(),
//												"TblStudentmarksObtainedDetails",
//												whereclause6);
//
//								if (retrieveWherClause6.size() > 0) {
//									TblStudentmarksObtainedDetails tblStudentmarksObtainedDetails = retrieveWherClause6
//											.get(0);
//									Float studmarksObtained = tblStudentmarksObtainedDetails
//											.getStudmarksObtained();
//
//									practicalobtainedtotal += studmarksObtained;
//									obj1.put("studmarksObtained",
//											studmarksObtained);
//
//									if(studmarksObtained<=mainpapMinmarks)
//									{
//										resultofexampassorfail="Fail";
//									}
//								}
//
//								obj1.put("mainpapName", mainpapName);
//								obj1.put("mainpapMinmarks", mainpapMinmarks);
//								objpaperinfoprac.put("PRAC_" + mainpapId, obj1);
//
//								practicalcount++;
//
//							}
//						}
//
//						String whereclause9 = "examId=" + examId;
//						List<TblPaperformatDetails> retrieveWherClause4 = QuickUtil
//								.retrieveWherClause(
//										new TblPaperformatDetails(),
//										"TblPaperformatDetails", whereclause9);
//						JSONArray arrpaperformattheory = new JSONArray();
//						JSONArray arrpaperformatpractical = new JSONArray();
//						int indextheory = 1, indexprac = 1;
//
//						String tabletheory = "", tablepractical = "";
//
//						String temptheory = "", tempprac = "";
//
//						for (int i = 0; i < retrieveWherClause4.size(); i++) {
//							TblPaperformatDetails tblPaperformatDetails = retrieveWherClause4
//									.get(i);
//							String pfType = tblPaperformatDetails.getPfType();
//							String pfAliasname = tblPaperformatDetails
//									.getPfAliasname();
//							if (pfType.equalsIgnoreCase("Theory")) {
//								temptheory += "<td>" + indextheory + ". "
//										+ pfAliasname + "</td>";
//								if (indextheory % 4 == 0) {
//									tabletheory += "<tr>" + temptheory
//											+ "</tr>";
//									temptheory = "";
//								} else {
//
//								}
//
//								// arrpaperformattheory.put(pfAliasname);
//								indextheory++;
//							} else if (pfType.equalsIgnoreCase("Practical")) {
//								tempprac += "<td>" + indexprac + ". "
//										+ pfAliasname + "</td>";
//								if (indexprac % 4 == 0) {
//									tablepractical += "<tr>" + tempprac
//											+ "</tr>";
//									tempprac = "";
//
//								} else {
//
//								}
//
//								// arrpaperformatpractical.put(pfAliasname);
//								indexprac++;
//							}
//						}
//						if ((indextheory - 1) % 4 == 0) {
//
//						} else {
//							tabletheory += "<tr>" + temptheory + "</tr>";
//						}
//						if ((indexprac - 1) % 4 == 0) {
//
//						} else {
//							tablepractical += "<tr>" + tempprac + "</tr>";
//						}
//						// AGGREGATE
//						Float aggregatemaxmarks = theorymaxtotal
//								+ practicalmaxtotal;
//						Float aggregateminmarks = theorymintotal
//								+ practicalmintotal;
//						Float aggregateobtainedmarks = theoryobtainedtotal
//								+ practicalobtainedtotal;
//
//						// percentage
//						Float percentage = aggregateobtainedmarks * 100;
//						percentage = percentage / aggregatemaxmarks;
//
//						DecimalFormat df3 = new DecimalFormat("00.00");
//						String percentageformat = df3.format(percentage);
//
//						// convert number to words
//						AmountByWord amountByWord = new AmountByWord();
//						amountByWord.setLanguage("en");
//						amountByWord.setCurrency("IN");
//
//						String amountinword = amountByWord
//								.getAmountByWord(aggregateobtainedmarks);
//
//						jsonObj.put("objpaperinfo", objpaperinfo);
//						jsonObj.put("objpaperinfoprac", objpaperinfoprac);
//
//						jsonObj.put("theorycount", theorycount);
//						jsonObj.put("theorymaxtotal", theorymaxtotal);
//						jsonObj.put("theorymintotal", theorymintotal);
//						jsonObj.put("theoryobtainedtotal", theoryobtainedtotal);
//
//						jsonObj.put("practicalcount", practicalcount);
//						jsonObj.put("practicalmaxtotal", practicalmaxtotal);
//						jsonObj.put("practicalmintotal", practicalmintotal);
//						jsonObj.put("practicalobtainedtotal",
//								practicalobtainedtotal);
//
//						jsonObj.put("arrpaperformattheory", tabletheory);
//						jsonObj.put("arrpaperformatpractical", tablepractical);
//
//						jsonObj.put("aggregatemaxmarks", aggregatemaxmarks);
//						jsonObj.put("aggregateminmarks", aggregateminmarks);
//						jsonObj.put("aggregateobtainedmarks",
//								aggregateobtainedmarks);
//						jsonObj.put("percentage", percentageformat);
//						jsonObj.put("amountinword", amountinword);
//						
//						jsonObj.put("resultofexampassorfail", resultofexampassorfail);
//
//						
//						System.out.println("Result is " + jsonObj.toString());
//					}
//
//				}
//
//			}
//		} catch (Exception e) {
//			System.err.println("Sorry error MyApp.getExamResult()"
//					+ e.getMessage());
//			e.printStackTrace();
//		}
//
//		return Response.status(Response.Status.ACCEPTED)
//				.entity(jsonObj.toString()).build();
//
//	}
}
