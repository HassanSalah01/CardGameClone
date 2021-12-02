class Cards{
    constructor(){
        this.starter = this.startCards(); 
        this.attacks= this.attackCards();
        this.skills = this.skillCards();
    }
    // name,type,cost,damage,aoe,statusType,statusDuration,block,description
    startCards(){  
        let bash = new Card("Bash","Attack",2,8,true,1,1,0,0,"Deal 8 Damage , Apply 2 Vulnerable");
        let defend = new Card("Defend","Skill",1,0,false,0,0,0,5,"Gain 5 block");
        let strike = new Card("Strike","Attack",1,6,false,0,0,0,0,"Deal 6 damge");
        return [bash,defend,strike];
    }
    attackCards(){
        let ironWave = new Card("Iron Wave","Attack",1,5,false,0,0,0,5,"Gain 5 block,Deal 5");
        let twinStrike = new Card("Twin Strike" ,"Attack",1,10,false,0,0,0,0,"Deal 5 Damage Twice");
        let carnage = new Card("Carnage","Attack",2,20,false,0,0,0,0,"Deal 20 damage");
        return [ironWave, twinStrike, carnage];
    }
    skillCards(){
        let infernalBlade = new Card("Infernal Blade","Skill",1,0,false,0,0,0,10,"Gain 10 Block");
        let deadlyPoison = new Card ("Deadly Poison","Skill",1,0,true,2,2,2,0,"Apply 5 Poison");
        let PoisonedStab = new Card ("Poisoned Stab","Skill",1,6,true,2,2,2,0,"Deal 6 Damage Apply 3 Poison")
        return [infernalBlade ,deadlyPoison, PoisonedStab];
    }
}