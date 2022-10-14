package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;

public class FandD extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.f_and_d);
		
		final Button about_diet = (Button) findViewById(R.id.about_diet_button);
		about_diet.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View v, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					about_diet.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					about_diet.setBackgroundResource(R.drawable.button1);
					Intent openabout_diet = new Intent(FandD.this, About_Diet.class);
					startActivity(openabout_diet);
				}
				
				return false;
			}
		});
		
		final Button diet_plans = (Button) findViewById(R.id.diet_plans_button);
		diet_plans.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View v, MotionEvent event) {

				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					diet_plans.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					diet_plans.setBackgroundResource(R.drawable.button1);
					Intent opendiet_plans = new Intent(FandD.this, Diet_Plans.class);
					startActivity(opendiet_plans);
				}
				
				return false;
			}
		});
	}

}
