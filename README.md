# 🎵 Sound-ify

A full-stack music streaming application built with modern web technologies, featuring real-time chat, music playback, and admin management capabilities.

## ✨ Features

- **🎶 Music Streaming**: Stream songs with a fully functional audio player
- **📱 Responsive Design**: Seamless experience across desktop and mobile devices
- **👥 Real-time Chat**: Connect with friends and see what they're listening to
- **📊 Admin Dashboard**: Manage songs, albums, and user statistics
- **🔐 Authentication**: Secure user authentication with Clerk
- **☁️ Cloud Storage**: Audio and image files hosted on Cloudinary
- **🎨 Modern UI**: Beautiful interface with Tailwind CSS and Shadcn components
- **📡 Real-time Updates**: Live activity tracking with Socket.IO

## 🚀 Tech Stack

### Frontend

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components
- **Zustand** for state management
- **React Router DOM** for navigation
- **Socket.IO Client** for real-time features
- **Axios** for API requests
- **Lucide React** for icons

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Socket.IO** for real-time communication
- **Clerk** for authentication
- **Cloudinary** for file storage
- **Express FileUpload** for file handling
- **Node-cron** for scheduled tasks
- **CORS** for cross-origin requests

### Additional Tools

- **ESLint** for code linting
- **PostCSS** for CSS processing
- **Nodemon** for development

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- Cloudinary account
- Clerk account for authentication

### Installation

1. Clone the repository

```bash
git clone https://github.com/LukeZHar/sound-ify.git
cd sound-ify
```

2. Install dependencies for both frontend and backend

```bash
npm run build
```

3. Set up environment variables

   - Configure backend environment variables (MongoDB, Cloudinary, Clerk)
   - Configure frontend environment variables (API URLs, Clerk keys)

4. Start the development server

```bash
npm start
```

## 📝 Available Scripts

- `npm run build` - Install dependencies for both frontend and backend, then build the frontend
- `npm start` - Start the backend server in production mode

## 🔗 Links

- **Live App**: [Coming Soon]
- **GitHub**: https://github.com/LukeZHar/sound-ify
- **Demo Video**: [Coming Soon]

## 🏗️ Project Structure

```
sound-ify/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Authentication middleware
│   │   └── lib/             # Utilities (DB, Socket.IO, Cloudinary)
│   └── package.json
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── stores/          # Zustand state management
│   │   ├── types/           # TypeScript type definitions
│   │   └── lib/             # Utilities and configurations
│   └── package.json
└── package.json             # Root package.json
```

## 🎯 Key Features Breakdown

### Music Player

- Play/pause functionality
- Skip to next/previous tracks
- Volume control
- Progress bar with seeking
- Queue management

### Real-time Chat

- Private messaging between users
- Online user status
- Activity tracking (what users are listening to)
- Live updates with Socket.IO

### Admin Panel

- Upload and manage songs
- Create and organize albums
- View platform statistics
- Delete content with confirmation

### Authentication & Security

- Secure authentication with Clerk
- Protected routes and middleware
- Admin role-based access control

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

[Luke](https://github.com/LukeZHar)
