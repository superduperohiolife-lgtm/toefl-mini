/* Speaking 音声バンク（アプリ読込用） — speaking_bank.json と内容一致
   audio は Speaking/audio/*.mp3（make_speak_tts.py で生成）。mp3欠落時はアプリ側でWeb Speechにフォールバック。 */
window.SPK_LR = [
  {id:"lr_01", target:"The library is open until nine o'clock tonight.", audio:"Speaking/audio/speak_lr_01.mp3"},
  {id:"lr_02", target:"She decided to study abroad after finishing her degree.", audio:"Speaking/audio/speak_lr_02.mp3"},
  {id:"lr_03", target:"Although it was raining, the team continued the experiment.", audio:"Speaking/audio/speak_lr_03.mp3"},
  {id:"lr_04", target:"Please remember to submit your assignment before Friday.", audio:"Speaking/audio/speak_lr_04.mp3"},
  {id:"lr_05", target:"The new museum exhibit attracts thousands of visitors each week.", audio:"Speaking/audio/speak_lr_05.mp3"},
  {id:"lr_06", target:"He could not attend the meeting because his train was delayed.", audio:"Speaking/audio/speak_lr_06.mp3"},
  {id:"lr_07", target:"Renewable energy is becoming more affordable around the world.", audio:"Speaking/audio/speak_lr_07.mp3"},
  {id:"lr_08", target:"The professor explained the difficult theory clearly and patiently.", audio:"Speaking/audio/speak_lr_08.mp3"},
  {id:"lr_09", target:"We should book the tickets early to avoid the crowds.", audio:"Speaking/audio/speak_lr_09.mp3"},
  {id:"lr_10", target:"Reading widely helps you build a stronger vocabulary.", audio:"Speaking/audio/speak_lr_10.mp3"}
];
window.SPK_IV = [
  {id:"iv_01", q:"What is a subject you enjoyed studying in school, and why did you like it?", audio:"Speaking/audio/speak_iv_01.mp3"},
  {id:"iv_02", q:"Some students prefer studying alone, while others prefer studying in groups. Which do you prefer, and why?", audio:"Speaking/audio/speak_iv_02.mp3"},
  {id:"iv_03", q:"Describe a place you would like to visit, and explain what you would do there.", audio:"Speaking/audio/speak_iv_03.mp3"},
  {id:"iv_04", q:"Do you think it is better to plan things in advance or to act spontaneously? Explain your view.", audio:"Speaking/audio/speak_iv_04.mp3"}
];
