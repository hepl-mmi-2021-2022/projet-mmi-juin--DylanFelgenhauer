export const settings ={
    canvas:{
        width:640,
        height:480,
    },
    playerOne:{
        height:100,
        width:10,
        gravity: 0.2,
        positions:{x:10,y:240-100*0.5}
    },
    playerTwo:{
        height:100,
        width: 10,
        gravity:0.2,
        positions:{x:620,y:240-100*0.5}
    },
    player:{
        height:100,
        width: 10,
        gravity:0.2,
    },
    ball:{
        radius : 5,
        startAngle : 0,
        endAngle: Math.PI*2,
        ballSpeedX:2,
        maxBallSpeedX:5,
        ballSpeedY:2,

    },
    midLane:{
        width:2,
    }
}