var mongoose = require('mongoose');  

var QuestionSchema = new mongoose.Schema({
    exam_id: {
        type: String,
        index: true,
        required: true
    },
    question_no: Number,
    question: String,
    options: [String],
    correct_ans_index: Number,
});

module.exports = mongoose.model('Question', QuestionSchema);