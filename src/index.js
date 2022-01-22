import "react-app-polyfill/stable";
import * as serviceWorker from "./serviceWorker";
import nlp from "bontaki-engine";
import ostentus from "ostentus";

// compile model to local storage
async function initialize() {
	// if not exists, create chatbox data array
	if(localStorage.getItem("bontaki_chat_data") === null) {
		localStorage.setItem("bontaki_chat_data", JSON.stringify([]));
	}
	else {
		chatbox.update({ body: formattedChat(JSON.parse(localStorage.getItem("bontaki_chat_data"))) });
	}
}

function formattedChat(data) {
	return data.map((d) => {
		return `
${d.answer}
`;
	}).join("");
}

// create user interface
const ui = ostentus({ target: "root" });

const intro_text = `
### Speak to biblical texts as a friend.

Bontaki uses natural language processing to read your emotional state and reply within scriptural context.
`;

const why_bible = `
### How did religion come about?

Religion exists because it was "selected" for by our ancestors. That's correct, religion
is a psychological construct and a social paradigm orchestrated by 13.8 billion years 
of evolution. The question as to of why anything exists can be easily applied to the 
answer of selective reproduction and much of our behavior is driven by our genetics.

### Why study scriptures?

As long as humanity could talk to one another, stories have always been told. These 
narratives have always shared common themes and patterns relating to the human condition.
The stories that were most successful and shared for generations were closely tied to the 
collective aims of humanity, hence we have holy narratives and ideas. While rather arbitrary 
the judeo/christian bible is an archive of collective human thought with humanitarian aim.

### What's the purpose of Bontaki?

Bontaki is an ongoing experiment to connect human emotional states to collective humanitarian 
cognition echoed in biblical context. It had come to my awareness that much of the bible is a 
series of psychoanalytic metaphors which when applied correctly generate psychoanalysis for the 
participants.
`;

const header = ui.text({ body: intro_text });

header.option({ label: "Why the bible?" }, () => {
	header.update({ body: why_bible });
});

header.option({ label: "Type 'reset' to RESET..." }, async () => {
	header.update({ body: "" });
	const update = await header.form();
	if(update.body === "reset") {
		localStorage.setItem("bontaki_chat_data", JSON.stringify([]));
		chatbox.update({ body: "" });
	}
	header.update({ body: intro_text });
});

header.option({ label: "Cancel" }, () => {
	header.update({ body: intro_text });
})

const chatbox = ui.text({ body: `` });

chatbox.style({ maxHeight: "200px", overflow: "auto", overflowX: "hidden" });

const chat = ui.form();

chat.input({ name: "message", type: "textarea" });
chat.submit(async (data) => {
	const chat_data = await nlp().findScripture({ utterance: data.message });
	const update = JSON.parse(localStorage.getItem("bontaki_chat_data"));
	update.unshift({ ...chat_data, utterance: data.message });
	localStorage.setItem("bontaki_chat_data", JSON.stringify(update));
	chatbox.update({ body: formattedChat(update) });
});

initialize();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
