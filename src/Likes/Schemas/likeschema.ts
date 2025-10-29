import * as mongoose from 'mongoose';

export const LikeSchema = new mongoose.Schema({
  img_src: String,
  isLike: Boolean,
  brand_name: String,
  details: String,
  old_rs: String,
  new_rs: String,
  offer: String,
  stars: String,
});
