const blogPostService = require('../../services/blogPostService');

const update = async (req, res, next) => {
    const { id } = req.params;
  try {
    const result = await blogPostService.update(req.body, req.UserId, id);
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = update;