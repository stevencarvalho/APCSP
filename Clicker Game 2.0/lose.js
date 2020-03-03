function setup(){
    createCanvas(windowWidth, windowHeight);
    background('green');
    heading = createElement('h2', 'Unfortunate, You Lost!');
    heading.position(width / 3, height / 4);
    button = createButton('GO BACK TO GAME');
    button.position(width / 2, height / 2);
    button.mousePressed(goToLink)
  }
  
  function goToLink(){
      window.location.href = "game.html";
  }