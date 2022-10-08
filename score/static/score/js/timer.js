//あべさん阿部さん改良版
// タイマー部
let stop;
let progress;
let addition = 0;
const record = document.querySelector("input#id_clear_time");
// カウンター
function timer() {
const start = new Date().getTime();
stop = setInterval(function() {
progress = new Date().getTime() - start + addition;
const noms = progress / 1000;
const millisecond = progress ? ("0" + String(noms).split(".")[1]).slice(-2) : "00";
const nos = Math.trunc(noms);
const second = nos ? ("0" + (nos % 86400 % 3600 %60)).slice(-2) : "00";
const minute = nos >= 60 ? ("0" + Math.trunc(nos % 86400 % 3600 / 60)).slice(-2) : "00";
const hour = nos >= 360 ? ("0" + Math.trunc(nos % 86400 / 3600)).slice(-2) : "00";
if (progress < 86400) {
  record.value =  minute + ":" + second + "." + millisecond;
} else {
  record.value = "00:00.00"; clearInterval(stop); }}, 10);
}
// ボタン部
const startButton = document.querySelector("button.start");
const stopButton = document.querySelector("button.stop");
const resetButton = document.querySelector("button.reset");
//---------------- ここから下を書き換えてます -------------------//
//初期化時：
//スタート時：「走行」と「チーム名」を選択したら使用可に
//ストップ時：各項目は変更可(レース後に入力＆確認する)
//※スタート後にストップしたら送信可能になる？(間違いタップ防止)
//リセット時：初期化＋値も初期化
//送信ボタンを押したら自動的に画面リセットor走行順ページor順位ページに移動？

startButton.disabled = true;
stopButton.disabled = true;
resetButton.disabled = true;
record.disabled = true;

let score_mode = 0;			//モード設定 リセット：0 スタート:1 ストップ:2
Disnable_Elements(1,0);	//画面初期化時に各項目を使用不可にする

//スタートボタンを使用可にする条件
//両方が「-----」(←インデックス0番)でなくなったらスタートを押せるようにする(さらにS字か3周かも判定)
//「走行」がクリックされたとき
document.getElementById("id_run").addEventListener("change", function() {
	if(document.getElementById("id_run").selectedIndex != 0 && document.getElementById("id_team").selectedIndex != 0){
		startButton.disabled = false;
	}
});
//「チーム名」がクリックされたとき
document.getElementById("id_team").addEventListener("change", function() {
	if(document.getElementById("id_run").selectedIndex != 0 && document.getElementById("id_team").selectedIndex != 0){
		startButton.disabled = false;
	}
});

// スタートボタンがクリックされた
startButton.addEventListener("click", function() {
progress = 0; timer(); startButton.disabled = true; stopButton.disabled = false; resetButton.disabled = false;
Enable_Elements();		//項目を使用可にする
score_mode = 1;
});

// ストップボタンがクリックされた 各項目は操作可能のまま
//ストップボタンを押したら送信可能にする？
stopButton.addEventListener("click", function() {
clearInterval(stop); addition = progress; startButton.disabled = true; stopButton.disabled = true; resetButton.disabled = false;
document.getElementById("send").disabled = false;			//「送信」使用可
document.getElementById("id_m6_cnt").disabled = false;			//「荷物を置く（MoonBase3）」使用可
document.getElementById("id_m6kami_cnt").disabled = false;	//「荷物を置く（MoonBase3）半分」使用可
document.getElementById("id_clear_time").disabled = false;	//「クリアタイム」使用可
score_mode = 2;
});

// リセットボタンがクリックされた
resetButton.addEventListener("click", function() {
clearInterval(stop); progress = 0;
record.value = "00:00.00";
addition = 0;
startButton.disabled = true;
stopButton.disabled = true;
resetButton.disabled = true;
Reset_Elements();			//項目のリセット
Disnable_Elements();	//項目の使用不可
score_mode = 0;
});


//S字コースか3周のみかの比較
document.getElementById("id_m5_cnt").addEventListener("click", function() {
	if(document.getElementById("id_m5_cnt").checked){
		document.getElementById("id_bonus2").disabled = true;
		//スタート時とストップ時なら下2つの項目を使用可にするそうでなければ不可
		if(score_mode == 1 || score_mode == 2){
			document.getElementById("id_m6_cnt").disabled = false;			//「荷物を置く（MoonBase3）」使用可
			document.getElementById("id_m6kami_cnt").disabled = false;	//「荷物を置く（MoonBase3）半分」使用可
		}
	}else{
		document.getElementById("id_bonus2").disabled = false;
		document.getElementById("id_m6_cnt").disabled = true;			//「荷物を置く（MoonBase3）」使用不可
		document.getElementById("id_m6kami_cnt").disabled = true;	//「荷物を置く（MoonBase3）半分」使用不可
	}
});
document.getElementById("id_bonus2").addEventListener("click", function() {
	if(document.getElementById("id_bonus2").checked){
		document.getElementById("id_m5_cnt").disabled = true;
		document.getElementById("id_m6_cnt").disabled = true;			//「荷物を置く（MoonBase3）」使用不可
		document.getElementById("id_m6kami_cnt").disabled = true;	//「荷物を置く（MoonBase3）半分」使用不可
	}else{
		document.getElementById("id_m5_cnt").disabled = false;
	}
});

function Enable_Elements(){
//走行、チーム名はスタート前でも操作可能にする
	document.getElementById("id_m1_cnt").disabled = false;			//「基地一秒ストップ」使用可
	document.getElementById("id_m2_cnt").disabled = false;			//「荷物を取る」使用可
	document.getElementById("id_m2kami_cnt").disabled = false;	//「荷物をとる（神の手）」使用可
	document.getElementById("id_m3_cnt").disabled = false;			//「荷物を置く（MoonBase1）」使用可
	document.getElementById("id_m3kami_cnt").disabled = false;	//「荷物を置く（MoonBase1）半分」使用可
	document.getElementById("id_m4_cnt").disabled = false;			//「荷物を置く（MoonBase2）」使用可
	document.getElementById("id_m4kami_cnt").disabled = false;	//「荷物を置く（MoonBase2）半分」使用可
//document.getElementById("id_m5_cnt").disabled = ;						//「S字コースに移動」

	document.getElementById("id_m7_cnt").disabled = false;			//「MoonBase4に完全停止」使用可
	document.getElementById("id_bonus1").disabled = false;			//「障害物回避する」使用可
//document.getElementById("id_bonus2").disabled = ;						//「3周してひょうたん..」
	document.getElementById("id_perfect").disabled = false;			//「完全制覇」使用可

//S字コースなら下2つ許可
	if(document.getElementById("id_m5_cnt").checked){
		document.getElementById("id_m6_cnt").disabled = false;		//「荷物を置く（MoonBase3）」使用可
		document.getElementById("id_m6kami_cnt").disabled = false;//「荷物を置く（MoonBase3）半分」使用可
	}else{
		document.getElementById("id_m6_cnt").disabled = true;			//「荷物を置く（MoonBase3）」使用不可
		document.getElementById("id_m6kami_cnt").disabled = true;	//「荷物を置く（MoonBase3）半分」使用不可
	}
};

function Disnable_Elements(){
//各項目を使用不可に。S字と3周は使用可にする
	document.getElementById("id_m1_cnt").disabled = true;			//「基地一秒ストップ」使用不可
	document.getElementById("id_m2_cnt").disabled = true;			//「荷物を取る」使用不可
	document.getElementById("id_m2kami_cnt").disabled = true;	//「荷物をとる（神の手）」使用不可
	document.getElementById("id_m3_cnt").disabled = true;			//「荷物を置く（MoonBase1）」使用不可
	document.getElementById("id_m3kami_cnt").disabled = true;	//「荷物を置く（MoonBase1）半分」使用不可
	document.getElementById("id_m4_cnt").disabled = true;			//「荷物を置く（MoonBase2）」使用不可
	document.getElementById("id_m4kami_cnt").disabled = true;	//「荷物を置く（MoonBase2）半分」使用不可
	document.getElementById("id_m5_cnt").disabled = false;		//「S字コースに移動」使用可
	document.getElementById("id_m6_cnt").disabled = true;			//「荷物を置く（MoonBase3）」使用不可
	document.getElementById("id_m6kami_cnt").disabled = true;	//「荷物を置く（MoonBase3）半分」使用不可
	document.getElementById("id_m7_cnt").disabled = true;			//「MoonBase4に完全停止」使用不可
	document.getElementById("id_bonus1").disabled = true;			//「障害物回避する」使用不可
	document.getElementById("id_bonus2").disabled = false;		//「3周してひょうたん..」使用可
	document.getElementById("id_perfect").disabled = true;		//「完全制覇」使用不可
	document.getElementById("send").disabled = true;			//「送信」使用不可
};

function Reset_Elements(){
//値を初期化する
//セレクトボックスは0番目の値にする
//チェックボックスはチェックしてない状態にする
	document.getElementById("id_run").selectedIndex = 0;				//「走行」
	document.getElementById("id_team").selectedIndex = 0;				//「チーム名」
	document.getElementById("id_m1_cnt").selectedIndex = 0;			//「基地一秒ストップ」
	document.getElementById("id_m2_cnt").selectedIndex = 0;			//「荷物を取る」
	document.getElementById("id_m2kami_cnt").selectedIndex = 0;	//「荷物をとる（神の手）」
	document.getElementById("id_m3_cnt").selectedIndex = 0;			//「荷物を置く（MoonBase1）」
	document.getElementById("id_m3kami_cnt").selectedIndex = 0;	//「荷物を置く（MoonBase1）半分」
	document.getElementById("id_m4_cnt").selectedIndex = 0;			//「荷物を置く（MoonBase2）」
	document.getElementById("id_m4kami_cnt").selectedIndex = 0;	//「荷物を置く（MoonBase2）半分」
	document.getElementById("id_m5_cnt").checked = false;				//「S字コースに移動」
	document.getElementById("id_m6_cnt").selectedIndex = 0;			//「荷物を置く（MoonBase3）」
	document.getElementById("id_m6kami_cnt").selectedIndex = 0;	//「荷物を置く（MoonBase3）半分」
	document.getElementById("id_m7_cnt").checked = false;				//「MoonBase4に完全停止」
	document.getElementById("id_bonus1").selectedIndex = 0;			//「障害物回避する」
	document.getElementById("id_bonus2").checked = false;				//「3周してひょうたん..」
	document.getElementById("id_perfect").checked = false;			//「完全制覇」

};

//しみず清水自作
/*
// タイマー部
let stop;
let progress;
let addition = 0;
const record = document.querySelector(".counter");

// カウンター
function timer() {
const start = new Date().getTime();
stop = setInterval(function() {
progress = new Date().getTime() - start + addition;
const noms = progress / 1000;
const millisecond = progress ? ("0" + String(noms).split(".")[1]).slice(-2) : "00";
const nos = Math.trunc(noms);
const second = nos ? ("0" + (nos % 86400 % 3600 %60)).slice(-2) : "00";
const minute = nos >= 60 ? ("0" + Math.trunc(nos % 86400 % 3600 / 60)).slice(-2) : "00";
const hour = nos >= 360 ? ("0" + Math.trunc(nos % 86400 / 3600)).slice(-2) : "00";
if (progress < 86400) {
  record.value =  minute + "." + second + "." + millisecond;
} else {
  record.value = "00.00.00"; clearInterval(stop); }}, 10);
}
// ボタン部
const startButton = document.querySelector("button.start");
const stopButton = document.querySelector("button.stop");
const resetButton = document.querySelector("button.reset");
const run = document.querySelector("select#id_run");
const team = document.querySelector("select#id_team");
const m1 = document.querySelector("select#id_m1_cnt");
const m2 = document.querySelector("select#id_m2_cnt");
const m2h = document.querySelector("select#id_m2kami_cnt");
const m3 = document.querySelector("select#id_m3_cnt");
const m3h = document.querySelector("select#id_m3kami_cnt");
const m4 = document.querySelector("select#id_m4_cnt");
const m4h = document.querySelector("select#id_m4kami_cnt");
const m5 = document.querySelector("input#id_m5_cnt");
const m6 = document.querySelector("select#id_m6_cnt");
const m6h = document.querySelector("select#id_m6kami_cnt");
const m7 = document.querySelector("input#id_m7_cnt");
const bonus1 = document.querySelector("select#id_bonus1");
const bonus2 = document.querySelector("input#id_bonus2");
const perfect = document.querySelector("input#id_perfect");

stopButton.disabled = true; resetButton.disabled = true;
run.disabled = true; team.disabled = true; m1.disabled = true; m2.disabled = true; m2h.disabled = true;
m3.disabled = true; m3h.disabled = true; m4.disabled = true; m4h.disabled = true; m5.disabled = true;
m6.disabled = true; m6h.disabled = true; m7.disabled = true;
bonus1.disabled = true; bonus2.disabled = true; perfect.disabled = true; record.disabled = true;
// スタート
startButton.addEventListener("click", function() {
progress = 0; timer(); startButton.disabled = true; stopButton.disabled = false; resetButton.disabled = false;
run.disabled = false; team.disabled = false; m1.disabled = false; m2.disabled = false; m2h.disabled = false;
m3.disabled = false; m3h.disabled = false; m4.disabled = false; m4h.disabled = false; m5.disabled = false;
m6.disabled = false; m6h.disabled = false; m7.disabled = false;
bonus1.disabled = false; bonus2.disabled = false; perfect.disabled = false;
});

// ストップ
stopButton.addEventListener("click", function() {
clearInterval(stop); addition = progress; startButton.disabled = false; stopButton.disabled = true; resetButton.disabled = false;
run.disabled = true; team.disabled = true; m1.disabled = true; m2.disabled = true; m2h.disabled = true;
m3.disabled = true; m3h.disabled = true; m4.disabled = true; m4h.disabled = true; m5.disabled = true;
m6.disabled = true; m6h.disabled = true; m7.disabled = true;
bonus1.disabled = true; bonus2.disabled = true; perfect.disabled = true;
});
// リセット
resetButton.addEventListener("click", function() {
clearInterval(stop); progress = 0; record.value = "00.00.00"; addition = 0; startButton.disabled = false; stopButton.disabled = true; resetButton.disabled = true; });
*/