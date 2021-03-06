const axios = require('axios');

const handleGetNews = async (req, res) => {
  const { country, category } = req.body;

  if (!country || !category) {
    return res.status(400).json('Incorrect request!');
  }

  try {
    const data = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.ONEWS_NEWSAPI_KEY}`
    );

    res.json(data.data.articles);
  } catch (error) {
    res.status(400).json('Unable to get news!');
  }
};

module.exports = {
  handleGetNews,
};
