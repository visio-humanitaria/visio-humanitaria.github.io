import "react-app-polyfill/stable";
import * as serviceWorker from "./serviceWorker";
import nlp from "bontaki-engine";
import ostentus from "ostentus";
import ElizaBot from "elizabot";

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
});

if(localStorage.getItem("bontaki_chat_data") === null) {
	localStorage.setItem("bontaki_chat_data", JSON.stringify([]));
}

const ui = ostentus({ target: "root" });

function Header(props) {
	const header = ui.text({ body: `
# Bontaki
	` });
	header.style({ backgroundColor: "rgba(0, 0, 0, 0)" });
	setTimeout(() => {
		document.getElementById(`element-${header.props._id}`).onclick = function() {
			routes.home();
		}
	}, 10);
}

function Menu(props) {
	const element = ui.text({ body: "" });
	element.style({ paddingBottom: "0%" });

	element.option({ label: "..." }, () => {
		
	});

	element.option({ label: "💧 Converse" }, () => {
		routes.home();
	});

	element.option({ label: "📕 Your Verses" }, () => {
		routes.historical();
	});

	element.option({ label: "❓ About Bontaki" }, () => {
		routes.about();
	});

	element.option({ label: "📱 Install Mobile" }, () => {
		routes.mobile();
	});

	element.option({ label: "🔒 Privacy Policy" }, () => {
		routes.privacy();
	});


	element.option({ label: "🔥 Reset Data" }, () => {
		routes.reset();
	});
}

function Mobile(props) {
    // private

    const that = this;

    var state = {}

    function init() {
    }

	function render() {
		Header(); 
		Menu();
		ui.text({ body: `
### 🍊 Android
		
Just tap ⋮ then "Install app...".
		` });

		ui.text({ body: `
### 🍏 Ios

Just tap 📤 then "Add to Home Screen".
		` });
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

function Privacy(props) {
    // private

    const that = this;

    var state = {}

    function init() {
    }

	function render() {
		Header(); 
		Menu();
		const description = ui.text({ body: `
### Privacy is Paramount.

Bontaki pledges to keep your data private. It remains with your device and can be 
erased at anytime through the "Reset Data" option.
		` });

		
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

function Reset(props) {
    // private

    const that = this;

    var state = {}

    function init() {
    }

	function render() {
		Header(); 
		Menu();
		const description = ui.text({ body: `
### Are you sure you wish to reset your data?

Tap the ... to clean slate the application.
		` });

		
		description.option({ label: "DELETE DATA" }, () => {
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
		Menu();
		const description = ui.text({ body: `
### Why study scriptures?

As long as humanity could talk to one another, stories have always been told. 
The Judeo/Christian bible is an archive of collective human thought with humanitarian aim.

### What's the purpose of Bontaki?

Bontaki is an ongoing experiment to connect human emotional states to collective humanitarian 
cognition echoed in biblical context. Bontaki is a therapeutic tool to assist in the 
ancient practice of meditation.
		` });

		
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

function Historical(props) {
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
		Menu();

		const description = ui.text({ body: `
### Your thoughts, your scriptures.

These are the verses unique to you. ❤️
		` });

		const chatbox = ui.text({ body: `` });

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

function Home(props) {
    // private

    const that = this;

    var state = { elizabot: new ElizaBot() }

    function init() {
		// if not exists, create chatbox data array
		if(localStorage.getItem("bontaki_chat_data") === null) {
			localStorage.setItem("bontaki_chat_data", JSON.stringify([]));
		}
    }

	function formattedChat(data) {
		return data[0].answer;
	}

	function typeWrite(data) {
		const chars = data.body.split("");
		var string = "";
		var index = 0;
		const interval = setInterval(() => {
			string += chars[index];
			data.element.update({ body: string });
			index += 1;
			if(index === chars.length) {
				clearInterval(interval);
			}
		}, 50);
	}

	function placeHolder(data) {
		setTimeout(() => {
			const form = document.getElementById(`form-${data.element.props._id}`);
			form.message.placeholder = data.message;
		}, 10);
	}

	function render() {
		Header(); 
		Menu();

		const description = ui.text({ body: `
### Speak to biblical texts as a friend.

Bontaki uses natural language processing to read your emotional state and reply within scriptural context.
		` });

		const chatbox = ui.text({ body: `` });

		//chatbox.style({ maxHeight: "200px", overflow: "auto", overflowX: "hidden" });

		const chat = ui.form();

		chat.input({ name: "message", type: "textarea" });
		chat.submit(async (data) => {
			if(data.message.length === 0) {
				return;
			}
			const chat_data = await nlp().findScripture({ utterance: data.message });
			const update = JSON.parse(localStorage.getItem("bontaki_chat_data"));
			update.unshift({ ...chat_data, utterance: data.message });
			localStorage.setItem("bontaki_chat_data", JSON.stringify(update));
			typeWrite({ element: chatbox, body: update[0].answer });
			placeHolder({ element: chat, message: state.elizabot.transform(data.message) });
		});
		
		const chat_data = JSON.parse(localStorage.getItem("bontaki_chat_data"));
		placeHolder({ element: chat, message: "Hey! How are you feeling right now?" });
		if(chat_data.length === 0) {
			typeWrite({ element: chatbox, body: `
and to make it your ambition to lead a quiet life: 
You should mind your own business and work with your 
hands, just as we told you, so that your daily life 
may win the respect of outsiders and so that you will 
not be dependent on anybody.
			` });
			return;
		}
		typeWrite({ element: chatbox, body: chat_data[0].answer });
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
	historical: () => { new Historical().display() },
	about: () => { new About().display() },
	mobile: () => { new Mobile().display() },
	privacy: () => { new Privacy().display() },
	reset: () => { new Reset().display() }
}

routes.home();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
