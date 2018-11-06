(function () {

    let counter = 0;
  
    // Save this for later use
    const originalHTML = document.body.innerHTML;
    let messageWrapper = document.getElementById('message');

    var audio = document.createElement('audio')
    audio.setAttribute('src', 'image/sound.mp3')
    audio.setAttribute('autoplay','autoplay')

    document.onclick = function (event) {
      event.preventDefault();
      audio.pause();
      document.body.innerHTML = originalHTML;
      messageWrapper = document.getElementById('message');
    }

    document.onclick = function (event) {
      event.preventDefault();
      document.body.innerHTML = originalHTML;
      messageWrapper = document.getElementById('message');
    }
  
    document.onkeydown = function (event) {
      // Prevents the space bar from scrolling down when pressed
      if (event.keyCode === 32) {
        event.preventDefault();
      }
    }
  
    document.onkeyup = function (event) {
      const keyCodePressed = event.keyCode;
  
      const coordinates = helpers.generateCoordinates();
  
      messageWrapper.innerText = keyCodePressed + ' : ' + event.key;
  
      if (keyCodePressed === 13) {
        // Figure out how to append a div with a
        // message into the coordinateWrapper
        const enterMessageDiv = document.createElement('div');
        enterMessageDiv.innerText = 'You pressed the enter key!';
        messageWrapper.appendChild(enterMessageDiv);
  
      } else if (keyCodePressed === 83) {
  
        const degreesRotation = Math.floor(Math.random() * 360);
  
        const pig = document.createElement('img');
        pig.className = 'pig';
        pig.src = `image/nina.png`;
        pig.style.left = `${coordinates.x}px`;
        pig.style.top = `${coordinates.y}px`;
        pig.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
        pig.style.transform = `rotate(${degreesRotation}deg)`;
        document.body.appendChild(pig);
  
      } 
      else if (keyCodePressed === 71) {
        audio.play();
      }

      else if (keyCodePressed === 68) {
  
        const degreesRotation = Math.floor(Math.random() * 360);
  
        const guinea = document.createElement('img');
        guinea.className = 'guinea';
        guinea.src = `image/quinn.png`;
        guinea.style.left = `${coordinates.x}px`;
        guinea.style.top = `${coordinates.y}px`;
        guinea.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
        guinea.style.transform = `rotate(${degreesRotation}deg)`;
        document.body.appendChild(guinea);
  
      }
      else if (keyCodePressed === 65) {
        // a for animated
        helpers.removeClass('animated');
        document.body.classList.add('animated');
  
      } else if (keyCodePressed === 70) {
        const degreesRotation = Math.floor(Math.random() * 180);
  
        // p for prompt phrase
        const phrase = document.createElement('h3');
        phrase.className = 'phrase';
        phrase.style.left = `${coordinates.x}px`;
        phrase.style.top = `${coordinates.y}px`;
        phrase.innerText = getPhrase();
        phrase.style.color = (`white`);
        phrase.style.transform = `rotate(${degreesRotation}deg)`;
        document.body.appendChild(phrase);
  
      } 
      
      counter++;
      // always keeps the message on top of other elements
      messageWrapper.style.zIndex = counter;
    }
  
    const getPhrase = function () {
      const exclamations = ['Wow!', 'Nina!', 'Quinn!'];
      const index = Math.floor(Math.random() * exclamations.length);
      return exclamations[index];
    }
  
    setInterval(function () {
      messageWrapper.style.color = helpers.generateRandomColorString(false);
    }, 1000);
  
    // This object contains helper functions
    const helpers = {
  
      removeClass: (cssClass) => {
        if (document.body.classList.contains(cssClass)) {
          document.body.classList.remove(cssClass);
        }
      },
  
      generateCoordinates: () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
      },
  
      // helpers.generateRandomColorString()
      generateRandomColorString: (alpha = true) => {
        // random RBG values
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        // fully opaque if `false` is passed to function
        let a = 1;
        if (alpha) {
          a = Math.random();
        }
  
        return `rgba(${r},${g},${b},${a})`;
      }
  
    }
  
  }());

