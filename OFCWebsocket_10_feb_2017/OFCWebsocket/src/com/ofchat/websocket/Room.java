package com.ofchat.websocket;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.websocket.Session;

import org.json.JSONObject;

public class Room {
    private static Room instance = null;
    private List<Session> sessions = new ArrayList<Session>();

    public synchronized void join(Session session) { sessions.add(session); }
    public synchronized void leave(Session session) { sessions.remove(session); }
    public synchronized void sendMessage(String messageJson) {
    	
    	try {
			JSONObject jsonObject = new JSONObject(messageJson);
			String author=jsonObject.getString("author");
			String message = jsonObject.getString("message");
			String otherauthor = jsonObject.optString("otherauthor");
			
			
			for (Session session: sessions) {
				String otherauthorofsess=(String) session.getUserProperties().get("otherauthor");
				String authorofsess=(String) session.getUserProperties().get("author");
				
//			    if (session.isOpen() && (otherauthorofsess.equalsIgnoreCase(otherauthor) || otherauthorofsess.equalsIgnoreCase(author))) {
			    	if (session.isOpen() && ( otherauthorofsess.equalsIgnoreCase(author)) && authorofsess.equalsIgnoreCase(otherauthor) ) {	
			        try { 
			        	session.getBasicRemote().sendText(messageJson);
			        	
			        }
			        catch (IOException e) { e.printStackTrace(); }
			    }
			}
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }

    public synchronized static Room getRoom() {
        if (instance == null) { instance = new Room(); }
        return instance;
    }
}