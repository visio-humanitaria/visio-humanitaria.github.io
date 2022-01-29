import "react-app-polyfill/stable";
import * as serviceWorker from "./serviceWorker";
import nlp from "bontaki-engine";
import ostentus from "ostentus";

const ui = ostentus({ target: "root" });

function Header(props) {
	const header = ui.text({ body: `
# Bontaki
	` });
	header.style({ backgroundColor: "rgba(0, 0, 0, 0)" });
}

function Menu(props) {
	props.menu.option({ label: "Chat" }, () => {
		routes.home();
	});

	props.menu.option({ label: "Why the Bible?" }, () => {
		routes.about();
	});

	props.menu.option({ label: "Reset Data" }, () => {
		routes.reset();
	});
}

function Reset(props) {
    // private

    const that = this;

    var state = {}

    function init() {
    }

	function render() {
		Header();
		const menu = ui.text({ body: `
### Are you sure you wish to reset your data?

Tap the lower ... to clean slate the application...
		` });

		Menu({ menu: menu });

		const reset = ui.text({ body: "" });
		reset.option({ label: "DELETE DATA" }, () => {
			localStorage.setItem("bontaki_chat_data", JSON.stringify([]));
			routes.home();
		});
	}

	this.display = function() {
		// clean slate the existing interface...
		ui.clear();
		// render the new interface elements...
        render();
		// initialize state data...
		init();
	}
  
};

function About(props) {
    // private

    const that = this;

    var state = {}

    function init() {
    }

	function render() {
		Header();
		const menu = ui.text({ body: `
### Why study scriptures?

As long as humanity could talk to one another, stories have always been told. These 
narratives have always shared common themes and patterns relating to the human condition.
The stories that were most successful and shared for generations were closely tied to the 
collective aims of humanity, hence we have holy narratives and ideas. While one of many, 
the judeo/christian bible is an archive of collective human thought with humanitarian aim.

### What's the purpose of Bontaki?

Bontaki is an ongoing experiment to connect human emotional states to collective humanitarian 
cognition echoed in biblical context. The bible is a meditative tool that uses the utility 
of metaphors for the purpose of moralistic psychoanalysis. In short, Bontaki is a therapeutic 
tool to assist in the ancient practice of meditation.
		` });

		Menu({ menu: menu });
	}

	this.display = function() {
		// clean slate the existing interface...
		ui.clear();
		// render the new interface elements...
        render();
		// initialize state data...
		init();
	}
  
};

function Home(props) {
    // private

    const that = this;

    var state = {}

    function init() {
		// if not exists, create chatbox data array
		if(localStorage.getItem("bontaki_chat_data") === null) {
			localStorage.setItem("bontaki_chat_data", JSON.stringify([]));
		}
    }

	function formattedChat(data) {
		return data.map((d) => {
			return `
${d.answer}
`;
		}).join("");
	}

	function render() {
		Header();

		const menu = ui.text({ body: `
### Speak to biblical texts as a friend.

Bontaki uses natural language processing to read your emotional state and reply within scriptural context.
		` });

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

		Menu({ menu: menu });

		chatbox.update({ body: formattedChat(JSON.parse(localStorage.getItem("bontaki_chat_data"))) });
	}

	this.display = function() {
		// clean slate the existing interface...
		ui.clear();
		// render the new interface elements...
        render();
		// initialize state data...
		init();
	}
  
};

const routes = {
	home: () => { new Home().display() },
	about: () => { new About().display() },
	reset: () => { new Reset().display() }
}

routes.home();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
