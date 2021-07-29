const ap5 = new APlayer({
    element: document.getElementById('player5'),
    mini: false,
    autoplay: false,
    lrcType: 3,
    mutex: true,
    theme: '#e9e9e9',
    listFolded: false,
    listMaxHeight: 80,
    // 封面来自https://sm.ms网站图床
    // url来自icloud共享
    audio: [{
        name: 'Take the Time',
        artist: 'Robin Spielberg',
        url: 'https://o67c9q.bn.files.1drv.com/y4m1LRZeZC66imfZmUExSMasp0A6ZgGiWYw4sNinKJ3-jYWAMGWiDtRz7Ayi41bTcVKBMBJ8P04TQwD44kBUvzbMdSzFwDiHO40r3zdlssRaIW8JRbAhBtTb3HA-2tosVTVVhgaTy9sKHBcxuAvE67lqKGPNcTOBADdrWktO2rqNDfg3WlDjLykFbSnP5R-nQytJaFssrCvOJQTTZP22CoIng',
        cover: 'https://i.loli.net/2021/07/28/NoQ192AMJSxPyz7.png',
        lrc: '../lrc/nolrc.lrc'
    }]
});