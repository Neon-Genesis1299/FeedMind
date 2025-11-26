import app from './src/app.js';
import connectDB from './src/config/database.js';

const PORT = app.get('port')

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV}`);
    });
  };
startServer();