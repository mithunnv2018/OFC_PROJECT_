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


@Path("/profile")
public class Profile {
	
	/**
	 * http://localhost:8080/OFCAdmin/rest/profile/WS_proc_member_myprofile
	  membersessionid= , inparam= ,inparam2 = , fileuploadjson=
	 * @param membersessionid
	 * @param inparam
	 * @param inparam2
	 * @param fileuploadjson
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_myprofile")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_myprofile(@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@FormParam("inparam2") String inparam2,
			@FormParam("fileuploadjson") String fileuploadjson,
			@Context HttpServletRequest request,@Context HttpServletResponse response)
			{
		System.out.println("MyApp.wS_proc_member_myprofile()" );
		
		String proccommand="CALL proc_member_myprofile(?,?,?,?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={membersessionid,inparam,inparam2,fileuploadjson};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_login Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
					output=(String) callprocforoutputparamsV2.get(0);
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
			if (callprocforoutputparamsV2.get(1) != null){
//						output=(String) callprocforoutputparamsV2.get(0);
				
				String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
				
				String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
				String object = (String) callprocforoutputparamsV2.get(1);
				
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
					if(uploadfile_status.equalsIgnoreCase("Yes")  && file2.exists()){
						FileUtils.copyFile(file2, filenew);
						boolean delete = file2.delete();
						System.out.println(oldfile+" deleted here ="+delete);
					}
					if(uploadfile_status.equalsIgnoreCase("Delete")){
						
					}
			
					
				}
				
			}
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
		
		System.out.println("MyApp.wS_proc_member_myprofile()" + output);
		return Response.status(200).entity(output).build();
	}
	/**
	 * http://localhost:8080/OFCAdmin/rest/profile/WS_tbl_education_master_drpjson
	   input0 = 
	 * @param input0
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_tbl_education_master_drpjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_education_master_drpjson(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_tbl_education_master_drpjson()"  );
		String proccommand="CALL proc_tbl_education_master_drpjson(?,?)";
		int[] types={Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_tbl_education_master_drpjson Result="+callprocforoutputparamsV2.toString());
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
	 * http://localhost:8080/OFCAdmin/rest/profile/WS_proc_member_myproject
	  membersessionid= , inparam= ,inparam2 = , fileuploadjson=
	 * @param membersessionid
	 * @param inparam	tbl_ofcmembermyproject_details
	 * @param inparam2	tbl_skill_master
	 * @param fileuploadjson
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_myproject")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_myproject(@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@FormParam("inparam2") String inparam2,
			@FormParam("fileuploadjson") String fileuploadjson,
			@Context HttpServletRequest request,@Context HttpServletResponse response)
			{
		System.out.println("MyApp.wS_proc_member_myproject()" );
		
		String proccommand="CALL proc_member_myproject(?,?,?,?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={membersessionid,inparam,inparam2,fileuploadjson};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_myproject Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
					output=(String) callprocforoutputparamsV2.get(0);
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
			if (callprocforoutputparamsV2.get(1) != null){
//						output=(String) callprocforoutputparamsV2.get(0);
				
				String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
				
				String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
				String object = (String) callprocforoutputparamsV2.get(1);
				
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
					if(uploadfile_status.equalsIgnoreCase("Yes")  && file2.exists()){
						FileUtils.copyFile(file2, filenew);
						boolean delete = file2.delete();
						System.out.println(oldfile+" deleted here ="+delete);
					}
					if(uploadfile_status.equalsIgnoreCase("Delete")){
						
					}
			
					
				}
				
			}
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
		
		System.out.println("MyApp.wS_proc_member_myproject()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * http://localhost:8080/OFCAdmin/rest/profile/WS_proc_member_education
	  membersessionid= , inparam= 
	 * @param membersessionid
	 * @param inparam
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_education")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_education(@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_member_education()"  );
		String proccommand="CALL proc_member_education(?,?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={membersessionid,inparam};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_member_education Result="+callprocforoutputparamsV2.toString());
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
	 http://localhost:8080/OFCAdmin/rest/profile/WS_proc_member_employment
		membersessionid=
		inparam=
		inparam2=
		fileuploadjson=
	 * @param membersessionid
	 * @param inparam			tbl_ofcmemberemployment_details
	 * @param inparam2			tbl_skill_master
	 * @param fileuploadjson
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_employment")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_employment(@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@FormParam("inparam2") String inparam2,
			@FormParam("fileuploadjson") String fileuploadjson,
			@Context HttpServletRequest request,@Context HttpServletResponse response)
			{
		System.out.println("MyApp.wS_proc_member_employment()" );
		
		String proccommand="CALL proc_member_employment(?,?,?,?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={membersessionid,inparam,inparam2,fileuploadjson};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_employment Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
					output=(String) callprocforoutputparamsV2.get(0);
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
			if (callprocforoutputparamsV2.get(1) != null){
//						output=(String) callprocforoutputparamsV2.get(0);
				
				String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
				
				String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
				String object = (String) callprocforoutputparamsV2.get(1);
				
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
					if(uploadfile_status.equalsIgnoreCase("Yes") && file2.exists()){
						FileUtils.copyFile(file2, filenew);
						boolean delete = file2.delete();
						System.out.println(oldfile+" deleted here ="+delete);
					}
					if(uploadfile_status.equalsIgnoreCase("Delete")){
						
					}
			
					
				}
				
			}
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
		
		System.out.println("MyApp.wS_proc_member_employment()" + output);
		return Response.status(200).entity(output).build();
	}
	/**
	 * http://localhost:8080/OFCAdmin/rest/profile/WS_proc_member_experience
		membersessionid=
		inparam=
		inparam2=
		fileuploadjson=
	 
	 * @param membersessionid
	 * @param inparam
	 * @param inparam2
	 * @param fileuploadjson
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_experience")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_experience(@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@FormParam("inparam2") String inparam2,
			@FormParam("fileuploadjson") String fileuploadjson,
			@Context HttpServletRequest request,@Context HttpServletResponse response)
			{
		System.out.println("MyApp.wS_proc_member_experience()" );
		
		String proccommand="CALL proc_member_experience(?,?,?,?,?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={membersessionid,inparam,inparam2,fileuploadjson};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_experience Result="+callprocforoutputparamsV2.toString());
			if(callprocforoutputparamsV2!=null && callprocforoutputparamsV2.size()>0){
				if (callprocforoutputparamsV2.get(0) != null){
					output=(String) callprocforoutputparamsV2.get(0);
					
//					String object = (String) callprocforoutputparamsV2.get(0);
			}
				
			if (callprocforoutputparamsV2.get(1) != null){
//						output=(String) callprocforoutputparamsV2.get(0);
				
				String uploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "temp");
				
				String realuploadedFileLocation =QuickUtil.getImagePathForSaveWS(request, response, "real");
				String object = (String) callprocforoutputparamsV2.get(1);
				
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
					if(uploadfile_status.equalsIgnoreCase("Yes")  && file2.exists() ){
						FileUtils.copyFile(file2, filenew);
						boolean delete = file2.delete();
						System.out.println(oldfile+" deleted here ="+delete);
					}
					if(uploadfile_status.equalsIgnoreCase("Delete")){
						
					}
			
					
				}
				
			}
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
		
		System.out.println("MyApp.wS_proc_member_experience()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * http://localhost:8080/OFCAdmin/rest/profile/WS_proc_vw_memberemployment_maincat_selectjson
	 	membersessionid=
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_vw_memberemployment_maincat_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_vw_memberemployment_maincat_selectjson(@FormParam("membersessionid") String membersessionid,@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_vw_memberemployment_maincat_selectjson()"  );
		String proccommand="CALL proc_vw_memberemployment_maincat_selectjson(?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={membersessionid};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_vw_memberemployment_maincat_selectjson Result="+callprocforoutputparamsV2.toString());
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
	 * http://localhost:8080/OFCAdmin/rest/profile/WS_proc_vw_membereducation_education_selectjson
	 	membersessionid=
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_vw_membereducation_education_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_vw_membereducation_education_selectjson(@FormParam("membersessionid") String membersessionid,@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_vw_membereducation_education_selectjson()"  );
		String proccommand="CALL proc_vw_membereducation_education_selectjson(?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={membersessionid};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_vw_membereducation_education_selectjson Result="+callprocforoutputparamsV2.toString());
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
	 *http://localhost:8080/OFCAdmin/rest/profile/WS_proc_vw_memberexperience_maincat_selectjson
	 	membersessionid= 
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_vw_memberexperience_maincat_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_vw_memberexperience_maincat_selectjson(@FormParam("membersessionid") String membersessionid,@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_vw_memberexperience_maincat_selectjson()"  );
		String proccommand="CALL proc_vw_memberexperience_maincat_selectjson(?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={membersessionid};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_vw_memberexperience_maincat_selectjson Result="+callprocforoutputparamsV2.toString());
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
	 *http://localhost:8080/OFCAdmin/rest/profile/WS_proc_vw_membermyproject_maincat_selectjson
	 	membersessionid= 
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_vw_membermyproject_maincat_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_vw_membermyproject_maincat_selectjson(@FormParam("membersessionid") String membersessionid,@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_vw_membermyproject_maincat_selectjson()"  );
		String proccommand="CALL proc_vw_membermyproject_maincat_selectjson(?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={membersessionid};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_vw_membermyproject_maincat_selectjson Result="+callprocforoutputparamsV2.toString());
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
	 *http://localhost:8080/OFCAdmin/rest/profile/WS_proc_member_ofcprojectsavecontactnos
	 	membersessionid= 
	 	inparam=
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_ofcprojectsavecontactnos")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_ofcprojectsavecontactnos(@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_member_ofcprojectsavecontactnos()"  );
		String proccommand="CALL proc_member_ofcprojectsavecontactnos(?,?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={membersessionid,inparam};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_member_ofcprojectsavecontactnos Result="+callprocforoutputparamsV2.toString());
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
	 *http://localhost:8080/OFCAdmin/rest/profile/WS_proc_tbl_emailconfig_master_selectjson
	 	input0= 
	 	
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_tbl_emailconfig_master_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_tbl_emailconfig_master_selectjson(@FormParam("input0") String input0,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		System.out.println("MyApp.WS_proc_tbl_emailconfig_master_selectjson()"  );
		String proccommand="CALL proc_tbl_emailconfig_master_selectjson(?,?)";
		int[] types={Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_tbl_emailconfig_master_selectjson Result="+callprocforoutputparamsV2.toString());
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
	 *http://localhost:8080/OFCAdmin/rest/profile/WS_proc_member_getall_skills
	 	membersessionid= 
	 	
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_getall_skills")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_getall_skills(@FormParam("membersessionid") String membersessionid,
			@Context HttpServletRequest request,@Context HttpServletResponse response){
		
		System.out.println("MyApp.WS_proc_member_getall_skills()"  );
		String proccommand="CALL proc_member_getall_skills(?,?)";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={membersessionid};
		String createSQLQuery;
		String output="[]";
	try {
		ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
		System.out.println("WS_proc_member_getall_skills Result="+callprocforoutputparamsV2.toString());
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
