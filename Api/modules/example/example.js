const getHelloWorld = async (req, res) => {
  res.status(200).json({
    message: 'Hello World'
  });
};

module.exports = {
  getHelloWorld
};
