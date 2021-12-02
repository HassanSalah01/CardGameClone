class Node{
    constructor(){
        this.type =this.types();
        this.Visited = false;
        this.number;
        
    }
    types(){
        let randNum = Math.floor(Math.random()*4);
       // console.log(randNum)
        switch (randNum) {
            case 0:
             return "Boss";
              break;
            case 1:
                return "Moob";
             break;
            case 2:
                return "BoneFire";
              break;
            case 3:
                return "Store";
             break; 
        }
            
    }

}