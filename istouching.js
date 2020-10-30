function isTouching(gameobject){
    if(mrect.x-gameobject.x<mrect.width/2+gameobject.width/2&&gameobject.x-mrect.x<mrect.width/2+gameobject.width/2&&
      mrect.y-gameobject.y<mrect.height/2+gameobject.height/2&&gameobject.y-mrect.y<mrect.height/2+gameobject.height/2){
    return true
    
    }
    else{
      return false
    }
  }