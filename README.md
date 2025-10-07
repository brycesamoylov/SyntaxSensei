# Syntax Sensei

Syntax Sensei is a Duolingo-style, gamified learning platform designed to make mastering Python programming fun and effective. Users learn through bite-sized lessons, get instant feedback, and track their progress with XP, streaks, and a competitive leaderboard.

## How to Run Locally

Follow these steps to get the development environment running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    The application uses the Google Gemini API for the "AI Hint" feature. To enable it, you need to create an environment file.

    - Create a new file named `.env` in the root of the project.
    - Add your Gemini API key to this file:
      ```
      API_KEY=YOUR_GEMINI_API_KEY
      ```
    > **Note:** If you don't provide an API key, the rest of the application will still function, but the "Get a hint" button will be disabled.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the application:**
    Open your web browser and navigate to the local address provided by the development server (usually `http://localhost:5173` or a similar port).

---

## Project Status

### ✅ Current Features (Fully Functional)

-   **Mock User Sign-In:** A simple, simulated sign-in system to persist a user session locally.
-   **Dashboard:** Displays key user statistics like total XP and the current daily streak, along with a mock chart for weekly progress.
-   **Lesson Units:** A structured "Unit" page that organizes lessons. Lessons are progressively unlocked as the user gains more XP.
-   **Interactive Lesson Engine:**
    -   **Multiple Question Types:** Supports concept explanations, multiple-choice questions (MCQ), debugging challenges, and fill-in-the-blank exercises.
    -   **Adaptive Difficulty:** The system adjusts the next question's difficulty based on the user's performance, creating a personalized learning curve.
    -   **Instant Feedback:** Provides immediate confirmation for correct or incorrect answers, along with explanations to reinforce learning.
-   **Gamification:**
    -   **Experience Points (XP):** Users earn XP for every correct answer.
    -   **Daily Streaks:** Tracks consecutive days of activity to encourage consistent learning.
-   **AI-Powered Hints:** Users can request a hint for any question, which is generated on the fly by the Google Gemini API.
-   **Mock Leaderboard:** A static leaderboard page that shows how users rank against each other based on XP.
-   **Responsive Design:** The UI is designed to be usable across desktop and mobile devices.

### 🟡 Implemented (Needs Improvement)

-   **State Persistence:** All user progress (XP, streaks, completed lessons) is stored in the browser's `localStorage`. While functional for a single-browser experience, this is not a secure or scalable backend solution.
-   **Mock Data:** All lesson content, user profiles, and leaderboard data are hardcoded in the frontend (`constants.ts`). The `services/api.ts` file simulates network requests with `setTimeout`.
-   **Basic User Profile:** The user profile is minimal and automatically generated from the sign-in email. There is no functionality to edit or view detailed profile information.

### ❌ Future Features (To Be Implemented)

-   **Full Backend & Database:**
    -   Replace the mock API service with a real backend (e.g., Node.js/Express, Supabase, or Firebase).
    -   Integrate a database (e.g., PostgreSQL, MongoDB) to securely store all user data, progress, and lesson content.
-   **Real Authentication:** Implement a secure authentication system, such as OAuth (Google, GitHub) or email/password with JWTs.
-   **Content Expansion:**
    -   Add more advanced Python lessons (e.g., Loops, Functions, Data Structures, OOP).
    -   Introduce new "Units" and "Tracks" for different programming languages or topics.
-   **User Profile Page:** Create a dedicated page for users to view their learning statistics, track progress across different skills, and manage their account.
-   **Achievements & Badges:** Award digital badges for milestones like completing a unit, achieving a long streak, or mastering a specific concept.
-   **Content Management System (CMS):** Build an admin interface for instructors to easily add, edit, and manage lesson content without modifying the source code.
-   **Advanced AI Integration:**
    -   Use Gemini to dynamically generate new questions or variations.
    -   Create an AI-powered "Code Buddy" for more conversational debugging and explanation.
