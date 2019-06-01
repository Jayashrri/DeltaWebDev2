const startbtn=document.getElementById('start');

var ctx;

var minrockH=350;
var maxStr=10;


class Rock {
    constructor(){
        this.radius=20;
        if(Math.round(Math.random())==1)
            this.x=390;
        else this.x=20;
        this.rockH=Math.floor(Math.random()*(530-minrockH)+minrockH);
        this.dx=1;
        this.dy=0;
        this.y=this.rockH;
        this.strength=Math.floor(Math.random()*10+1);
    }

    drawrock(){
        ctx.clearRect(0,100,410,450);
        ctx.fillStyle="#396639";
        ctx.fillRect(0,0,410,100);
        ctx.fillStyle="#c5dfe0";
        ctx.fillRect(0,100,410,450);
        ctx.beginPath();
        ctx.fillStyle="#751525";
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
    }

    updaterock(){
        if(this.x<20||this.x>390){
            this.dx=-this.dx;
        }
        if(this.y<120){
            this.dy=-this.dy;
            this.y=120;
        }
        if(this.y>this.rockH)
            this.dy=0;
        this.dy+=9.8/200;
        this.y-=this.dy;
        this.x+=this.dx;
    }
}


function init(){
    startbtn.style.display="none";
    var gamescreen = document.getElementById('gamescreen');
    ctx = gamescreen.getContext('2d');
    ctx.transform(1,0,0,-1,0,550);
    let ball = new Rock();
    setInterval(function(){
        ball.drawrock();
        ball.updaterock();
    },10);
}


startbtn.style.display="block";
startbtn.onclick=init;
