const musicModel = require('./dataBase/musicDB').musicModel;
const userModel = require('./dataBase/userDB').userModel;
//更新并操作数据库函数
/*
    参数说明:
    objModel:需操作的是数据库模型,
    method:操作数据库方法,值为'find','findOne','update'等,
    conditions:查询条件
    options:返回条件
*/
const readWrite = (objModel, method, conditions = {}, options = {}, ...rest) => {
    return new Promise((resolve, reject) => {
        objModel.update(conditions, { multi: true }, (err) => {
            if (err) {
                console.log(err);
            } else {
                if (options != {}) {
                    objModel[method](conditions, options, function (err, doc) {
                        if (err) {
                            console.log(err);
                        } else {
                            resolve(doc);
                        }
                    })
                } else {
                    objModel[method](conditions, function (err, doc) {
                        if (err) {
                            console.log(err);
                        } else {
                            resolve(doc);
                        }
                    })
                }

            }
        });
    });

};
//使用node的koa框架创建服务器
const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa-cors');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
//使用koa-cors处理跨域请求
app.use(cors());
//处理post请求
app.use(bodyParser());
//打印当前请求的url及请求方式
app.use(async (ctx, next) => {
    console.log(`当前请求方式为：${ctx.request.method},请求的url为：${ctx.request.url}`);
    await next();
});
//处理音乐列表请求
router.post('/musicList', async (ctx, next) => {
    const resData = await readWrite(musicModel, 'find', {}, { _id: 0 });
    //客户端请求数据后，若需查询数据库，则用异步回调将查询结果返回客户端
    if (resData.length !== 0) {
        ctx.response.body = {
            status: '200',
            msg: 'ok',
            data: resData
        }
    } else {
        ctx.response.body = {
            status: '401',
            msg: '未查询到数据',
            data: ''
        }
    }

});
//处理用户登录请求，先验证手机号是否存在，再查询密码
router.post('/login', async (ctx, next) => {
    const phone = ctx.request.body.phone;
    const password = ctx.request.body.password;
    if (phone == null || password == null) {
        ctx.response.body = {
            status: '403',
            msg: '参数错误',
            data: ''
        }
    } else {
        const isRegister = await readWrite(userModel, 'findOne', { phone: phone }, { _id: 0 });
        if (isRegister === null) {
            ctx.response.body = {
                status: '402',
                msg: '用户未注册',
                data: ''
            }
        } else {
            const checkUser = await readWrite(userModel, 'findOne', { phone: phone, password: password }, { _id: 0, __v: 0, password: 0 });
            if (checkUser !== null) {
                ctx.response.body = {
                    status: '200',
                    msg: '登录成功',
                    data: checkUser
                }
            } else {
                ctx.response.body = {
                    status: '401',
                    msg: '密码错误',
                    data: ''
                }
            }
        }
    }
});
//处理用户修改个人信息接口
router.post('/submitData', async (ctx, next) => {
    const userId = ctx.request.body.userId;
    const username = ctx.request.body.username;
    const birth = ctx.request.body.birth;
    const area = ctx.request.body.area;
    const portrait = ctx.request.body.portrait;
    const background = ctx.request.body.background;
    const sex = ctx.request.body.sex;
    const qrcode = ctx.request.body.qrcode;
    const colleage = ctx.request.body.colleage;
    const introduce = ctx.request.body.introduce;
    const resData = await readWrite(userModel, 'update', { userId: userId }, {
        username: username,
        birth: birth,
        area: area,
        portrait: portrait,
        background: background,
        sex: sex,
        qrcode: qrcode,
        colleage: colleage,
        introduce: introduce
    }, { upsert: true });
    if (resData.ok == 1) {
        //修改成功后，查询用户最新信息并返回
        const updateData = await readWrite(userModel, 'findOne', { userId: userId }, { _id: 0, __v: 0, password: 0 });
        ctx.response.body = {
            status: '200',
            msg: '修改成功!',
            data: updateData
        }
    } else {
        ctx.response.body = {
            status: '401',
            msg: '修改失败!',
            data: ''
        }
    }
});
//获取用户信息接口
router.post('/getUserInfo', async (ctx, next) => {
    const userId = ctx.request.body.userId;
    const updateData = await readWrite(userModel, 'findOne', { userId: userId }, { _id: 0, __v: 0, password: 0 });
    if (updateData != null) {
        ctx.response.body = {
            status: '200',
            msg: '成功!',
            data: updateData
        }
    } else {
        ctx.response.body = {
            status: '401',
            msg: '查询失败',
            data: ''
        }
    }
});
//用户注册接口,先验证手机号是否存在
router.post('/register', async (ctx, next) => {
    const phone = ctx.request.body.phone;
    const password = ctx.request.body.password;
    const isRegister = await readWrite(userModel, 'findOne', { phone: phone }, { _id: 0 });
    if (isRegister === null) {
        //若用户未注册，查询数据库并为用户生成唯一的id
        const createUserId = await readWrite(userModel, 'find', {}, { _id: 0 });
        const userId = createUserId.length + 1;
        const register = await readWrite(userModel, 'insertMany', { phone: phone, password: password, userId: userId }, {});
        if (register.length !== 0) {
            ctx.response.body = {
                status: '200',
                msg: '注册成功',
                data: ''
            }
        } else {
            ctx.response.body = {
                status: '401',
                msg: '服务器繁忙，注册失败',
                data: ''
            }
        }
    } else {
        ctx.response.body = {
            status: '402',
            msg: '该用户已注册，请直接登录!',
            data: ''
        }
    }
});
//歌曲名称、演唱者、歌词搜索接口(模糊查询)
router.post('/searchMusic', async (ctx, next) => {
    const keyword = ctx.request.body.keyword;
    const reg=new RegExp(keyword,'i');//不区分大小写
    const result = await await readWrite(musicModel, 'find', {$or:[
        {name:{$regex:reg}},
        {lyric:{$regex:reg}},
        {singer:{$regex:reg}},
    ]}, { _id: 0,__v:0 });
    if (result.length === 0) {
        ctx.response.body = {
            status: '401',
            msg: '未查询到数据',
            data: ''
        }
    } else {
        ctx.response.body = {
            status: '200',
            msg: '查询成功',
            data: result
        }
    }
})




// add router middleware:
app.use(router.routes());

app.listen(9999);
console.log('app started at port 9999...');