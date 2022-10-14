package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Yoga_Bridge_Pose extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.yoga_bridge_pose);
		
		final ScrollView bridge_pose_scrollview = (ScrollView) findViewById(R.id.bridge_pose_scrollview);
		bridge_pose_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView bridge_pose_video = (VideoView) findViewById(R.id.bridge_pose_video);
		MediaController bridge_pose_mediacontroller = new MediaController(this);
		
		bridge_pose_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.bridge_pose));
		bridge_pose_video.setMediaController(bridge_pose_mediacontroller);
		
		
		
		
		
		TextView bridge_pose_instructions = (TextView) findViewById(R.id.bridge_pose_instructions);
		bridge_pose_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView bridge_pose_purpose = (TextView) findViewById(R.id.bridge_pose_purpose);
		bridge_pose_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
