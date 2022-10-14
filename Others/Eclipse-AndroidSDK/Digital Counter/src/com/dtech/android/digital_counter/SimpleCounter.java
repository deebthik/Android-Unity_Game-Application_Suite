package com.dtech.android.digital_counter;



import com.google.ads.Ad;
import com.google.ads.AdListener;
import com.google.ads.AdRequest;
import com.google.ads.AdSize;
import com.google.ads.AdView;

import android.os.Bundle;
import android.app.Activity;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

public class SimpleCounter extends Activity{

	int counter;
	Button add, sub;
	TextView display;
	
	    
	  
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        setContentView(R.layout.activity_simple_counter);
        
      
        counter = 0;
        add = (Button) findViewById(R.id.add1);
        sub = (Button) findViewById(R.id.subtract1);
        display = (TextView) findViewById(R.id.count);
        add.setOnClickListener(new View.OnClickListener() {
			
			public void onClick(View v) {
				// TODO Auto-generated method stub
				counter++;
				display.setText(" " + counter);
			}
		});
        
     
        
 sub.setOnClickListener(new View.OnClickListener() {
			
	 
	 
			public void onClick(View v) {
				// TODO Auto-generated method stub
				counter--;
				display.setText(" " + counter);
			}
		});
    
    }
}
    

   
  

