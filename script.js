var dino = document.getElementById('dino');
var game_over = false;
var coin_collected;
var score_num = 0;
var up_b = document.getElementById('up_b');
var cactus = document.querySelector('#c0');
var cactus1 = document.querySelector('#c1');
var cactus2 = document.querySelector('#c2');
var coin = document.querySelector('#co3');
var coin1 = document.querySelector('#co1');
var coin2 = document.querySelector('#co2');
var coin3 = document.querySelector('#co4');
var revive = document.querySelector('#revive');
var no_revive = document.querySelector('#no_revive');
var yes_revive = document.querySelector('#yes_revive');
var revive_time = 0;
var coin_collected_num = 0;

var ran_num0;
var ran_num1;
var ran_num2;
var ran_num3;
var ran_num4;
var ran_num5;
var ran_num6;

var sc_nu = document.getElementById('sc_nu');
var hsc_nu = document.getElementById('hsc_nu');
var st_but = document.getElementById('st_but');
var st_interface = document.getElementById('st');
var pause = document.getElementById('pause')
var scoreint;
var pause_num = 1;
var events_on_collide_interwal;


hsc_nu.innerText = localStorage.getItem('high_score')
total_c_num.innerText = localStorage.getItem('totalcoins');





//Score running
//Score running
//Score running

function st_game_score() {

  scoreint = setInterval(() => {
    score_num = score_num + 1;
    sc_nu.innerText = score_num;
    if (score_num > hsc_nu.innerText) {

      hsc_nu.innerText = score_num
      h_score.classList.add('high')
    }
  }, 1)

}



// events on collision
// events on collision
// events on collision

function fun_event_collision() {
  events_on_collide_interwal = setInterval(() => {
    let dt = dino.getBoundingClientRect().top;
    let db = dino.getBoundingClientRect().bottom;
    let dl = (dino.getBoundingClientRect().left) + 5;
    let dr = (dino.getBoundingClientRect().right) - 12;
    let ct = cactus.getBoundingClientRect().top;
    let cr = cactus.getBoundingClientRect().right;
    let cl = cactus.getBoundingClientRect().left;


    if (dl < cl && dr >= cl && db >= ct) {
      game_over = true
    }
    if (dl < cr && dr >= cr && db >= ct) {
      game_over = true
    }




    let ct1 = cactus1.getBoundingClientRect().top;
    let cr1 = cactus1.getBoundingClientRect().right;
    let cl1 = cactus1.getBoundingClientRect().left;


    if (dl < cl1 && dr >= cl1 && db >= ct1) {
      game_over = true
    }
    if (dl < cr1 && dr >= cr1 && db >= ct1) {
      game_over = true
    }




    let ct2 = cactus2.getBoundingClientRect().top;
    let cr2 = cactus2.getBoundingClientRect().right;
    let cl2 = cactus2.getBoundingClientRect().left;


    if (dl < cl2 && dr >= cl2 && db >= ct2) {
      game_over = true
    }
    if (dl < cr2 && dr >= cr2 && db >= ct2) {
      game_over = true
    }




    coin_collected = false;


    let cot = coin.getBoundingClientRect().top;
    let cor = coin.getBoundingClientRect().right;
    let col = coin.getBoundingClientRect().left;
    let cob = coin.getBoundingClientRect().bottom;


    if (dl < col && dr >= col && db >= cot && dt <= cob) {
      console.log(1);
      coin_collected = true;
      ran_num3 = Math.round(Math.random() * (9 - 0) + 0);
      coin.style.animation = 'none';
      coin.offsetHeight; /* trigger reflow */
      coin.style.animation = null
      coin.style = 'animation-delay: ' + ran_num3 + 's; display: flex';
    }
    if (dl < cor && dr >= cor && db >= cot && dt <= cob) {
      console.log(2)
      coin_collected = true;
      ran_num3 = Math.round(Math.random() * (9 - 0) + 0);
      coin.style.animation = 'none';
      coin.offsetHeight; /* trigger reflow */
      coin.style.animation = null
      coin.style = 'animation-delay: ' + ran_num3 + 's; display: flex';
    }



    let cot1 = coin1.getBoundingClientRect().top;
    let cor1 = coin1.getBoundingClientRect().right;
    let col1 = coin1.getBoundingClientRect().left;
    let cob1 = coin1.getBoundingClientRect().bottom;


    if (dl < col1 && dr >= col1 && db >= cot1 && dt <= cob1) {
      console.log(3)
      coin_collected = true;
      ran_num4 = Math.round(Math.random() * (13 - 9) + 9);
      coin1.style.animation = 'none';
      coin1.offsetHeight; /* trigger reflow */
      coin1.style.animation = null
      coin1.style = 'animation-delay: ' + ran_num4 + 's; display: flex';
    }
    if (dl < cor1 && dr >= cor1 && db >= cot1 && dt <= cob1) {
      console.log(4)
      coin_collected = true;
      ran_num4 = Math.round(Math.random() * (13 - 9) + 9);
      coin1.style.animation = 'none';
      coin1.offsetHeight; /* trigger reflow */
      coin1.style.animation = null
      coin1.style = 'animation-delay: ' + ran_num4 + 's; display: flex';
    }




    let cot2 = coin2.getBoundingClientRect().top;
    let cor2 = coin2.getBoundingClientRect().right;
    let col2 = coin2.getBoundingClientRect().left;
    let cob2 = coin2.getBoundingClientRect().bottom;


    if (dl < col2 && dr >= col2 && db >= cot2 && dt <= cob2) {
      console.log(5)
      coin_collected = true;
      ran_num5 = Math.round(Math.random() * (15 - 6) + 6);
      coin2.style.animation = 'none';
      coin2.offsetHeight; /* trigger reflow */
      coin2.style.animation = null
      coin2.style = 'animation-delay: ' + ran_num5 + 's; display: flex';
    }
    if (dl < cor2 && dr >= cor2 && db >= cot2 && dt <= cob2) {
      console.log(6)
      coin_collected = true;
      ran_num5 = Math.round(Math.random() * (15 - 6) + 6);
      coin2.style.animation = 'none';
      coin2.offsetHeight; /* trigger reflow */
      coin2.style.animation = null
      coin2.style = 'animation-delay: ' + ran_num5 + 's; display: flex';
    }



    let cot3 = coin3.getBoundingClientRect().top;
    let cor3 = coin3.getBoundingClientRect().right;
    let col3 = coin3.getBoundingClientRect().left;
    let cob3 = coin3.getBoundingClientRect().bottom;


    if (dl < col3 && dr >= col3 && db >= cot3 && dt <= cob3) {
      console.log(7)
      coin_collected = true;
      ran_num6 = Math.round(Math.random() * (6 - 0) + 0);
      coin3.style.animation = 'none';
      coin3.offsetHeight; /* trigger reflow */
      coin3.style.animation = null
      coin3.style = 'animation-delay: ' + ran_num6 + 's; display: flex';
    }
    if (dl < cor3 && dr >= cor3 && db >= cot3 && dt <= cob3) {
      console.log(8);
      coin_collected = true;
      ran_num6 = Math.round(Math.random() * (6 - 0) + 0);
      coin3.style.animation = 'none';
      coin3.offsetHeight; /* trigger reflow */
      coin3.style.animation = null
      coin3.style = 'animation-delay: ' + ran_num6 + 's; display: flex';
    }


    if (coin_collected == true) {
      coin_sound.loop = false
      coin_sound.play()
      coin_collected_num = coin_collected_num + 1
      coin_count_num.innerText = coin_collected_num;
    }





    if (game_over == true) {
      revive_time = revive_time + 1;
      revive_coin.innerText = revive_time * 6;
      cv.loop = false;
      cv.play()
      dino.style.filter = 'drop-shadow(0px 0px 4px red)';
      up_b.setAttribute('disabled', '');
      pause.setAttribute('disabled', '');
      fun_gamepause();
      setTimeout(() => {
        revive.style.display = 'block'
      }, 500)
    }



  }, 10)

}



// revive setup 
// revive setup 
// revive setup 

function fun_gamerevive_setup() {
  revive.style.display = 'none'
  alert('You are revived')
  up_b.removeAttribute('disabled')
  pause.removeAttribute('disabled')
  dino.style.filter = 'none';

  Array.from(document.getElementsByClassName('cactus')).forEach((e) => {
    e.style.animation = 'none';
    e.offsetHeight; /* trigger reflow */
    e.style.animation = null
  })
  /*cactus.style.animation = 'none';
  cactus.offsetHeight; /* trigger reflow */
  /*cactus.style.animation = null

  cactus1.style.animation = 'none';
  cactus1.offsetHeight; /* trigger reflow */
  /*cactus1.style.animation = null

   cactus2.style.animation = 'none';
   cactus2.offsetHeight; /* trigger reflow */
  /* cactus2.style.animation = null
   */
  game_over = false;

  setTimeout(() => {
    fun_gameresume();
  }, 500)


}

// game over setup
// game over setup
// game over setup

function fun_gameover() {
  over.style = 'display: flex;'
  over.appendChild(score);
  score.style = 'color: Yellow; text-shadow: 0px 0px 5px red';
  over.appendChild(h_score);
  up_b.setAttribute('disabled', '')
  total_c_num.innerText = Number(total_c_num.innerText) + coin_collected_num;
  localStorage.setItem('totalcoins', total_c_num.innerText);
  localStorage.setItem('high_score', hsc_nu.innerText);
  revive.style.display = 'none'
}


// game pause setup
// game pause setup
// game pause setup


function fun_gamepause() {
  Array.from(document.getElementsByClassName('coin')).forEach((r) => {
    r.classList.add('y')
  })

  Array.from(document.getElementsByClassName('cactus')).forEach((r) => {
    r.classList.add('y')
  })
  Array.from(document.getElementsByClassName('grass')).forEach((r) => {
    r.classList.add('y')
  })
  dino.src = 'over1.png';
  clearInterval(scoreint);
  up_b.setAttribute('disabled', '')
  clearInterval(events_on_collide_interwal)
}




// game resume setup
// game resume setup
// game resume setup


function fun_gameresume() {
  Array.from(document.getElementsByClassName('coin')).forEach((r) => {
    r.classList.remove('y')
  })
  Array.from(document.getElementsByClassName('cactus')).forEach((r) => {
    r.classList.remove('y')
  })
  Array.from(document.getElementsByClassName('grass')).forEach((r) => {
    r.classList.remove('y')
  })
  st_game_score();
  coin_collected = false;
  dino.src = 'tiger.gif';

  fun_event_collision();
  coin_collected = false;
}

// animation delay
// animation delay
// animation delay


function fun_ran_animdelay(a) {
  this.style.animation = 'none';
  this.offsetHeight; /* trigger reflow */
  this.style.animation = null
  this.style = 'animation-delay: ' + a + 's; display: flex';
}





st_but.addEventListener('click', () => {

  st_interface.style.display = 'none'
  up_b.removeAttribute('disabled');
  cactus.style = ' display: flex';
  cactus1.style = ' display: flex';
  cactus2.style = ' display: flex';
  coin.style = ' display: flex';
  coin1.style = ' display: flex';
  coin2.style = ' display: flex';
  coin3.style = ' display: flex';
  st_game_score();
  fun_event_collision();
  pause.removeAttribute('disabled')

})





up_b.addEventListener('click', () => {

  dino.classList.add('animate');
  up_b.setAttribute('disabled', '');
  up_sound.play();
  setTimeout(() => {
    dino.classList.remove('animate')
    up_b.removeAttribute('disabled')
  }, 500)

})






no_revive.addEventListener('click', () => {

  fun_gameover();

})


yes_revive.addEventListener('click', () => {

  if (coin_collected_num >= 6 * revive_time) {
    coin_collected_num = coin_collected_num - 6 * revive_time;
    coin_count_num.innerText = coin_collected_num;
    fun_gamerevive_setup();
  }

  else if (Number(total_c_num.innerText) + coin_collected_num >= 6 * revive_time) {
    total_c_num.innerText = (Number(total_c_num.innerText) + coin_collected_num) - 6 * revive_time;
    localStorage.setItem('totalcoins', total_c_num.innerText);
    coin_collected_num = 0;
    coin_count_num.innerText = 0;
    fun_gamerevive_setup();
  }

  else {
    alert('You have not enough coins');
    fun_gameover()
  }

})









//Cactus random delay in animation



cactus.addEventListener('animationend', () => {
  console.log('cactus')
  ran_num0 = Math.round(Math.random() * (4 - 1) + 1);

  cactus.style.animation = 'none';
  cactus.offsetHeight; /* trigger reflow */
  cactus.style.animation = null
  cactus.style = 'animation-delay: ' + ran_num0 + 's; display: flex';

})

cactus1.addEventListener('animationend', () => {
  console.log('cactus1')

  ran_num1 = Math.round(Math.random() * (4 - 1) + 1);
  cactus1.style.animation = 'none';
  cactus1.offsetHeight; /* trigger reflow */
  cactus1.style.animation = null
  cactus1.style = 'animation-delay: ' + ran_num1 + 's; display: flex';
})

cactus2.addEventListener('animationend', () => {
  console.log('cactus2')

  ran_num2 = Math.round(Math.random() * (4 - 0) + 0);
  cactus2.style.animation = 'none';
  cactus2.offsetHeight; /* trigger reflow */
  cactus2.style.animation = null
  cactus2.style = 'animation-delay: ' + ran_num2 + 's; display: flex';
})





// coin random delay in animation

coin.addEventListener('animationend', () => {
  ran_num3 = Math.round(Math.random() * (9 - 0) + 0);
  coin.style.animation = 'none';
  coin.offsetHeight; /* trigger reflow */
  coin.style.animation = null
  coin.style = 'animation-delay: ' + ran_num3 + 's; display: flex';
})


coin1.addEventListener('animationend', () => {
  ran_num4 = Math.round(Math.random() * (13 - 9) + 9);
  coin1.style.animation = 'none';
  coin1.offsetHeight; /* trigger reflow */
  coin1.style.animation = null
  coin1.style = 'animation-delay: ' + ran_num4 + 's; display: flex';
})



coin2.addEventListener('animationend', () => {
  ran_num5 = Math.round(Math.random() * (15 - 6) + 6);
  coin2.style.animation = 'none';
  coin2.offsetHeight; /* trigger reflow */
  coin2.style.animation = null
  coin2.style = 'animation-delay: ' + ran_num5 + 's; display: flex';
})


coin3.addEventListener('animationend', () => {
  ran_num6 = Math.round(Math.random() * (6 - 0) + 0);
  coin3.style.animation = 'none';
  coin3.offsetHeight; /* trigger reflow */
  coin3.style.animation = null
  coin3.style = 'animation-delay: ' + ran_num6 + 's; display: flex';
})





// game pause resume button

pause.addEventListener('click', () => {
  if (pause_num == 1) {
    fun_gamepause();
    pause_num = 0;
    up_b.setAttribute('disabled', '')
    pause.innerText = '▶️';
    document.querySelector('.pause_display').style.display = 'flex';
  }
  else {
    fun_gameresume()
    pause_num = 1;
    document.querySelector('.pause_display').style.display = 'none';
    up_b.removeAttribute('disabled')
    pause.innerText = '⏸️'
  }
})




var replay = document.getElementById('replay')

replay.addEventListener('click', () => {

  over.style.display = 'none';
  dino.src = 'tiger.gif';
  dino.style.filter = 'none';
  st_interface.style.display = 'flex';
game_over=false;
coin_collected_num=0;
coin_count_num.innerText=0;
revive_time=0;
score_num=0;
    sc_nu.innerText = score_num;

document.body.appendChild(score);
document.body.appendChild(h_score)

  Array.from(document.getElementsByClassName('cactus')).forEach((e) => {
    e.classList.remove('y');
    e.style.display = 'none'
  })
  Array.from(document.getElementsByClassName('coin')).forEach((e) => {
    e.classList.remove('y');
    e.style.display = 'none';
  })
  Array.from(document.getElementsByClassName('grass')).forEach((e) => {
    e.classList.remove('y');
  })
})
