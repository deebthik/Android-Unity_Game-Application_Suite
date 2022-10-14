package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;

public class EandY extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.e_and_y);
		
		final Button exercise = (Button) findViewById(R.id.exercise);
		exercise.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					exercise.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent openexercise = new Intent(EandY.this, Exercise.class);
					startActivity(openexercise);
					exercise.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button yoga = (Button) findViewById(R.id.yoga);
		yoga.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					yoga.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent openyoga = new Intent(EandY.this, Yoga.class);
					startActivity(openyoga);
					yoga.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
	}

}
