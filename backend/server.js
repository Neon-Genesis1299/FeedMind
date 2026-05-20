require('dotenv').config();
// const app = require('./src/app');

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Backend server running on port ${PORT}`);
//   console.log(`📡 Environment: ${process.env.NODE_ENV}`);
// });

const connectDB = require('./src/config/db');

// Connect to database then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV}`);
  });
});
