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
        url: 'https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc0tMRTg5YmpGTnVtaUE2Vk9QRkplYUNmOWRfP2U9UTBiRmhO.mp3',
        cover: 'https://i.loli.net/2021/07/28/NoQ192AMJSxPyz7.png',
        lrc: '../lrc/nolrc.lrc'
    }]
});