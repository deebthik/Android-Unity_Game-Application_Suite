package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.RadioGroup.OnCheckedChangeListener;
import android.widget.ScrollView;
import android.widget.TextView;

public class Health_Calculator extends Activity{
	
	RadioButton yes1;
	RadioButton yes2;
	RadioButton yes3;
	RadioButton yes4;
	RadioButton yes5;
	RadioButton yes6;
	RadioButton yes7;
	RadioButton yes8;
	RadioButton yes9;
	RadioButton yes10;
	RadioButton no1;
	RadioButton no2;
	RadioButton no3;
	RadioButton no4;
	RadioButton no5;
	RadioButton no6;
	RadioButton no7;
	RadioButton no8;
	RadioButton no9;
	RadioButton no10;
	public int q1_score;
	public int q2_score;
	public int q3_score;
	public int q4_score;
	public int q5_score;
	public int q6_score;
	public int q7_score;
	public int q8_score;
	public int q9_score;
	public int q10_score;
	public int score1;
	public int score2;
	public int score3;
	public int score4;
	public int score5;
	public int score6;
	public int score7;
	public int score8;
	public int score9;
	public int score10;
	public int finalscore;
	
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.health_calculator);
		
		final TextView health = (TextView) findViewById(R.id.health);
		
		final RadioGroup q1 = (RadioGroup) findViewById(R.id.q1);
		q1.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes1 = (RadioButton) findViewById(R.id.yes1);
				no1 = (RadioButton) findViewById(R.id.no1);
				
				if(yes1.isChecked()){
					q1_score = 1;
					if(score1 == -1){
						q1_score = 1;
					}
				}
				else if (no1.isChecked()){
					
						q1_score = 0;
						if(score1 == 1){
							q1_score = -1;
						}
					
				}
				
				score1 = Integer.valueOf(score1 + q1_score);
				
			}
		});
		
		final RadioGroup q2 = (RadioGroup) findViewById(R.id.q2);
		q2.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes2 = (RadioButton) findViewById(R.id.yes2);
				no2 = (RadioButton) findViewById(R.id.no2);
				
				if(yes2.isChecked()){
					q2_score = 1;
					if(score2 == -1){
						q2_score = 1;
					}
				}
				else if(no2.isChecked()){
					
						q2_score = 0;
						if(score2 == 1){
							q2_score = -1;
						}
					
				}
				
				score2 = Integer.valueOf(score2 + q2_score);
			}
		});
		
		final RadioGroup q3 = (RadioGroup) findViewById(R.id.q3);
		q3.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes3 = (RadioButton) findViewById(R.id.yes3);
				no3 = (RadioButton) findViewById(R.id.no3);
				
				if(yes3.isChecked()){
					q3_score = 1;
					if(score3 == -1){
						q3_score = 1;
					}
				}
				else if(no3.isChecked()){
						q3_score = 0;
						if(score3 == 1){
							q3_score = -1;
						}
					
				}
				
				score3 = Integer.valueOf(score3 + q3_score);
			}
		});
		
		final RadioGroup q4 = (RadioGroup) findViewById(R.id.q4);
		q4.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes4 = (RadioButton) findViewById(R.id.yes4);
				no4 = (RadioButton) findViewById(R.id.no4);
				
				if(yes4.isChecked()){
					q4_score = 1;
					if(score4 == -1){
						q4_score = 1;
					}
				}
				else if(no4.isChecked()){
						q4_score = 0;
						if(score4 == 1){
							q4_score = -1;
						}
					
				}
				
				score4 = Integer.valueOf(score4 + q4_score);
			}
		});
		
		final RadioGroup q5 = (RadioGroup) findViewById(R.id.q5);
		q5.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes5 = (RadioButton) findViewById(R.id.yes5);
				no5 = (RadioButton) findViewById(R.id.no5);
				
				if(yes5.isChecked()){
					q5_score = 0;
					if(score5 == 5){
						q5_score = -5;
					}
					
				}
				else if(no5.isChecked()){
					q5_score = 5;
					if(score5 == -5){
						q5_score = 5;
					}
					
				}
				
				score5 = Integer.valueOf(score5 + q5_score);
			}
		});
		
		final RadioGroup q6 = (RadioGroup) findViewById(R.id.q6);
		q6.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes6 = (RadioButton) findViewById(R.id.yes6);
				no6 = (RadioButton) findViewById(R.id.no6);
				
				if(yes6.isChecked()){
					q6_score = 0;
					if(score6 == 4){
						q6_score = -4;
					}
				}
				else if(no6.isChecked()){
					q6_score = 4;
					if(score6 == -4){
						q6_score = 4;
					}
					
					
				}
				
				score6 = Integer.valueOf(score6 + q6_score);
			}
		});
		
		final RadioGroup q7 = (RadioGroup) findViewById(R.id.q7);
		q7.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes7 = (RadioButton) findViewById(R.id.yes7);
				no7 = (RadioButton) findViewById(R.id.no7);
				
				if(yes7.isChecked()){
					q7_score = 1;
					if(score7 == -1){
						q7_score = 1;
					}
				}
				else if(no7.isChecked()){
						q7_score = 0;
						if(score7 == 1){
							q7_score = -1;
						}
					
				}
				
				score7 = Integer.valueOf(score7 + q7_score);
			}
		});
		
		final RadioGroup q8 = (RadioGroup) findViewById(R.id.q8);
		q8.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes8 = (RadioButton) findViewById(R.id.yes8);
				no8 = (RadioButton) findViewById(R.id.no8);
				
				if(yes8.isChecked()){
					q8_score = 1;
					if(score8 == -1){
						q8_score = 1;
					}
				}
				else if(no8.isChecked()){
						q8_score = 0;
						if(score8 == 1){
							q8_score = -1;
						}
					
				}
				
				score8 = Integer.valueOf(score8 + q8_score);
			}
		});
		
		final RadioGroup q9 = (RadioGroup) findViewById(R.id.q9);
		q9.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes9 = (RadioButton) findViewById(R.id.yes9);
				no9 = (RadioButton) findViewById(R.id.no9);
				
				if(yes9.isChecked()){
					q9_score = 2;
					if(score9 == -2){
						q9_score = 2;
					}
				}
				else if(no9.isChecked()){
						q9_score = -0;
						if(score9 == 2){
							q9_score = -2;
						}
					
				}
				
				score9 = Integer.valueOf(score9 + q9_score);
			}
		});
		
		final RadioGroup q10 = (RadioGroup) findViewById(R.id.q10);
		q10.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			
			@Override
			public void onCheckedChanged(RadioGroup arg0, int arg1) {
				
				yes10 = (RadioButton) findViewById(R.id.yes10);
				no10 = (RadioButton) findViewById(R.id.no10);
				
				if(yes10.isChecked()){
					q10_score = 0;
					if(score10 == 1){
						q10_score = -1;
					}
				}
				else if(no10.isChecked()){
						q10_score = 1;
						if(score10 == -1){
							q10_score = 1;
						}
					
				}
				
				score10 = Integer.valueOf(score10 + q10_score);
			}
		});
		
		
		
		
		final Button your_health = (Button) findViewById(R.id.your_health);
		your_health.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				
				finalscore = (score1 + score2 + score3 + score4 +  + score7 + score8 + score9 + score10 + (score5 + score6));
				
				if(finalscore < 10){
					health.setText("You are not healthy");
					health.setTextColor(Color.RED);
				}
				else if(finalscore <= 15 && finalscore >= 10){
					health.setText("You are close to being healthy");
					health.setTextColor(Color.WHITE);
				}
				else if(finalscore > 15){
					health.setText("You are healthy");
					health.setTextColor(Color.GREEN);
				}
				
				int question1 = q1.getCheckedRadioButtonId();
				int question2 = q2.getCheckedRadioButtonId();
				int question3 = q3.getCheckedRadioButtonId();
				int question4 = q4.getCheckedRadioButtonId();
				int question5 = q5.getCheckedRadioButtonId();
				int question6 = q6.getCheckedRadioButtonId();
				int question7 = q7.getCheckedRadioButtonId();
				int question8 = q8.getCheckedRadioButtonId();
				int question9 = q9.getCheckedRadioButtonId();
				int question10 = q10.getCheckedRadioButtonId();
				
				if((question1 | question2 | question3 | question4 | question5 | question6 | question7 | question8 | question9 | question10) == -1){
					health.setText("Please answer every question");
					health.setTextColor(Color.WHITE);
				}
				
					ScrollView health_calculator_scrollview = (ScrollView) findViewById(R.id.health_calculator_scrollview);
					health_calculator_scrollview.fullScroll(ScrollView.FOCUS_DOWN);
				

			}
			
		});
		
	}
	
}
