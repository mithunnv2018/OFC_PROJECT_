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

@Path("/searchfreelancers")
public class SearchFreelancers {

	 
	 
	 	
	 
	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/searchfreelancers/WS_proc_ofcmember_freelancerslist
	 	membersessionid=
	 * @param membersessionid
	 * @return
	 */
	@POST
	@Path("WS_proc_ofcmember_freelancerslist")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_ofcmember_freelancerslist(
			@FormParam("membersessionid") String membersessionid
			
	) {
		System.out.println("WS_proc_ofcmember_freelancerslist()");

		String proccommand = "CALL proc_ofcmember_freelancerslist(?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR };
		Object[] inputvalues = { membersessionid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_ofcmember_freelancerslist Result="
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

		System.out.println("proc_ofcmember_freelancerslist()" + output);
		return Response.status(200).entity(output).build();
	}
	

	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/searchfreelancers/WS_proc_ofcmember_freelancerslist_byofcmemberId
	 	membersessionid=
	 	ofcmembersid=
	 * @param membersessionid\
	 * @param ofcmembersid
	 * @return
	 */
	@POST
	@Path("WS_proc_ofcmember_freelancerslist_byofcmemberId")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_ofcmember_freelancerslist_byofcmemberId(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("ofcmembersid") String ofcmembersid
			
			
	) {
		System.out.println("WS_proc_ofcmember_freelancerslist_byofcmemberId()");

		String proccommand = "CALL proc_ofcmember_freelancerslist_byofcmemberId(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR };
		Object[] inputvalues = { membersessionid,ofcmembersid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_ofcmember_freelancerslist_byofcmemberId Result="
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

		System.out.println("proc_ofcmember_freelancerslist_byofcmemberId()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/searchfreelancers/WS_proc_vw_ofcmember_certificate_byofcmember_id_selectjson
	 	ofcmembersid=
	 * 
	 * @param ofcmembersid
	 * @return
	 */
	@POST
	@Path("WS_proc_vw_ofcmember_certificate_byofcmember_id_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_vw_ofcmember_certificate_byofcmember_id_selectjson(
			@FormParam("ofcmembersid") String ofcmembersid
			
			
	) {
		System.out.println("WS_proc_vw_ofcmember_certificate_byofcmember_id_selectjson()");

		String proccommand = "CALL proc_vw_ofcmember_certificate_byofcmember_id_selectjson(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR,Types.VARCHAR };
		Object[] inputvalues = { ofcmembersid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_vw_ofcmember_certificate_byofcmember_id_selectjson Result="
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

		System.out.println("proc_vw_ofcmember_certificate_byofcmember_id_selectjson()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/searchfreelancers/WS_proc_vw_ofcmember_employment_byofcmember_id_selectjson
	 	ofcmembersid=
	 * 
	 * @param ofcmembersid
	 * @return
	 */
	@POST
	@Path("WS_proc_vw_ofcmember_employment_byofcmember_id_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_vw_ofcmember_employment_byofcmember_id_selectjson(
			@FormParam("ofcmembersid") String ofcmembersid
			
			
	) {
		System.out.println("WS_proc_vw_ofcmember_employment_byofcmember_id_selectjson()");

		String proccommand = "CALL proc_vw_ofcmember_employment_byofcmember_id_selectjson(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR,Types.VARCHAR };
		Object[] inputvalues = { ofcmembersid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_vw_ofcmember_employment_byofcmember_id_selectjson Result="
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

		System.out.println("proc_vw_ofcmember_employment_byofcmember_id_selectjson()" + output);
		return Response.status(200).entity(output).build();
	}
	
	/**
	 * The URL IS http://localhost:8080/OFCAdmin/rest/searchfreelancers/WS_proc_vw_ofcmember_experience_byofcmember_id_selectjson
	 	ofcmembersid=
	 * 
	 * @param ofcmembersid
	 * @return
	 */
	@POST
	@Path("WS_proc_vw_ofcmember_experience_byofcmember_id_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_vw_ofcmember_experience_byofcmember_id_selectjson(
			@FormParam("ofcmembersid") String ofcmembersid
			
			
	) {
		System.out.println("WS_proc_vw_ofcmember_experience_byofcmember_id_selectjson()");

		String proccommand = "CALL proc_vw_ofcmember_experience_byofcmember_id_selectjson(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = {Types.VARCHAR,Types.VARCHAR };
		Object[] inputvalues = { ofcmembersid};
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_vw_ofcmember_experience_byofcmember_id_selectjson Result="
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

		System.out.println("proc_vw_ofcmember_experience_byofcmember_id_selectjson()" + output);
		return Response.status(200).entity(output).build();
	}
}
