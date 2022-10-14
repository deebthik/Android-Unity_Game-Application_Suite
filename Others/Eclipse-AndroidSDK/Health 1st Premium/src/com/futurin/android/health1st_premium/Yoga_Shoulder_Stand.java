package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Yoga_Shoulder_Stand extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.yoga_shoulder_stand);
		
		final ScrollView shoulder_stand_scrollview = (ScrollView) findViewById(R.id.shoulder_stand_scrollview);
		shoulder_stand_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView shoulder_stand_video = (VideoView) findViewById(R.id.shoulder_stand_video);
		MediaController shoulder_stand_mediacontroller = new MediaController(this);
		
		shoulder_stand_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.shoulder_stand));
		shoulder_stand_video.setMediaController(shoulder_stand_mediacontroller);
		
		
		
		
		
		TextView shoulder_stand_instructions = (TextView) findViewById(R.id.shoulder_stand_instructions);
		shoulder_stand_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView shoulder_stand_purpose = (TextView) findViewById(R.id.shoulder_stand_purpose);
		shoulder_stand_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
