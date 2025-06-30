![image](https://github.com/user-attachments/assets/daff53d0-100a-46ad-9103-c57c64018692)
)
A beautiful and elegant countdown timer to your wedding day with animation and music.
Description:
This project is a webpage that displays a live countdown timer showing the days, hours, minutes, and seconds left until a specified wedding date. When the countdown reaches zero, a congratulatory message appears along with falling flower animations. There's also a button to play wedding music.
Technologies Used:
HTML5,
CSS3 (including animations),
JavaScript (for countdown and animation),
Google Fonts: Imperial Script and Tangerine,
MP3 audio file (wedding.mp3).
How to Use:
Open index.html in any modern browser — the countdown will start automatically.
To change the wedding date, edit the weddingDate variable in index.js, for example:
js
Copy
Edit
const weddingDate = new Date("August 2, 2025 17:00");
Click the play button to start the wedding music (wedding.mp3).
When the countdown reaches zero, a congratulatory message shows and flower emojis start falling.
Project Structure:
index.html — main HTML markup and links to CSS and JS;
style.css — styling for layout, fonts, and animations;
index.js — countdown logic, flower animation, and music control;
wedding.jpg — background image (replace with your own if desired);
wedding.mp3 — wedding music audio file.
Customization:
Wedding Date: change the date in index.js under weddingDate.
Flower Emojis: edit the flowerEmoji array in index.js to use different emojis.
Background: replace wedding.jpg or update the CSS background image URL.
Music: replace wedding.mp3 with your preferred audio file (keep the same file name/path).
Dependencies:
No external JavaScript libraries required.
Uses Google Fonts for typography.
Audio file must be in the project folder.
Demo:
Open index.html in your browser to see the countdown and animations in action!
License
Feel free to use and modify this project as you wish.
