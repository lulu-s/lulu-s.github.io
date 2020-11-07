var s = new p5( function( _ ){
    
    _.setup = function(){
        s.createCanvas(window.innerWidth - 10, window.innerHeight - 10);
        s.smooth();
        document.body.appendChild(s.canvas);
    }
    _.draw = () => { 
        s.background(255);
    };
});
