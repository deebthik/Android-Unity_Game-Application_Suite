package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Exercise_Push_Ups extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.exercise_push_ups);
		
		ScrollView push_ups_scrollview = (ScrollView) findViewById(R.id.push_ups_scrollview);
		push_ups_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView push_ups_video = (VideoView) findViewById(R.id.push_ups_video);
		MediaController push_ups_mediacontroller = new MediaController(this);
		
		push_ups_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.push_ups));
		push_ups_video.setMediaController(push_ups_mediacontroller);
		
		
		
		
		
		TextView push_ups_instructions = (TextView) findViewById(R.id.push_ups_instructions);
		push_ups_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView push_ups_purpose = (TextView) findViewById(R.id.push_ups_purpose);
		push_ups_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
