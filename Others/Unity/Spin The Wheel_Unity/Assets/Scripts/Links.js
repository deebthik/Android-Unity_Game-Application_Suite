#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
			if(hit.transform.name == "MCQ 1"){
			Application.LoadLevel("MCQ 1");
			}
			
			if(hit.transform.name == "MCQ 2"){
			Application.LoadLevel("MCQ 2");
			}
			
			if(hit.transform.name == "One Word 1"){
			Application.LoadLevel("One Word 1");
			}
			
			if(hit.transform.name == "One Word 2"){
			Application.LoadLevel("One Word 2");
			}
			
			if(hit.transform.name == "Short Answer 1"){
			Application.LoadLevel("Short Answer 1");
			}
			
			if(hit.transform.name == "Short Answer 2"){
			Application.LoadLevel("Short Answer 2");
			}
			
			if(hit.transform.name == "Long Answer 1"){
			Application.LoadLevel("Long Answer 1");
			}
		
		    if(hit.transform.name == "Long Answer 2"){
			Application.LoadLevel("Long Answer 2");
			}
		
		
			}
			
			
		}
		
}