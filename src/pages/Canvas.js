import React, { useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "transparent";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <canvas id="myCanvas" ref={canvasRef} {...props} />;
};

export default Canvas;
