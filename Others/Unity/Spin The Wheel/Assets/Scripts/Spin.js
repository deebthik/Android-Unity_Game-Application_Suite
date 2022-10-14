var rotationSpeed = 10.0;
var lerpSpeed = 1.0;
 
private var speed = new Vector3();
private var avgSpeed = new Vector3();
private var dragging = false;
private var targetSpeedX = new Vector3();
 
function OnMouseDown() 
{
    dragging = true;
}
 
function Update () 
{
 
    if (Input.GetMouseButton(0) && dragging) {
        speed = new Vector3(-Input.GetAxis ("Mouse X"), Input.GetAxis("Mouse Y"), 0);
        avgSpeed = Vector3.Lerp(avgSpeed,speed,Time.deltaTime * 5);
    } else {
        if (dragging) {
            speed = avgSpeed;
            dragging = false;
        }
        var i = Time.deltaTime * lerpSpeed;
        speed = Vector3.Lerp( speed, Vector3.zero, i);   
    }
 
    transform.Rotate( Camera.main.transform.up * speed.z * rotationSpeed, Space.World ); // if speed.z is set there will no x rotation
    transform.Rotate( Camera.main.transform.right * speed.y * rotationSpeed, Space.World );
 
}