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

@Path("/myproposal")
public class Proposal {


	/**
	 * 
	 * http://localhost:8080/OFCAdmin/rest/myproposal/
	 * WS_proc_ofcmembers_getall_submittedproposals_bidding membersessionid=
	 * 
	 * @param membersessionid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_ofcmembers_getall_submittedproposals_bidding")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_ofcmembers_getall_submittedproposals_bidding(
			@FormParam("membersessionid") String membersessionid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response

	) {
		System.out
				.println("WS_proc_ofcmembers_getall_submittedproposals_bidding()");

		String proccommand = "CALL proc_ofcmembers_getall_submittedproposals_bidding(?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid };
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out
					.println("proc_ofcmembers_getall_submittedproposals_bidding Result="
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

		System.out
				.println("proc_ofcmembers_getall_submittedproposals_bidding()"
						+ output);
		return Response.status(200).entity(output).build();
	}

	/**
	 * 
	 * http://localhost:8080/OFCAdmin/rest/myproposal/WS_proc_ofcmembers_getall_submittedproposals_bysubmitproposalid
	   membersessionid=
	   submitproposalid=
	   
	 * @param membersessionid
	 * @param submitproposalid
	 * @param request
	 * @param response
	 * @return
	 */
	@POST
	@Path("WS_proc_ofcmembers_getall_submittedproposals_bysubmitproposalid")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_ofcmembers_getall_submittedproposals_bysubmitproposalid(
			@FormParam("membersessionid") String membersessionid,
			@FormParam("submitproposalid") String submitproposalid,
			@Context HttpServletRequest request,
			@Context HttpServletResponse response

	) {
		System.out
				.println("WS_proc_ofcmembers_getall_submittedproposals_bysubmitproposalid()");

		String proccommand = "CALL proc_ofcmembers_getall_submittedproposals_bysubmitproposalid(?,?,?)";
		// String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types = { Types.VARCHAR };
		Object[] inputvalues = { membersessionid,submitproposalid };
		String createSQLQuery;
		String output = "";
		try {
			ArrayList callprocforoutputparamsV2 = QuickUtil
					.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out
					.println("proc_ofcmembers_getall_submittedproposals_bysubmitproposalid Result="
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

		System.out
				.println("proc_ofcmembers_getall_submittedproposals_bysubmitproposalid()"
						+ output);
		return Response.status(200).entity(output).build();
	}
}
