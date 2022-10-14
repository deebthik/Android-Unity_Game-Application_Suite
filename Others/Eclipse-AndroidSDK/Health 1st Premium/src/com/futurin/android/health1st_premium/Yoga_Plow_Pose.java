package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Yoga_Plow_Pose extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.yoga_plow_pose);
		
		final ScrollView plow_pose_scrollview = (ScrollView) findViewById(R.id.plow_pose_scrollview);
		plow_pose_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView plow_pose_video = (VideoView) findViewById(R.id.plow_pose_video);
		MediaController plow_pose_mediacontroller = new MediaController(this);
		
		plow_pose_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.plow_pose));
		plow_pose_video.setMediaController(plow_pose_mediacontroller);
		
		
		
		
		
		TextView plow_pose_instructions = (TextView) findViewById(R.id.plow_pose_instructions);
		plow_pose_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView plow_pose_purpose = (TextView) findViewById(R.id.plow_pose_purpose);
		plow_pose_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
