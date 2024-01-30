package com.ofcadmin.rest;

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

import org.json.JSONArray;
import org.json.JSONObject;

import com.ofcadmin.util.EmailUtil;
import com.ofcadmin.util.QuickUtil;

@Path("/loginclient")
public class LoginClient {
	private String string;


	/*
	 * as done on 21 dec 2016 by Mandar
	 * 
	 * login validation
	 */
	@POST
	@Path("WS_proc_ofcmember_login")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_login(
			
			
			@FormParam("username") String username,
			@FormParam("password") String password) {
		System.out.println("MyApp.wS_proc_ofcmember_login()" + username
				+ " password :" + username);

		String proccommand = "CALL proc_ofcmember_login(?,?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = { Types.VARCHAR, Types.VARCHAR };
		Object[] inputvalues = { username, password };
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_login Result="
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

		System.out.println("MyApp.wS_proc_ofcmember_login()" + output);
		return Response.status(200).entity(output).build();
	}

	
	@POST
	@Path("WS_tbl_ofcmembers_master_create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_ofcmembers_master_create(
			@FormParam("input0") String input0,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response) {
		
		
		System.out.println("MyApp.WS_tbl_ofcmembers_master_create()" + input0);
		String proccommand = "CALL proc_tbl_ofcmembers_master_create(?,?,?)";
		int[] types = { Types.VARCHAR, Types.VARCHAR };
		Object[] inputvalues = { input0 };
		String createSQLQuery;
		String output = "[]";
		try {
			JSONObject jobject=new JSONObject(input0);
			String email = jobject.get("ofcmembers_emailid").toString();
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("WS_tbl_ofcmembers_master_create Result="
					+ callprocforoutputparamsV2.toString());
			if (callprocforoutputparamsV2 != null
					&& callprocforoutputparamsV2.size() > 0) {
				if (callprocforoutputparamsV2.get(1) != null) {
					output = (String) callprocforoutputparamsV2.get(1);
					JSONObject jobjt=new JSONObject(output);
					String succId = jobjt.get("Isuccess").toString();
					if(succId.equals("1"))
					{
					sendEmailOnSignup(email,request, response);
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
	 * http://localhost:8080/OFCAdmin/rest/loginclient/
	 * WS_proc_member_changepassword membersessionid= ,oldpassword=
	 * ,newpassword=
	 * 
	 * @param membersessionid
	 * @param oldpassword
	 * @param newpassword
	 * @return
	 */
	@POST
	@Path("WS_proc_member_changepassword")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_changepassword(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("oldpassword") String oldpassword,
			@FormParam("newpassword") String newpassword) {
		System.out.println("WS_proc_member_changepassword()");

		String proccommand = "CALL proc_member_changepassword(?,?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid, oldpassword, newpassword };
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_changepassword Result="
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

		System.out.println("proc_member_changepassword()" + output);
		return Response.status(200).entity(output).build();
	}

	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/loginclient/
	 * WS_proc_member_changesecurityquestion membersessionid=
	 * ,oldsecurityanswer= ,newsecurityid = , newsecurityanswer=
	 * 
	 * @param membersessionid
	 * @param oldsecurityanswer
	 * @param newsecurityid
	 * @param newsecurityanswer
	 * @return
	 */
	@POST
	@Path("WS_proc_member_changesecurityquestion")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_member_changesecurityquestion(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("oldsecurityanswer") String oldsecurityanswer,
			@FormParam("newsecurityid") String newsecurityid,
			@FormParam("newsecurityanswer") String newsecurityanswer

	) {
		System.out.println("WS_proc_member_changesecurityquestion()");

		String proccommand = "CALL proc_member_changesecurityquestion(?,?,?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid, oldsecurityanswer,
				newsecurityid, newsecurityanswer };
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_member_changesecurityquestion Result="
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

		System.out.println("proc_member_changesecurityquestion()" + output);
		return Response.status(200).entity(output).build();
	}

	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/loginclient/WS_tbl_securityquestion_master_drpjson
	 	input0=
	 * 
	 * @param input0
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_tbl_securityquestion_master_drpjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response WS_tbl_securityquestion_master_drpjson(@FormParam("input0") String input0,@Context HttpServletRequest request,@Context HttpServletResponse response){
	System.out.println("MyApp.WS_tbl_securityquestion_master_drpjson()" +input0 );
	String proccommand="CALL proc_tbl_securityquestion_master_drpjson(?,?)";
	int[] types={Types.VARCHAR,Types.VARCHAR};
	Object[] inputvalues={};
	String createSQLQuery;
	String output="[]";
	try {
	ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
	System.out.println("WS_tbl_securityquestion_master_drpjson Result="+callprocforoutputparamsV2.toString());
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
	 * The URL IS http://localhost:8080/OFCAdmin/rest/loginclient/WS_proc_tbl_ofcmembers_master_selectjson
	 	membersessionid=
	 * @param membersessionid
	 * @return
	 */
	@POST
	@Path("WS_proc_tbl_ofcmembers_master_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_tbl_ofcmembers_master_selectjson(
			@FormParam("membersessionid") String membersessionid
			
	) {
		System.out.println("WS_proc_tbl_ofcmembers_master_selectjson()");

		String proccommand = "CALL proc_tbl_ofcmembers_master_selectjson(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = { Types.VARCHAR ,Types.VARCHAR };
		Object[] inputvalues = { membersessionid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_ofcmembers_master_selectjson Result="
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

		System.out.println("proc_tbl_ofcmembers_master_selectjson()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * as done on 28 jan 2017 by Mandar for auto login get member details
	 * 
	 * The URL IS http://localhost:8080/OFCAdmin/rest/loginclient/WS_proc_tbl_ofcmembers_master_selectjson
	 	membersessionid=
	 * @param membersessionid
	 * @return
	 */
	@POST
	@Path("WS_proc_tbl_ofcmembers_master_logindetails")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_tbl_ofcmembers_master_logindetails(
			@FormParam("membersessionid") String membersessionid
			
	) {
		System.out.println("WS_proc_tbl_ofcmembers_master_logindetails");

		String proccommand = "CALL proc_tbl_ofcmembers_master_logindetails(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = { Types.VARCHAR ,Types.VARCHAR };
		Object[] inputvalues = { membersessionid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_ofcmembers_master_selectjson Result="
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

		System.out.println("proc_tbl_ofcmembers_master_selectjson()" + output);
		return Response.status(200).entity(output).build();
	}
	
	
	public Response sendEmailOnSignup(String email, HttpServletRequest request, HttpServletResponse response) {
		
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
		String imgSrc="http://www.ollomall.cn:8080/OFCAdminFiles/logofull2.jpg";
		String body=" Hello "+Emailconfig_Name+"<br/>,"+"\n <h1>Thank you for registration. Please post or search new jobs that suits you.</h1>"+ "<br/> Thank you,"+ "<br/>"
				+ " <h2>OFC  Pvt. Ltd.</h2>"+"<img src='"+imgSrc+"'></img>";
		System.out.println("body : "+body);
		emailUtil.generateAndSendEmail(session, email, subject, body, Emailconfig_Emailid, Emailconfig_clientName);
		
		return resp;
		
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
		
	return null;
		
	}


}
