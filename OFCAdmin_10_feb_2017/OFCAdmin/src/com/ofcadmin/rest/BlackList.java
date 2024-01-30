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

@Path("/sot")
public class BlackList {

	/**
	 * http://localhost:8080/OFCAdmin/rest/sot/
	 * WS_proc_sot_blacklist_complaints_selectwithoutlogin input0=
	 * 
	 * 
	 * @param input0
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_sot_blacklist_complaints_selectwithoutlogin")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_sot_blacklist_complaints_selectwithoutlogin(
			@FormParam("input0") String input0,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out
				.println("MyApp.WS_proc_sot_blacklist_complaints_selectwithoutlogin()");
		String proccommand = "CALL proc_sot_blacklist_complaints_selectwithoutlogin(?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = {};
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out
					.println("WS_proc_sot_blacklist_complaints_selectwithoutlogin Result="
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
	 * http://localhost:8080/OFCAdmin/rest/sot/
	 * WS_proc_sot_get_blacklist_complaints_bysotblacklist_id membersessionid=
	 * sotblacklistid=
	 * 
	 * @param membersessionid
	 * @param sotblacklistid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_sot_get_blacklist_complaints_bysotblacklist_id")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_sot_get_blacklist_complaints_bysotblacklist_id(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("sotblacklistid") String sotblacklistid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out
				.println("MyApp.WS_proc_sot_get_blacklist_complaints_bysotblacklist_id()");
		String proccommand = "CALL proc_sot_get_blacklist_complaints_bysotblacklist_id(?,?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid, sotblacklistid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out
					.println("WS_proc_sot_get_blacklist_complaints_bysotblacklist_id Result="
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
	 * http://localhost:8080/OFCAdmin/rest/sot/
	 * WS_proc_tbl_sotindustrytype_master_drpjson input0=
	 * 
	 * @param input0
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_tbl_sotindustrytype_master_drpjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_sotindustrytype_master_drpjson(
			@FormParam("input0") String input0,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_tbl_sotindustrytype_master_drpjson()");
		String proccommand = "CALL proc_tbl_sotindustrytype_master_drpjson(?,?)";
		int[] types = { Types.VARCHAR, Types.VARCHAR };
		Object[] inputvalues = {};
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_tbl_sotindustrytype_master_drpjson Result="
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
	 * 	http://localhost:8080/OFCAdmin/rest/sot/WS_proc_sot_blacklist_complaints
	  	membersessionid= 
	 	inparam=
	   	fileuploadjson=
	 * 
	 * @param membersessionid
	 * @param inparam
	 * @param fileuploadjson
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_sot_blacklist_complaints")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_sot_blacklist_complaints(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@FormParam("fileuploadjson") String fileuploadjson,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_sot_blacklist_complaints()");
		String proccommand = "CALL proc_sot_blacklist_complaints(?,?,?,?,?)";
		int[] types = { Types.VARCHAR,Types.VARCHAR };
		Object[] inputvalues = { membersessionid, inparam,fileuploadjson };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_sot_blacklist_complaints Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);
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
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Response.status(200).entity(output).build();
	}

}
