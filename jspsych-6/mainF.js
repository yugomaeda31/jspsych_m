
// const jsPsych = initJsPsych();
const timeline = [];


//実験参加の同意画面
var instruction1 = {
type: "html-button-response",
stimulus: "<p>この実験に参加することに同意しますか？</p>",
choices: ["同意する", "同意しない"],
on_finish: function(data) {
    if (data.response === 1) {
    jsPsych.endExperiment("実験への参加に同意が得られませんでした。");
    }
}
}

//　200枚見せるときのの説明画面
var instruction2 = {
type: "html-button-response",
stimulus: "<p>これから顔画像の印象を評価していただきます。\nまず、すべての画像が0.5秒ずつ提示されます。200枚の画像を表示します。</p>",
choices: ["次へ"]
}


//　画像評定用の説明画面
var instruction3 = {
type: "html-button-response",
stimulus: "<p>これから顔画像の印象を評価していただきます。</p>",
choices: ["次へ"]
}


/* test trials */
// var test_stimuli1 = [
//   { stimulus: "Face/FaceGen_Image/male/M001.jpg"},
//   { stimulus: "Face/FaceGen_Image/male/M002.jpg"},
//   { stimulus: "Face/FaceGen_Image/male/M003.jpg"},
//   { stimulus: "Face/FaceGen_Image/male/M004.jpg"},
//   { stimulus: "Face/FaceGen_Image/male/M005.jpg"}
// ];

// var test_stimuli2 = [
//   { stimulus: "<img src='Face/FaceGen_Image/male/M001.jpg' width='200px'></img>"},
//   { stimulus: "<img src='Face/FaceGen_Image/male/M002.jpg' width='200px'></img>"},
//   { stimulus: "<img src='Face/FaceGen_Image/male/M003.jpg' width='200px'></img>"},
//   { stimulus: "<img src='Face/FaceGen_Image/male/M004.jpg' width='200px'></img>"},
//   { stimulus: "<img src='Face/FaceGen_Image/male/M005.jpg' width='200px'></img>"}
// ];


//200枚見れるの配列を作成する
// 空の配列を初期化
var test_stimuli1 = [];

// 1から200までループ
for (var i = 1; i <= 200; i++) {
    // 数字を3桁にフォーマット（例: 1 -> "001"）
    var num = String(i).padStart(3, '0');
    
    // オブジェクトを作成して配列に追加
    test_stimuli1.push({
        stimulus: "https://yugomaeda31.github.io/jspsych_m/jspsych-6/male/M" + num + ".jpg"
    });
}


// 画像評定用の配列を作成する
// 空の配列を初期化
var test_stimuli2 = [];

// 1から200までループ
for (var i = 1; i <= 200; i++) {
    // 数字を3桁にフォーマット（例: 1 -> "001"）
    var num = String(i).padStart(3, '0');
    
    // オブジェクトを作成して配列に追加
    test_stimuli2.push({
        stimulus: "<img src='https://yugomaeda31.github.io/jspsych_m/jspsych-6/male/M" + num + ".jpg' width='200px'></img>"
    });
}



// 200枚を500msで見せる
var show = {
type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: jsPsych.NO_KEYS,
    trial_duration: 500
}

// 200枚画像を評定する
var trial1 = {
type: 'html-button-response',
stimulus:  jsPsych.timelineVariable('stimulus'),
choices: ['全く魅力的</br>ではない', '魅力的</br>ではない', 'やや魅力的</br>ではない', 'どちらでもない', 'やや魅力的', '魅力的', '非常に魅力的'],
prompt: "<p>提示された顔画像の魅力度を回答してください。</p>"
}

var test_procedure1 = {
    timeline: [show],
    timeline_variables: test_stimuli1,
    randomize_order: true,
}

var test_procedure2 = {
    timeline: [trial1],
    timeline_variables: test_stimuli2,
    randomize_order: true,
}

// timeline.push(instruction1);
timeline.push(instruction2);
timeline.push(test_procedure1);
timeline.push(instruction3);
timeline.push(test_procedure2);
