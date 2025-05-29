# LeetMetric-APP
📋 Description
LeetMetric is a frontend web application that allows users to view their LeetCode profile statistics. By entering a username, users can see their total problems solved by difficulty level and other key metrics like ranking, acceptance rate, and reputation.

🚀 Features
    Input your LeetCode username to fetch profile stats.
    
    View problems solved in Easy, Medium, and Hard categories.

Displays:

    Acceptance Rate
    
    Global Ranking
    
    Contribution Points
    
    Reputation

Responsive and interactive UI with progress indicators.

🔧 Technologies Used
      HTML
      
      CSS
      
      JavaScript (Vanilla JS)
      
      Public API: https://leetcode-stats-api.herokuapp.com/

📁 Project Structure

    index.html        // Main HTML page
    style.css         // Styling for the UI
    script.js         // Logic for fetching and displaying stats
    
📦 How to Use
    Open index.html in your browser.
    
    Enter your LeetCode username in the input field.
    
    Click the Search button.
    
    View your stats including problems solved and profile metrics.

✅ Username Validation
    Usernames must:
    
    Not be empty
    
    Be 1–15 characters long
    
    Contain only letters, numbers, spaces, or dashes
    
    Example of valid username: john-doe123
    
    📄 Sample API Response
    json
    Copy
    Edit
    {
      "status": "success",
      "totalSolved": 500,
      "totalQuestions": 2000,
      "easySolved": 200,
      "mediumSolved": 200,
      "hardSolved": 100,
      "acceptanceRate": "50.0%",
      "ranking": 12345,
      "contributionPoints": 300,
      "reputation": 400
    }
👤 Author
Developed by Sajal srivastav
Feel free to modify or contribute to this project!
