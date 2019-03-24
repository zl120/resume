function draw() {
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext('2d');
     //绘制起始点、控制点、终点  
      context.beginPath();  
      context.moveTo(20,170);  
      context.lineTo(130,40);  
      context.lineTo(180,150);    
      context.stroke();            

      //绘制2次贝塞尔曲线  
      context.beginPath();  
      context.moveTo(20,170);  
      context.quadraticCurveTo(130,40,180,150); 
      context.strokeStyle = "red"; 
      context.stroke();          
}