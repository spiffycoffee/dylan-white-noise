var playlist;
var current = 1;
var clips = 15;

function initPlayer(){
    $('audio')[0].volume = .2;

    muteButton = $('#mute-button')[0];
    volumeBar = $('#volume-bar')[0];

    muteButton.addEventListener("click", function() {
      if ($('audio')[0].muted == false) {
        // Mute the video
        $('audio')[0].muted = true;
        volumeBar.value = 0;
        $($('.dylan-lol')).removeClass('visible');
        $('#val-0').addClass('visible');

        // Update the button text
        muteButton.src = "Speaker_Icon.svg";
      } else {
        // Unmute the video
        $('audio')[0].muted = false;

        // Update the button text
        muteButton.src = "Mute_Icon.svg";
      }
    });

    volumeBar.addEventListener("change", function() {
      // Update the video volume
      $('audio')[0].volume = volumeBar.value / 100;

      console.log(volumeBar.value);

      if(volumeBar.value > 0 && volumeBar.value < 10) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-0').addClass('visible');
      }
      if(volumeBar.value >= 10 && volumeBar.value < 20) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-1').addClass('visible');
      }
      if(volumeBar.value >= 20 && volumeBar.value < 30) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-2').addClass('visible');
      }
      if(volumeBar.value >= 30 && volumeBar.value < 40) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-3').addClass('visible');
      }
      if(volumeBar.value >= 40 && volumeBar.value < 50) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-4').addClass('visible');
      }
      if(volumeBar.value >= 50 && volumeBar.value < 60) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-5').addClass('visible');
      }
      if(volumeBar.value >= 60 && volumeBar.value < 70) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-6').addClass('visible');
      }
      if(volumeBar.value >= 70 && volumeBar.value < 80) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-7').addClass('visible');
      }
      if(volumeBar.value >= 80 && volumeBar.value < 90) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-8').addClass('visible');
      }
      if(volumeBar.value >= 90) {
        $($('.dylan-lol')).removeClass('visible');
        $('#val-9').addClass('visible');
      }
    });
}

function initPlaylist() {
    audio = event.target;
    current++;
    if(current == clips) {
        current = 1;
        audio.src = 'dylan1.m4a';
    }
    else {
        audio.src = 'dylan'+current+'.m4a';
    }
    audio.load();
    audio.play();
}
