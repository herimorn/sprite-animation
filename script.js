let playerState="run";
const dropdown=document.getElementById("animations");
dropdown.addEventListener('change',(e)=>{
   playerState=e.target.value;
})
const canvas=document.getElementById("canvas1");
const ctx=canvas.getContext("2d");
const canvas_width=canvas.width=600;
const canvas_height=canvas.height=600;

const playerImage=new Image();
playerImage.src="shadow_dog.png";
const spriteWidth=575;
const spriteHeight=523;

let gameFrame=0;
const staggerFrames=5;
const spriteAnimations=[];
const animationStates=[
    {
        name:'iddle',
        frames:7,
    },
    {
        name:'jump',
        frames:7,
    },
    {
        name:'fall',
        frames:7,
    },
    {
        name:'run',
        frames:9,
    },
    {
        name:'dizzy',
        frames:11,
    },
    {
        name:'sit',
        frames:5,
    },
    {
        name:'roll',
        frames:7,
    },
    {
        name:'bite',
        frames:7,
    },
    {
        name:'ko',
        frames:12,
    },
    {
        name:'getHit',
        frames:4,
    },
];
 animationStates.forEach((states,index)=>{
       let frames={
        loc:[],
       }
       for (let j=0;j<states.frames;j++){
        positionX=j*spriteWidth;
        positionY=index*spriteHeight;
        frames.loc.push({x:positionX,y:positionY});
       }
       spriteAnimations[states.name]=frames;
       console.log(spriteAnimations);
 })

function animate(){
 ctx.clearRect(0,0,canvas_width,canvas_height);
 let position=Math.floor(gameFrame/staggerFrames)%spriteAnimations[playerState].loc.length;
 let frameX=position*spriteWidth;
 let frameY=spriteAnimations[playerState].loc[position].y;


 //the cutting of image or simply cropping of the image
// ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);
 //draing the image into the canvas
 ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
//request the animation

 gameFrame++

 requestAnimationFrame(animate);
}
animate();