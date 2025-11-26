const healthController = (req, res) => {
    res.status(200).json({
    status: 'success',
    message: 'FeedMind Backend API is running',
    timestamp: new Date().toISOString(),
  });
}

export default healthController;