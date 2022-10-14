package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Exercise_Jack_Knife_Crunches extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.exercise_jack_knife_crunches);
		
		ScrollView jack_knife_crunches_scrollview = (ScrollView) findViewById(R.id.jack_knife_crunches_scrollview);
		jack_knife_crunches_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView jack_knife_crunches_video = (VideoView) findViewById(R.id.jack_knife_crunches_video);
		MediaController jack_knife_crunches_mediacontroller = new MediaController(this);
		
		jack_knife_crunches_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.jack_knife_crunches));
		jack_knife_crunches_video.setMediaController(jack_knife_crunches_mediacontroller);
		
		
		
		
		
		TextView jack_knife_crunches_instructions = (TextView) findViewById(R.id.jack_knife_crunches_instructions);
		jack_knife_crunches_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView jack_knife_crunches_purpose = (TextView) findViewById(R.id.jack_knife_crunches_purpose);
		jack_knife_crunches_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
