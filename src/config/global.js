/*
参数说明：
    AudioPlayStatus：音频播放状态，默认为未播放；
    isAudioSrc：是否已注入音频播放链接，默认为未注入；
    MediePlayStatus：视频播放状态，默认为未播放；
    isMedioSrc：是否已注入视频播放链接，默认为未注入
    isDrawRhythm：是否已绘制过频率线
    index:当前歌曲索引值
    isCollected:是否已收藏,
    musicList:音乐列表,
    videoList:视频列表
*/
global.GlobalData={
    AudioPlayStatus:false,
    isAudioSrc:false,
    MediePlayStatus:false,
    isMedioSrc:false,
    isDrawRhythm:false,
    index:0,
    isCollected:false,
    musicList:[
        {
            name:'测试歌曲1',
            src:'http://up.xzdown.com/mp3/2017-09-14/1505390954.mp3',
            id:'1',
            cover:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1033321943,3170513439&fm=27&gp=0.jpg'
        },
        {
            name:'测试歌曲2',
            src:'http://up.xzdown.com/mp3/2017-09-14/1505386184.mp3',
            id:'2',
            cover:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=407910219,178769022&fm=27&gp=0.jpg'
        },
        {
            name:'测试歌曲3',
            src:'http://up.xzdown.com/mp3/2017-09-14/1505383763.mp3',
            id:'3',
            cover:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2733977332,1278110951&fm=27&gp=0.jpg'
        },
        {
            name:'测试歌曲4',
            src:'http://up.xzdown.com/mp3/2017-09-14/1505383305.mp3',
            id:'4',
            cover:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025450187,774551560&fm=27&gp=0.jpg'
        },
        {
            name:'测试歌曲5',
            src:'http://up.xzdown.com/mp3/2017-09-14/1505367381.mp3',
            id:'5',
            cover:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3792050361,611396766&fm=27&gp=0.jpg'
        },
        {
            name:'测试歌曲6',
            src:'http://up.xzdown.com/mp3/2017-09-14/1505367381.mp3',
            id:'6',
            cover:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=746478563,2459179995&fm=27&gp=0.jpg'
        }
    ],
    videoList:[
        {
            name:'测试视频1',
            src:'http://121.29.55.235/696E5505B23877A61AC85DF4/03000A010059C2A0DB0CF600000001CF3056AF-8FE5-347F-1C88-9A5AEE164919.mp4?ccode=0502&duration=222&expire=18000&psid=9d0b39a5a1b7240400458d8fbbc22a97&ups_client_netip=112.193.146.105&ups_ts=1506050122&ups_userid=&utid=iDJFEgYEV18CAavVDGaBNqu%2F&vid=XMjQ4MDkzNDE0MA%3D%3D&vkey=Ab66a3843d561b4b5347526ea952f6d56',
            portrait:'http://img5.imgtn.bdimg.com/it/u=3303490552,2643456935&fm=27&gp=0.jpg',
            username:'测试名字1'
        },
        // {
        //     name:'测试视频2',
        //     src:'http://k.youku.com/player/getFlvPath/sid/0505721280009121bd429/st/mp4/fileid/03000A010059BF365A9E590954C352854B4EDC-6906-312E-89B1-0FCACCF5EB76?k=b5321501fe7b2b73261fe90f&hd=0&myp=0&ts=223&ctype=12&ev=1&token=0549&oip=1891734121&ep=cieUH06PV8wI5SPfgT8bZn62cHUGXP4J9h%2BF8NJjALshQZrJmjjUtpTFS%2FZCH%2FwdASEDEuP0r6Lj%0AHzRnYfZKqW4Q3E%2BqTPro94Li5a0lt%2BFzFW8zB7%2FQslSeRjT4&ccode=0502&duration=222&expire=18000&psid=13d65168f536ab9ac0a5bd60b3723516&ups_client_netip=112.193.146.105&ups_ts=1505721279&ups_userid=&utid=iDJFEgYEV18CAavVDGaBNqu%2F&vid=XMzAzMDA5NjE0NA%3D%3D&vkey=A34909810d8769725d0516754622cd37c',
        //     portrait:'http://img5.imgtn.bdimg.com/it/u=1783741574,2767026355&fm=27&gp=0.jpg',
        //     username:'测试名字2'
        // },
        // {
        //     name:'测试视频3',
        //     src:'http://k.youku.com/player/getFlvPath/sid/05057213957941232274f/st/mp4/fileid/030011010059BCB1201B4304EC83B4E8A48F21-F97A-EB9D-10DC-D95665D46977?k=7392ec73a354b4b8261fe90f&hd=0&myp=0&ts=228&ctype=12&ev=1&token=0524&oip=1891734121&ep=cieUH06PV80J4CTWjD8bZC7gc3NZXP4J9h%2BEgNJjALshQZrM6z%2FTx5zCSvxCEoxqeiF0FJ752tTv%0AHEIVYYZKrhkQqjyhTfrh%2FoSQ5dlawZYGY20ydMTQs1SeRjL1&ccode=0502&duration=228&expire=18000&psid=a896b97fe452a42468fd3bdd821d500f&ups_client_netip=112.193.146.105&ups_ts=1505721395&ups_userid=&utid=iDJFEgYEV18CAavVDGaBNqu%2F&vid=XMzAyNjgyMTMwOA%3D%3D&vkey=A5d02c3241e29df4e0e68757926a250f2',
        //     portrait:'http://img0.imgtn.bdimg.com/it/u=4264003133,22410145&fm=27&gp=0.jpg',
        //     username:'测试名字3'
        // },
        // {
        //     name:'测试视频4',
        //     src:'http://k.youku.com/player/getFlvPath/sid/050572154558512c431ef/st/mp4/fileid/03000A010059BBC89D204F00BE01C0ACC79E95-6E2A-65F7-24F1-183FA236C57B?k=05135af114fd776a282cacaf&hd=0&myp=0&ts=291&ctype=12&ev=1&token=0529&oip=1891734121&ep=cieUH06PV8sE4CbXjT8bNCjhdSJZXP4J9h%2BF8NJjALshQZrN6jbYs5%2BwSolCFotsciN1EJqC2Nfu%0AH0kRYfY2qxkQ2UvePvri%2Bobi5axbx%2BZxZBowAcjQxlSeRjL4&ccode=0502&duration=290&expire=18000&psid=dcf652c0a5e85347ac5d5585439f97da&ups_client_netip=112.193.146.105&ups_ts=1505721545&ups_userid=&utid=iDJFEgYEV18CAavVDGaBNqu%2F&vid=XMzAxOTUyMjgxMg%3D%3D&vkey=A3bd89dc75521e772d5ca94701c8822e1',
        //     portrait:'http://img0.imgtn.bdimg.com/it/u=1971117974,1313741860&fm=27&gp=0.jpg',
        //     username:'测试名字4'
        // }
    ],
    loading:function(){

    }
}