const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/FashionData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

const FashionSchema = new mongoose.Schema({
  style: String,
  fashion_subject: String,
  fashion_detail: String,
  fashion_image: String,
  createdAt: { type: Date, default: Date.now }
});
const Fashion = mongoose.model("Fashion", FashionSchema);

// 🟢 API lấy tất cả Fashion (sắp xếp theo ngày)
app.get('/fashions', async (req, res) => {
  const fashions = await Fashion.find().sort({ createdAt: -1 });
  res.json(fashions);
});

// 🟢 API lấy Fashion theo Style
app.get('/fashions/style/:style', async (req, res) => {
  const fashions = await Fashion.find({ style: req.params.style });
  res.json(fashions);
});

// 🟢 API lấy 1 Fashion theo ID
app.get('/fashions/:id', async (req, res) => {
  const fashion = await Fashion.findById(req.params.id);
  res.json(fashion);
});

// 🟢 API thêm mới Fashion
app.post('/fashions', async (req, res) => {
  const newFashion = new Fashion(req.body);
  await newFashion.save();
  res.json({ message: "Fashion added!", fashion: newFashion });
});

// 🟢 API cập nhật Fashion
app.put('/fashions/:id', async (req, res) => {
  await Fashion.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Fashion updated!" });
});

// 🟢 API xóa Fashion
app.delete('/fashions/:id', async (req, res) => {
  await Fashion.findByIdAndDelete(req.params.id);
  res.json({ message: "Fashion deleted!" });
});

app.listen(4000, () => console.log("Server running on port 4000"));
