# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach

To tackle this challenge, I followed a structured approach, breaking the objectives into smaller, manageable tasks. I started with setting up the backend and frontend communication to ensure data flow worked seamlessly. My order of work was as follows:
- For the Backend, I verified that the backend API endpoints were functional and returning the expected data using Postman.
- Frontend Integration:Focused on fetching and displaying data dynamically, ensuring error handling was in place for missing or invalid data.
- User-Friendly Input Form: Created a form to send data to the backend, adding frontend validation to ensure smooth user interactions.
- Design Enhancements: Worked on improving the overall UI, focusing on responsiveness, visual appeal, and a user-centered layout.
- Testing and Debugging: Ensured all functionality worked as expected.

## Objectives - Innovative Solutions

- objective1: Fetch Data and Display It
I implemented dynamic fetching of medicines from the backend, ensuring the data displayed handled edge cases like missing names or prices. Default placeholders like "Unknown Medicine" or "Price not available" were used to maintain user-friendly messaging. The medicine list was styled with card-like elements for better readability.

- objective2: Handling Missing/Invalid Data
This was achieved through both frontend and backend validation:
Frontend: Added conditional checks to handle empty or null values, displaying meaningful placeholders instead of breaking the UI.
Backend: Integrated validation to ensure that only valid data could be added to the database.

- objective3: User-Friendly Input Form
The form was designed with simplicity and responsiveness in mind. It included:
Real-time input validation.
Feedback messages for successful or failed submissions.

- objective4: Design Enhancements
A clean and modern design was implemented:
Rounded corners, shadows, and spacing for better visual appeal. Centered layout for both form and medicine list, ensuring responsiveness. Improved font hierarchy and color scheme to guide user attention.

## Problems Faced

- Empty or Invalid Data:
Problem: Some medicines in the database had missing names or null prices.

Solution: Implemented conditional rendering on the frontend and backend-side validation to avoid adding such data in the future.

- Form Visibility:
Problem: The form wasn't displaying initially due to a missing <form> element in the index.html.

Solution: Updated the HTML structure to include the form and verified its placement using browser developer tools.

- Design Consistency:
Problem: The initial design lacked cohesion, and elements didn’t align well.

Solution: Applied consistent padding, margins, and alignment through CSS, and used a maximum width for centered layouts.

## Evaluation

This was an enjoyable challenge to showcase my full-stack skills. While backend integration was smooth, missing / null data handling needed few iterations to be perfect. I was able to create simple designs with round parts, centered pages and responsive features. Due to lack of time, I could not achieve advanced features like search and filtering. Figuring out how to resolve CORS, to sync various design elements, and to validate form fields were not easy, but they are all valuable experiences. On the whole, happy with results and would capture functionality and attempt automated testing for added value with more time at my disposal. It was an experience that showed how I have the capacity to adapt and be a problem solver, to deliver a working, user-friendly application in a short period of time.