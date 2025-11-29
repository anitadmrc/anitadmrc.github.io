// Questions and answers
const questions = [
    {
      question: "How do you recharge after a long day?",
      answers: [
        { text: "Zoning out with a book or taking a quiet bath", flower: "lavender" },
        { text: "Blasting music and moving around to let off steam", flower: "sunflower" },
        { text: "Venting to someone I trust or crying it out", flower: "rose" },
        { text: "Scrolling through memes or watching funny videos", flower: "daisy" },
        { text: "Going for a walk alone to clear my head", flower: "cherryBlossom" },
        { text: "Making comfort food or organizing my space", flower: "chrysanthemum" },
        { text: "Getting lost in a hobby or art project", flower: "tulip" },
      ],
    },
    {
      question: "What's your approach when facing a challenge?",
      answers: [
        { text: "Avoid it until I'm mentally ready to deal with it", flower: "lavender" },
        { text: "Tackle it immediately before I overthink it", flower: "sunflower" },
        { text: "Get emotional but push through anyway", flower: "rose" },
        { text: "Try to laugh it off and not take it too seriously", flower: "daisy" },
        { text: "Accept it's happening and figure it out as I go", flower: "cherryBlossom" },
        { text: "Ask for help or look for advice from people I trust", flower: "chrysanthemum" },
        { text: "Think outside the box even if it's unconventional", flower: "tulip" },
      ],
    },
    {
      question: "What's your go-to drink?",
      answers: [
        { text: "Herbal tea or chamomile", flower: "lavender" },
        { text: "Orange juice or an energy drink", flower: "sunflower" },
        { text: "Red wine or hot chocolate", flower: "rose" },
        { text: "Lemonade or iced tea", flower: "daisy" },
        { text: "Green tea or plain water", flower: "cherryBlossom" },
        { text: "Coffee or hot tea with milk", flower: "chrysanthemum" },
        { text: "Smoothies or fancy lattes", flower: "tulip" },
      ],
    },
    {
      question: "What kind of music do you listen to?",
      answers: [
        { text: "Soft, calming, or instrumental music", flower: "lavender" },
        { text: "Upbeat pop or dance music", flower: "sunflower" },
        { text: "Romantic ballads or emotional songs", flower: "rose" },
        { text: "Feel-good hits and sing-along songs", flower: "daisy" },
        { text: "Lo-fi, acoustic, or indie music", flower: "cherryBlossom" },
        { text: "Classic hits or music from my childhood", flower: "chrysanthemum" },
        { text: "Whatever's new and trending right now", flower: "tulip" },
      ],
    },
    {
      question: "When you go shopping, you usually:",
      answers: [
        { text: "Buy exactly what you need and leave quickly", flower: "lavender" },
        { text: "Browse everything and grab what catches your eye", flower: "sunflower" },
        { text: "Look for quality items even if they cost more", flower: "rose" },
        { text: "Go with friends and make it a fun outing", flower: "daisy" },
        { text: "Stick to basics and avoid unnecessary purchases", flower: "cherryBlossom" },
        { text: "Stock up on practical things you'll actually use", flower: "chrysanthemum" },
        { text: "Hunt for unique or trendy pieces", flower: "tulip" },
      ],
    },
    {
      question: "How do you use social media?",
      answers: [
        { text: "Rarely - it's too overwhelming for me", flower: "lavender" },
        { text: "Posting updates and sharing what I'm up to", flower: "sunflower" },
        { text: "Sharing meaningful posts and staying connected", flower: "rose" },
        { text: "Liking funny posts and commenting on friends' stuff", flower: "daisy" },
        { text: "Mostly lurking, rarely posting anything", flower: "cherryBlossom" },
        { text: "Keeping up with family and close friends", flower: "chrysanthemum" },
        { text: "Discovering new trends and creative content", flower: "tulip" },
      ],
    },
    {
      question: "What's your ideal way to spend a free afternoon?",
      answers: [
        { text: "Napping, reading, or doing something low-key alone", flower: "lavender" },
        { text: "Getting outside or doing something active", flower: "sunflower" },
        { text: "Doing something romantic or going somewhere aesthetic", flower: "rose" },
        { text: "Hanging with friends or binge-watching shows", flower: "daisy" },
        { text: "Taking photos, journaling, or just wandering around", flower: "cherryBlossom" },
        { text: "Cleaning, cooking, or catching up on errands", flower: "chrysanthemum" },
        { text: "Working on a creative project or learning something new", flower: "tulip" },
      ],
    },
  ];
  
  // Flower result details
  const flowerResults = {
    daisy: {
      name: "Daisy",
      description: "You are the embodiment of happiness and warmth. Much like a daisy, you bring a sense of joy wherever you go. People gravitate towards your cheerful energy and your ability to brighten even the darkest of days. You are optimistic, pure, and always looking on the bright side. Your kindness is contagious, and your friends appreciate your open heart and positive spirit.",
      image: "daisy.PNG",
    },
    rose: {
      name: "Rose",
      description: "You're elegant, passionate, and timeless. Much like the rose, you embody beauty and depth. You are a person of great emotional complexity, with an inner strength that runs deep. Roses are a symbol of love, and like them, you offer affection and warmth to those you care about. You appreciate meaningful relationships and have an intense, yet delicate, nature that people find alluring and captivating.",
      image: "rose.PNG",
    },
    sunflower: {
      name: "Sunflower",
      description: "You are bold, vibrant, and full of life. Just like a sunflower, you love to be the center of attention, spreading joy and positivity. Your energy is infectious, and you inspire everyone around you to stay positive and look towards the light. Sunflowers symbolize strength and loyalty, and you demonstrate these qualities through your optimistic outlook and unwavering support for your loved ones.",
      image: "sunflower.PNG",
    },
    lavender: {
      name: "Lavender",
      description: "You are calm, graceful, and soothing. Just like lavender, you bring tranquility and peace to those around you. Your presence has a calming effect, and people often seek you out when they need a quiet moment or a comforting word. Lavender is often associated with healing and relaxation, and like this flower, you possess the ability to provide comfort and restore balance to those who are stressed or anxious. You have a gentle, nurturing soul.",
      image: "lavender.PNG",
    },
    cherryBlossom: {
      name: "Cherry Blossom",
      description: "You are graceful, fleetingly beautiful, and full of life. Like the cherry blossom, you symbolize renewal and hope. You appreciate the beauty in the present moment and know that life’s fleeting moments are precious. People admire your serene, peaceful aura and your ability to bring elegance and charm wherever you go. Cherry blossoms also represent the cycle of life, and you embrace change with grace and wisdom, always adapting and growing.",
      image: "cherryblossom.PNG",
    },
    chrysanthemum: {
      name: "Chrysanthemum",
      description: "You are vibrant, supportive, and full of life. Much like the chrysanthemum, you symbolize longevity and happiness. You bring joy and color into the lives of everyone around you with your generous spirit and hardworking nature. Chrysanthemums are often associated with respect and admiration, and like them, you have earned the respect of your peers through your dedication and kindness. You're the kind of person who provides unwavering support to those you love, and people rely on you for both guidance and cheer.",
      image: "chrysanthemum.PNG",
    },
    tulip: {
      name: "Tulip",
      description: "You are elegant, creative, and full of potential. Much like the tulip, you are bright, colorful, and brimming with possibilities. You have an innate ability to adapt and express your creativity in everything you do. Tulips symbolize perfect love and passion, and you bring that energy into your relationships and pursuits. Whether it’s through art, innovation, or simple moments of joy, you constantly find new ways to blossom and share your vibrant spirit with others.",
      image: "tulip.PNG",
    },
  };
  
  // Quiz logic
  let currentQuestionIndex = 0;
  let flowerScores = {
    daisy: 0,
    rose: 0,
    sunflower: 0,
    lavender: 0,
    cherryBlossom: 0,
    chrysanthemum: 0,
    tulip: 0,
  };
  
  function showQuestion() {
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    const nextButton = document.getElementById("next-button");
  
    // Clear previous question
    answersContainer.innerHTML = "";
    nextButton.disabled = true;
  
    // Display current question
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
  
    // Display answers
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.onclick = function () {
        // Remove selection from all buttons
        const allButtons = answersContainer.querySelectorAll("button");
        allButtons.forEach(btn => btn.classList.remove("selected"));
        
        // Add selection to clicked button
        button.classList.add("selected");
        
        // Store the selected answer for this question
        if (window.selectedAnswers === undefined) {
          window.selectedAnswers = {};
        }
        
        // Remove previous score if answer was changed
        if (window.selectedAnswers[currentQuestionIndex] !== undefined) {
          flowerScores[window.selectedAnswers[currentQuestionIndex]]--;
        }
        
        // Add new score
        window.selectedAnswers[currentQuestionIndex] = answer.flower;
        flowerScores[answer.flower]++;
        nextButton.disabled = false;
      };
      answersContainer.appendChild(button);
    });
  }
  
  function showResult() {
    const result = Object.keys(flowerScores).reduce((maxFlower, flower) => {
      return flowerScores[flower] > flowerScores[maxFlower] ? flower : maxFlower;
    });
  
    const resultFlower = flowerResults[result];
    document.getElementById("result-flower-name").textContent = resultFlower.name;
    document.getElementById("result-flower-image").src = resultFlower.image;
    document.getElementById("result-description").textContent = resultFlower.description;
  
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
  }
  
  // Event listener for the next button
  document.getElementById("next-button").addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  // Start the quiz
  showQuestion();
  