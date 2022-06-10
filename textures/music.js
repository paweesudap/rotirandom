let musicarray = ['Ma-boy.ogg']; 
    
    let randomButton = document.getElementById('random');
    let outm = document.getElementById('outm');
    
    randomButton.addEventListener('click', () => {
        let n = musicarray.length;
        let indexm = Math.floor(Math.random()*n);
        let lyricm = musicarray[index];
        outm.innerHTML = lyric;
    })