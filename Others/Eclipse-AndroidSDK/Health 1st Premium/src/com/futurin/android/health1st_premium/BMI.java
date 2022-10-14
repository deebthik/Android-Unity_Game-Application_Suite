package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;
import com.futurin.android.health1st_premium.R;

public class BMI extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.bmi);
		
		
		final Button about_bmi = (Button) findViewById(R.id.about_bmi);
		about_bmi.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					about_bmi.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent openbmi_about = new Intent(BMI.this, BMI_About.class);
					startActivity(openbmi_about);
					about_bmi.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button bmi_calculator = (Button) findViewById(R.id.bmi_calculator);
		bmi_calculator.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					bmi_calculator.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent openbmi_about = new Intent(BMI.this, BMI_Calculator.class);
					startActivity(openbmi_about);
					bmi_calculator.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button bmi_scale = (Button) findViewById(R.id.bmi_scale);
		bmi_scale.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					bmi_scale.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent openbmi_about = new Intent(BMI.this, BMI_Scale.class);
					startActivity(openbmi_about);
					bmi_scale.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		
		
	}
	
	

	

}
