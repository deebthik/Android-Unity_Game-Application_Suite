#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

}


function Update () {

	if(Input.GetMouseButton(0)){
	ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	if(Physics.Raycast(ray, hit)){
		transform.position.x = hit.point.x;
	}
  }
}