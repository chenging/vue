//连接mongodb数据库并写入初始数据
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {

        userId: String,
        username: String,
        phone: String,
        password: String,
        sex:String,
        birth:String,
        portrait:String,
        background:String,
        qrcode:String,
        area:String,
        colleage:String,
        introduce:String

    });
const userModel = mongoose.model('user', userSchema);

//存储用户数据
userModel.find({}, { _id: 0 }, function (err, doc) {
    if (err) {
        console.log(err);
    } else {
        //判断是否已经写入原始数据
        if (doc.length === 0) {
            userModel.create(
                [
                    {
                        userId: '1',
                        username: 'chenging',
                        phone: '18888888888',
                        password: '123456',
                        sex:'',
                        birth:'',
                        portrait:'',
                        background:'',
                        qrcode:'',
                        area:'',
                        colleage:'',
                        introduce:''

                    },
                    {
                        userId:'2',
                        username:'admin',
                        phone:'13866668888',
                        password:'654321',
                        sex:'',
                        birth:'',
                        portrait:'',
                        background:'',
                        qrcode:'',
                        area:'',
                        colleage:'',
                        introduce:''
                    }
                ], function (err, docs) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('数据初始化成功,当前存入用户数量为：' + docs.length);
                    }
                })
        } else {
            console.log('数据库已存在初始数据，当前不再进行写入操作！');
        }
    }
})
exports.userModel = userModel;



