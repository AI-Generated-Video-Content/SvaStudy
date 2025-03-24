# SvaStudy - Revolutionary Student Education Platform

A modern, responsive web application that revolutionizes student education through AI-generated video content. Targeted at students from grades 1-12, the platform provides interactive educational videos and an AI chatbot to solve problems and answer questions.

## Features

- **AI-Generated Educational Videos**: Curated content for students across different grade levels and subjects
- **Interactive AI Chatbot**: 24/7 virtual assistant to answer questions and provide learning guidance
- **Grade-Specific Content**: Resources tailored to different educational levels (grades 1-12)
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Interactive UI**: Engaging animations and intuitive interface using Framer Motion
- **Subject Categorization**: Easy browsing by subject, grade level, and topics

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **React Icons**: Popular icon sets for React applications

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/svastudy.git
   cd svastudy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
svastudy/
├── public/           # Static files
│   └── images/       # Image assets
├── src/
│   ├── app/          # Next.js App Router
│   │   ├── components/   # Reusable UI components
│   │   ├── chatbot/      # AI chatbot logic and components
│   │   ├── data/         # Mock data and constants
│   │   ├── pages/        # Main application pages
│   │   │   ├── videos/   # Video library pages
│   │   │   ├── about/    # About us page
│   │   │   └── contact/  # Contact page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Homepage component
```

## Future Enhancements

- User authentication and personalized learning dashboards
- Real AI video content generation based on curriculum
- Progress tracking and achievement system
- Parent and teacher portals for monitoring student progress
- Integration with school curriculum standards

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- AI-powered educational resources and concepts
- Next.js documentation and community
- Tailwind CSS for the design system
- React and Framer Motion for the interactive UI
