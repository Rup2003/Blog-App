import Blog from "../models/blog.model.js";
import User from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";

export const getAllBlogs = asyncHandler(async (req, res, next) => {});

export const getFeedBlogs = asyncHandler(async (req, res, next) => {});

export const getBlogsByID = asyncHandler(async (req, res, next) => {});

export const createBlog = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const userId = req.id;


  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "No user with this userId exists");
  }


  if (!title || !description) {
    throw new ApiError(400, "All fields are required");
  }

  const existingBlog = await Blog.findOne({ title });
  if (existingBlog) {
    throw new ApiError(400, "Blog with same title exists");
  }

  const newBlog = await Blog.create({ title, description, author: userId });

  user.blogs.push(newBlog._id);
  await user.save();

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        newBlog,
        `${user.username} created new blog ${newBlog.title}`,
      ),
    );
});

export const updateBlog = asyncHandler(async (req, res, next) => {});

export const deleteBlog = asyncHandler(async (req, res, next) => {});

export const toggleLike = asyncHandler(async (req, res, next) => {});

export const addComment = asyncHandler(async (req, res, next) => {});

export const getComment = asyncHandler(async (req, res, next) => {});
