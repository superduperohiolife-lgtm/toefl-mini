/* =========================================================================
   Listening L1 ― Listen and Choose a Response（公式形式）
   出典台本: Ridgeland Rd_3811.m4a を Whisper で文字起こし（2026-06-25）
   各発話に アクセント(us/ca/au/uk)・性別・割当音声・音声ファイル名 を付与。
   音声は make_tts.py（edge-tts）で Listening/audio/ に生成。
   既存 toefl-mini-test-2026.html の LIS_RESPONSE を置換する想定。
   ※ 正答位置(a)は分散済み。opts[a] が「最も自然な応答」。
   ========================================================================= */
const LIS_RESPONSE = [
  { id:"rg1", taskType:"response", level:"easy",
    accent:"us", gender:"f", voice:"en-US-JennyNeural", audio:"audio/response_01.mp3",
    script:"Didn't I just see you in the library an hour ago?",
    q:[{ stem:"Choose the best response.",
      opts:["The library closes at nine.",
            "Yes, I was returning some books.",
            "I prefer studying at home.",
            "It's about an hour away."], a:1 }] },

  { id:"rg2", taskType:"response", level:"easy",
    accent:"uk", gender:"m", voice:"en-GB-RyanNeural", audio:"audio/response_02.mp3",
    script:"Where is the nearest bus stop?",
    q:[{ stem:"Choose the best response.",
      opts:["The bus was quite crowded.",
            "I usually take the train.",
            "It's just around the corner, next to the bank.",
            "Around twenty minutes."], a:2 }] },

  { id:"rg3", taskType:"response", level:"med",
    accent:"au", gender:"f", voice:"en-AU-NatashaNeural", audio:"audio/response_03.mp3",
    script:"How do I contact customer service?",
    q:[{ stem:"Choose the best response.",
      opts:["You can call the number on the back of your card.",
            "Their service was excellent.",
            "I contacted them last week.",
            "Customers come first."], a:0 }] },

  { id:"rg4", taskType:"response", level:"med",
    accent:"ca", gender:"m", voice:"en-CA-LiamNeural", audio:"audio/response_04.mp3",
    script:"I'm afraid I'm not available this evening.",
    q:[{ stem:"Choose the best response.",
      opts:["I'm afraid of the dark too.",
            "No problem, shall we meet tomorrow instead?",
            "The evening was lovely.",
            "Yes, you're very available."], a:1 }] },

  { id:"rg5", taskType:"response", level:"med",
    accent:"us", gender:"m", voice:"en-US-GuyNeural", audio:"audio/response_05.mp3",
    script:"Isn't the post office open today?",
    q:[{ stem:"Choose the best response.",
      opts:["I sent a letter yesterday.",
            "The post office is large.",
            "Actually, it's closed for the holiday.",
            "Yes, I opened it."], a:2 }] },

  { id:"rg6", taskType:"response", level:"easy",
    accent:"uk", gender:"f", voice:"en-GB-SoniaNeural", audio:"audio/response_06.mp3",
    script:"If you need me, just text.",
    q:[{ stem:"Choose the best response.",
      opts:["The text was too long.",
            "Thanks, I'll message you if anything comes up.",
            "I need a new phone.",
            "Texts are very useful."], a:1 }] },

  { id:"rg7", taskType:"response", level:"med",
    accent:"au", gender:"m", voice:"en-AU-WilliamNeural", audio:"audio/response_07.mp3",
    script:"So the store is open for business all weekend?",
    q:[{ stem:"Choose the best response.",
      opts:["Business has been slow.",
            "I bought it at the store.",
            "The weekend went quickly.",
            "That's right — from nine to six both days."], a:3 }] },

  { id:"rg8", taskType:"response", level:"med",
    accent:"ca", gender:"f", voice:"en-CA-ClaraNeural", audio:"audio/response_08.mp3",
    script:"Did you attend the seminar?",
    q:[{ stem:"Choose the best response.",
      opts:["Yes, and I found the speaker really inspiring.",
            "The seminar room is upstairs.",
            "I'll attend to it shortly.",
            "Seminars are usually long."], a:0 }] }
];
