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

@Path("/joblist")
public class JobList {

	 
	 
	 	
	 
	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/joblist/WS_proc_member_getall_latestprojectposted
	 	membersessionid=
	 * @param membersessionid
	 * @return
	 */
	@POST
	@Path("WS_proc_member_getall_latestprojectposted")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_getall_latestprojectposted(
			@FormParam("membersessionid") String membersessionid
			
	) {
		System.out.println("WS_proc_member_getall_latestprojectposted()");

		String proccommand = "CALL proc_member_getall_latestprojectposted(?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR };
		Object[] inputvalues = { membersessionid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_getall_latestprojectposted Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);

					// String object = (String)
					// callprocforoutputparamsV2.get(0);
				}

				// if (callprocforoutputparamsV2.get(2) != null){
				// output=(String) callprocforoutputparamsV2.get(2);
				// System.out.println("MyApp.insertMilestonesProject() 2 :" +
				// output);
				// }
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("proc_member_getall_latestprojectposted()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**The URL IS http://localhost:8080/OFCAdmin/rest/joblist/WS_proc_member_getall_latestprojectpostedById
	 	membersessionid=
	  	projectpostid=
	 * @param membersessionid
	 * @param projectpostid
	 * @return
	 */
	@POST
	@Path("WS_proc_member_getall_latestprojectpostedById")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_getall_latestprojectpostedById(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("projectpostid") String projectpostid
			
	) {
		System.out.println("WS_proc_member_getall_latestprojectpostedById()");

		String proccommand = "CALL proc_member_getall_latestprojectpostedById(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR };
		Object[] inputvalues = { membersessionid,projectpostid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_getall_latestprojectpostedById Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);

					// String object = (String)
					// callprocforoutputparamsV2.get(0);
				}

				// if (callprocforoutputparamsV2.get(2) != null){
				// output=(String) callprocforoutputparamsV2.get(2);
				// System.out.println("MyApp.insertMilestonesProject() 2 :" +
				// output);
				// }
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("proc_member_getall_latestprojectpostedById()" + output);
		return Response.status(200).entity(output).build();
	}

	/**
	 * 
	 * http://localhost:8080/OFCAdmin/rest/joblist/WS_proc_member_ofcprojectsubmitproposal
	 	membersessionid=
	 	inparam=
	    inquestions=
	    fileuploadjson=
	 	
	 * @param membersessionid
	 * @param inparam
	 * @param inquestions
	 * @param fileuploadjson
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_ofcprojectsubmitproposal")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_ofcprojectsubmitproposal(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@FormParam("inquestions") String inquestions,
			@FormParam("fileuploadjson") String fileuploadjson,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response
			
	) {
		System.out.println("WS_proc_member_ofcprojectsubmitproposal()");

		String proccommand = "CALL proc_member_ofcprojectsubmitproposal(?,?,?,?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR ,Types.VARCHAR };
		Object[] inputvalues = { membersessionid,inparam,inquestions,fileuploadjson};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_ofcprojectsubmitproposal Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);

					// String object = (String)
					// callprocforoutputparamsV2.get(0);
				}

				if (callprocforoutputparamsV2.get(1) != null) {
					// output=(String) callprocforoutputparamsV2.get(0);

					String uploadedFileLocation = QuickUtil
							.getImagePathForSaveWS(request, response, "temp");

					String realuploadedFileLocation = QuickUtil
							.getImagePathForSaveWS(request, response, "real");
					String object = (String) callprocforoutputparamsV2.get(1);

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
				// if (callprocforoutputparamsV2.get(2) != null){
				// output=(String) callprocforoutputparamsV2.get(2);
				// System.out.println("MyApp.insertMilestonesProject() 2 :" +
				// output);
				// }
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("proc_member_ofcprojectsubmitproposal()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/joblist/WS_proc_tbl_ofcprojectpost_questions_selectjson
	 * @param membersessionid
	 * @param projectpostid
	 * @return
	 */
	@POST
	@Path("WS_proc_tbl_ofcprojectpost_questions_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_tbl_ofcprojectpost_questions_selectjson(
			@FormParam("ofcprojectpost_id_param") String ofcprojectpost_id_param
			
			
	) {
		System.out.println("WS_proc_tbl_ofcprojectpost_questions_selectjson()");

		String proccommand = "CALL proc_tbl_ofcprojectpost_questions_selectjson(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR,Types.VARCHAR };
		Object[] inputvalues = { ofcprojectpost_id_param};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_ofcprojectpost_questions_selectjson Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);

					// String object = (String)
					// callprocforoutputparamsV2.get(0);
				}

				// if (callprocforoutputparamsV2.get(2) != null){
				// output=(String) callprocforoutputparamsV2.get(2);
				// System.out.println("MyApp.insertMilestonesProject() 2 :" +
				// output);
				// }
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("proc_tbl_ofcprojectpost_questions_selectjson()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/joblist/WS_proc_member_getall_latestprojectpostedbysessionid
	 	membersessionid=
	 * @param membersessionid
	 * @return
	 */
	@POST
	@Path("WS_proc_member_getall_latestprojectpostedbysessionid")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_getall_latestprojectpostedbysessionid(
			@FormParam("membersessionid") String membersessionid
			
	) {
		System.out.println("WS_proc_member_getall_latestprojectpostedbysessionid()");

		String proccommand = "CALL proc_member_getall_latestprojectpostedbysessionid(?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR };
		Object[] inputvalues = { membersessionid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_getall_latestprojectpostedbysessionid Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);

					// String object = (String)
					// callprocforoutputparamsV2.get(0);
				}

				// if (callprocforoutputparamsV2.get(2) != null){
				// output=(String) callprocforoutputparamsV2.get(2);
				// System.out.println("MyApp.insertMilestonesProject() 2 :" +
				// output);
				// }
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("proc_member_getall_latestprojectpostedbysessionid()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/joblist/WS_proc_member_ofcprojectsavefavourite
	 	membersessionid=
	 	projectpostid=
	 * @param membersessionid
	 * @param projectpostid
	 * @return
	 */
	@POST
	@Path("WS_proc_member_ofcprojectsavefavourite")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_ofcprojectsavefavourite(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("projectpostid") String projectpostid
			
	) {
		System.out.println("WS_proc_member_ofcprojectsavefavourite()");

		String proccommand = "CALL proc_member_ofcprojectsavefavourite(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR };
		Object[] inputvalues = { membersessionid,projectpostid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_ofcprojectsavefavourite Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);

					// String object = (String)
					// callprocforoutputparamsV2.get(0);
				}

				// if (callprocforoutputparamsV2.get(2) != null){
				// output=(String) callprocforoutputparamsV2.get(2);
				// System.out.println("MyApp.insertMilestonesProject() 2 :" +
				// output);
				// }
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("proc_member_ofcprojectsavefavourite()" + output);
		return Response.status(200).entity(output).build();
	}
}
