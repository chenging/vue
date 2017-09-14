//SPA主页
import Index from '../components/index.vue';
//发现音乐(一级路由)
import FindMusicIndex from '../components/findMusic/findMusicIndex.vue';
//我的音乐(一级路由)
import MyMusicIndex from '../components/myMusic/myMusicIndex.vue';
//朋友(一级路由)
import FriendsIndex from '../components/friends/friendsIndex.vue';
//用户中心(一级路由)
import UserIndex from '../components/user/userIndex.vue';
//播放界面(普通歌曲)
import PlayView from '../components/playView/playView.vue';
//FM播放界面
import FmPlayView from '../components/playView/fmPlayView.vue';
//音乐频道(二级路由)
import MusicIndex from '../components/findMusic/music/musicIndex.vue';
//视频频道(二级路由)
import VideoIndex from '../components/findMusic/video/videoIndex.vue';
//电台频道(二级路由)
import RadioIndex from '../components/findMusic/radioStation/radioIndex.vue';


export default [
    {
        path: '',
        component: Index,
        redirect:'findMusicIndex/myMusicIndex',
        children: [
            {
                path: '',
                component: FindMusicIndex,//默认一级路由
                children:[
                    {
                        path:'/',
                        redirect:'/findMusicIndex/musicIndex',
                        component:MusicIndex//默认二级路由
                    },
                    {
                        path:'/findMusicIndex/musicIndex',
                        component:MusicIndex
                    },
                    {
                        path:'/findMusicIndex/videoIndex',
                        component:VideoIndex
                    },{
                        path:'/findMusicIndex/radioIndex',
                        component:RadioIndex
                    }
                ]
            },
            {
                path:'/myMusicIndex',
                component:MyMusicIndex,
                children:[]
            },
            {
                path:'/friendsIndex',
                component:FriendsIndex,
                children:[]
            },
            {
                path:'/userIndex',
                component:UserIndex,
                children:[]
            },
            {
                path:'/playView',
                name:'playView',
                component:PlayView,
                children:[]
            },
            {
                path:'/fmPlayView',
                name:'fmPlayView',
                component:FmPlayView

            }
        ]
    }
]