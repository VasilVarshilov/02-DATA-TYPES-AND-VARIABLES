function gramophone (band,album,song){
    let seconds = ((band.length*album.length)*song.length)/2;
    let rotations = Math.ceil(seconds/2.5);
    console.log(`The plate was rotated ${rotations} times.`);
    }