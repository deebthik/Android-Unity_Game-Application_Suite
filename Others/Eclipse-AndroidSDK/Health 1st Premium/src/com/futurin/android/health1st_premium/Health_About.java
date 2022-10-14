package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.ScrollView;
import android.widget.TextView;
import com.futurin.android.health1st_premium.R;

public class Health_About extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.health_about);
		
		TextView sleep = (TextView) findViewById(R.id.sleep);
		sleep.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView eat_well = (TextView) findViewById(R.id.eat_well);
		eat_well.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView personal_hygiene = (TextView) findViewById(R.id.personal_hygiene);
		personal_hygiene.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView exercise = (TextView) findViewById(R.id.exercise);
		exercise.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView laugh = (TextView) findViewById(R.id.laugh);
		laugh.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView drink_water = (TextView) findViewById(R.id.drink_water);
		drink_water.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
	
		final ScrollView scrollview = (ScrollView) findViewById(R.id.scrollView);
		sleep.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View arg0) {
				// TODO Auto-generated method stub
				scrollview.scrollTo(10, 50);
			}
		});
		
		
	}

}
