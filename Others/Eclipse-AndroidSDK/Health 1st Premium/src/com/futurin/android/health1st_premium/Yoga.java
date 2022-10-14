package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;

public class Yoga extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.yoga);
		
		final Button bow_pose_button = (Button) findViewById(R.id.bow_pose_button);
		bow_pose_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					bow_pose_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openbow_pose = new Intent(Yoga.this, Yoga_Bow_Pose.class);
					startActivity(openbow_pose);
					bow_pose_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button crescent_lunge_pose_button = (Button) findViewById(R.id.crescent_lunge_pose_button);
		crescent_lunge_pose_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					crescent_lunge_pose_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent opencrescent_lunge_pose = new Intent(Yoga.this, Yoga_Crescent_Lunge_Pose.class);
					startActivity(opencrescent_lunge_pose);
					crescent_lunge_pose_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button bridge_pose_button = (Button) findViewById(R.id.bridge_pose_button);
		bridge_pose_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					bridge_pose_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openbridge_pose = new Intent(Yoga.this, Yoga_Bridge_Pose.class);
					startActivity(openbridge_pose);
					bridge_pose_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button plow_pose_button = (Button) findViewById(R.id.plow_pose_button);
		plow_pose_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					plow_pose_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openplow_pose = new Intent(Yoga.this, Yoga_Plow_Pose.class);
					startActivity(openplow_pose);
					plow_pose_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button shoulder_stand_button = (Button) findViewById(R.id.shoulder_stand_button);
		shoulder_stand_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					shoulder_stand_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openshoulder_stand = new Intent(Yoga.this, Yoga_Shoulder_Stand.class);
					startActivity(openshoulder_stand);
					shoulder_stand_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
	}

}
