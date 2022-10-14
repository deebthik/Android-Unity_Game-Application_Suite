package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.os.Bundle;
import android.widget.TextView;

public class Diet_Plans_Pregnancy extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.diet_plans_pregnancy);
		
		TextView folic_acid = (TextView) findViewById(R.id.folic_acid);
		folic_acid.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView vitamin_a = (TextView) findViewById(R.id.vitamin_a);
		vitamin_a.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView iron = (TextView) findViewById(R.id.iron);
		iron.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView calcium = (TextView) findViewById(R.id.calcium);
		calcium.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView nuts = (TextView) findViewById(R.id.nuts);
		nuts.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView oily_fish = (TextView) findViewById(R.id.oily_fish);
		oily_fish.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView alcohol = (TextView) findViewById(R.id.alcohol);
		alcohol.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView tea_coffee = (TextView) findViewById(R.id.tea_coffee);
		tea_coffee.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView healthy_weight = (TextView) findViewById(R.id.healthy_weight);
		healthy_weight.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView food_safety = (TextView) findViewById(R.id.food_safety);
		food_safety.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView morning_sickness = (TextView) findViewById(R.id.morning_sickness);
		morning_sickness.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView heatburn = (TextView) findViewById(R.id.heatburn);
		heatburn.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView constipation = (TextView) findViewById(R.id.constipation);
		constipation.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView breast_feeding = (TextView) findViewById(R.id.breast_feeding);
		breast_feeding.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}

}
