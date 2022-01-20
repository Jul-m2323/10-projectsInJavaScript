const sounds = [
    "techno",
    "house",
];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
    });
    
    document.body.appendChild(btn);
})

function stopSongs () {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}