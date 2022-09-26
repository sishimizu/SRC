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
const cleartime = document.querySelector("input#id_clear_time.counter");

stopButton.disabled = true; resetButton.disabled = true;
run.disabled = true; team.disabled = true; m1.disabled = true; m2.disabled = true; m2h.disabled = true;
m3.disabled = true; m3h.disabled = true; m4.disabled = true; m4h.disabled = true; m5.disabled = true;
m6.disabled = true; m6h.disabled = true; m7.disabled = true;
bonus1.disabled = true; bonus2.disabled = true; perfect.disabled = true; cleartime.disabled = true;
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