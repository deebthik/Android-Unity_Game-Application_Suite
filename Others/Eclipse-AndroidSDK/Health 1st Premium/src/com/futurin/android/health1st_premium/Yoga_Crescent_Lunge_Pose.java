package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Yoga_Crescent_Lunge_Pose extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.yoga_crescent_lunge_pose);
		
		final ScrollView crescent_lunge_pose_scrollview = (ScrollView) findViewById(R.id.crescent_lunge_pose_scrollview);
		crescent_lunge_pose_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView crescent_lunge_pose_video = (VideoView) findViewById(R.id.crescent_lunge_pose_video);
		MediaController crescent_lunge_pose_mediacontroller = new MediaController(this);
		
		crescent_lunge_pose_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.crescent_lunge_pose));
		crescent_lunge_pose_video.setMediaController(crescent_lunge_pose_mediacontroller);
		
		
		
		
		
		TextView crescent_lunge_pose_instructions = (TextView) findViewById(R.id.crescent_lunge_pose_instructions);
		crescent_lunge_pose_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView crescent_lunge_pose_purpose = (TextView) findViewById(R.id.crescent_lunge_pose_purpose);
		crescent_lunge_pose_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
