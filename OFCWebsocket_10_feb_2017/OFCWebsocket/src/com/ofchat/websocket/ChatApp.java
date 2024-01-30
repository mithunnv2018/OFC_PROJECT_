package com.ofchat.websocket;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.websocket.CloseReason;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.json.JSONObject;


@ServerEndpoint("/websocket/chat")
public class ChatApp {

	private Room room=Room.getRoom();
	
	@OnOpen
	public void onOpen(final Session session, EndpointConfig config){
		System.out.println("ChatApp.onOpen()");
//		room.join(session);
	}
	
	@OnClose
	public void onClose(Session session, CloseReason reason){
		
		System.out.println("ChatApp.onClose()"+session.getUserProperties().get("author"));
		System.out.println(session.getUserProperties().get("author")+" Closed because="+reason.getReasonPhrase());
		room.leave(session);
	}
	
	@OnMessage
	public void onMessage(final Session session, final String messageJson){
		System.out.println(""+messageJson);
		String todaydate = new SimpleDateFormat("dd/MM/yyyy").format(new Date());
		String replymsg="";
		
		try {
			
			JSONObject jsonObject = new JSONObject(messageJson);
			String author=jsonObject.getString("author");
			String message = jsonObject.getString("message");
			String otherauthor = jsonObject.optString("otherauthor");
			String username=jsonObject.optString("username");
			
			String senderid=jsonObject.optString("senderid");
			String recieverid=jsonObject.optString("recieverid");
			String projectpostid=jsonObject.optString("projectpostid");
			String submitproposal_id=jsonObject.optString("submitproposal_id");
			
			
			String username2 = (String) session.getUserProperties().get("author");
			if(username2==null){
				session.getUserProperties().put("author", author);
				session.getUserProperties().put("otherauthor", otherauthor);
				room.join(session);
			}
			
			
			String tempmsg="message from "+username+" to user "+otherauthor+"@"+message;
			jsonObject.put("message",tempmsg);
			replymsg=jsonObject.toString();
			String msgtosave="["+messageJson+"]";
			new CallRestServices().callWSChatSave(msgtosave);
			room.sendMessage(replymsg);//,otherauthor);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		room.sendMessage(replymsg);
//		return replymsg;
	}
	
	@OnError
	public void OnError(Session session,Throwable e){
		e.printStackTrace();
	}
}
