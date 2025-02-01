document.getElementById('showBtn').addEventListener('click', function() {
    document.getElementById('heart-container').classList.remove('hidden');
    document.getElementById('showBtn').classList.add('hidden');
    document.getElementById('resetBtn').classList.remove('hidden');

    // Improved Heart Shape for Better Alignment
    const heart = `
        ***     ***    
      **   ** **   **  
     *       *       * 
    *                 * 
    *                 *  
     *               *   
      *             *    
       *           *     
        *         *      
         *       *       
          *     *        
           *   *         
            * *          
             *           
    `;

    const messages = [
        "It's stuck with you forever......",
        "So promise you won't let it go.......",
        "I'll trust the universe......",
        "Will always bring me to you......."
    ];

    document.getElementById('message').innerHTML = ""; // Clear previous messages
    document.getElementById('heart').textContent = heart;

    let index = 0;

    function typeMessage(message, element) {
        let words = message.split(" ");
        let wordIndex = 0;
        element.innerHTML = ""; // Clear previous text
        element.classList.add("typing");

        function addNextWord() {
            if (wordIndex < words.length) {
                element.innerHTML += (wordIndex > 0 ? " " : "") + words[wordIndex]; 
                wordIndex++;
                setTimeout(addNextWord, 200); // Adjust speed here
            } else {
                element.classList.remove("typing"); // Remove cursor effect after completion
            }
        }
        addNextWord();
    }

    function showMessage() {
        if (index < messages.length) {
            const newLine = document.createElement("div");
            newLine.className = "message-line show"; // Ensure it appears
            document.getElementById('message').appendChild(newLine);
            typeMessage(messages[index], newLine); // Call typing effect

            index++;
            setTimeout(showMessage, 2500); // Delay before next line appears
        }
    }

    showMessage(); // Start showing messages
});

// Reset button functionality
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('heart-container').classList.add('hidden');
    document.getElementById('showBtn').classList.remove('hidden');
    document.getElementById('resetBtn').classList.add('hidden');
    document.getElementById('heart').textContent = "";
    document.getElementById('message').innerHTML = "";
});
