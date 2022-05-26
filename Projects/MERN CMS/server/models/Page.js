const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema(
    {
        pagename:
        {
            type: String, 
            required: true,
            unique: true
        },
        url: 
        {
            type: String,
            required: true,
            unique: true
        }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Page", PageSchema);