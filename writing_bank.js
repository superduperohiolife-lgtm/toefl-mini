/* ===========================================================================
   TOEFL Writing 2026 — 問題バンク（オリジナル・公式形式準拠）
   作成: 2026-06-25
   本番設問数: Build a Sentence 10 / Write an Email 1 / Academic Discussion 1（計12）
   方針: 各タスクで本番設問数の10倍以上のプールを用意し、毎回ランダム抽出する。
        各問に難易度タグ diff: "easy"(A1-B1) / "medium"(B1-B2) / "hard"(B2-C2)。
   ---------------------------------------------------------------------------
   WBANK_BS  : Build a Sentence 100問（公式2026形式: 文脈＋骨組み穴埋め）
     context = 文脈文（各問の冒頭に表示。公式の状況文に相当）。
     chunks  = 正しい順の語のかたまり（join(' ')で完成文）。chunks[0]=固定アンカー、
               chunks[1..]=空欄に入れる語（アプリが末尾「.」を固定トークン化して枠を生成）。
     extra   = 任意。未使用のダミー語（本番仕様の「使わない余分な1語」）。プールへ混入。
   WBANK_EMAIL : Write an Email 12問  { id, diff, scenario, to, subject, bullets[3] }（公式2026形式）
   WBANK_DISC  : Academic Discussion 12問 { id, diff, prompt }
   =========================================================================== */

const WBANK_BS = [
 /* ---- easy (A1–B1) 1–35 ---- */
 { id:1,  diff:"easy", context:"How long has she lived in Tokyo?", chunks:["She","has","lived","in Tokyo","for","ten years."], extra:"living" },
 { id:2,  diff:"easy", context:"When is the report due?", chunks:["The report","must","be","submitted","by","Friday."], extra:"submit" },
 { id:3,  diff:"easy", context:"Where does your brother work?", chunks:["My brother","works","at","a","hospital","downtown."] },
 { id:4,  diff:"easy", context:"When do you usually eat dinner?", chunks:["We","usually","eat","dinner","at","seven o'clock."] },
 { id:5,  diff:"easy", context:"When is the library closed?", chunks:["The library","is","closed","on","national","holidays."], extra:"close" },
 { id:6,  diff:"easy", context:"What are they planning?", chunks:["They","are","planning","a trip","to","Canada."] },
 { id:7,  diff:"easy", context:"Where did he leave his umbrella?", chunks:["He","forgot","his","umbrella","at","the office."] },
 { id:8,  diff:"easy", context:"Where are the children?", chunks:["The children","are","playing","in","the","garden."] },
 { id:9,  diff:"easy", context:"What would you like to drink?", chunks:["I","would","like","a cup","of","coffee."] },
 { id:10, diff:"easy", context:"What did your teacher give you?", chunks:["Our teacher","gave","us","a lot","of","homework."] },
 { id:11, diff:"easy", context:"How often does the train arrive?", chunks:["The train","arrives","every","twenty","minutes."] },
 { id:12, diff:"easy", context:"What did she buy yesterday?", chunks:["She","bought","a","new","laptop","yesterday."] },
 { id:13, diff:"easy", context:"How was the weather last week?", chunks:["The weather","was","very","cold","last","week."] },
 { id:14, diff:"easy", context:"What did you do last night?", chunks:["We","watched","an","interesting","movie","last night."] },
 { id:15, diff:"easy", context:"Where do your parents live?", chunks:["My parents","live","in","a","small","village."] },
 { id:16, diff:"easy", context:"When does the store open?", chunks:["The store","opens","at","nine","in","the morning."] },
 { id:17, diff:"easy", context:"What is he learning?", chunks:["He","is","learning","how to","play","the guitar."] },
 { id:18, diff:"easy", context:"What does the museum have?", chunks:["The museum","has","many","famous","paintings."] },
 { id:19, diff:"easy", context:"How did they get to school?", chunks:["They","walked","to","school","in","the rain."] },
 { id:20, diff:"easy", context:"What do you do after exercise?", chunks:["I","always","drink","water","after","exercise."] },
 { id:21, diff:"easy", context:"Where is the cat?", chunks:["The cat","is","sleeping","under","the","table."] },
 { id:22, diff:"easy", context:"What happened to your flight?", chunks:["Our flight","was","delayed","by","two","hours."] },
 { id:23, diff:"easy", context:"How many languages does she speak?", chunks:["She","speaks","three","different","languages."] },
 { id:24, diff:"easy", context:"Until when is breakfast served?", chunks:["The restaurant","serves","breakfast","until","eleven."] },
 { id:25, diff:"easy", context:"What do we need to buy?", chunks:["We","need","to","buy","some","milk."] },
 { id:26, diff:"easy", context:"What did he do?", chunks:["He","sent","an","email","to","his manager."] },
 { id:27, diff:"easy", context:"What is the garden like?", chunks:["The garden","is","full","of","beautiful","flowers."] },
 { id:28, diff:"easy", context:"What does your sister want to do?", chunks:["My sister","wants","to","become","a","doctor."] },
 { id:29, diff:"easy", context:"When does the meeting start?", chunks:["The meeting","starts","right","after","lunch."] },
 { id:30, diff:"easy", context:"What did they build last year?", chunks:["They","built","a","new","bridge","last year."] },
 { id:31, diff:"easy", context:"Where did you leave your keys?", chunks:["I","left","my","keys","on","the desk."] },
 { id:32, diff:"easy", context:"What does the bakery sell?", chunks:["The bakery","sells","fresh","bread","every","morning."] },
 { id:33, diff:"easy", context:"What is she reading?", chunks:["She","is","reading","a book","about","history."] },
 { id:34, diff:"easy", context:"How often do you visit your grandparents?", chunks:["We","often","visit","our","grandparents."] },
 { id:35, diff:"easy", context:"Where is the phone?", chunks:["The phone","is","charging","next to","the","bed."] },

 /* ---- medium (B1–B2) 36–70 ---- */
 { id:36, diff:"medium", context:"Did the rain stop them from hiking?", chunks:["Although it was raining,","they","decided","to","go","hiking."], extra:"because" },
 { id:37, diff:"medium", context:"What do many students struggle with?", chunks:["Many students","find","it","difficult","to manage","their time."] },
 { id:38, diff:"medium", context:"What happens if you study hard?", chunks:["If you study hard,","you","will","pass","the exam","easily."], extra:"would" },
 { id:39, diff:"medium", context:"When will the package be delivered?", chunks:["The package","will","be","delivered","as soon as","it is ready."] },
 { id:40, diff:"medium", context:"Why didn't she attend the meeting?", chunks:["She","couldn't","attend","the meeting","because","she was ill."] },
 { id:41, diff:"medium", context:"Why should we leave early?", chunks:["We","should","leave","early","to","avoid the traffic."] },
 { id:42, diff:"medium", context:"Was the project finished on time?", chunks:["The project","was","completed","on time","despite","the problems."], extra:"although" },
 { id:43, diff:"medium", context:"What did he promise?", chunks:["He","promised","that","he","would","call me later."] },
 { id:44, diff:"medium", context:"What will happen if we don't hurry?", chunks:["Unless we hurry,","we","will","miss","the","last train."] },
 { id:45, diff:"medium", context:"How was the book you borrowed?", chunks:["The book","that","I borrowed","was","surprisingly","interesting."] },
 { id:46, diff:"medium", context:"What are they looking forward to?", chunks:["They","are","looking forward","to","seeing","their friends again."] },
 { id:47, diff:"medium", context:"What happened while she was cooking?", chunks:["While she was cooking,","the","phone","suddenly","started","ringing."] },
 { id:48, diff:"medium", context:"What has the company decided?", chunks:["The company","has","decided","to","hire","more employees."] },
 { id:49, diff:"medium", context:"Why were you surprised by the time?", chunks:["I","didn't","realize","how","late","it was."] },
 { id:50, diff:"medium", context:"Why did everyone understand the lesson?", chunks:["The teacher","explained","the lesson","so that","everyone","understood."], extra:"however" },
 { id:51, diff:"medium", context:"Did being tired stop him from working?", chunks:["Even though he was tired,","he","kept","working","until","midnight."] },
 { id:52, diff:"medium", context:"When will the new policy start?", chunks:["The new policy","will","take effect","at the beginning","of","next month."] },
 { id:53, diff:"medium", context:"What did she ask you?", chunks:["She","asked","me","whether","I","had finished the report."] },
 { id:54, diff:"medium", context:"What should you do before deciding?", chunks:["Before you make a decision,","you","should","consider","all","the options."] },
 { id:55, diff:"medium", context:"Why was the bridge closed?", chunks:["The bridge","was","closed","because","it","needed repairs."] },
 { id:56, diff:"medium", context:"When can we go to the beach?", chunks:["We","can't","go","to the beach","unless","the weather improves."] },
 { id:57, diff:"medium", context:"How hard does he work?", chunks:["He","works","so","hard","that he rarely","takes a break."], extra:"such" },
 { id:58, diff:"medium", context:"What do the results suggest?", chunks:["The results","suggest","that","the experiment","was","successful."] },
 { id:59, diff:"medium", context:"What happened after the storm passed?", chunks:["After the storm passed,","the city","began","to","recover","slowly."] },
 { id:60, diff:"medium", context:"What are you curious about?", chunks:["I","wonder","why","she","left","so early."] },
 { id:61, diff:"medium", context:"What was the hotel like?", chunks:["The hotel","where","we stayed","had","a","wonderful view."] },
 { id:62, diff:"medium", context:"How long did the discussion continue?", chunks:["They","continued","the discussion","until","they reached","an agreement."] },
 { id:63, diff:"medium", context:"What happens as the population grows?", chunks:["As the population grows,","the demand","for","housing","also","increases."] },
 { id:64, diff:"medium", context:"Why did she speak clearly?", chunks:["She","spoke","clearly","so that","everyone","could hear her."] },
 { id:65, diff:"medium", context:"What did the scientist discover?", chunks:["The scientist","discovered","a method","that","reduces","waste."] },
 { id:66, diff:"medium", context:"Did the difficulty stop students from passing?", chunks:["Although the test was difficult,","most students","managed","to","pass","it."] },
 { id:67, diff:"medium", context:"Why did you postpone the event?", chunks:["We","decided","to","postpone","the event","due to the weather."], extra:"despite" },
 { id:68, diff:"medium", context:"Why couldn't you follow the instructions?", chunks:["The instructions","were","too","complicated","for me","to follow."] },
 { id:69, diff:"medium", context:"What did he admit?", chunks:["He","admitted","that","he","had made","a mistake."] },
 { id:70, diff:"medium", context:"Why did you take a different route?", chunks:["Since the road was blocked,","we","had to","take","a","different route."] },

 /* ---- hard (B2–C2) 71–100 ---- */
 { id:71,  diff:"hard", context:"What happened to the proposal?", chunks:["The proposal,","which","had been rejected earlier,","was","finally","approved."], extra:"rejecting" },
 { id:72,  diff:"hard", context:"What would you have done about the delay?", chunks:["Had I known about the delay,","I","would","have","taken","an earlier flight."] },
 { id:73,  diff:"hard", context:"What did she accomplish?", chunks:["Not only","did she","finish the project,","but she also","trained","the new staff."] },
 { id:74,  diff:"hard", context:"What did the researchers conclude?", chunks:["The researchers","concluded","that","the data","did not support","their hypothesis."] },
 { id:75,  diff:"hard", context:"What did you think of the presentation?", chunks:["Rarely","have","I","seen","such a well-organized","presentation."] },
 { id:76,  diff:"hard", context:"What did the committee recommend?", chunks:["The committee","recommended","that","the budget","be","reviewed annually."], extra:"is" },
 { id:77,  diff:"hard", context:"How did he handle the situation?", chunks:["Despite having little experience,","he","handled","the situation","remarkably","well."] },
 { id:78,  diff:"hard", context:"When can the phenomenon be understood?", chunks:["The phenomenon","can only","be understood","when","multiple factors","are considered."] },
 { id:79,  diff:"hard", context:"What surprised everyone?", chunks:["What surprised everyone","was","how","quickly","the technology","spread."] },
 { id:80,  diff:"hard", context:"Is the old novel still popular?", chunks:["The novel,","written more than a century ago,","remains","widely","read","today."] },
 { id:81,  diff:"hard", context:"What role did her support play?", chunks:["Were it not for her support,","the project","would","have","failed","completely."] },
 { id:82,  diff:"hard", context:"What do the findings imply?", chunks:["The findings","imply","that","economic growth","does not guarantee","happiness."] },
 { id:83,  diff:"hard", context:"How convincing was his argument?", chunks:["So convincing","was","his argument","that","no one","dared to disagree."] },
 { id:84,  diff:"hard", context:"What were the students encouraged to do?", chunks:["The students","were encouraged","to","question","assumptions","they had long accepted."] },
 { id:85,  diff:"hard", context:"Does criticism stop the theory's influence?", chunks:["Although widely criticized,","the theory","continues","to","influence","modern research."] },
 { id:86,  diff:"hard", context:"What did the corporation pledge?", chunks:["The corporation","pledged","to","reduce","its emissions","over the next decade."] },
 { id:87,  diff:"hard", context:"What is required of every applicant?", chunks:["It is essential","that","every applicant","submit","the required documents","on time."], extra:"submits" },
 { id:88,  diff:"hard", context:"What did the lecture do?", chunks:["The lecture","shed light on","a topic","that","had long puzzled","historians."] },
 { id:89,  diff:"hard", context:"When did the team reconsider their approach?", chunks:["Only after the experiment failed","did","the team","reconsider","their","approach."] },
 { id:90,  diff:"hard", context:"What was the result of the negotiation?", chunks:["The agreement,","reached","after months of negotiation,","satisfied","both","parties."] },
 { id:91,  diff:"hard", context:"How complex was the problem?", chunks:["Such was the complexity of the problem","that","even","experts","struggled","to solve it."] },
 { id:92,  diff:"hard", context:"What do the data suggest?", chunks:["The data","suggest","a correlation","that","researchers","had not anticipated."] },
 { id:93,  diff:"hard", context:"Under what condition will the study expand?", chunks:["Provided that the funding continues,","the study","will","be","expanded","next year."] },
 { id:94,  diff:"hard", context:"What does the author argue?", chunks:["The author","argues","that","technology","has fundamentally reshaped","human relationships."] },
 { id:95,  diff:"hard", context:"What happened soon after the meeting began?", chunks:["Hardly","had","the meeting begun","when","a serious disagreement","emerged."] },
 { id:96,  diff:"hard", context:"What was the effect of the new regulations?", chunks:["The new regulations,","though well-intentioned,","created","unexpected difficulties","for","businesses."] },
 { id:97,  diff:"hard", context:"What did the professor emphasize?", chunks:["The professor","emphasized","that","critical thinking","cannot","be taught overnight."] },
 { id:98,  diff:"hard", context:"What will happen if the proposal is accepted?", chunks:["Should the proposal be accepted,","the department","will","undergo","significant","restructuring."] },
 { id:99,  diff:"hard", context:"What does the evidence indicate?", chunks:["The evidence","strongly","indicates","that","the ecosystem","is recovering faster than predicted."] },
 { id:100, diff:"hard", context:"What ultimately determines success?", chunks:["What ultimately determines success","is","not","talent alone","but","persistent effort."] }
];

/* ===========================================================================
   Write an Email （12問）
   形式: 状況＋送信者メッセージ＋必ず触れる3点。約4–6文で返信。
   =========================================================================== */
/* 公式形式（2026 Jan）: 状況説明(scenario) ＋ 宛先(to)/件名(subject) 既定 ＋ 3つの指示(bullets)。制限時間7分。 */
const WBANK_EMAIL = [
 { id:1, diff:"medium", to:"coordinator@university.edu", subject:"Weekend study trip",
   scenario:"Your course coordinator is organizing a weekend study trip to a science museum next month. You would like to take part and need to send some information.",
   bullets:["Say whether you would like to join the trip.","Mention any dietary restrictions you have.","Ask one question you have about the trip."] },

 { id:2, diff:"easy", to:"info@citylibrary.org", subject:"Reserved book pickup",
   scenario:"The book you reserved at the city library, A Short History of the World, is now available for pickup. The library has asked you to reply with a few details.",
   bullets:["Tell the library which day this week you can come.","Say whether you would also like to borrow the audiobook version.","Explain how long you would like to keep the book."] },

 { id:3, diff:"easy", to:"activities@school.edu", subject:"International Friendship Club",
   scenario:"You recently signed up for your school's new International Friendship Club. The Student Activities Office has asked new members to reply with some information.",
   bullets:["Tell them which topics you are most interested in.","Say whether you can attend the first meeting on Saturday afternoon.","Suggest one activity you would like the club to organize this semester."] },

 { id:4, diff:"medium", to:"roommate@email.com", subject:"Moving in next week",
   scenario:"You will soon share an apartment with a new roommate who is moving in next week. Your roommate has written to introduce themselves and ask a few questions.",
   bullets:["Tell your roommate which room you would prefer.","Explain how you think you should split the cost of shared items.","Mention any house rules that are important to you."] },

 { id:5, diff:"medium", to:"manager@cornercafe.com", subject:"Barista position",
   scenario:"You applied for a part-time barista position at a local café. Before scheduling an interview, the café manager has asked you to reply with some details.",
   bullets:["Tell the manager which days and times you are available to work.","Describe any previous customer-service experience you have.","Say when you could start if you are hired."] },

 { id:6, diff:"medium", to:"adams@university.edu", subject:"Meeting about my paper",
   scenario:"You asked your professor to meet to discuss your research paper. The professor has replied and asked you to arrange the details.",
   bullets:["Suggest two or three time slots next week that would work for you.","Explain which part of the paper you would like to focus on.","Say whether you would prefer to meet in person or online."] },

 { id:7, diff:"easy", to:"frontdesk@building.com", subject:"Lost backpack",
   scenario:"You lost a black backpack. The front desk has contacted you to say that someone handed in a bag that may be yours.",
   bullets:["Describe some items inside so they can confirm the bag is yours.","Tell them when you can come to pick it up.","Say whether you would like it held at the front desk or the security office."] },

 { id:8, diff:"medium", to:"partner@school.edu", subject:"Dividing the presentation work",
   scenario:"You and a classmate must give a presentation in two weeks and need to divide the work. Your project partner has written to plan it with you.",
   bullets:["Tell your partner which section you would like to take responsibility for.","Suggest when you are free to meet for a planning session.","Recommend what tools you think you should use to share your files."] },

 { id:9, diff:"hard", to:"committee@meritscholarship.org", subject:"Merit Scholarship final round",
   scenario:"You have advanced to the final round of the Merit Scholarship. To complete your file, the scholarship committee has asked you to reply with some information.",
   bullets:["Explain briefly how the scholarship would support your academic goals.","Give the name of a professor who could serve as a reference.","State your availability for a short interview during the last week of the month."] },

 { id:10, diff:"hard", to:"coordinator@researchlab.org", subject:"Summer internship",
   scenario:"You have been offered a summer internship in a research department. Before the arrangement is finalized, the internship coordinator has asked you to confirm some details.",
   bullets:["Confirm the start date that works best for you.","Say whether you will need help finding housing near the office.","Describe any specific skills or areas you hope to develop."] },

 { id:11, diff:"medium", to:"manager@apartments.com", subject:"Hallway repainting",
   scenario:"The hallways in your apartment building will be repainted next week, which may cause noise and a strong smell. The building manager has asked residents to reply with their preferences.",
   bullets:["Tell the manager which days would be least disruptive for you.","Explain any concerns you have about the paint fumes.","Suggest one way the manager could keep residents informed during the work."] },

 { id:12, diff:"easy", to:"welcome@neighborhood.org", subject:"Welcome to the neighborhood",
   scenario:"You have just moved to a new neighborhood. The local welcome committee has written to help you settle in.",
   bullets:["Tell them where you moved from.","Explain what kind of local information would be most useful to you.","Say whether you would like to attend the welcome dinner this Friday."] }
];

/* ===========================================================================
   Write for an Academic Discussion （12問）
   形式: 教授の問い＋学生2名の投稿。自分の意見を5–6文以上で根拠とともに。
   =========================================================================== */
const WBANK_DISC = [
 { id:1, diff:"medium", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Some people believe that governments should make all public transportation free for everyone. Do you agree or disagree? Why?"

Mia:
"I agree. Free public transport would encourage more people to leave their cars at home, reducing traffic and air pollution in cities."

Ken:
"I'm not so sure. It sounds good, but the government would need a lot of money to pay for it, and that money has to come from somewhere—probably higher taxes."` },

 { id:2, diff:"medium", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Should universities require students to attend every class, or should attendance be optional? What do you think?"

Daniel:
"Attendance should be mandatory. Many students learn best through discussion, and skipping class means missing ideas that aren't in the textbook."

Sofia:
"I disagree. University students are adults who should manage their own time. As long as they pass the exams, how they study should be their choice."` },

 { id:3, diff:"medium", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Now that remote work is common, do you think working from home is better than working in an office? Why or why not?"

Liam:
"Working from home is better. People save hours of commuting time and can design a workspace that helps them focus."

Aisha:
"I prefer the office. Face-to-face contact builds stronger teams, and it's easier to separate work from personal life when they happen in different places."` },

 { id:4, diff:"hard", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Governments have limited budgets. Should they invest heavily in space exploration, or focus that money on solving problems here on Earth? Defend your position."

Noah:
"Earth's problems should come first. Money spent on rockets could fund hospitals, schools, and clean energy that improve lives immediately."

Yuki:
"Space exploration is worth it. Investments in space have produced technologies—like satellites and medical devices—that benefit everyone, and they inspire scientific progress."` },

 { id:5, diff:"medium", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Has social media had a mostly positive or mostly negative effect on the way people communicate? Share your view."

Emma:
"Mostly positive. Social media lets people stay connected across distances and gives a voice to those who were once ignored."

Carlos:
"I see more harm than good. It encourages shallow interactions and spreads misinformation faster than people can check the facts."` },

 { id:6, diff:"easy", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Should all students be required to learn a second language in school? Why or why not?"

Hana:
"Yes. Learning another language opens the door to new cultures and improves job opportunities later in life."

Tom:
"I'm not convinced. Not everyone needs a second language, and that time could be spent on subjects students actually plan to use."` },

 { id:7, diff:"hard", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Economic growth is often treated as a sign of national success. Is continuous economic growth always good for a country? Explain."

Olivia:
"Not always. Endless growth can damage the environment and widen the gap between rich and poor if the benefits aren't shared."

Raj:
"Growth is still essential. It creates jobs, funds public services, and lifts people out of poverty—problems that stagnation only makes worse."` },

 { id:8, diff:"medium", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Should advertising for fast food and sugary drinks be restricted, especially when it targets children? What is your opinion?"

Grace:
"Yes, it should be restricted. Children can't evaluate advertising critically, and these products contribute to serious health problems."

Felix:
"I disagree with strict bans. Parents, not governments, should decide what their children eat, and companies have a right to promote legal products."` },

 { id:9, diff:"medium", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Is online learning as effective as learning in a traditional classroom? Defend your view."

Nina:
"Online learning can be just as effective. It offers flexibility and lets students review recorded lessons at their own pace."

Marco:
"Classrooms are better for most students. In-person teachers notice when you're confused, and being around classmates keeps you motivated."` },

 { id:10, diff:"hard", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"As artificial intelligence improves, should we allow it to make important decisions—such as in hiring or medical diagnosis? Why or why not?"

Leo:
"We should embrace it carefully. AI can analyze huge amounts of data without the personal bias that affects human judgment."

Priya:
"I'm cautious. AI can repeat the hidden biases in its training data, and people deserve decisions that a human can explain and be held responsible for."` },

 { id:11, diff:"easy", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"Imagine your city has empty land to develop. Should it build more public parks or more parking lots? What would you choose?"

Sara:
"Parks, definitely. Green spaces improve people's health and give families a free place to relax and exercise."

Kenji:
"I'd choose parking. The city already struggles with crowded streets, and more parking would make downtown easier to visit."` },

 { id:12, diff:"medium", prompt:
`Your professor has posted a question in an online class discussion. Read the professor's question and two students' replies, then write your own contribution (at least 5–6 sentences). State your opinion clearly and support it with reasons and examples.

Professor:
"In your education, is it better to specialize in one field early, or to study a broad range of subjects first? Share your opinion."

Maya:
"Specializing early is smart. The sooner you focus, the deeper your expertise becomes, which employers value."

Adam:
"A broad education is more valuable at first. Studying many subjects helps you discover real interests and adapt to a changing job market."` }
];

/* 露出（src読み込みでグローバルに公開） */
if (typeof window !== 'undefined') {
  window.WBANK_BS = WBANK_BS;
  window.WBANK_EMAIL = WBANK_EMAIL;
  window.WBANK_DISC = WBANK_DISC;
}
