
          var canvas = document.getElementById('c');
          
          if (canvas.getContext) {
          var canvas = document.getElementById("c");
          var context = canvas.getContext("2d");
          context.font = 'Bold 30px Sans-Serif';
          context.strokeText('Hello world!', 40, 50);
          }
          else{
          alert('You need Safari or Firefox 1.5+ to see this demo.');
          }

//most of this code was from tutorialpoint, I simply edited some parameters

