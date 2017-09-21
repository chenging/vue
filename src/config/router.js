//SPA主页
import Index from '../components/index.vue';
//一级路由
import FindMusicIndex from '../components/findMusic/findMusicIndex.vue';
import MyMusicIndex from '../components/myMusic/myMusicIndex.vue';
import FriendsIndex from '../components/friends/friendsIndex.vue';
import UserIndex from '../components/user/userIndex.vue';
import Login from '../components/user/login.vue';
import TelephoneLogin from '../components/user/telephoneLogin.vue';
import PlayView from '../components/playView/playView.vue';
import FmPlayView from '../components/playView/fmPlayView.vue';
import RecommendIndex from '../components/dayRecommend/recommendIndex.vue';
import SongSheet from '../components/dayRecommend/songSheet.vue';
import Ranking from '../components/dayRecommend/ranking.vue';
import AddFollow from '../components/friends/addFollow.vue';
import EditData from '../components/user/editData.vue';
import Register from '../components/user/register.vue';
//二级路由

import MusicIndex from '../components/findMusic/music/musicIndex.vue';
import VideoIndex from '../components/findMusic/video/videoIndex.vue';
import RadioIndex from '../components/findMusic/radioStation/radioIndex.vue';


export default [
    {
        path: '',
        components: {
            default:Index
        },
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
                path:'/addFollow',
                component:AddFollow,
                name:'addFollow',
                children:[]
            },
            {
                path:'/userIndex',
                component:UserIndex,
                name:'userIndex',
                children:[]
            },
            {
                path:'/recommendIndex',
                component:RecommendIndex,
                name:'recommendIndex',
                children:[]
            },
            {
                path:'/songSheet',
                component:SongSheet,
                name:'songSheet',
                children:[]
            },
            {
                path:'/ranking',
                component:Ranking,
                name:'ranking',
                children:[]
            }
        ]
    },
    {
        path:'/playView',
        name:'playView',
        components:{
            default:PlayView
        },
        children:[]
    },
    {
        path:'/login',
        component:Login,
        name:'login',
        children:[]
    },
    {
        path:'/telephoneLogin',
        component:TelephoneLogin,
        name:'telephoneLogin'
    },
    {
        path:'/register',
        component:Register,
        name:'register'
    },
    {
        path:'/fmPlayView',
        name:'fmPlayView',
        component:FmPlayView

    },
    {
        path:'/editData',
        name:'editData',
        component:EditData
    }
]