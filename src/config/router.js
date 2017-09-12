import Index from '../components/index.vue';
//音乐频道
import MusicIndex from '../components/music/musicIndex.vue';
//视频频道
import VideoIndex from '../components/video/videoIndex.vue';
//电台频道
import RadioIndex from '../components/radioStation/radioIndex.vue';
export default[
    {
        path:'',
        component:Index,
        children:[
            {path:'/musicIndex',name:'musicIndex',component:MusicIndex},
            {path:'/videoIndex',name:'videoIndex',component:VideoIndex},
            {path:'/radioIndex',name:'radioIndex',component:RadioIndex}
        ]
    }
]