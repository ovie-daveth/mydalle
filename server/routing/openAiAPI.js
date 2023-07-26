const express = require('express');
const dotenv = require("dotenv")
const { Configuration, OpenAIApi } = require("openai")

dotenv.config()

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(config);

router.route("/").get((req, res) => {
    res.status(200).json({message:"Hiiam Dalle"})
})

router.route("/generate").post(async (req, res) => {
    try {
        const {prompt} = req.body;
        console.log(prompt)
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            response_format: "b64_json",
        })
        const image = response.data.data[0].b64_json
        // image_url = response.data.data[0].url;
        res.status(200).json({photo: image})
    } catch (error) {
        console.log(error?.response.data.error.message)
        
    }
})

module.exports = router

//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