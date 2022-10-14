package com.futurin.android.health1st_premium;

import java.text.DecimalFormat;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import com.futurin.android.health1st_premium.R;

public class BMI_Calculator extends Activity{

	public int height;
	public int weight;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.bmi_calculator);
		
		
		Spinner heightoptions = (Spinner) findViewById(R.id.heightoptions);

		heightoptions.setOnItemSelectedListener(new OnItemSelectedListener() {

			@Override
			public void onItemSelected(AdapterView<?> arg0, View arg1,
					int heightoption, long arg3) {
				// TODO Auto-generated method stub
				switch (heightoption) {
				case 0:
					height = 0;
					break;
					
				case 1:
					height = 1;
					break;
					
				case 2:
					height = 2;
					break;
					
				case 3:
					height = 3;
					break;

				default:
					break;
				}
			}

			@Override
			public void onNothingSelected(AdapterView<?> arg0) {
				// TODO Auto-generated method stub
				
			}
		});
		
		
		Spinner weightoptions = (Spinner) findViewById(R.id.weightoptions);
		weightoptions.setOnItemSelectedListener(new OnItemSelectedListener() {

			@Override
			public void onItemSelected(AdapterView<?> arg0, View arg1,
					int weightoption, long arg3) {
				switch (weightoption) {
				case 0:
					weight = 0;
					break;
					
				case 1:
					weight = 1;
					break;
					
				case 2:
					weight = 2;
					break;
					
				default:
					break;
				}
			}

			@Override
			public void onNothingSelected(AdapterView<?> arg0) {
				
			}
		});
		
		String[] heightoptionsarray = new String[] {"Centimetres", "Metres", "Inches", "Feet"};
		String[] weightoptionsarray = new String[] {"Grams", "Kilograms", "Pounds"};
		
		ArrayAdapter<String> heightoptionsarrayadapter = new ArrayAdapter<String>(BMI_Calculator.this, R.layout.my_spinner_item, heightoptionsarray);
		heightoptionsarrayadapter.setDropDownViewResource(R.layout.my_spinner_sub_item);
		heightoptions.setAdapter(heightoptionsarrayadapter);
		
		ArrayAdapter<String> weightoptionsarrayadapter = new ArrayAdapter<String>(BMI_Calculator.this, R.layout.my_spinner_item, weightoptionsarray);
		weightoptionsarrayadapter.setDropDownViewResource(R.layout.my_spinner_sub_item);
		weightoptions.setAdapter(weightoptionsarrayadapter);
		
		
		
		
		
		
		final Button your_bmi_button = (Button) findViewById(R.id.your_bmi_button);
			
		your_bmi_button.setOnTouchListener(new OnTouchListener() {
			
			@Override
			public boolean onTouch(View arg0, MotionEvent event) {

				final EditText heighttext = (EditText) findViewById(R.id.height);
				final EditText weighttext = (EditText) findViewById(R.id.weight);
				
				TextView bmi = (TextView) findViewById(R.id.bmi);
				
				double heightvalue = 0;
				double weightvalue = 0;
				double bmivalue = 0;
				
				DecimalFormat df = new DecimalFormat("#.###");
				
				TextView bmi_category = (TextView) findViewById(R.id.bmi_category);
				
				int action = event.getAction();
				
				switch (action) {
				
				case MotionEvent.ACTION_DOWN:
					your_bmi_button.setBackgroundResource(R.drawable.button2);
					break;
					
				case MotionEvent.ACTION_UP:
					
					your_bmi_button.setBackgroundResource(R.drawable.button1);
					
					if(height == 0 && weight == 0){		//cm and g
						
						try{
						
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue / 1000) / (Math.pow((heightvalue / 100), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
							bmi_category.setText(null);
						}
						
												
					}
					else if(height == 0 && weight == 1){	 //cm and kg
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue) / (Math.pow((heightvalue / 100), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 0 && weight == 2){	//cm and lb
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue / 2.20462) / (Math.pow((heightvalue / 100), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 1 && weight == 0){	//m and g
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue / 1000) / (Math.pow((heightvalue), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 1 && weight == 1){	//m and kg
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue) / (Math.pow((heightvalue), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 1 && weight == 2){	//m and lb
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue / 2.20462) / (Math.pow((heightvalue), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 2 && weight == 0){	//in and g
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue / 1000) / (Math.pow((heightvalue / 39.3701), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 2 && weight == 1){	//in and kg
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue) / (Math.pow((heightvalue / 39.3701), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 2 && weight == 2){	//in and lb
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue / 2.20462) / (Math.pow((heightvalue / 39.3701), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 3 && weight == 0){	//ft and g
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue / 1000) / (Math.pow((heightvalue / 3.28084), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 3 && weight == 1){	//ft and kg
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue) / (Math.pow((heightvalue / 3.28084), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					else if(height == 3 && weight == 2){	//ft and lb
						
						try{
							
							heightvalue = Double.parseDouble(heighttext.getText().toString());
							weightvalue = Double.parseDouble(weighttext.getText().toString());
							bmivalue = (weightvalue / 2.20462) / (Math.pow((heightvalue / 3.28084), 2));
							bmi.setText(df.format(bmivalue));
							
							bmi_scale(bmivalue, bmi_category);
							
						}catch (NumberFormatException e){
							bmi.setText("Please enter a valid height or weight value");
						}
						
					}
					break;

				default:
					break;
				}
				
				
				return false;
				
			}
		
		});
		
		
		
	}

	public void bmi_scale(double bmivalue, TextView bmi_category) {
		if(bmivalue < 15){
			bmi_category.setText("Very Severely Underweight");
			bmi_category.setTextColor(Color.RED);
		}
		else if(bmivalue >= 15 && bmivalue <= 16){
			bmi_category.setText("Severely Underweight");
			bmi_category.setTextColor(Color.RED);
		}
		else if (bmivalue >= 16 && bmivalue <= 18.5){
			bmi_category.setText("Underweight");
			bmi_category.setTextColor(Color.RED);
		}
		else if(bmivalue >= 18.5 && bmivalue <= 25){
			bmi_category.setText("Normal");
			bmi_category.setTextColor(Color.GREEN);
		}
		else if (bmivalue >= 25 && bmivalue <= 30){
			bmi_category.setText("Overweight");
			bmi_category.setTextColor(Color.RED);
		}
		else if (bmivalue >= 30 && bmivalue <= 35){
			bmi_category.setText("Moderately Obese");
			bmi_category.setTextColor(Color.RED);
		}
		else if (bmivalue >= 35 && bmivalue <= 40){
			bmi_category.setText("Severely Overweight");
			bmi_category.setTextColor(Color.RED);
		}
		else if (bmivalue > 40){
			bmi_category.setText("Very Severely Overweight");
			bmi_category.setTextColor(Color.RED);
		}
	}
	
	

}
