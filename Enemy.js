class Enemy{
    constructor(config){
        this.name = config.name;
        this.damage = config.damage;
        this.health= config.health;
        this.action = config.action;
        this.IsTurn = false; 
    }

    action(){
        let randNum = Math.floor(Math.random()*4);
        // console.log(randNum)
         switch (randNum) {
             case 0:
              return "Attack";
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