// Questions and answers
const questions = [
    {
      question: "What's your ideal weekend activity?",
      answers: [
        { text: "Reading a book in a cozy nook", flower: "lavender" },
        { text: "Hiking or exploring nature", flower: "sunflower" },
        { text: "Going out for a romantic dinner", flower: "rose" },
        { text: "Relaxing at a park with friends", flower: "daisy" },
        { text: "Enjoying springtime under blooming trees", flower: "cherryBlossom" },
        { text: "Hosting a celebration with loved ones", flower: "chrysanthemum" },
        { text: "Visiting a flower garden for inspiration", flower: "tulip" },
      ],
    },
    {
      question: "Pick a favorite color palette:",
      answers: [
        { text: "Soft purples and pastels", flower: "lavender" },
        { text: "Bright yellows and oranges", flower: "sunflower" },
        { text: "Reds and deep pinks", flower: "rose" },
        { text: "Light and airy whites", flower: "daisy" },
        { text: "Pinks and pale pastels", flower: "cherryBlossom" },
        { text: "Warm autumn tones", flower: "chrysanthemum" },
        { text: "Bright, bold spring hues", flower: "tulip" },
      ],
    },
    {
      question: "How would your friends describe you?",
      answers: [
        { text: "Calm and soothing", flower: "lavender" },
        { text: "Optimistic and bold", flower: "sunflower" },
        { text: "Passionate and timeless", flower: "rose" },
        { text: "Cheerful and positive", flower: "daisy" },
        { text: "Graceful and serene", flower: "cherryBlossom" },
        { text: "Supportive and dependable", flower: "chrysanthemum" },
        { text: "Creative and full of ideas", flower: "tulip" },
      ],
    },
    {
      question: "What kind of weather makes you happiest?",
      answers: [
        { text: "A calm, peaceful breeze with clear skies", flower: "lavender" },
        { text: "Bright and sunny with a few clouds", flower: "sunflower" },
        { text: "Warm with a hint of romance in the air", flower: "rose" },
        { text: "Cool and breezy with fresh air", flower: "daisy" },
        { text: "A light spring rain with soft petals in the air", flower: "cherryBlossom" },
        { text: "Crisp autumn weather with a golden glow", flower: "chrysanthemum" },
        { text: "A cool breeze with bright, colorful flowers blooming", flower: "tulip" },
      ],
    },
    {
      question: "Which of these would be your perfect vacation?",
      answers: [
        { text: "A serene, peaceful retreat in the countryside", flower: "lavender" },
        { text: "A fun-filled adventure in a vibrant city", flower: "sunflower" },
        { text: "A romantic getaway to a beautiful vineyard", flower: "rose" },
        { text: "A relaxing beach trip with close friends", flower: "daisy" },
        { text: "A nature walk in a blossoming garden", flower: "cherryBlossom" },
        { text: "A cultural journey to ancient temples", flower: "chrysanthemum" },
        { text: "A trip to a colorful tulip festival", flower: "tulip" },
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
  