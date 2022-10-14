package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;
import com.futurin.android.health1st_premium.R;

public class Health extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.health);
		
		final Button about_health = (Button) findViewById(R.id.about_health);
		about_health.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {
				
				int action = event.getAction();
				
				switch (action) {
				case MotionEvent.ACTION_DOWN:
					
					about_health.setBackgroundResource(R.drawable.button2);
					
					break;
					
				case MotionEvent.ACTION_UP:
					
					Intent openhealth_about = new Intent(Health.this, Health_About.class);
					startActivity(openhealth_about);
					about_health.setBackgroundResource(R.drawable.button1);
					
					break;

				default:
					break;
				}
				
				return false;
			}
		});
		
		final Button health_calculator = (Button) findViewById(R.id.health_calculator);
		health_calculator.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {
				
				int action = event.getAction();
				
				switch (action) {
				case MotionEvent.ACTION_DOWN:
					
					health_calculator.setBackgroundResource(R.drawable.button2);
					
					break;
					
				case MotionEvent.ACTION_UP:
					
					Intent openhealth_calculator = new Intent(Health.this, Health_Calculator.class);
					startActivity(openhealth_calculator);
					health_calculator.setBackgroundResource(R.drawable.button1);
					
					break;

				default:
					break;
				}
				
				return false;
			}
		});
		
	}

	

}
