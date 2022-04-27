// start of file - elizadata.js
// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

"use strict";

exports.elizaInitials = [
	"Hey, how are you feeling right now?",
// additions (not original)
	"Hey what's up, is everything ok?",
	"How's your day going so far?",
	"Is everything ok?",
	"Is everything alright?",
	"What's going on in your life?",
	"Hi there, what's going on in your life today?"
];

exports.elizaFinals = [
	"Goodbye. I wish you the best!",
// additions (not original)
	"Have a good one! I will keep you in my thoughts.",
	"I always hope things to improve in your life, until next time!",
	"See ya later!",
	"I'm always here if you need to chat. Have a good one!"
];

exports.elizaQuits = [
	"bye",
	"goodbye",
	"done",
	"exit",
	"quit"
];

exports.elizaPres = [
	"dont", "don't",
	"cant", "can't",
	"wont", "won't",
	"recollect", "remember",
	"recall", "remember",
	"dreamt", "dreamed",
	"dreams", "dream",
	"maybe", "perhaps",
	"certainly", "yes",
	"machine", "computer",
	"machines", "computer",
	"computers", "computer",
	"were", "was",
	"you're", "you are",
	"i'm", "i am",
	"same", "alike",
	"identical", "alike",
	"equivalent", "alike"
];

exports.elizaPosts = [
	"am", "are",
	"your", "my",
	"me", "you",
	"myself", "yourself",
	"yourself", "myself",
	"i", "you",
	"you", "I",
	"my", "your",
	"i'm", "you are"
];

exports.elizaSynons = {
	"be": ["am", "is", "are", "was"],
	"belief": ["feel", "think", "believe", "wish"],
	"cannot": ["can't"],
	"desire": ["want", "need"],
	"everyone": ["everybody", "nobody", "noone"],
	"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
	"happy": ["elated", "glad", "better"],
	"sad": ["unhappy", "depressed", "sick"]
};

exports.elizaKeywords = [

	/*
	 Array of
	 ["<key>", <rank>, [
	 ["<decomp>", [
	 "<reasmb>",
	 "<reasmb>",
	 "<reasmb>"
	 ]],
	 ["<decomp>", [
	 "<reasmb>",
	 "<reasmb>",
	 "<reasmb>"
	 ]]
	 ]]
	 */

	["xnone", 0, [
		["*", [
			"Could you elaborate on that?",
			"What does that bring to mind?",
			"Does anything else concern you?",
			"Is that a problem for you?",
			"Tell me more about that.",
			"Has that been a difficult issue for you?"
		]]
	]],
	["sorry", 0, [
		["*", [
			"Don't worry about it, I'm here for you.",
			"It's all good, this is a judgement free zone.",
			"It's completely ok, don't worry about it.",
			"It didn't bother me at all, it's all good."
		]]
	]],
	["apologise", 0, [
		["*", [
			"goto sorry"
		]]
	]],
	["remember", 5, [
		["* i remember *", [
			"Do you often think of (2)?",
			"Does thinking of (2) bring anything else to mind?",
			"What else do you recollect?",
			"Why do you remember (2) just now?",
			"What in the present situation reminds you of (2)?",
			"What is the connection between me and (2)?",
			"What else does (2) remind you of?"
		]],
		["* do you remember *", [
			"Did you think I would forget (2)?",
			"Why do you think I should recall (2) now?",
			"What about (2)?",
			"goto what",
			"You mentioned (2)?"
		]],
		["* you remember *", [
			"How could I forget (2)?",
			"What about (2) should I remember?",
			"goto you"
		]]
	]],
	["forget", 5, [
		["* i forget *", [
			"Can you think of why you might forget (2)?",
			"Why can't you remember (2)?",
			"How often do you think of (2)?",
			"Does it bother you to forget that?",
			"Could it be a mental block?",
			"Are you generally forgetful?",
			"Do you think you are suppressing (2)?"
		]],
		["* did you forget *", [
			"Why do you ask?",
			"Are you sure you told me?",
			"Would it bother you if I forgot (2)?",
			"Why should I recall (2) just now?",
			"goto what",
			"Tell me more about (2)."
		]]
	]],
	["if", 3, [
		["* if *", [
			"Is that hypothetically what you want or something else entirely?",
			"If it does happen will there be negative consequences or only positive?",
			"Have you done a lot of thinking about the possible consequences?",
			"Is that really a desireable scenario or do you want something else?",
			"Is this a theoretical scenario or something you know will happen?",
			"Is it a pretty good chance that it will happen?",
			"Would that be a desireable outcome for you?"
		]]
	]],
	["dreamed", 4, [
		["* i dreamed *", [
			"Really, (2)?",
			"Have you ever fantasized (2) while you were awake?",
			"Have you ever dreamed (2) before?",
			"goto dream"
		]]
	]],
	["dream", 3, [
		["*", [
			"What does that dream suggest to you?",
			"Do you dream often?",
			"What persons appear in your dreams?",
			"Do you believe that dreams have something to do with your problem?"
		]]
	]],
	["perhaps", 0, [
		["*", [
			"You don't seem quite certain.",
			"Why the uncertain tone?",
			"You aren't sure?",
			"How likely, would you estimate?"
		]]
	]],
	["name", 15, [
		["*", [
			"I am not interested in names."
		]]
	]],
	["deutsch", 0, [
		["*", [
			"goto xforeign",
			"I'm afraid I don't understand German."
		]]
	]],
	["francais", 0, [
		["*", [
			"goto xforeign",
			"I'm afraid I don't understand French."
		]]
	]],
	["italiano", 0, [
		["*", [
			"goto xforeign",
			"I'm afraid I don't understand Italian."
		]]
	]],
	["espanol", 0, [
		["*", [
			"goto xforeign",
			"I'm afraid I don't understand Spanish."
		]]
	]],
	["xforeign", 0, [
		["*", [
			"For now I only speak English."
		]]
	]],
	["hello", 0, [
		["*", [
			"Hey, how are you feeling right now?",
		// additions (not original)
			"Hey what's up, is everything ok?",
			"How's your day going so far?",
			"Is everything ok?",
			"Is everything alright?",
			"What's going on in your life?",
			"Hi there, what's going on in your life today?"
		]]
	]],
	["computer", 50, [
		["*", [
			"Do computers worry you?",
			"Why do you mention computers?",
			"What do you think machines have to do with your problem?",
			"Don't you think computers can help people?",
			"What about machines worries you?",
			"What do you think about machines?",
			"You don't think I am a computer program, do you?"
		]]
	]],
	["am", 0, [
		["* am i *", [
			"Do you believe you are (2)?",
			"Would you want to be (2)?",
			"Do you wish I would tell you you are (2)?",
			"What would it mean if you were (2)?",
			"goto what"
		]],
		["* i am *", [
			"goto i"
		]],
		["*", [
			"Why do you say 'am'?",
			"I don't understand that."
		]]
	]],
	["are", 0, [
		["* are you *", [
			"Why are you interested in whether I am (2) or not?",
			"Would you prefer if I weren't (2)?",
			"Perhaps I am (2) in your fantasies.",
			"Do you sometimes think I am (2)?",
			"goto what",
			"Would it matter to you?",
			"What if I were (2)?"
		]],
		["* you are *", [
			"goto you"
		]],
		["* are *", [
			"Are you sure that's really the situation?",
			"Would you like something else to happen?",
			"What if that wasn't the case?",
			"Are you really sure about that?",
			"Is it possible it's already taking place?",
			"Could something else be going on entirely differently without your knowledge?"
		]]
	]],
	["your", 0, [
		["* your *", [
			"Why are you concerned over my (2)?",
			"What about your own (2)?",
			"Are you worried about someone else's (2)?",
			"Really, my (2)?",
			"What makes you think of my (2)?",
			"Do you want my (2)?"
		]]
	]],
	["was", 2, [
		["* was i *", [
			"What if you were (2)?",
			"Do you think you were (2)?",
			"Were you (2)?",
			"What would it mean if you were (2)?",
			"What does ' (2) ' suggest to you?",
			"goto what"
		]],
		["* i was *", [
			"Were you really?",
			"Is that something you enjoy doing?",
			"Would you rather be doing something else?"
		]],
		["* was you *", [
			"Would you like to believe I was (2)?",
			"What suggests that I was (2)?",
			"What do you think?",
			"What if I had been (2)?"
		]]
	]],
	["i", 0, [
		["* i @desire *", [
			"What would it mean to you if you got (3)?",
			"Why do you want (3)?",
			"Suppose you got (3) in the near future.",
			"What if you never got (3)?",
			"What would getting (3) mean to you?"
		]],
		["* i am* @sad *", [
			"I'm sorry to hear that, what's going on?",
			"That never feels good, what's going on in your life?",
			"I'm sure it's not pleasant to be (3).",
			"Can you explain what made you (3)?"
		]],
		["* i am* @happy *", [
			"That's great to hear! Is something troubling you even so?",
			"Wow that's great news! Is there still something you're wondering?",
			"That's great! You're still processing it all though?",
			"I'm so happy to hear that! Is there something bothering you though?"
		]],
		["* i was *", [
			"goto was"
		]],
		["* i @belief i *", [
			"Do you really think so?",
			"But you're not sure you?",
			"It's good to believe in something, does what you believe trouble you?"
		]],
		["* i* @belief *you *", [
			"goto you"
		]],
		["* i am *", [
			"Do you really think you are or just telling yourself that?",
			"Do you think that's a natural role for you or are you destined for something else?",
			"Do you enjoy being as you are or do you feel yourself changing?",
			"Do you know anyone else who feels the same way?"
		]],
		["* i @cannot *", [
			"Is it that you don't want to or feel helpless and powerless?",
			"What could you do in this situation?",
			"Have you considered all your options? What could you do instead?",
			"Is it something that you'd like to do?",
			"What if you could do it after all but just don't know it?"
		]],
		["* i don't *", [
			"Is it something you'd like to do?",
			"Why don't you want to do it is there something in particular?",
			"Are you sure that's how you feel?",
			"Is that a problem for you?"
		]],
		["* i feel *", [
			"Is that an emotion you would like to feel?",
			"Is that something that happens to you a lot?",
			"Is that something you enjoy feeling?",
			"What does that emotion remind you of?"
		]],
		["* i * you *", [
			"Perhaps in your fantasies we (2) each other.",
			"Do you wish to (2) me?",
			"You seem to need to (2) me.",
			"Do you (2) anyone else?"
		]],
		["*", [
			"You say (1)?",
			"Can you elaborate on that?",
			"What makes you feel that way?",
			"What is it that you'd like to know?",
			"How would you describe what you're feeling?",
			"Do you feel like that's a reasonable idea?",
			"Do you see this being a problem in the future?"
		]]
	]],
	["you", 0, [
		["* you remind me of *", [
			"goto alike"
		]],
		["* you are *", [
			"What makes you think I am (2)?",
			"Does it please you to believe I am (2)?",
			"Do you sometimes wish you were (2)?",
			"Perhaps you would like to be (2)."
		]],
		["* you* me *", [
			"Why do you think I (2) you?",
			"You like to think I (2) you -- don't you?",
			"What makes you think I (2) you?",
			"Really, I (2) you?",
			"Do you wish to believe I (2) you?",
			"Suppose I did (2) you -- what would that mean?",
			"Does someone else believe I (2) you?"
		]],
		["* you *", [
			"Are you referring to me personally or speaking in third person?",
			"Are you talking about me personally?",
			"When you say you do you mean me personally?"
		]]
	]],
	["yes", 0, [
		["*", [
			"You sound confident, is that really how you feel?",
			"Are you sure?",
			"I see. Are you confident it will happen in the future?",
			"Is there anything that could make you change your mind?"
		]]
	]],
	["no", 0, [
		["* no one *", [
			"Are you sure, there's nobody in the same situation?",
			"There must be someone out there who feel the same way right?.",
			"Can you think of anyone at all?",
			"Are you thinking of a very special person?",
			"Who, may I ask?",
			"You have a particular person in mind, don't you?",
			"Who do you think you are talking about?"
		]],
		["*", [
			"Why not?",
			"Why 'no'?"
		]]
	]],
	["my", 2, [
		["$ * my *", [
			"Does that have anything to do with the fact that your (2)?",
			"Lets discuss further why your (2).",
			"Earlier you said your (2).",
			"But your (2)."
		]],
		["* my* @family *", [
			"Tell me more about your family.",
			"Do you have a good relationship with your parents?",
			"Your (3)?",
			"What else comes to your mind when you think of your (3)?"
		]],
		["* my *", [
			"Your (2)?",
			"Why do you say your (2)?",
			"Is that important to you?"
		]]
	]],
	["can", 0, [
		["* can you *", [
			"You believe I can (2) don't you?",
			"goto what",
			"You want me to be able to (2).",
			"Perhaps you would like to be able to (2) yourself."
		]],
		["* can i *", [
			"Whether or not you can (2) depends on you more than on me.",
			"Do you want to be able to (2)?",
			"Perhaps you don't want to (2).",
			"goto what"
		]]
	]],
	["what", 0, [
		["*", [
			"Why do you ask?",
			"Does that question interest you?",
			"What is it you really want to know?",
			"Are such questions much on your mind?",
			"What answer would please you most?",
			"What do you think?",
			"What comes to mind when you ask that?",
			"Have you asked such questions before?",
			"Have you asked anyone else?"
		]]
	]],
	["who", 0, [
		["who *", [
			"goto what"
		]]
	]],
	["when", 0, [
		["when *", [
			"goto what"
		]]
	]],
	["where", 0, [
		["where *", [
			"goto what"
		]]
	]],
	["how", 0, [
		["how *", [
			"goto what"
		]]
	]],
	["because", 0, [
		["*", [
			"Is that the real reason?",
			"Don't any other reasons come to mind?",
			"Does that reason seem to explain anything else?",
			"What other reasons might there be?"
		]]
	]],
	["why", 0, [
		["* why don't you *", [
			"Do you believe I don't (2)?",
			"Perhaps I will (2) in good time.",
			"Should you (2) yourself?",
			"You want me to (2)?",
			"goto what"
		]],
		["* why can't i *", [
			"Do you think you should be able to (2)?",
			"Do you want to be able to (2)?",
			"Do you believe this will help you to (2)?",
			"Have you any idea why you can't (2)?",
			"goto what"
		]],
		["*", [
			"goto what"
		]]
	]],
	["everyone", 2, [
		["* @everyone *", [
			"Really, (2)?",
			"Surely not (2).",
			"Can you think of anyone in particular?",
			"Who, for example?",
			"Are you thinking of a very special person?",
			"Who, may I ask?",
			"Someone special perhaps?",
			"You have a particular person in mind, don't you?",
			"Who do you think you're talking about?"
		]]
	]],
	["everybody", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["nobody", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["noone", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["always", 1, [
		["*", [
			"Can you think of a specific example?",
			"When?",
			"What incident are you thinking of?",
			"Really, always?"
		]]
	]],
	["alike", 10, [
		["*", [
			"In what way?",
			"Do you see any patterns in your thinking?",
			"What does that similarity suggest to you?",
			"What other connections do you see?",
			"What do you suppose that means?",
			"What is the connection, do you suppose?",
			"Could there really be some connection?",
			"How?"
		]]
	]],
	["like", 10, [
		["* @be *like *", [
			"goto alike"
		]]
	]],
	["different", 0, [
		["*", [
			"How is it different?",
			"What differences do you see?",
			"What does that difference suggest to you?",
			"What other distinctions do you see?",
			"What do you suppose that disparity means?",
			"Could there be some connection, do you suppose?",
			"How?"
		]]
	]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
exports.elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof