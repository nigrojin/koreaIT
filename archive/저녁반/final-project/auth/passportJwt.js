// 여기서 유저 인증을 하는 로직을 만든다
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { User } = require('../models/model');
const passport = require('passport');
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'shhhhh';

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    // DB에서 유저를 찾는다
    // jwt payload에서 token을 가져와 해독한 후
    const user = await User.findOne({ username: jwt_payload.username });

    if (user) {
        // 유저가 있는 경우
        return done(null, user)
    } else {
        // 유저가 없는 경우
        // 401 Error를 보낸다
        return done(null, false)
    }
}))







