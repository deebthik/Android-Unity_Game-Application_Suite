package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;

public class Diet_Plans extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.diet_plans);
		
		final Button diet_plans_toddler = (Button) findViewById(R.id.toddler_button);
		diet_plans_toddler.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					diet_plans_toddler.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent opendiet_plans_toddler = new Intent(Diet_Plans.this, Diet_Plans_Toddler.class);
					startActivity(opendiet_plans_toddler);
					diet_plans_toddler.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button diet_plans_children = (Button) findViewById(R.id.children_button);
		diet_plans_children.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					diet_plans_children.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent opendiet_plans_children = new Intent(Diet_Plans.this, Diet_Plans_Children.class);
					startActivity(opendiet_plans_children);
					diet_plans_children.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button diet_plans_adolescent = (Button) findViewById(R.id.adolescent_button);
		diet_plans_adolescent.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					diet_plans_adolescent.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent opendiet_plans_adolescent = new Intent(Diet_Plans.this, Diet_Plans_Adolescent.class);
					startActivity(opendiet_plans_adolescent);
					diet_plans_adolescent.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button diet_plans_male_adult = (Button) findViewById(R.id.male_adult_button);
		diet_plans_male_adult.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					diet_plans_male_adult.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent opendiet_plans_male_adult = new Intent(Diet_Plans.this, Diet_Plans_Male_Adult.class);
					startActivity(opendiet_plans_male_adult);
					diet_plans_male_adult.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button diet_plans_female_adult = (Button) findViewById(R.id.female_adult_button);
		diet_plans_female_adult.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					diet_plans_female_adult.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent opendiet_plans_female_adult = new Intent(Diet_Plans.this, Diet_Plans_Female_Adult.class);
					startActivity(opendiet_plans_female_adult);
					diet_plans_female_adult.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button diet_plans_pregnancy = (Button) findViewById(R.id.pregnancy_button);
		diet_plans_pregnancy.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					diet_plans_pregnancy.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent opendiet_plans_pregnancy = new Intent(Diet_Plans.this, Diet_Plans_Pregnancy.class);
					startActivity(opendiet_plans_pregnancy);
					diet_plans_pregnancy.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		final Button diet_plans_elderly_person = (Button) findViewById(R.id.elderly_person_button);
		diet_plans_elderly_person.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View view, MotionEvent event) {
				
				int action = event.getAction();
				if (action == MotionEvent.ACTION_DOWN) {
					diet_plans_elderly_person.setBackgroundResource(R.drawable.button2);
				}
				
				if (action == MotionEvent.ACTION_UP) {
					Intent opendiet_plans_elderly_person = new Intent(Diet_Plans.this, Diet_Plans_Elderly_Person.class);
					startActivity(opendiet_plans_elderly_person);
					diet_plans_elderly_person.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
	}

	
}
