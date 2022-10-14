package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import com.futurin.android.health1st_premium.R;

public class Splash extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.splash);
		
		Thread timer = new Thread(){
			public void run(){
				try{
					sleep(500);
				} catch (InterruptedException e){
					e.printStackTrace();
				}finally{
					Intent openHome = new Intent(Splash.this, Home.class);
					startActivity(openHome);
					
				}
			}
			
		};
		timer.start();
	
	}

	


@Override
protected void onPause() {
	// TODO Auto-generated method stub
	super.onPause();
	finish();
}

public void onBackPressed(){
	finish();
}


}
