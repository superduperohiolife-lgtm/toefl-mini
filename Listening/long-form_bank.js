/* 自動生成: build_long_bank.py。長文リスニング(会話/告知/講義)。米語のみ。*/
const LIS_CONVO = [
  {
    "id": "cv-ext",
    "taskType": "conversation",
    "title": "Office Hours",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_cv-ext.mp3",
    "turns": [
      {
        "voice": "en-US-JennyNeural",
        "t": "Professor Lee, do you have a minute? I wanted to ask about the research paper due on Friday."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "Sure, what's on your mind?"
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "I've been having trouble finding enough sources, and I was wondering if I could have a few extra days."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "Normally I don't give extensions, but if you can show me the sources you've found so far, I'd be willing to consider it."
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "That would be great. I have about three good articles already."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "All right. Bring them to my office tomorrow, and we'll talk about a new deadline. But I'd suggest checking the online library database—it has a lot more than the open web."
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "I didn't know that. I'll definitely try it. Thank you so much."
      }
    ],
    "script": "Professor Lee, do you have a minute? I wanted to ask about the research paper due on Friday. Sure, what's on your mind? I've been having trouble finding enough sources, and I was wondering if I could have a few extra days. Normally I don't give extensions, but if you can show me the sources you've found so far, I'd be willing to consider it. That would be great. I have about three good articles already. All right. Bring them to my office tomorrow, and we'll talk about a new deadline. But I'd suggest checking the online library database—it has a lot more than the open web. I didn't know that. I'll definitely try it. Thank you so much.",
    "q": [
      {
        "stem": "Why does the student go to see the professor?",
        "opts": [
          "To change to a different class",
          "To hand in a finished paper",
          "To ask for an extension on a paper",
          "To ask about a grade"
        ],
        "a": 2
      },
      {
        "stem": "What does the professor recommend the student do?",
        "opts": [
          "Choose a new topic",
          "Work with another student",
          "Skip the assignment",
          "Use the online library database"
        ],
        "a": 3
      }
    ]
  },
  {
    "id": "cv-proj",
    "taskType": "conversation",
    "title": "Group Project",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_cv-proj.mp3",
    "turns": [
      {
        "voice": "en-US-AriaNeural",
        "t": "Hey, did you start on the marketing presentation yet?"
      },
      {
        "voice": "en-US-EricNeural",
        "t": "Not really. I was waiting to hear which part I should do."
      },
      {
        "voice": "en-US-AriaNeural",
        "t": "Oh, I thought we agreed you'd take the section on social media."
      },
      {
        "voice": "en-US-EricNeural",
        "t": "Did we? I must have missed that. That's fine, I can do it. When do we need it by?"
      },
      {
        "voice": "en-US-AriaNeural",
        "t": "The whole thing is due next Wednesday, but I'd like to practice together on Monday."
      },
      {
        "voice": "en-US-EricNeural",
        "t": "Monday works for me. Should we meet in the library?"
      },
      {
        "voice": "en-US-AriaNeural",
        "t": "Let's use one of the study rooms—they're quieter. I'll book one for the afternoon."
      },
      {
        "voice": "en-US-EricNeural",
        "t": "Perfect. I'll have my slides ready by then."
      }
    ],
    "script": "Hey, did you start on the marketing presentation yet? Not really. I was waiting to hear which part I should do. Oh, I thought we agreed you'd take the section on social media. Did we? I must have missed that. That's fine, I can do it. When do we need it by? The whole thing is due next Wednesday, but I'd like to practice together on Monday. Monday works for me. Should we meet in the library? Let's use one of the study rooms—they're quieter. I'll book one for the afternoon. Perfect. I'll have my slides ready by then.",
    "q": [
      {
        "stem": "What are the speakers mainly discussing?",
        "opts": [
          "Buying a new computer",
          "Choosing a new class",
          "Planning a vacation",
          "Preparing a group presentation"
        ],
        "a": 3
      },
      {
        "stem": "What does the woman say she will do?",
        "opts": [
          "Book a study room",
          "Cancel the meeting",
          "Email the professor",
          "Write the man's section"
        ],
        "a": 0
      }
    ]
  },
  {
    "id": "cv-fine",
    "taskType": "conversation",
    "title": "At the Library Desk",
    "level": "easy",
    "accent": "us",
    "audio": "audio/long_cv-fine.mp3",
    "turns": [
      {
        "voice": "en-US-GuyNeural",
        "t": "Hi, I'm returning these two books. I think one of them might be overdue."
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "Let me check. Yes, this one was due last Tuesday, so there's a small late fee of two dollars."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "Oh, I didn't realize. Can I pay it now?"
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "Of course. You can pay at the counter, or it'll be added to your student account."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "I'll just pay now. And could I borrow this other one again?"
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "Sure, I'll renew it for you. It'll be due in three weeks."
      }
    ],
    "script": "Hi, I'm returning these two books. I think one of them might be overdue. Let me check. Yes, this one was due last Tuesday, so there's a small late fee of two dollars. Oh, I didn't realize. Can I pay it now? Of course. You can pay at the counter, or it'll be added to your student account. I'll just pay now. And could I borrow this other one again? Sure, I'll renew it for you. It'll be due in three weeks.",
    "q": [
      {
        "stem": "Why is there a fee?",
        "opts": [
          "One book was returned late",
          "A book was damaged",
          "The student joined the library",
          "The student lost a book"
        ],
        "a": 0
      },
      {
        "stem": "What does the student decide to do?",
        "opts": [
          "Add it to his account",
          "Pay the fee right away",
          "Cancel his card",
          "Return later"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "cv-room",
    "taskType": "conversation",
    "title": "Weekend Plans",
    "level": "easy",
    "accent": "us",
    "audio": "audio/long_cv-room.mp3",
    "turns": [
      {
        "voice": "en-US-AriaNeural",
        "t": "Are you doing anything this weekend? I was thinking of going hiking."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "That sounds nice. Where were you planning to go?"
      },
      {
        "voice": "en-US-AriaNeural",
        "t": "There's a trail by the lake, about an hour from campus. The weather's supposed to be clear."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "I'd love to come, but I have to work on Saturday morning. Could we go Sunday instead?"
      },
      {
        "voice": "en-US-AriaNeural",
        "t": "Sunday's fine with me. Let's leave around nine so we have the whole day."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "Great. I'll bring some snacks and water for both of us."
      }
    ],
    "script": "Are you doing anything this weekend? I was thinking of going hiking. That sounds nice. Where were you planning to go? There's a trail by the lake, about an hour from campus. The weather's supposed to be clear. I'd love to come, but I have to work on Saturday morning. Could we go Sunday instead? Sunday's fine with me. Let's leave around nine so we have the whole day. Great. I'll bring some snacks and water for both of us.",
    "q": [
      {
        "stem": "What do the speakers decide to do?",
        "opts": [
          "Stay on campus",
          "Visit a museum",
          "Go to the lake on Saturday",
          "Go hiking on Sunday"
        ],
        "a": 3
      },
      {
        "stem": "Why can't they go on Saturday?",
        "opts": [
          "The man has to work",
          "The woman is busy",
          "The trail is closed",
          "It will rain"
        ],
        "a": 0
      }
    ]
  },
  {
    "id": "cv-advise",
    "taskType": "conversation",
    "title": "Choosing a Course",
    "level": "hard",
    "accent": "us",
    "audio": "audio/long_cv-advise.mp3",
    "turns": [
      {
        "voice": "en-US-EricNeural",
        "t": "I'm trying to decide between the statistics course and the economics course next term. I can only fit one."
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "What's your major again?"
      },
      {
        "voice": "en-US-EricNeural",
        "t": "Psychology. I'll need to analyze data for my research later on."
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "In that case, statistics would probably be more useful—you'll use those skills directly in your studies."
      },
      {
        "voice": "en-US-EricNeural",
        "t": "That makes sense. I was leaning toward economics because it sounded interesting, though."
      },
      {
        "voice": "en-US-JennyNeural",
        "t": "You could always take economics as an elective later. I'd prioritize statistics now, while it fits your schedule."
      }
    ],
    "script": "I'm trying to decide between the statistics course and the economics course next term. I can only fit one. What's your major again? Psychology. I'll need to analyze data for my research later on. In that case, statistics would probably be more useful—you'll use those skills directly in your studies. That makes sense. I was leaning toward economics because it sounded interesting, though. You could always take economics as an elective later. I'd prioritize statistics now, while it fits your schedule.",
    "q": [
      {
        "stem": "What is the student trying to decide?",
        "opts": [
          "Which of two courses to take",
          "What major to choose",
          "Whether to do research",
          "Which professor to ask"
        ],
        "a": 0
      },
      {
        "stem": "What does the advisor recommend, and why?",
        "opts": [
          "Both courses at once",
          "Statistics, because he'll use it in his research",
          "Economics, because it's interesting",
          "Neither course this term"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "cv-cafe",
    "taskType": "conversation",
    "title": "Meeting a Classmate",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_cv-cafe.mp3",
    "turns": [
      {
        "voice": "en-US-GuyNeural",
        "t": "Sorry I'm late—the bus took forever. Have you been waiting long?"
      },
      {
        "voice": "en-US-AriaNeural",
        "t": "Only about ten minutes. I already ordered a coffee. Do you want to get something?"
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "Yeah, I'll grab a tea. So, did you understand the assignment the professor gave us?"
      },
      {
        "voice": "en-US-AriaNeural",
        "t": "Mostly. We each pick a country and compare its education system to ours."
      },
      {
        "voice": "en-US-GuyNeural",
        "t": "Oh, that's clearer now. I was confused about whether we work alone or together."
      },
      {
        "voice": "en-US-AriaNeural",
        "t": "It's individual, but she said we can discuss our ideas. That's actually why I wanted to meet."
      }
    ],
    "script": "Sorry I'm late—the bus took forever. Have you been waiting long? Only about ten minutes. I already ordered a coffee. Do you want to get something? Yeah, I'll grab a tea. So, did you understand the assignment the professor gave us? Mostly. We each pick a country and compare its education system to ours. Oh, that's clearer now. I was confused about whether we work alone or together. It's individual, but she said we can discuss our ideas. That's actually why I wanted to meet.",
    "q": [
      {
        "stem": "Why was the man late?",
        "opts": [
          "He got lost",
          "He forgot the time",
          "He was studying",
          "His bus was delayed"
        ],
        "a": 3
      },
      {
        "stem": "What is the assignment?",
        "opts": [
          "To work on a group video",
          "To compare education systems of two countries",
          "To interview a professor",
          "To write about coffee"
        ],
        "a": 1
      }
    ]
  }
];
const LIS_ANNOUNCE = [
  {
    "id": "a-park",
    "taskType": "announcement",
    "title": "Campus Parking",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_a-park.mp3",
    "turns": [
      {
        "voice": "en-US-GuyNeural",
        "t": "Good morning, students. Please note that the campus parking lot on West Street will be closed this Friday for repaving. If you usually park there, please use the South Street garage instead, which has plenty of open spaces. The work should be finished by Monday morning. We are sorry for any inconvenience and thank you for your cooperation."
      }
    ],
    "script": "Good morning, students. Please note that the campus parking lot on West Street will be closed this Friday for repaving. If you usually park there, please use the South Street garage instead, which has plenty of open spaces. The work should be finished by Monday morning. We are sorry for any inconvenience and thank you for your cooperation.",
    "q": [
      {
        "stem": "What is the announcement mainly about?",
        "opts": [
          "A campus construction project",
          "The closure of a parking lot",
          "A new parking fee",
          "A change to bus routes"
        ],
        "a": 1
      },
      {
        "stem": "What are students asked to do?",
        "opts": [
          "Use the South Street garage",
          "Arrive before Friday",
          "Park on West Street",
          "Take public transportation"
        ],
        "a": 0
      }
    ]
  },
  {
    "id": "a-office",
    "taskType": "announcement",
    "title": "Department Office",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_a-office.mp3",
    "turns": [
      {
        "voice": "en-US-JennyNeural",
        "t": "Attention, please. The biology department is moving its office from Room 102 to Room 215 on the second floor, starting next week. All students who need to submit forms or speak with an advisor should go to the new location. The department phone number will stay the same. Thank you."
      }
    ],
    "script": "Attention, please. The biology department is moving its office from Room 102 to Room 215 on the second floor, starting next week. All students who need to submit forms or speak with an advisor should go to the new location. The department phone number will stay the same. Thank you.",
    "q": [
      {
        "stem": "What is the main purpose of the announcement?",
        "opts": [
          "To announce that an office is moving",
          "To change office hours",
          "To announce a new advisor",
          "To introduce a new course"
        ],
        "a": 0
      },
      {
        "stem": "What will stay the same?",
        "opts": [
          "The floor",
          "The phone number",
          "The advisor",
          "The room number"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "a-libhours",
    "taskType": "announcement",
    "title": "Library Hours",
    "level": "easy",
    "accent": "us",
    "audio": "audio/long_a-libhours.mp3",
    "turns": [
      {
        "voice": "en-US-AriaNeural",
        "t": "Hello, everyone. During final exam week, the main library will extend its hours and stay open until two in the morning. Please remember to bring your student ID, as you'll need it to enter after ten p.m. Quiet study rooms on the third floor can be reserved online. Good luck with your exams."
      }
    ],
    "script": "Hello, everyone. During final exam week, the main library will extend its hours and stay open until two in the morning. Please remember to bring your student ID, as you'll need it to enter after ten p.m. Quiet study rooms on the third floor can be reserved online. Good luck with your exams.",
    "q": [
      {
        "stem": "What is the announcement mainly about?",
        "opts": [
          "A study skills workshop",
          "A new library building",
          "A change in book loans",
          "Extended library hours during exams"
        ],
        "a": 3
      },
      {
        "stem": "What do students need after ten p.m.?",
        "opts": [
          "Their student ID",
          "A parking pass",
          "A reservation form",
          "A library card fee"
        ],
        "a": 0
      }
    ]
  },
  {
    "id": "a-drill",
    "taskType": "announcement",
    "title": "Fire Drill",
    "level": "easy",
    "accent": "us",
    "audio": "audio/long_a-drill.mp3",
    "turns": [
      {
        "voice": "en-US-EricNeural",
        "t": "May I have your attention. A fire drill will take place tomorrow at eleven a.m. When you hear the alarm, please stop what you're doing, leave the building calmly through the nearest exit, and gather in the main parking lot. Do not use the elevators. The drill should last about fifteen minutes. Thank you for your cooperation."
      }
    ],
    "script": "May I have your attention. A fire drill will take place tomorrow at eleven a.m. When you hear the alarm, please stop what you're doing, leave the building calmly through the nearest exit, and gather in the main parking lot. Do not use the elevators. The drill should last about fifteen minutes. Thank you for your cooperation.",
    "q": [
      {
        "stem": "What should students do when they hear the alarm?",
        "opts": [
          "Leave through the nearest exit",
          "Call the front office",
          "Take the elevator",
          "Stay in the classroom"
        ],
        "a": 0
      },
      {
        "stem": "Where should everyone gather?",
        "opts": [
          "By the elevators",
          "In the main parking lot",
          "On the third floor",
          "At the library"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "a-shuttle",
    "taskType": "announcement",
    "title": "Shuttle Service",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_a-shuttle.mp3",
    "turns": [
      {
        "voice": "en-US-GuyNeural",
        "t": "Good afternoon. Starting next Monday, the campus shuttle will run every fifteen minutes instead of every half hour. A new stop has also been added near the science building. The updated schedule is posted at each stop and on the university app. Please note that the shuttle will not run on weekends. Thank you."
      }
    ],
    "script": "Good afternoon. Starting next Monday, the campus shuttle will run every fifteen minutes instead of every half hour. A new stop has also been added near the science building. The updated schedule is posted at each stop and on the university app. Please note that the shuttle will not run on weekends. Thank you.",
    "q": [
      {
        "stem": "What is the main change to the shuttle service?",
        "opts": [
          "It will run more frequently",
          "It will cost more",
          "It will stop running",
          "It will only run on weekends"
        ],
        "a": 0
      },
      {
        "stem": "Where can students find the new schedule?",
        "opts": [
          "In the library",
          "By email only",
          "On the university app",
          "At the science lab"
        ],
        "a": 2
      }
    ]
  },
  {
    "id": "a-career",
    "taskType": "announcement",
    "title": "Career Fair",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_a-career.mp3",
    "turns": [
      {
        "voice": "en-US-JennyNeural",
        "t": "Attention, students. The annual career fair will be held this Thursday in the main gym from ten a.m. to four p.m. Over fifty companies will be there to talk about jobs and internships. We recommend bringing several copies of your resume and dressing professionally. Registration is not required, but you may want to arrive early, as it gets busy. We hope to see you there."
      }
    ],
    "script": "Attention, students. The annual career fair will be held this Thursday in the main gym from ten a.m. to four p.m. Over fifty companies will be there to talk about jobs and internships. We recommend bringing several copies of your resume and dressing professionally. Registration is not required, but you may want to arrive early, as it gets busy. We hope to see you there.",
    "q": [
      {
        "stem": "What is the announcement mainly about?",
        "opts": [
          "An upcoming career fair",
          "A resume workshop",
          "A change in class times",
          "A new gym schedule"
        ],
        "a": 0
      },
      {
        "stem": "What are students advised to bring?",
        "opts": [
          "A student ID only",
          "A registration form",
          "Copies of their resume",
          "Their laptops"
        ],
        "a": 2
      }
    ]
  }
];
const LIS_TALK = [
  {
    "id": "tk-sleep",
    "taskType": "talk",
    "title": "Lecture: Sleep & Memory",
    "level": "hard",
    "accent": "us",
    "audio": "audio/long_tk-sleep.mp3",
    "turns": [
      {
        "voice": "en-US-GuyNeural",
        "t": "Today I want to talk about why sleep is so important for learning. You might think that when you sleep, your brain simply shuts down and rests. But in fact, the sleeping brain is remarkably busy. One of its key jobs is to strengthen the memories you formed during the day. When you learn something new, the connections between your brain cells are still fragile. During deep sleep, the brain replays these new patterns, almost like rehearsing them, which makes the memories more stable and easier to recall later. This is why students who get a full night's sleep after studying tend to remember material better than those who stay up all night. Sleep also seems to help with problem-solving: people often wake up with a solution to a problem that puzzled them the night before. So the next time you have an exam, remember that sleeping well may be just as important as the studying itself."
      }
    ],
    "script": "Today I want to talk about why sleep is so important for learning. You might think that when you sleep, your brain simply shuts down and rests. But in fact, the sleeping brain is remarkably busy. One of its key jobs is to strengthen the memories you formed during the day. When you learn something new, the connections between your brain cells are still fragile. During deep sleep, the brain replays these new patterns, almost like rehearsing them, which makes the memories more stable and easier to recall later. This is why students who get a full night's sleep after studying tend to remember material better than those who stay up all night. Sleep also seems to help with problem-solving: people often wake up with a solution to a problem that puzzled them the night before. So the next time you have an exam, remember that sleeping well may be just as important as the studying itself.",
    "q": [
      {
        "stem": "What is the talk mainly about?",
        "opts": [
          "How many hours of sleep people need",
          "How sleep helps strengthen memory and learning",
          "Different stages of sleep",
          "Why people have dreams"
        ],
        "a": 1
      },
      {
        "stem": "What happens to new memories during deep sleep?",
        "opts": [
          "They are erased",
          "The brain replays them, making them more stable",
          "They become weaker",
          "They move to short-term memory"
        ],
        "a": 1
      },
      {
        "stem": "What does the professor suggest students do before an exam?",
        "opts": [
          "Drink more coffee",
          "Get a full night's sleep",
          "Study all night",
          "Avoid sleeping"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "tk-birds",
    "taskType": "talk",
    "title": "Lecture: Bird Migration",
    "level": "hard",
    "accent": "us",
    "audio": "audio/long_tk-birds.mp3",
    "turns": [
      {
        "voice": "en-US-JennyNeural",
        "t": "Every year, billions of birds travel thousands of kilometers between their breeding grounds and warmer regions where they spend the winter. This behavior is called migration. For a long time, scientists wondered how birds find their way across such enormous distances, often returning to the exact same location year after year. Research has revealed that birds use several methods at once. During the day, many species use the position of the sun as a compass. At night, others rely on the patterns of the stars. Perhaps most remarkably, many birds can sense the Earth's magnetic field, which helps them keep a steady direction even when the sky is cloudy. Young birds appear to inherit a basic sense of the direction they should travel, but they also refine their routes through experience. Understanding these abilities also helps us protect the habitats that migrating birds depend on."
      }
    ],
    "script": "Every year, billions of birds travel thousands of kilometers between their breeding grounds and warmer regions where they spend the winter. This behavior is called migration. For a long time, scientists wondered how birds find their way across such enormous distances, often returning to the exact same location year after year. Research has revealed that birds use several methods at once. During the day, many species use the position of the sun as a compass. At night, others rely on the patterns of the stars. Perhaps most remarkably, many birds can sense the Earth's magnetic field, which helps them keep a steady direction even when the sky is cloudy. Young birds appear to inherit a basic sense of the direction they should travel, but they also refine their routes through experience. Understanding these abilities also helps us protect the habitats that migrating birds depend on.",
    "q": [
      {
        "stem": "What is the lecture mainly about?",
        "opts": [
          "How fast birds can fly",
          "What birds eat in winter",
          "Why birds build nests",
          "How birds find their way during migration"
        ],
        "a": 3
      },
      {
        "stem": "At night, what do some birds use to navigate?",
        "opts": [
          "The position of the sun",
          "The color of the sky",
          "The sound of the wind",
          "The patterns of the stars"
        ],
        "a": 3
      },
      {
        "stem": "What helps birds keep direction when the sky is cloudy?",
        "opts": [
          "The position of the moon",
          "The warmth of the air",
          "Following roads",
          "Their sense of the Earth's magnetic field"
        ],
        "a": 3
      }
    ]
  },
  {
    "id": "tk-photo",
    "taskType": "talk",
    "title": "Lecture: Photosynthesis",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_tk-photo.mp3",
    "turns": [
      {
        "voice": "en-US-EricNeural",
        "t": "Let's talk about how plants make their own food, a process called photosynthesis. Unlike animals, plants don't eat. Instead, they capture energy from sunlight and use it to build sugar. This happens mainly in the leaves, inside tiny structures that contain a green pigment called chlorophyll. The plant takes in carbon dioxide from the air through small openings in its leaves, and water from the soil through its roots. Using the energy from sunlight, it combines these into sugar, which fuels the plant's growth. Just as importantly, the process releases oxygen as a byproduct—the very oxygen we breathe. So in a real sense, nearly all life on Earth depends on this quiet chemical reaction happening inside green leaves."
      }
    ],
    "script": "Let's talk about how plants make their own food, a process called photosynthesis. Unlike animals, plants don't eat. Instead, they capture energy from sunlight and use it to build sugar. This happens mainly in the leaves, inside tiny structures that contain a green pigment called chlorophyll. The plant takes in carbon dioxide from the air through small openings in its leaves, and water from the soil through its roots. Using the energy from sunlight, it combines these into sugar, which fuels the plant's growth. Just as importantly, the process releases oxygen as a byproduct—the very oxygen we breathe. So in a real sense, nearly all life on Earth depends on this quiet chemical reaction happening inside green leaves.",
    "q": [
      {
        "stem": "What is the talk mainly about?",
        "opts": [
          "Why leaves are green",
          "How plants make food through photosynthesis",
          "How roots grow",
          "How animals find food"
        ],
        "a": 1
      },
      {
        "stem": "What gas do plants take in from the air?",
        "opts": [
          "Oxygen",
          "Hydrogen",
          "Nitrogen",
          "Carbon dioxide"
        ],
        "a": 3
      },
      {
        "stem": "What is released as a byproduct?",
        "opts": [
          "Oxygen",
          "Sugar",
          "Carbon dioxide",
          "Water vapor"
        ],
        "a": 0
      }
    ]
  },
  {
    "id": "tk-tides",
    "taskType": "talk",
    "title": "Lecture: Ocean Tides",
    "level": "hard",
    "accent": "us",
    "audio": "audio/long_tk-tides.mp3",
    "turns": [
      {
        "voice": "en-US-AriaNeural",
        "t": "Have you ever noticed how the level of the sea rises and falls along the coast each day? These regular changes are called tides, and they are caused mainly by the gravitational pull of the moon. As the moon orbits the Earth, its gravity tugs on the oceans, creating a bulge of water on the side of the Earth facing the moon. There's a second bulge on the opposite side as well. As the Earth rotates, coastlines pass through these bulges, which is why most places experience two high tides and two low tides each day. The sun also affects tides, though less strongly than the moon. When the sun and moon line up, their combined pull produces especially high tides. Understanding tides is important for shipping, fishing, and coastal communities."
      }
    ],
    "script": "Have you ever noticed how the level of the sea rises and falls along the coast each day? These regular changes are called tides, and they are caused mainly by the gravitational pull of the moon. As the moon orbits the Earth, its gravity tugs on the oceans, creating a bulge of water on the side of the Earth facing the moon. There's a second bulge on the opposite side as well. As the Earth rotates, coastlines pass through these bulges, which is why most places experience two high tides and two low tides each day. The sun also affects tides, though less strongly than the moon. When the sun and moon line up, their combined pull produces especially high tides. Understanding tides is important for shipping, fishing, and coastal communities.",
    "q": [
      {
        "stem": "What is the lecture mainly about?",
        "opts": [
          "How ships are built",
          "What causes ocean tides",
          "Why oceans are salty",
          "How the moon formed"
        ],
        "a": 1
      },
      {
        "stem": "What is the main cause of tides?",
        "opts": [
          "The gravitational pull of the moon",
          "Ocean winds",
          "The Earth's heat",
          "Underwater currents"
        ],
        "a": 0
      },
      {
        "stem": "When do especially high tides occur?",
        "opts": [
          "Only in summer",
          "When the sun and moon line up",
          "When the moon is hidden",
          "During storms"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "tk-glacier",
    "taskType": "talk",
    "title": "Lecture: Glaciers",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_tk-glacier.mp3",
    "turns": [
      {
        "voice": "en-US-GuyNeural",
        "t": "Today we'll look at glaciers, which are huge masses of ice that form on land. A glacier begins when more snow falls each winter than melts in summer. Over many years, the layers of snow pile up and become compressed into thick, solid ice. Because of their enormous weight, glaciers slowly flow downhill, almost like very slow rivers. As they move, they carve out valleys and grind down rock, reshaping the landscape over thousands of years. Glaciers are also important because they store a large share of the world's fresh water. Today, many glaciers are shrinking as global temperatures rise, which concerns scientists who study the water supply for millions of people."
      }
    ],
    "script": "Today we'll look at glaciers, which are huge masses of ice that form on land. A glacier begins when more snow falls each winter than melts in summer. Over many years, the layers of snow pile up and become compressed into thick, solid ice. Because of their enormous weight, glaciers slowly flow downhill, almost like very slow rivers. As they move, they carve out valleys and grind down rock, reshaping the landscape over thousands of years. Glaciers are also important because they store a large share of the world's fresh water. Today, many glaciers are shrinking as global temperatures rise, which concerns scientists who study the water supply for millions of people.",
    "q": [
      {
        "stem": "What is the talk mainly about?",
        "opts": [
          "How glaciers form and shape the land",
          "How rivers flow",
          "Where rain comes from",
          "Why it snows in winter"
        ],
        "a": 0
      },
      {
        "stem": "How do glaciers change the landscape?",
        "opts": [
          "They build mountains quickly",
          "They create deserts",
          "They carve valleys and grind down rock",
          "They cause earthquakes"
        ],
        "a": 2
      },
      {
        "stem": "Why are scientists concerned about shrinking glaciers?",
        "opts": [
          "They store fresh water many people rely on",
          "They cause more snow",
          "They make oceans colder",
          "They block shipping routes"
        ],
        "a": 0
      }
    ]
  },
  {
    "id": "tk-ants",
    "taskType": "talk",
    "title": "Lecture: Ant Colonies",
    "level": "med",
    "accent": "us",
    "audio": "audio/long_tk-ants.mp3",
    "turns": [
      {
        "voice": "en-US-JennyNeural",
        "t": "Ants are among the most successful creatures on Earth, and part of their success comes from how well they cooperate. A single ant is not very capable on its own, but a colony can act almost like one large organism. Ants communicate mainly through chemicals called pheromones. When an ant finds food, it lays down a chemical trail on its way back to the nest, and other ants follow that trail to the food. The more ants that travel the path, the stronger the trail becomes, so the colony quickly focuses its effort on the best food sources. Different ants also take on different jobs—some care for the young, some search for food, and some defend the nest. This division of labor allows the colony to work efficiently without anyone being in charge."
      }
    ],
    "script": "Ants are among the most successful creatures on Earth, and part of their success comes from how well they cooperate. A single ant is not very capable on its own, but a colony can act almost like one large organism. Ants communicate mainly through chemicals called pheromones. When an ant finds food, it lays down a chemical trail on its way back to the nest, and other ants follow that trail to the food. The more ants that travel the path, the stronger the trail becomes, so the colony quickly focuses its effort on the best food sources. Different ants also take on different jobs—some care for the young, some search for food, and some defend the nest. This division of labor allows the colony to work efficiently without anyone being in charge.",
    "q": [
      {
        "stem": "What is the lecture mainly about?",
        "opts": [
          "How ants build hills",
          "What ants eat",
          "Why ants are small",
          "How ants cooperate as a colony"
        ],
        "a": 3
      },
      {
        "stem": "How do ants mainly communicate?",
        "opts": [
          "By touch only",
          "By sight",
          "By sound",
          "Through chemical trails (pheromones)"
        ],
        "a": 3
      },
      {
        "stem": "What does 'division of labor' mean here?",
        "opts": [
          "All ants do the same task",
          "Different ants do different jobs",
          "One ant leads the rest",
          "Ants stop working in winter"
        ],
        "a": 1
      }
    ]
  }
];
