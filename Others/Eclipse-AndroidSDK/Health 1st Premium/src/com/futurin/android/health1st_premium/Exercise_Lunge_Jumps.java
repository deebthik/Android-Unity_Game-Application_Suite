package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Exercise_Lunge_Jumps extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.exercise_lunge_jumps);
		
		ScrollView lunge_jumps_scrollview = (ScrollView) findViewById(R.id.lunge_jumps_scrollview);
		lunge_jumps_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView lunge_jumps_video = (VideoView) findViewById(R.id.lunge_jumps_video);
		MediaController lunge_jumps_mediacontroller = new MediaController(this);
		
		lunge_jumps_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.lunge_jumps));
		lunge_jumps_video.setMediaController(lunge_jumps_mediacontroller);
		
		
		
		
		
		TextView lunge_jumps_instructions = (TextView) findViewById(R.id.lunge_jumps_instructions);
		lunge_jumps_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView lunge_jumps_purpose = (TextView) findViewById(R.id.lunge_jumps_purpose);
		lunge_jumps_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
