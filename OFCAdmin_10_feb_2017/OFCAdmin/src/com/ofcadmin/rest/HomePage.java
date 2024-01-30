package com.ofcadmin.rest;

import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.ofcadmin.util.QuickUtil;


@Path("/homepage")
public class HomePage {
	/**
	 * http://localhost:8080/OFCAdmin/rest/homepage/WS_proc_vw_popuplarsearch_homepage_filesimages_selectjson
	 	input0=
	 * @param input0
	 * @return
	 */
	@POST
	@Path("WS_proc_vw_popuplarsearch_homepage_filesimages_selectjson")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_vw_popuplarsearch_homepage_filesimages_selectjson(@FormParam("input0") String input0)
			{
		System.out.println("MyApp.wS_proc_vw_popuplarsearch_homepage_filesimages_selectjson()" );
		
		String proccommand="CALL proc_vw_popuplarsearch_homepage_filesimages_selectjson(?,?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR,Types.VARCHAR};
		Object[] inputvalues={};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_vw_popuplarsearch_homepage_filesimages_selectjson Result="+callprocforoutputparamsV2.toString());
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
		
		System.out.println("MyApp.wS_proc_vw_popuplarsearch_homepage_filesimages_selectjson()" + output);
		return Response.status(200).entity(output).build();
	}
	
	
	//as done on 31 jan 2017 by Mandar for popular services
	@POST
	@Path("WS_proc_tbl_popularservices_homepage_get_fileupload")
	@Produces(MediaType.APPLICATION_JSON)
	public Response wS_proc_tbl_popularservices_homepage_get_fileupload(@FormParam("input0") String input0)
			{
		System.out.println("MyApp.wS_proc_tbl_popularservices_homepage_get_fileupload()" );
		
		String proccommand="CALL proc_tbl_popularservices_homepage_get_fileupload(?)";
//		String proccommand="CALL proc_tbl_product_master_editselect('BUS1')";
		int[] types={Types.VARCHAR};
		Object[] inputvalues={};
		String createSQLQuery;
		String output="";
		try { 
			ArrayList callprocforoutputparamsV2 = QuickUtil.callprocforoutputparamsV2(proccommand, inputvalues, types);
			System.out.println("proc_tbl_popularservices_homepage_get_fileupload Result="+callprocforoutputparamsV2.toString());
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
		
		System.out.println("MyApp.wS_proc_tbl_popularservices_homepage_get_fileupload()" + output);
		return Response.status(200).entity(output).build();
	}
}
