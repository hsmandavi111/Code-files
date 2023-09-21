// const { text } = require("cheerio/lib/api/manipulation");
const port = 8000;
const gptport = 8000;
let openfirsttime = true;

let curentlang = "English";

// const fetchaddress = `http://localhost:${port}/dialogflow/rest/text`;


const fetchaddress = `https://chatbot-backend-i7yyhwtvrq-el.a.run.app/dialogflow/rest/text`;

// let newfetchaddress = `http://localhost:${port}/dialogflow/rest/text`;

let newfetchaddress = `https://chatbot-backend-i7yyhwtvrq-el.a.run.app/dialogflow/rest/text`;

// const gptfetchaddress = `http://localhost:${gptport}/dialogflow/rest/gpt`;

const gptfetchaddress = 'https://chatbot-backend-i7yyhwtvrq-el.a.run.app/dialogflow/rest/gpt'
// Get DOM elements
const chatIcon = document.getElementById("chat-icon");
const chatWindow = document.getElementById("chat-window");
const closeButton = document.getElementById("close-button");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");
const messageContainer = document.getElementById("message-container");

const languageDropdownDiv = document.getElementById("languagebutton")

function langselection(text) {
  const data2 = { text: text };
  displayMessage(`${text}`, null, "USER", null);
  chatMessages.appendChild(dotContainer);

  chatMessages.scrollTop = chatMessages.scrollHeight;

  fetch(`${fetchaddress}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
  })
    .then((response) => response.json())
    .then((result) => {
      // displayMessage("GPT");
      console.log("backend result", result);

      setTimeout(() => {
        // console.log("After 3 seconds");
      }, 2000);

      if (dotContainer && dotContainer.parentNode) {
        chatMessages.removeChild(dotContainer);
      }

      // chatMessages.removeChild(gifcontainer2);
      displayMessage(result.text, result.urls, "BOT", result.rich.richContent);
      // Do something with the response from the server
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function toggleDropdown() {
  var dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

// <<<<<<<<<<=========EXP===========>>>>>>>>>
const gifcontainer = document.createElement("div");
const gifUrl =
  "https://drive.google.com/uc?id=17r7kms7eI3iERtcZOsGSj6zw9ybEaJAX";
const gifElement = document.createElement("img");
gifElement.src = gifUrl;
gifElement.width = 180;
// gifElement.height = 80;
gifElement.classList.add("gif-style");
gifcontainer.appendChild(gifElement);
//   <<<<<<<<<<<==========EXP==========>>>>>>>>>>

//   <<<<<<<<<<<==========dot-container==========>>>>>>>>>>
const dotContainer = document.createElement("div");
dotContainer.classList.add("dot-container");

// Create three dot elements and add them to the container
for (let i = 0; i < 4; i++) {
  const dotElement = document.createElement("div");
  dotElement.classList.add("dot");
  dotContainer.appendChild(dotElement);
}
//   <<<<<<<<<<<==========dot-container==========>>>>>>>>>>

function extractYouTubeVideoId(url) {
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get("v");
}

// its called from html code
function changeLanguage(languageCode) {
  var languageButton = document.getElementById('language-button');
  var dropdownContent = document.getElementById('dropdown-content');
  
  switch (languageCode) {
    case 'EN':
      languageButton.innerHTML = '<span class="globe-icon">🌍</span> English&nbsp';
      langselection("English");
      curentlang = "English";
      break;
    case 'HI':
      languageButton.innerHTML = '<span class="globe-icon">🌍</span> हिन्दी&nbsp';
      langselection("हिन्दी");
      curentlang = "Hindi";
      break;
    case 'CH':
      languageButton.innerHTML = '<span class="globe-icon">🌍</span> छत्तीसगढ़ी&nbsp';
      langselection("छत्तीसगढ़ी");
      curentlang = "Hindi";
      break;
    default:
      break;
  }
  
  dropdownContent.style.display = 'none'; // Hide the dropdown after selecting an option
}

// its called from here only
function changeLanguage2(languageCode) {
  var languageButton = document.getElementById('language-button');
  var dropdownContent = document.getElementById('dropdown-content');
  
  switch (languageCode) {
    case 'EN':
      languageButton.innerHTML = '<span class="globe-icon">🌍</span> English&nbsp';
      curentlang = "English";
      break;
    case 'HI':
      languageButton.innerHTML = '<span class="globe-icon">🌍</span> हिन्दी&nbsp';
      curentlang = "Hindi";
      break;
    case 'CH':
      languageButton.innerHTML = '<span class="globe-icon">🌍</span> छत्तीसगढ़ी&nbsp';
      curentlang = "Hindi";
      break;
    default:
      break;
  }
  
  dropdownContent.style.display = 'none'; // Hide the dropdown after selecting an option
}

// to display welcome message 
function welcome(){

  
  const answerText4 = document.createElement("span");
  answerText4.textContent = "Hello there, I'm KRISH .";
  answerText4.classList.add("bot-message");
  chatMessages.appendChild(answerText4);

  const parentintro = document.createElement("div");
  parentintro.classList.add("crop-parent");

  const intro = document.createElement("div");
  const intimg = document.createElement("img");
  const intbutton = document.createElement("a");
  intimg.src =
    "https://www.cropway.com/wp-content/uploads/2021/10/Upper-image-1.png";
  intimg.height = 180;
  intro.appendChild(intimg);
  intro.classList.add("crop-message");
  intbutton.classList.add("crop-button");
  intbutton.textContent = "Cropway-home";
  intbutton.href = "https://marketplace.cropway.com/";
  intbutton.target = "_blank";
  intro.appendChild(intbutton);

  // <<<<<<<<<=======newexp==========>>>>>>>>

  // Create the container for the text and buttons
  const textAndButtonsContainer = document.createElement("div");
  textAndButtonsContainer.classList.add("text-buttons-container");

  // Add the text and buttons to the container
  const textLine = document.createElement("p");
  // textLine.textContent = "कृपया अपनी भाषा चुने? Please Select your language ?";
  textLine.innerHTML =
    "कृपया अपनी भाषा चुने :<br>Please Select your language :";
  textAndButtonsContainer.appendChild(textLine);

  const button1 = document.createElement("button");
  button1.classList.add("lang-button");
  button1.textContent = "हिन्दी";
  textAndButtonsContainer.appendChild(button1);

  const button2 = document.createElement("button");
  button2.classList.add("lang-button");
  button2.textContent = "English";
  textAndButtonsContainer.appendChild(button2);

  const button3 = document.createElement("button");
  button3.classList.add("lang-button");
  button3.textContent = "छत्तीसगढ़ी";
  textAndButtonsContainer.appendChild(button3);

  parentintro.appendChild(intro);
  parentintro.appendChild(textAndButtonsContainer);

  button1.addEventListener("click", () => {
    langselection("हिन्दी");
    changeLanguage2('HI')
    curentlang = "Hindi";
  });

  button2.addEventListener("click", () => {
    langselection("English");
    changeLanguage2('EN')
    curentlang = "English";
  });

  button3.addEventListener("click", () => {
    langselection("छत्तीसगढ़ी");
    changeLanguage2('CH')
    curentlang = "Hindi";
  });

  chatMessages.appendChild(parentintro);

  chatMessages.scrollTop = chatMessages.scrollHeight;

}

// Toggle chat window visibility
function toggleChatWindow() {


const buttonElement = document.createElement('button');
buttonElement.id = 'language-button';
buttonElement.className = 'dropbtn';
// Set the onClick function for the button
buttonElement.onclick = toggleDropdown;

// Create the globe icon span element
const globeIconSpan = document.createElement('span');
globeIconSpan.className = 'globe-icon';
globeIconSpan.textContent = '🌍'; // Set the content of the span

// Create the text node for the button ("English")
const buttonText = document.createTextNode('English');

// Append the span and text node to the button
buttonElement.appendChild(globeIconSpan);
buttonElement.appendChild(buttonText);

// Create the div with id "dropdown-content" and class "dropdown-content"
const dropdownContentDiv = document.createElement('div');
dropdownContentDiv.id = 'dropdown-content';
dropdownContentDiv.className = 'dropdown-content';

// Create anchor elements for the language options
const englishAnchor = document.createElement('a');
englishAnchor.href = '#';
englishAnchor.textContent = 'English';
englishAnchor.onclick = function() {
  changeLanguage('EN');
  // Add any other functionality you need for this click event
};


const hindiAnchor = document.createElement('a');
hindiAnchor.href = '#';
hindiAnchor.textContent = 'हिन्दी';

hindiAnchor.onclick = function() {
  changeLanguage('HI');
  // Add any other functionality you need for this click event
};


const chattisgarhiAnchor = document.createElement('a');
chattisgarhiAnchor.href = '#';
chattisgarhiAnchor.textContent = 'छत्तीसगढ़ी';
chattisgarhiAnchor.onclick = function() {
  changeLanguage('CH');
  // Add any other functionality you need for this click event
};

// Append the anchor elements to the dropdown content div
dropdownContentDiv.appendChild(englishAnchor);
dropdownContentDiv.appendChild(hindiAnchor);
dropdownContentDiv.appendChild(chattisgarhiAnchor);

// Append the button and dropdown content div to the main container
languageDropdownDiv.appendChild(buttonElement);
languageDropdownDiv.appendChild(dropdownContentDiv);

// Append the close button to wherever you need it

// Now you can append the `languageDropdownDiv` and `closeButton` to your desired parent element.



  chatIcon.style.display = "none"; // Hide the chat icon
  chatWindow.style.display = "flex"; // Show the chat window

  if(openfirsttime){
    openfirsttime = false
  fetch(`${fetchaddress}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "languageselection",
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      welcome();
      console.log("backend result", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });}


}

function dataprocessing(data){


  console.log("dataprocesinginside")
  const dataArray = data.split('\n');
  const questionArray = [];

  let richA = {
    richContent: [
      [
        {
          options: [],
          type: "chipsGPT",
        },
      ],
    ],
  };


let indexOfFirstQuestion = -1
  dataArray.forEach((message, index) => {
    if (message.includes('?')) {
      questionArray.push(message);
      let d = { text: message };
      console.log("this is d  ",d)
      richA.richContent[0][0].options.push(d);
      if (indexOfFirstQuestion === -1) {
        indexOfFirstQuestion = index;
      }
    }
  });

  let splitIndex = indexOfFirstQuestion - 1;

  let beforeSplit = ''

 console.log("firstquestion",dataArray[indexOfFirstQuestion])
 console.log("firstquestion-1",dataArray[indexOfFirstQuestion-1])
 console.log("firstquestion-2",dataArray[indexOfFirstQuestion-2])


if (splitIndex >= 0 && splitIndex < dataArray.length) {
  // Split the original data based on the text at the specified index
  let textToSplit = dataArray[splitIndex];

  while(textToSplit.length == 0)
  {
    textToSplit = dataArray[splitIndex];
    splitIndex--
  }


  console.log("texttosplit",textToSplit)
  
  // Split the original data into two parts
   beforeSplit = data.split(textToSplit)[0];
  // const afterSplit = data.split(textToSplit)[1];

  console.log("beforsplit")
  console.log(beforeSplit)
  
  // console.log('Before Split:', beforeSplit);
  // console.log('After Split:', afterSplit);
} else {
  console.log('splitIndex is out of bounds or not found in the dataArray.');
}
// In this code, we first check if splitIndex is within the valid range (greater than or equal to 0 and less than the length of dataArray). Then, we extract the text at the specified index from dataArray using dataArray[splitIndex]. Finally, we split the original data into two parts using data.split(textToSplit), where textToSplit is the text obtained from dataArray, resulting in beforeSplit and afterSplit.



console.log("richcontents", richA.richContent)
displayMessage(beforeSplit, [], "BOT", richA.richContent);

  

}

function questions(data) {

  
  let richA = {
    richContent: [
      [
        {
          options: [],
          type: "chipsGPT",
        },
      ],
    ],
  };


  context = data;

  console.log("all data from chatgpt and need to extract question")
  console.log(data)

  const wordsToSearch = [
    "Related questions:",
    "Related Questions:",
    "Related question:",
    "Related Question:",
  ];

  let matchedWord = null;

  // Iterate through the array of words to search
  for (const word of wordsToSearch) {
    if (context.includes(word)) {
      matchedWord = word;
      break; // Exit the loop if a match is found
    }
  }

  let part2 = "";
  let part1 = "";

  if (matchedWord != null) {
    let splitParagraph = context.split(matchedWord);

    if (splitParagraph.length == 2) {
      part1 = splitParagraph[0].trim(); // First part without "Similar questions:"
      part2 = splitParagraph[1].trim();

      if (part1.length < 1) {
        part1 = splitParagraph[1].trim();
        let part1par = part1.split("?");
        let l = part1par.length - 1;
        part1 = part1par[l].trim();
      }
    } else {
      if (splitParagraph.length == 3) {
        part1 = splitParagraph[1].trim();
        let part1par = part1.split("?");
        let l = part1par.length - 1;
        part1 = part1par[l].trim();
        part2 = splitParagraph[2].trim();
      }
    }

    if (part2.length > 2) {
      let linesArray2 = part2.split("\n");
      
      for (y in linesArray2) {
        //  let t = linesArray2[i];
        //  let d2 = { text: t };
        richA.richContent[0][0].options.push({ text: linesArray2[y]});
      }
    }
    displayMessage(part1, [], "BOT", richA.richContent);
  } else {
    dataprocessing(data)
  }


  

  

  // return richA
}

// Close chat window
function closeChatWindow() {
  chatWindow.style.display = "none";
  chatIcon.style.display = "block";
}

// Handle send button click event
async function handleSendButtonClick() {
  const message = messageInput.value;
  const ask = messageInput.value + ` write answer in ${curentlang}`;
  const data = {
    text: ask,
  };

  if (message.trim() !== "") {
    displayMessage(message, null, "USER", null);

    chatMessages.appendChild(dotContainer);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    messageInput.value = "";

    let gptdata = "";

    const messageElement = document.createElement("div");
    const messagediv = document.createElement("div");

    let mflag = true;
    // console.log("testing");
    fetch(gptfetchaddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        const reader = response.body.getReader();

        function readStream() {
          return reader.read().then(({ done, value }) => {

            const chunk = new TextDecoder().decode(value);
            
            if (done) {
              // console.log(chunk)
              questions(gptdata);
              // dataprocessing(gptdata);
              chatMessages.removeChild(messageElement);
              console.log("Stream done");
              return;
            }

            
            // console.log("Received chunk:", chunk);
            // console.log(chunk);
            // console.log(chunk.text)

            const objectRegex = /{[^}]*}/g;
            const objects = chunk.match(objectRegex);

            for (const objectStr of objects) {
              try {
                const jsonChunk = JSON.parse(objectStr);

                gptdata = gptdata + jsonChunk.text;

                const formattedMessage = gptdata.replace(/\n/g, "<br>");
                if (dotContainer && dotContainer.parentNode) {
                  chatMessages.removeChild(dotContainer);
                }

                if (mflag) {
                  mflag = false;
                  messageElement.classList.add("bot-message");
                  messageElement.appendChild(messagediv);
                  chatMessages.appendChild(messageElement);
                  chatMessages.scrollTop = chatMessages.scrollHeight;
                }

                messagediv.innerHTML = formattedMessage;
                chatMessages.scrollTop = chatMessages.scrollHeight;
              } catch (error) {
                console.error("Error parsing JSON:", error);
              }
            }

            return readStream();
          });
        }

        return readStream();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

// Display a new message
function displayMessage(message, urls, role, richContent) {
  const messageElement = document.createElement("div");

  // ============n================
  // console.log("This is my 1st role", role);

  if (role === "BOT") {
    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answer-container");

    // Create the line icons with different lengths
    for (let i = 0; i < 4; i++) {
      const lineIcon = document.createElement("div");
      lineIcon.classList.add("line-icon");
      lineIcon.style.width = `${i + 1}px`; // Customize the length as needed
      answerContainer.appendChild(lineIcon);
    }
  }

  // ==============n=============

  const urlsContainer = document.createElement("ol");

  if (role === "BOT") {
    // console.log("got inside this");
    let paragraph = message;

    // =============exp=====================
    // console.log("paragrph recieved", paragraph);
    const characterLength = message.length;
    // console.log(characterLength, "this is character length");

    // <<<<<<<<<========similar questions experiment==========>>>>>>>>>>>

    let splitParagraph = paragraph.split("Related questions:");
    let part2 = "";
    // Make sure there are exactly two parts after the split
    if (splitParagraph.length === 2) {
      const part1 = splitParagraph[0].trim(); // First part without "Similar questions:"
      part2 = splitParagraph[1].trim(); // Second part without "Similar questions:"
      console.log("Part 1:");
      console.log(part1);
      console.log("Part 2:");
      console.log(part2);
    } else {
      splitParagraph = paragraph.split("Related Questions:");
      if (splitParagraph.length === 2) {
        const part1 = splitParagraph[0].trim(); // First part without "Similar questions:"
        part2 = splitParagraph[1].trim(); // Second part without "Similar questions:"
        console.log("Part 1:");
        console.log("the part 1", part1);
        console.log("Part 2:");
        console.log("the part 2", part2);
      } else {
        console.log("Related Questions: is not available");
      }
    }

    const linesArray = part2.split("\n");

    // Print the array
    console.log(linesArray);

    // <<<<<<<<<========similar questions experiment==========>>>>>>>>>>>

    if (characterLength > 150) {
      const formattedMessage = message.replace(/\n/g, "<br>");
      const messagediv = document.createElement("div");
      messagediv.innerHTML = formattedMessage;
      messageElement.appendChild(messagediv);

      // messageElement.appendChild(linesContainer);
    } else {
      const formattedMessage = message.replace(/\n/g, "<br><br>");
      const messagediv = document.createElement("div");
      messagediv.innerHTML = formattedMessage;
      messageElement.appendChild(messagediv);
    }

    // =============exp=====================

    // messageElement.textContent = message;

    // const urlsContainer = document.createElement("ol");

    for (let i = 0; i < urls?.length; i++) {
      const urlsElement = document.createElement("li");
      const urlsElementlink = document.createElement("a");
      urlsElementlink.textContent = urls[i];
      urlsElementlink.href = urls[i];
      urlsElementlink.target = "_blank";
      urlsElement.appendChild(urlsElementlink);
      urlsContainer.appendChild(urlsElement);
    }
  }

  // console.log("This is my 3rd role", role);
  if (role === "USER") {
    const linesContainer2 = document.createElement("div");
    // const lineElement2 = document.createElement("p");
    // lineElement2.textContent = message;
    linesContainer2.textContent = message;
    linesContainer2.classList.add("user-text");
    // linesContainer2.appendChild(lineElement2)
    messageElement.appendChild(linesContainer2);
  }

  // console.log("This is my 4rt role", role);
  if (role === "USER") {
    const answerText3 = document.createElement("span");
    answerText3.textContent = "You";
    answerText3.classList.add("user-role");
    chatMessages.appendChild(answerText3);

    messageElement.classList.add("user-message");
  } else if (role === "BOT") {
    const answerText2 = document.createElement("span");
    answerText2.textContent = "Cropway";
    answerText2.classList.add("bot-role");
    chatMessages.appendChild(answerText2);

    // console.log("This is my 5th role", role);
    messageElement.classList.add("bot-message");
    urlsContainer.classList.add("link-box");
    if (urls.length > 0) {
      messageElement.appendChild(urlsContainer);
    }
  }

  // messageContainer.appendChild(messageElement);
  chatMessages.appendChild(messageElement);
  // chatMessages.appendChild(urlsContainer);

  // ===============CHIPS====================

  console.log(richContent);

  if (richContent) {
    richContent.forEach((contentGroup) => {
      contentGroup.forEach((content) => {
        //=====================Info code=====================

        if (content.type === "info") {
          // Extract the information from the 'content' object
          console.log("this is content", content);
          const thumbnailUrl = content.image.src.rawUrl;
          const actionLink = content.actionLink;
          console.log("this is action link", actionLink);
          const title = content.title;
          const subtitle = content.subtitle;

          const containerDiv = document.createElement("div");

          // <<<<<<<<=======EXP=======>>>>>>
          if (thumbnailUrl && thumbnailUrl.trim().length > 0) {
            // Create an element to display the thumbnail image
            const thumbnailImage = document.createElement("img");
            thumbnailImage.src = thumbnailUrl;
            thumbnailImage.alt = "Thumbnail of YouTube Video";
            thumbnailImage.height = 180;

            // Append the thumbnailImage to some container element (e.g., 'containerDiv')
            containerDiv.appendChild(thumbnailImage);
          }
          // <<<<<<<<=======END EXP=======>>>>>>

          // Create a link to the YouTube video
          const videoLink = document.createElement("a");
          videoLink.href = actionLink;
          videoLink.textContent = title;
          videoLink.target = "_blank";

          // Create a subtitle element
          const subtitleElement = document.createElement("p");
          subtitleElement.textContent = subtitle;

          // const containerDiv = document.createElement("div");
          // containerDiv.appendChild(thumbnailImage);
          // containerDiv.appendChild(videoLink);

          messageElement.appendChild(containerDiv);

          // Append the elements to the messageElement (or any container you want to display it in)
          // messageElement.appendChild(thumbnailImage);
          messageElement.appendChild(videoLink);

          // messageElement.appendChild(containerDiv);
          messageElement.appendChild(subtitleElement);
        }

        //=====================End info code=================

        // ==========================button code================

        const buttonRow = document.createElement("div");
        buttonRow.classList.add("button-row");

        if (content.type === "button") {
          const button = document.createElement("a");
          button.textContent = content.text;
          button.href = content.link;
          button.classList.add("button-link", "button-rectangle");
          button.target = "_blank";

          const icon = document.createElement("i");
          // icon.classList.add("external-link-icon");
          icon.classList.add("fa", "fa-link");
          // icon.style.color = content.icon.color;
          icon.style.color = "blue";
          // icon.textContent = "external_link";
          // icon.style.backgroundImage = `url('https://drive.google.com/uc?id=1LehtwAywUF0HxGRKGPcxPEkVlTaHi3Q7')`;
          // icon.textContent = content.icon.type;

          button.appendChild(icon);
          buttonRow.appendChild(button);
        }

        messageElement.appendChild(buttonRow);

        // ===================End button code==================
        // <<<<<<<<<<<<======YOUTUBE VIDEO==========>>>>>>>>>>>>>>
        if (content.type === "video") {
          const containerDiv = document.createElement("div");
          containerDiv.setAttribute("class", "video-card");

          const videoWrapperDiv = document.createElement("div");
          videoWrapperDiv.setAttribute("class", "video-wrapper");

          const videoId = extractYouTubeVideoId(content.url);

          const iframe = document.createElement("iframe");
          iframe.setAttribute("width", "560");
          iframe.setAttribute("height", "315");
          iframe.setAttribute(
            "src",
            `https://www.youtube.com/embed/${videoId}`
          );
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "");

          // Append elements to their parent
          videoWrapperDiv.appendChild(iframe);
          containerDiv.appendChild(videoWrapperDiv);

          const textElement = document.createElement("p");
          textElement.textContent = content.text;

          // Append text element to containerDiv
          containerDiv.appendChild(textElement);

          messageElement.appendChild(containerDiv);
        }

        // <<<<<<<<<<<<======YOUTUBE VIDEO==========>>>>>>>>>>>>>>

        // ========================start chips===============
        if (
          (content.type === "chips" || content.type === "chipsGPT") &&
          Array.isArray(content.options)
        ) {
          const chipsContainer = document.createElement("div");
          chipsContainer.classList.add("chips-container");

          content.options.forEach((option) => {
            const chipButton = document.createElement("button");
            chipButton.textContent = option.text;
            chipButton.classList.add("chip-button");

            chipButton.addEventListener("click", () => {
              // When the chip/button is clicked, handle the action here
              const selectedOption = option.text;
              // Use 'selectedOption' as needed in your application logic

              // For demonstration purposes, let's simulate a user's reply
              displayMessage(`${selectedOption}`, null, "USER", null);

              const data = {
                text: selectedOption + ` write answer in ${curentlang}`,
              };

              chatMessages.appendChild(dotContainer);

              chatMessages.scrollTop = chatMessages.scrollHeight;

              if (content.type === "chipsGPT") {
                newfetchaddress = gptfetchaddress;

                let gptdata = "";

                const messageElement = document.createElement("div");
                const messagediv = document.createElement("div");

                let mflag = true;
                // console.log("testing");
                fetch(newfetchaddress, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((response) => {
                    const reader = response.body.getReader();

                    function readStream() {
                      return reader.read().then(({ done, value }) => {
                        if (done) {
                          questions(gptdata);
                          // dataprocessing(gptdata);
                          chatMessages.removeChild(messageElement);
                          console.log("Stream done");
                          return;
                        }

                        const chunk = new TextDecoder().decode(value);
                        console.log("Received chunk:", chunk);
                        console.log(chunk);
                        // console.log(chunk.text)

                        const objectRegex = /{[^}]*}/g;
                        const objects = chunk.match(objectRegex);

                        for (const objectStr of objects) {
                          try {
                            const jsonChunk = JSON.parse(objectStr);

                            gptdata = gptdata + jsonChunk.text;

                            const formattedMessage = gptdata.replace(
                              /\n/g,
                              "<br>"
                            );
                            if (dotContainer && dotContainer.parentNode) {
                              chatMessages.removeChild(dotContainer);
                            }

                            if (mflag) {
                              mflag = false;
                              messageElement.classList.add("bot-message");
                              messageElement.appendChild(messagediv);
                              chatMessages.appendChild(messageElement);
                              chatMessages.scrollTop =
                                chatMessages.scrollHeight;
                            }

                            messagediv.innerHTML = formattedMessage;
                            chatMessages.scrollTop = chatMessages.scrollHeight;
                          } catch (error) {
                            console.error("Error parsing JSON:", error);
                          }
                        }

                        return readStream();
                      });
                    }

                    return readStream();
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              }

              if (content.type === "chips") {
                newfetchaddress = fetchaddress;

                fetch(`${newfetchaddress}`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((response) => response.json())
                  .then((result) => {
                    // displayMessage("GPT");
                    console.log("backend result", result);

                    if (dotContainer && dotContainer.parentNode) {
                      chatMessages.removeChild(dotContainer);
                    }

                    setTimeout(() => {
                      console.log("After 3 seconds");
                    }, 3000);

                    // chatMessages.removeChild(gifcontainer2);
                    displayMessage(
                      result.text,
                      result.urls,
                      "BOT",
                      result.rich.richContent
                    );
                    // Do something with the response from the server
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              }

              // fetch(`${newfetchaddress}`, {
              //   method: "POST",
              //   headers: {
              //     "Content-Type": "application/json",
              //   },
              //   body: JSON.stringify(data),
              // })
              //   .then((response) => response.json())
              //   .then((result) => {
              //     // displayMessage("GPT");
              //     console.log("backend result", result);

              //     if (dotContainer && dotContainer.parentNode) {
              //       chatMessages.removeChild(dotContainer);
              //     }

              //     setTimeout(() => {
              //       console.log("After 3 seconds");
              //     }, 3000);

              //     // chatMessages.removeChild(gifcontainer2);
              //     displayMessage(
              //       result.text,
              //       result.urls,
              //       "BOT",
              //       result.rich.richContent
              //     );
              //     // Do something with the response from the server
              //   })
              //   .catch((error) => {
              //     console.error("Error:", error);
              //   });
            });

            chipsContainer.appendChild(chipButton);
          });

          messageElement.appendChild(chipsContainer);
        }

        // ===========Chipssss======
      });
    });
  }
  // ===============END CHIPS================

  // messageElement.appendChild(linesContainer);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Attach event listeners
chatIcon.addEventListener("click", toggleChatWindow);
closeButton.addEventListener("click", closeChatWindow);
sendButton.addEventListener("click", handleSendButtonClick);
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSendButtonClick();
  }
});
