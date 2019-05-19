const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoItem = new Schema({
    id: Number,
    text: String,
    content: String,
    star: Boolean,
//  Due: Date,
    createdAt: { // 기본값을 설정할땐 이렇게 객체로 설정해줍니다
        type: Date,
        default: Date.now // 기본값은 현재 날짜로 지정합니다.
    }
});

// 스키마를 모델로 변환하여, 내보내기 합니다.
module.exports = mongoose.model('TodoItem', TodoItem);