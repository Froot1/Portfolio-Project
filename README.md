# Portfolio-Project

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-6F2EEA?style=for-the-badge&logo=railway&logoColor=white)

## Description

The Portfolio Project is the graduation project of the Holberton Bootcamp It highlights the key skills we learned during the program In this project , we showcase our ability to build a fully integrated backend and frontend using the latest technologies such as Node.js React TailwindCSS and more

Our project is named Qattah



## Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript/ES6+** - Modern JavaScript features

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database (if applicable)

### Development Tools
- **Git** - Version control
- **npm/yarn** - Package management
- **Webpack** - Module bundler
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Steps

1. Clone the repository
```bash
git clone https://github.com/KhaledCS1/Portfolio-Project.git
cd Portfolio-Project
```

2. Install dependencies for the frontend
```bash
cd frontend
npm install
```

3. Install dependencies for the backend
```bash
cd ../backend
npm install
```

4. Set up environment variables
```bash
# Create .env file in the backend directory
cp .env.example .env
# Edit the .env file with your configuration
```

5. Start the development servers

Frontend:
```bash
cd frontend
npm start
```

Backend:
```bash
cd backend
npm run dev
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Explore the different sections of the portfolio
3. Test the interactive features and functionality
4. Use the contact form to send messages

### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
```

## Development Setup

### Frontend Development
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Run linter
```

### Backend Development
```bash
cd backend
npm run dev          # Start development server with nodemon
npm run start        # Start production server
npm run test         # Run tests
npm run lint         # Run linter
```

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

#### Contact
- `POST /contact` - Send contact message

#### Portfolio
- `GET /portfolio` - Get portfolio items
- `POST /portfolio` - Create new portfolio item (admin)

For detailed API documentation, visit `/api/docs` when running the server

## Contributing

We welcome contributions to this project! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features

## Authors

- **Khaled Almimoni**
- **Fahad Alonazi**
- **Ibrahim Alfaleh**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

---

### Project Structure
```
Portfolio-Project/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── package.json
│   └── server.js
├── docs/
├── README.md
└── LICENSE
```
