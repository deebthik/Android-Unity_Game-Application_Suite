package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.Configuration;
import android.graphics.Color;
import android.os.Bundle;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;


public class Home extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.home);
		
		SharedPreferences pref = getSharedPreferences("mypref", MODE_PRIVATE);

		if(pref.getBoolean("firststart", true)){
		   // update sharedpreference - another start wont be the first
		   SharedPreferences.Editor editor = pref.edit();
		   editor.putBoolean("firststart", false);
		   editor.commit(); // apply changes


			final AlertDialog welcome = welcome_dialog();
			
			welcome.show();
			
			TextView alertdialog = (TextView) welcome.findViewById(android.R.id.message);
			TextView button = (TextView) welcome.findViewById(android.R.id.button1);
			
			
			
			if ((getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK) == Configuration.SCREENLAYOUT_SIZE_XLARGE) {
				
				alertdialog.setTextSize(30);
				button.setTextSize(30);
				
				
			}
		}
		
		
		
		ImageView bmi_image = (ImageView) findViewById(R.id.bmi_image);
		bmi_image.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {

				Intent openbmi = new Intent(Home.this, BMI.class);
				startActivity(openbmi);
				
			}
		});
		
		final Button bmibutton = (Button) findViewById(R.id.bmibutton);
		
		bmibutton.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View v, MotionEvent event) {
				
				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					bmibutton.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openbmi = new Intent(Home.this, BMI.class);
					startActivity(openbmi);
					bmibutton.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		ImageView health_image = (ImageView) findViewById(R.id.health_image);
		health_image.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {

				Intent openhealth = new Intent(Home.this, Health.class);
				startActivity(openhealth);
				
			}
		});
		
final Button healthbutton = (Button) findViewById(R.id.healthbutton);
		
		healthbutton.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View v, MotionEvent event) {
				
				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					healthbutton.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					Intent openhealth = new Intent(Home.this, Health.class);
					startActivity(openhealth);
					healthbutton.setBackgroundResource(R.drawable.button1);
				}
				
				return false;
			}
		});
		
		ImageView EandY_image = (ImageView) findViewById(R.id.EandY_image);
		EandY_image.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				Intent openEandY = new Intent(Home.this, EandY.class);
				startActivity(openEandY);
			}
		});
		
final Button EandYbutton = (Button) findViewById(R.id.EandYbutton);
		
		EandYbutton.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View v, MotionEvent event) {
				
				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					EandYbutton.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					EandYbutton.setBackgroundResource(R.drawable.button1);
					Intent openEandY = new Intent(Home.this, EandY.class);
					startActivity(openEandY);
				}
				
				return false;
			}
		});
		
		ImageView FandD_image = (ImageView) findViewById(R.id.FandD_image);
		FandD_image.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				Intent openFandD = new Intent(Home.this, FandD.class);
				startActivity(openFandD);
				
			}
		});
		
final Button FandDbutton = (Button) findViewById(R.id.FandDbutton);
		
		FandDbutton.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View v, MotionEvent event) {
				
				int action = event.getAction();
				
				if(action == MotionEvent.ACTION_DOWN){
					FandDbutton.setBackgroundResource(R.drawable.button2);
				}
				if(action == MotionEvent.ACTION_UP){
					FandDbutton.setBackgroundResource(R.drawable.button1);
					Intent openFandD = new Intent(Home.this, FandD.class);
					startActivity(openFandD);
				}
				
				return false;
			}
		});
				 
	}

	
	
	
	

	/* All methods */
	
	
	



	@SuppressWarnings("deprecation")
	public AlertDialog welcome_dialog() {
		final AlertDialog welcome = new AlertDialog.Builder(this).create();
	
		TextView title = new TextView(getApplicationContext());
		title.setText("Welcome!");
		title.setGravity(Gravity.CENTER);
		title.setTextColor(Color.parseColor("#088A08"));
		title.setTextSize(30);
		if ((getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK) == Configuration.SCREENLAYOUT_SIZE_XLARGE) {
			title.setTextSize(40);
		}
		welcome.setMessage("Welcome to Health 1st. Here, not only can you check your health but also maintain it. Enjoy and don’t forget to rate my app!");
		welcome.setCancelable(true);
		welcome.setCustomTitle(title);
		welcome.setCanceledOnTouchOutside(false);
		welcome.setButton("OK", new OnClickListener() {
			
			@Override
			public void onClick(DialogInterface dialog, int which) {
				// TODO Auto-generated method stub
				welcome.dismiss();
			}
		});
		return welcome;
	}
	
	
	
	
	

	public void onBackPressed(){
		
		TextView title = new TextView(getApplicationContext());
		title.setText("Exit");
		title.setTextSize(30);
		title.setTextColor(Color.parseColor("#088A08"));
		title.setGravity(Gravity.CENTER);
		if ((getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK) == Configuration.SCREENLAYOUT_SIZE_XLARGE) {
			title.setTextSize(40);
		}
		
		final AlertDialog.Builder exit = new AlertDialog.Builder(this);
		exit.setCustomTitle(title);
		exit.setCancelable(false);
		exit.setMessage("Are you sure you want to exit this application?");
		exit.setPositiveButton("Yes", new OnClickListener() {
			
			@Override
			public void onClick(DialogInterface arg0, int arg1) {
				finish();
			}
		});
		exit.setNegativeButton("No", new OnClickListener() {
			
			@Override
			public void onClick(DialogInterface dialog, int which) {
				dialog.cancel();
			}
			
			
		});
		
		AlertDialog exitdialog = exit.create();
		exitdialog.show();
		
		if ((getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK) == Configuration.SCREENLAYOUT_SIZE_XLARGE) {
			
			TextView message = (TextView) exitdialog.findViewById(android.R.id.message);
			TextView yes = (TextView) exitdialog.findViewById(android.R.id.button1);
			TextView no = (TextView) exitdialog.findViewById(android.R.id.button2);
			
			message.setTextSize(30);
			yes.setTextSize(30);
			no.setTextSize(30);
			
			
		}
		
		
		
			
		
		
		
	}



}
