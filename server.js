

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());


app.get('/commit', async (req, res) => {
  try {
    const commits = await axios.get('https://api.github.com/repos/nodejs/node/commits', {
      "Authorization": "Bearer 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"
    })

    let commitData = commits.data.map(commit => ({ commit: commit.sha, author: commit.commit.author.name, }))
    res.json(commitData);
  } catch (error) {
    console.log(error)
  }
})


app.listen(8000, () => {
  console.log('Server Running...');
})
