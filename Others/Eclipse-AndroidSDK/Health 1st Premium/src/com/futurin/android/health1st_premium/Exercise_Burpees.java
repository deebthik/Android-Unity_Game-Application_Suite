package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Exercise_Burpees extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.exercise_burpees);
		
		final ScrollView burpees_scrollview = (ScrollView) findViewById(R.id.burpees_scrollview);
		burpees_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView burpees_video = (VideoView) findViewById(R.id.burpees_video);
		MediaController burpees_mediacontroller = new MediaController(this);
		
		burpees_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.burpees));
		burpees_video.setMediaController(burpees_mediacontroller);
		
		
		
		
		
		TextView burpees_instructions = (TextView) findViewById(R.id.burpees_instructions);
		burpees_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView burpees_purpose = (TextView) findViewById(R.id.burpees_purpose);
		burpees_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}

}
