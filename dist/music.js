const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    listFolded: false,
    fixed: true,
    order: 'random',
    mutex: true,
    loop: 'all',
    preload: 'auto',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 290,
    audio: [
        {
            name: 'Sophie',
            artist: '欧瑞SoulCore / 奉天组',
            url: 'http://music.163.com/song/media/outer/url?id=1296137888.mp3',
            cover: 'http://p1.music.126.net/4TbJQmbyTfZUIJBbWLv_SQ==/109951163422889422.jpg',
        },
        {
            name: "这个年纪",
            artist: '齐一',
            url: 'http://music.163.com/song/media/outer/url?id=35476049.mp3',
            cover: 'http://p2.music.126.net/PkmlUOniYE7KWhBIH7gayg==/18427814881575887.jpg',
        },
        {
            name: "NCS Style Mix",
            artist: 'HOPE-T',
            url: 'http://music.163.com/song/media/outer/url?id=41653419.mp3',
            cover: 'http://p2.music.126.net/m2X-A0a-GbwtWsGP1-vKWw==/16663098719581987.jpg',
        },
        {
            name: "一丝不挂",
            artist: '陈奕迅',
            url: 'http://music.163.com/song/media/outer/url?id=64634.mp3',
            cover: 'http://p2.music.126.net/qE_9M-Ge5qwuk55IfkNO2g==/109951163200234557.jpg',
        },
        {
            name: "一直很安静",
            artist: '阿桑',
            url: 'http://music.163.com/song/media/outer/url?id=5260494.mp3',
            cover: 'http://p1.music.126.net/Zyji-kiWpjLF19CF0yHSlg==/1727332767246198.jpg',
        },
        {
            name: "雪落下的声音",
            artist: '林俊杰',
            url: '/music/雪落下的声音.mp3',
            cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M0000042DlJJ3QNC0P.jpg',
        },
        {
            name: "何须问",
            artist: '银临',
            url: '/music/何须问.mp3',
            cover: 'http://pic.xiami.net/images/album/img50/124/5c3c2796e8cf4_6241450_1547446166.jpg',
        },
        {
            name: "千里之外",
            artist: '周杰伦/费玉清',
            url: '/music/千里之外.mp3',
            cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg',
        },
        {
            name: "梦一场",
            artist: '李健',
            url: '/music/梦一场.mp3',
            cover: '//y.gtimg.cn/music/photo_new/T002R300x300M000001HDJU02YJuNQ.jpg',
        }
        
    ]
});