console.info('gift addon has active');

function handleClick(e) {
  // draw an animation at this mouse position
  if (document.getElementById('overlay')) {
    console.log('mouse clicked:', e.clientX, e.clientY);
    let img = document.createElement('img');
    img.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHhnNXdiN2I1ZjJqbGs0NHQ3cHcwNzcxZzE4ejR2ZGV4ZXFpMzdxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EBvbfxNEMJ2jHZ1WKx/giphy.gif';
    img.style.position = 'absolute';
    img.style.left = e.clientX - 50 + 'px';
    img.style.top = e.clientY - 100 + 'px';
    img.style.width = '100px';
    img.style.height = '100px';
    img.style.zIndex = 1000;

    if (document.getElementById('overlay').childNodes.length > 0) {
      document.getElementById('overlay').removeChild(document.getElementById('overlay').childNodes[0]);
    };
    document.getElementById('overlay').appendChild(img);

    // remove img after 5 seconds
    setTimeout(function () {
      document.getElementById('overlay').removeChild(document.getElementById('overlay').childNodes[0]);
    }, 3000);
  }
}

// add an event listener for mouse clicks
document.addEventListener('click', handleClick, false);

// if g is pressed 4 times toggle the feature
let gCount = 0;
document.addEventListener('keydown', function (e) {
  if (e.key === 'g') {
    gCount++;
    if (gCount === 4) {
      console.log('4 times clicked');
      if (document.getElementById('overlay')) {
        console.info('turning off gift feature');
        document.body.removeChild(document.getElementById('overlay'));
        gCount = 0;
      } else {
        // make a new overlay layer to show the animation
        console.info('turning ON gift feature');
        let overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = 999;
        if (!document.getElementById('overlay')) {
          document.body.appendChild(overlay);
        }
        gCount = 0;
      }
    }
  }
});
