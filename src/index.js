var React = require("react");
var ReactDOM = require("react-dom");

function generateRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

ReactDOM.render(
  <div>
    <h1 style={{ color: generateRandomColor() }}>Hello World</h1>
    <p style={{ color: generateRandomColor()  }}>My name is Dillon Donetta</p>
    <p style={{ color: generateRandomColor()  }}>i am a handsome human being</p>
    <p style={{ color: generateRandomColor()  }}>I love to learn javascript</p>
    <p style={{ color: generateRandomColor()  }}>I am a super quality Student</p>
    <p style={{ color: generateRandomColor()  }}>i am going tobe a super star</p>
  </div>,
  document.getElementById("root")
);
