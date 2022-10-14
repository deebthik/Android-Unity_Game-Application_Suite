package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Yoga_Bow_Pose extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.yoga_bow_pose);
		
		final ScrollView bow_pose_scrollview = (ScrollView) findViewById(R.id.bow_pose_scrollview);
		bow_pose_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView bow_pose_video = (VideoView) findViewById(R.id.bow_pose_video);
		MediaController bow_pose_mediacontroller = new MediaController(this);
		
		bow_pose_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.bow_pose));
		bow_pose_video.setMediaController(bow_pose_mediacontroller);
		
		
		
		
		
		TextView bow_pose_instructions = (TextView) findViewById(R.id.bow_pose_instructions);
		bow_pose_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView bow_pose_purpose = (TextView) findViewById(R.id.bow_pose_purpose);
		bow_pose_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
