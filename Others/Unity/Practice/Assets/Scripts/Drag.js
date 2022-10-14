    var object : GameObject;
     
    function Update () {
       
        for (var touch : Touch in Input.touches){
            var ray = Camera.main.ScreenPointToRay(touch.position);
            var hit : RaycastHit;
            if (Physics.Raycast (ray, hit, 500)) {
                if(touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
                    var cameraTransform = Camera.main.transform.InverseTransformPoint(0, 0, 0);
                    object.transform.position = Camera.main.ScreenToWorldPoint(new Vector3 (500, touch.position.y, 5));
                    //0.5 is the size of the diya
                }
            }
        }
        

        
        
    }