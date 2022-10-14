package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;

public class Exercise extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.exercise);
		
		final Button burpees_button = (Button) findViewById(R.id.burpees_button);
		burpees_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					burpees_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openburpees = new Intent(Exercise.this, Exercise_Burpees.class);
					startActivity(openburpees);
					burpees_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button lunge_jumps_button = (Button) findViewById(R.id.lunge_jumps_button);
		lunge_jumps_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					lunge_jumps_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openlunge_jumps = new Intent(Exercise.this, Exercise_Lunge_Jumps.class);
					startActivity(openlunge_jumps);
					lunge_jumps_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button pilates_leg_pulls_button = (Button) findViewById(R.id.pilates_leg_pulls_button);
		pilates_leg_pulls_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					pilates_leg_pulls_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openpilates_leg_pulls = new Intent(Exercise.this, Exercise_Pilates_Leg_Pulls.class);
					startActivity(openpilates_leg_pulls);
					pilates_leg_pulls_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button jack_knife_crunches_button = (Button) findViewById(R.id.jack_knife_crunches_button);
		jack_knife_crunches_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					jack_knife_crunches_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openjack_knife_crunches = new Intent(Exercise.this, Exercise_Jack_Knife_Crunches.class);
					startActivity(openjack_knife_crunches);
					jack_knife_crunches_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button push_ups_button = (Button) findViewById(R.id.push_ups_button);
		push_ups_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					push_ups_button.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openpush_ups = new Intent(Exercise.this, Exercise_Push_Ups.class);
					startActivity(openpush_ups);
					push_ups_button.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		
	}

}
