import app from './src/app.js';
import connectDB from './src/config/database.js';

const PORT = app.get('port')

connectDB();          //connect to MongoDB befor starting the server

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV}`);
});
