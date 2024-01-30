package com.ofcadmin.rest;

import java.io.File;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;

import javax.mail.Session;
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

import com.ofcadmin.util.EmailUtil;
import com.ofcadmin.util.QuickUtil;

@Path("/postajob")
public class PostaJob {

	/**
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_getskills_subcat_drpjson 
	   subcatid=
	 * 
	 * @param subcatid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_getskills_subcat_drpjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_getskills_subcat_drpjson(
			@FormParam("subcatid") String subcatid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_getskills_subcat_drpjson()");
		String proccommand = "CALL proc_getskills_subcat_drpjson(?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { subcatid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_getskills_subcat_drpjson Result="
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
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_member_ofcprojectpost 
	   membersessionid=
	   inparam=
	   inkeywords=
	   inquestions=
	   inskill=
	   fileuploadjson=
	   
	 * @param membersessionid
	 * @param inparam
	 * @param inkeywords
	 * @param inquestions
	 * @param inskill
	 * @param fileuploadjson
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_ofcprojectpost")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_ofcprojectpost(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("inparam") String inparam,
			@FormParam("inkeywords") String inkeywords,
			@FormParam("inquestions") String inquestions,
			@FormParam("inskill") String inskill,
			@FormParam("fileuploadjson") String fileuploadjson,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_ofcprojectpost()");
		String proccommand = "CALL proc_member_ofcprojectpost(?,?,?,?,?,?,?,?)";
		int[] types = { Types.VARCHAR,Types.VARCHAR };
		Object[] inputvalues = { membersessionid, inparam, inkeywords,
				inquestions, inskill, fileuploadjson };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_ofcprojectpost Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);
					
					String imgSrc="http://www.ollomall.cn:8080/OFCAdminFiles/logofull2.jpg";
					String body="\n <h3>Thank you for Posting Job.</h3>"+ "\n Thank you,"+ "\n OFC  Pvt. Ltd."+"<img src='"+imgSrc+"'></img>";
					
					sendEmailOnSignup(membersessionid,request, response,body);
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

	/**
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_getkeywords_subcat_drpjson 
	   subcatid=
	 * 
	 * @param subcatid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_getkeywords_subcat_drpjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_getkeywords_subcat_drpjson(
			@FormParam("subcatid") String subcatid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_getkeywords_subcat_drpjson()");
		String proccommand = "CALL proc_getkeywords_subcat_drpjson(?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { subcatid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_getkeywords_subcat_drpjson Result="
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
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_member_get_projectposted_byprojectpostid 
	   membersessionid=
	   ofcprojectpostid=
	   
	 * @param membersessionid
	 * @param ofcprojectpostid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_get_projectposted_byprojectpostid")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_get_projectposted_byprojectpostid(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("ofcprojectpostid") String ofcprojectpostid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_get_projectposted_byprojectpostid()");
		String proccommand = "CALL proc_member_get_projectposted_byprojectpostid(?,?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid,ofcprojectpostid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_get_projectposted_byprojectpostid Result="
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
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_member_get_projectaccepted_byprojectpostid 
	   membersessionid=
	   ofcprojectpostid=
	   
	 * @param membersessionid
	 * @param ofcprojectpostid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_get_projectaccepted_byprojectpostid")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_get_projectaccepted_byprojectpostid(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("ofcprojectpostid") String ofcprojectpostid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_get_projectaccepted_byprojectpostid()"+membersessionid+" "+ofcprojectpostid);
		String proccommand = "CALL proc_member_get_projectaccepted_byprojectpostid(?,?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid,ofcprojectpostid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_get_projectaccepted_byprojectpostid Result="
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
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_member_get_projectshortlisted_byprojectpostid 
	   membersessionid=
	   ofcprojectpostid=
	   
	 * @param membersessionid
	 * @param ofcprojectpostid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_get_projectshortlisted_byprojectpostid")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_get_projectshortlisted_byprojectpostid(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("ofcprojectpostid") String ofcprojectpostid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_get_projectshortlisted_byprojectpostid()");
		String proccommand = "CALL proc_member_get_projectshortlisted_byprojectpostid(?,?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid,ofcprojectpostid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_get_projectshortlisted_byprojectpostid Result="
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
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_member_set_acceptoffer 
	   membersessionid=
	   ofcprojectsubmitid=
	   
	 * @param membersessionid
	 * @param ofcprojectsubmitid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_set_acceptoffer")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_set_acceptoffer(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("ofcprojectsubmitid") String ofcprojectsubmitid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_set_acceptoffer()");
		String proccommand = "CALL proc_member_set_acceptoffer(?,?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid,ofcprojectsubmitid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_set_acceptoffer Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(0) != null) {
					output = (String) callprocforoutputparamsV2.get(0);
					//
					//sendEmailOnSignup(membersessionid,request, response,body);
					
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
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_member_set_rejectedoffer 
	   membersessionid=
	   ofcprojectsubmitid=
	   
	 * @param membersessionid
	 * @param ofcprojectsubmitid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_set_rejectedoffer")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_set_rejectedoffer(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("ofcprojectsubmitid") String ofcprojectsubmitid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_set_rejectedoffer()");
		String proccommand = "CALL proc_member_set_rejectedoffer(?,?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid,ofcprojectsubmitid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_set_rejectedoffer Result="
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
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_member_set_shortlistoffer 
	   membersessionid=
	   ofcprojectsubmitid=
	   
	 * @param membersessionid
	 * @param ofcprojectsubmitid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_set_shortlistoffer")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_set_shortlistoffer(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("ofcprojectsubmitid") String ofcprojectsubmitid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_set_shortlistoffer()");
		String proccommand = "CALL proc_member_set_shortlistoffer(?,?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid,ofcprojectsubmitid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_set_shortlistoffer Result="
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
	 * http://localhost:8080/OFCAdmin/rest/postajob/WS_proc_member_set_removejobposting 
	   membersessionid=
	   ofcprojectpostid=
	   
	 * @param membersessionid
	 * @param ofcprojectpostid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_member_set_removejobposting")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_proc_member_set_removejobposting(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("ofcprojectpostid") String ofcprojectpostid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		System.out.println("MyApp.WS_proc_member_set_removejobposting()");
		String proccommand = "CALL proc_member_set_removejobposting(?,?,?)";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid,ofcprojectpostid };
		String createSQLQuery;
		String output = "[]";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_proc_member_set_removejobposting Result="
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
	
	
	public Response sendEmailOnSignup(String membersessionid,HttpServletRequest request, HttpServletResponse response, String body) {
		
	Response resp;
	String entity;
	try {
		Profile profile=new Profile();
		String Dummy="";
		resp = profile.WS_proc_tbl_emailconfig_master_selectjson(Dummy, request, response);
		entity = resp.getEntity().toString();
		JSONArray jarr=new JSONArray(entity);
		JSONObject jsonObj=(JSONObject) jarr.get(0);
		String Emailconfig_Name = jsonObj.get("Emailconfig_Name").toString();
		String Emailconfig_Pass = jsonObj.get("Emailconfig_Pass").toString();
		String Emailconfig_inhost = jsonObj.get("Emailconfig_inhost").toString();
		String Emailconfig_inport = jsonObj.get("Emailconfig_inport").toString();
		String Emailconfig_Emailid = jsonObj.get("Emailconfig_Emailid").toString();
		String Emailconfig_clientName = jsonObj.get("Emailconfig_clientName").toString();
		
		EmailUtil emailUtil = new EmailUtil();
		Session session = emailUtil.doEmailInit(Emailconfig_inhost, Emailconfig_inport, Emailconfig_Emailid, Emailconfig_Pass);
		String subject="subject";
		body=" Hello "+Emailconfig_Name+"<br/>"+body;
//				+","+"\n Thank you for registration. Please post or search new jobs that suits you."+ "\n Thank you,"+ "\n OFC  Pvt. Ltd.";
		System.out.println("body : "+body);
		String email = getLoggedinUserEmailId(membersessionid);
		emailUtil.generateAndSendEmail(session, email, subject, body, Emailconfig_Emailid, Emailconfig_clientName);
		
		return resp;
		
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
		
	return null;
		
	}
	
	
	public String getLoggedinUserEmailId(String sessionId)
			
	 {
		System.out.println("WS_proc_tbl_ofcmembers_master_logindetails");

		String proccommand = "CALL proc_ofcmembers_getemailid_bysessionid(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = { Types.VARCHAR ,Types.VARCHAR };
		Object[] inputvalues = {sessionId};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_ofcmembers_getemailid_bysessionid Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(1) != null) {
					output = (String) callprocforoutputparamsV2.get(1);
					System.out.println("output Result="
							+ output);
					//JSONObject jObj=new JSONObject(output);
					//jObj.get("Emailconfig_Name").toString();
				}

				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return output;

		
		
	}

	
	
}
