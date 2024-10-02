# Focus-Learn

**Focus-Learn** is a platform built to solve common challenges faced by learners using YouTube for skill development. These include distractions from recommendations, the absence of progress tracking, and the difficulty of retaining notes. With Focus-Learn, users can create personalized, structured learning journeys with embedded YouTube videos, chapter-specific notes, and real-time progress tracking. Public learning journeys can be explored and forked by others, offering a collaborative and customizable learning experience.

## Problem Statement

Learners who rely on YouTube for self-paced learning often encounter several challenges:
- **Distractions**: YouTube’s recommendation system pulls attention away from the original learning content.
- **Lack of Structure**: Users struggle to organize and track their learning progress.
- **Inefficient Note Retention**: Learners often lack a cohesive space to store notes related to specific videos or topics.

## Solution

Focus-Learn addresses these issues by offering a dedicated platform where users can:
- Create personalized learning journeys.
- Organize videos into chapters with chapter-specific notes.
- Track learning progress in real time.
- Share journeys publicly, allowing others to explore and fork them for a customized learning path.

## Key Features

### 1. Custom Journey Creation
Users can create their own learning journeys by either adding individual YouTube videos or automatically generating a journey from a playlist URL. This allows for a flexible and personalized learning experience that caters to different user preferences.

### 2. Chapter-Based Video and Notes
Each journey is divided into chapters, with each chapter containing:
- **Embedded YouTube Videos**: Watch the video directly within the platform.
- **Chapter-Specific Notes**: Write and organize notes for each chapter. The notes can be saved and downloaded for future reference.

### 3. Real-Time Progress Tracking
Monitor your progress as you move through your learning journey. The platform tracks video completion and progress within the journey, offering a clear view of your learning path.

### 4. Explore and Fork Public Journeys
Users can explore public learning journeys shared by others. Forking a public journey allows users to customize and adapt the journey to their own learning style and goals.

## How It Works

1. **Create a New Journey**: Start by creating a new learning journey, either manually adding YouTube videos or by using a playlist URL to generate chapters automatically.
2. **Add Notes**: For each chapter (YouTube video), users can add notes in a rich text editor, making it easy to document and retain key learnings.
3. **Track Progress**: As users move through the journey, the platform tracks their progress in real-time, providing a structured approach to learning.
4. **Fork Journeys**: If a user finds a public journey that matches their interests, they can fork the journey and customize it to suit their needs.

## Tech Stack

Focus-Learn is built using the MERN stack:
- **MySQL**: For storing user data, journeys, and notes.
- **Express.js**: Backend framework for handling API requests and routing.
- **React**: Frontend library for building a dynamic and responsive user interface.
- **Node.js**: Server-side runtime environment for handling backend logic and services.

