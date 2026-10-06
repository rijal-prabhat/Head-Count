Head count read me

Project Background & Motivation:
I have been working as a security officer / door supervisor for around 10 years. During my time in this industry, I have faced many challenges and my natural instinct of solving problems has driven me to develop software applications in my free time. 
In my current workplace, a security officer manning the main entrance is required to operate two counters (one for the number of people entering the venue, and another for  the number of people exiting the venue). The officer then must perform mental arithmetic to calculate the live capacity of the venue. As this process involves multiple manual steps, the risk of human error increases significantly, especially in high-pressure environments. 
To solve this, I have engineered “Head Count”. Head Count is a digital application to calculate the live capacity of the venue accurately from a single screen, eliminating manual calculation in hopes of reducing human error. 

Key Feature & Operational logical:
 I have engineered Head Count in the hope it will make tracking live venue capacity as simple as possible. The application has three key features: 
•	Live Capacity Tracker:    Instead of using two separate physical clickers, the app combines everything onto one screen. When the “increase” button is pressed, the number in the display will increase by 1. When the user presses the “decrease” button, the number on the screen will be subtracted by 1. 

•	Capacity Limit Safeguard: In the UK, local authorities set maximum capacity limit for a given venue for health and safety reasons.  I have considered this in this application. This app will count normally up to 100.   Once the number reaches 100 and someone tries to increase it again, the application will stop counting and display a window alert message saying, “You have reached the maximum capacity.” 


•	Instant Reset Button: When the “reset” button is pressed, the screen is programmed to display “0”. This will allow the application to reset the counter to zero very quickly at the end of the shift or when the venue is closed. 


Languages Used

Head Count is an app manufactured using standard frontend web technologies:
•	HTML5: Used to build the main structure and layout of the application, including the data input field and the control buttons.
•	CSS3: Used to design the look of the application, creating a high-visibility theme with a bright background colour and customised layout fields.
•	JavaScript (ES6): Used to write the actual math logic behind the scenes, making sure the buttons update the text on the screen in real-time.

Code Architecture
I have styled Head Count using CSS to make sure the app looks clear and easy to use. There are two main designs in the layout: 	
CSS	
•	Clear Container Layout: The app is designed with a large, centred layout box so that the user can see the live total number instantly, even when standing at a busy door entrance.
•	Interactive Button Feedback: To help the user in darker environments, I have programmed the buttons to smoothly grow larger by 10 percent and change colour when hovered over. This gives clear feedback, so the officer knows exactly which button they are about to press

JavaScript Logic (index.js)
The script binds click event handlers directly to the browser DOM targets. To ensure site safety, it executes a validation check to block inputs once maximum venue capacity is breached:
increasebutn.onclick = function (){
if (count < 100) {
count ++;
numb.textContent = count;
}
else {
window.alert("You have reached the maximum capacity")
}
}



Future Version 
Adding own Capacity 
It is obvious that different venues will have different maximum capacities, but this app just presume the maximum capacity of the venue is 100. The later version will allow users to put in their own venue capacity. It is also noted that all three buttons “increase”, “rest” and “decrease” are close together, increasing the likelihood of pressuring the wrong button.  To reduce this, future version will  also be engineered with  increased margins in between each button. 


