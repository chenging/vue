//连接mongodb数据库并写入初始数据
const mongoose = require('mongoose');
mongoose.set('debug', true);
const db = mongoose.connect('mongodb://localhost/wangyiMusic');
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
//定义数据类型
//音乐列表
const musicSchema = new mongoose.Schema(
    {

        name: String,
        src: String,
        id: String,
        cover: String,
        lyric:String,
        singer:String

    });
const musicModel = mongoose.model('music', musicSchema);
//将数据存储到music数据库
musicModel.find({}, { _id: 0 }, function (err, doc) {
    if (err) {
        console.log(err);
    } else {
        //判断是否已经写入原始数据
        if (doc.length === 0) {
            musicModel.create(
                [
                    {
                        name: '测试歌曲1',
                        src: 'http://up.xzdown.com/mp3/2017-09-14/1505390954.mp3',
                        id: '1',
                        cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1033321943,3170513439&fm=27&gp=0.jpg',
                        lyric:'',
                        singer:'演唱者1'
                    },
                    {
                        name: '测试歌曲2',
                        src: 'http://up.xzdown.com/mp3/2017-09-14/1505386184.mp3',
                        id: '2',
                        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=407910219,178769022&fm=27&gp=0.jpg',
                        lyric:'',
                        singer:'演唱者2'
                    },
                    {
                        name: '测试歌曲3',
                        src: 'http://up.xzdown.com/mp3/2017-09-14/1505383763.mp3',
                        id: '3',
                        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2733977332,1278110951&fm=27&gp=0.jpg',
                        lyric:'',
                        singer:'演唱者3'
                    },
                    {
                        name: '测试歌曲4',
                        src: 'http://up.xzdown.com/mp3/2017-09-14/1505383305.mp3',
                        id: '4',
                        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3025450187,774551560&fm=27&gp=0.jpg',
                        lyric:'',
                        singer:'演唱者4'
                    },
                    {
                        name: '测试歌曲5',
                        src: 'http://up.xzdown.com/mp3/2017-09-14/1505367381.mp3',
                        id: '5',
                        cover: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3792050361,611396766&fm=27&gp=0.jpg',
                        lyric:'',
                        singer:'演唱者5'
                    },
                    {
                        name: '测试歌曲6',
                        src: 'http://up.xzdown.com/mp3/2017-09-14/1505367381.mp3',
                        id: '6',
                        cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=746478563,2459179995&fm=27&gp=0.jpg',
                        lyric:'',
                        singer:'演唱者6'
                    }
                ], function (err, docs) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('数据初始化成功,当前存入音乐数量为：' + docs.length);
                    }
                })
        } else {
            console.log('数据库已存在初始数据，当前不再进行写入操作！');
        }
    }
})
exports.musicModel = musicModel;



