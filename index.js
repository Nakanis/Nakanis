const quiz = [
    {
        question : '1600年に起こった戦いとは？',
        answers : ['応仁の乱', '壇ノ浦の戦い', 'ワールドカップ', '関ヶ原の戦い'],
         correct : '関ヶ原の戦い'
    },
    {
        question : '物質を酸化させると同時に何が起こるか？',
        answers : ['爆発', '還元', '化合', '状態変化'],
         correct : '還元'
    },
    {
        question : '10x + 2y = 40 ,3x + 6y = 33　のxとyの値を求めよ',
        answers : ['x=2 y=4', 'x=3 y=5', 'x=1 y=4', 'x=909090 y=6873'],
        correct : 'x=3 y=5'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題
const setUpQuiz = ()=>{
let buttonIndex = 0;
while(buttonIndex < buttonLength){
    document.getElementById('question-1').textContent = quiz[quizIndex].question;
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
}}


setUpQuiz();
const clickHandler = (e) => {
    if( quiz[quizIndex].correct === e.target.textContent){
        window.alert('ほんとにそれでいいの？');
        window.alert('だーい正解！(>_<)');
        score++;
          } else{
              window.alert('違うよ～ん');
          }
          quizIndex++;
        if(quizIndex < quizLength){
          setUpQuiz();
        }
        else{
            window.alert('終わりだ');
            window.alert('あなたのスコアは');
            window.alert('どぅるどぅるどぅるどぅるどぅるどぅる')
            window.alert('ジャン！')
            window.alert( score + '/' + quizLength);
            if(score === 0){
                window.alert('ザッコwwwwwwwwwww')
            } else if(score === 1){
                window.alert('赤ちゃんですか？wwwwwwwwwww')
            } else if(score === 2){
                window.alert('まぁまぁ')
            }else if(score === 3){
                window.alert('神やん');
            }
            
            
        }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) =>{
     clickHandler(e);
});
handlerIndex++;
}





