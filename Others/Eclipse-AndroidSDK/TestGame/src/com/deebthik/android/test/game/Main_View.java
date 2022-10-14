package com.deebthik.android.test.game;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.view.MotionEvent;
import android.view.View;

@SuppressLint("DrawAllocation")
public class Main_View extends View{

	int screen_width;
	int screen_height;
	private Bitmap apple_logo;
	private Bitmap original_apple_logo;
	private Bitmap start_button_up;
	private Bitmap original_start_button_up;
	private Bitmap original_start_button_down;
	private Bitmap start_button_down;
	private boolean start_button_ispressed;
	
	public Main_View(Context context) {
		super(context);
		
		original_apple_logo = BitmapFactory.decodeResource(getResources(), R.drawable.apple_logo);
		original_start_button_up = BitmapFactory.decodeResource(getResources(), R.drawable.start_button_up);
		original_start_button_down = BitmapFactory.decodeResource(getResources(), R.drawable.start_button_down);
				
	}


	@Override
	protected void onSizeChanged(int w, int h, int oldw, int oldh) {
		super.onSizeChanged(w, h, oldw, oldh);
		
		screen_width = w;
		screen_height = h;
		
	}


	@Override
	public boolean onTouchEvent(MotionEvent event) {

		int action = event.getAction();
		int actionX = (int) event.getX();
		int actionY = (int) event.getY();
		
		
		switch (action) {
		case MotionEvent.ACTION_DOWN:
			
			if (actionX > (screen_width-start_button_up.getWidth())/2 && actionX < ((screen_width-start_button_up.getWidth())/2) + start_button_up.getWidth()
					&& actionY > (screen_height * 0.7) && actionY < (screen_height * 0.7) + start_button_up.getHeight()) {
				start_button_ispressed = true;
			}
			break;
			
		case MotionEvent.ACTION_UP:
			
			start_button_ispressed = false;
			
			break;

		default:
			break;
		}
		
		invalidate();
		  return true;
	}


	@Override
	protected void onDraw(Canvas canvas) {
		super.onDraw(canvas);
		
		start_button_down = Bitmap.createScaledBitmap(original_start_button_down, screen_width/2, screen_height/4, true);
		start_button_up = Bitmap.createScaledBitmap(original_start_button_up, screen_width/2, screen_height/4, true);
		apple_logo = Bitmap.createScaledBitmap(original_apple_logo, screen_width/3, screen_height/4, true);
		canvas.drawBitmap(apple_logo, (screen_width-apple_logo.getWidth())/2, (screen_height-apple_logo.getHeight())/2, null);
		
		if (start_button_ispressed) {
			canvas.drawBitmap(start_button_down, (screen_width-start_button_down.getWidth())/2, (float) (screen_height * 0.7), null);
		}else {
			canvas.drawBitmap(start_button_up, (screen_width-start_button_up.getWidth())/2, (float) (screen_height * 0.7), null);
		}
		
	}

}
