package com.ofchat.websocket;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.core.MultivaluedMap;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.core.util.MultivaluedMapImpl;

public class CallRestServices {

	public static String baseurl="http://localhost:8080/OFCAdmin/rest/";
	
//	public static void main(String[] args) {
//		System.out.println("CallRestServices.main()");
//		String callWSBasic = new CallRestServices().callWSBasic();
//		System.out.println("Result="+callWSBasic);
//	}
	/**
	 * To save chat messages to DB using REST Service
	 * @param input
	 * @return
	 */
	public String callWSChatSave(String input){
		String output="";
		
		try {

			Client client = Client.create();
			String url="chatservice/WS_proc_tbl_ofcsubmitproposal_chat_create";
			WebResource webResource = client
			   .resource(baseurl+url);
			//"http://localhost:8080/RESTfulExample/rest/json/metallica/post");
			
	 		MultivaluedMap formData = new MultivaluedMapImpl();
			formData.add("inparam", input);
			
			
//			String input = "memberid=1";
//			webResource.type(MediaType.APPLICATION_FORM_URLENCODED_TYPE)
//			ClientResponse response = webResource.accept(MediaType.APPLICATION_FORM_URLENCODED_TYPE).type(MediaType.APPLICATION_JSON_TYPE)
//			   .post(ClientResponse.class, input);

			ClientResponse response = webResource.accept("application/json")
	                .type("application/x-www-form-urlencoded").post(ClientResponse.class, formData);



			System.out.println("Output from Server .... \n");
			output = response.getEntity(String.class);
			System.out.println(output);

		  } catch (Exception e) {

			e.printStackTrace();

		  }
		  return output;
	}
	
}
