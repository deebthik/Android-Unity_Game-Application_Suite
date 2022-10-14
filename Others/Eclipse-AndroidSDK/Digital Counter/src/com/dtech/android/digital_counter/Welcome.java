package com.dtech.android.digital_counter;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

public class Welcome extends Activity{

	@Override
	protected void onCreate(Bundle Welcome) {
		// TODO Auto-generated method stub
		super.onCreate(Welcome);
		setContentView(R.layout.welcome);
		Thread timer = new Thread(){
			public void run(){
				try{
					sleep(3000);
				} catch (InterruptedException e){
					e.printStackTrace();
				}finally{
					Intent openSimpleCounter = new Intent("com.dtech.android.digital_counter.SIMPLECOUNTER");
					startActivity(openSimpleCounter);
					
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

}
