import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const ContentGenerator = () => {
  const BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  const [history, setHistory] = useState([]);
  const [seoScore, setSeoScore] = useState(null);

  const [keyword, setKeyword] = useState("");
  const [keywordsResult, setKeywordsResult] = useState([]);

  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [titlesResult, setTitlesResult] = useState([]);

  const [selectedTitle, setSelectedTitle] = useState("");
  const [topicsResult, setTopicsResult] = useState([]);

  const [selectedTopic, setSelectedTopic] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  const handleKeywordSubmit = async () => {
    setLoading(true);
    const res = await fetch(`${BASE_URL}/api/keyword`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyword }),
    });
    const data = await res.json();
    setKeywordsResult(data.result.split("\n"));
    setTitlesResult([]);
    setTopicsResult([]);
    setContent("");
    setLoading(false);
  };

  const handleTitleGenerate = async (kw) => {
    setSelectedKeyword(kw);
    setLoading(true);
    const res = await fetch(`${BASE_URL}/api/title`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyword: kw }),
    });
    const data = await res.json();
    setTitlesResult(data.result.split("\n"));
    setTopicsResult([]);
    setContent("");
    setLoading(false);
  };

  const handleTopicGenerate = async (title) => {
    setSelectedTitle(title);
    setLoading(true);
    const res = await fetch(`${BASE_URL}/api/topic`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    setTopicsResult(data.result.split("\n"));
    setContent("");
    setLoading(false);
  };

  const handleContentGenerate = async (topic) => {
    setSelectedTopic(topic);
    setLoading(true);
    const res = await fetch(`${BASE_URL}/api/content`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    setContent(data.content);
    setSeoScore(data.seoScore);

    setHistory((prev) => [
      ...prev,
      {
        keyword,
        selectedKeyword,
        selectedTitle,
        topic,
        content: data.content,
        score: data.seoScore,
      },
    ]);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  const handleExport = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "content.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        AI Blog Writer
      </Typography>

      <TextField
        label="Enter Seed Keyword"
        fullWidth
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        onClick={handleKeywordSubmit}
        disabled={loading}
      >
        Generate Keywords
      </Button>

      {keywordsResult.length > 0 && (
        <Box mt={3}>
          <Typography variant="h6">Step 1: Select a Keyword</Typography>
          {keywordsResult.map((kw, idx) => (
            <Button
              key={idx}
              onClick={() => handleTitleGenerate(kw)}
              sx={{ m: 1 }}
              variant="outlined"
            >
              {kw}
            </Button>
          ))}
        </Box>
      )}

      {titlesResult.length > 0 && (
        <Box mt={3}>
          <Typography variant="h6">Step 2: Select a Title</Typography>
          {titlesResult.map((t, idx) => (
            <Button
              key={idx}
              onClick={() => handleTopicGenerate(t)}
              sx={{ m: 1 }}
              variant="outlined"
            >
              {t}
            </Button>
          ))}
        </Box>
      )}

      {topicsResult.length > 0 && (
        <Box mt={3}>
          <Typography variant="h6">Step 3: Select a Topic</Typography>
          {topicsResult.map((tp, idx) => (
            <Button
              key={idx}
              onClick={() => handleContentGenerate(tp)}
              sx={{ m: 1 }}
              variant="outlined"
            >
              {tp}
            </Button>
          ))}
        </Box>
      )}

      {content && (
        <Box mt={4}>
          <Typography variant="h6">Generated Content</Typography>
          <Paper elevation={3} sx={{ p: 2, mt: 1, whiteSpace: "pre-line" }}>
            {content}
          </Paper>
          <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
            SEO Score: {seoScore}/100
          </Typography>
          <Button onClick={handleCopy} variant="outlined" sx={{ mt: 2, mr: 1 }}>
            Copy
          </Button>
          <Button onClick={handleExport} variant="contained" sx={{ mt: 2 }}>
            Export
          </Button>
        </Box>
      )}
      {history.length > 0 && (
        <Box mt={5}>
          <Typography variant="h6">🕓 Generation History</Typography>
          {history.map((item, idx) => (
            <Paper key={idx} elevation={1} sx={{ p: 2, mb: 1 }}>
              <strong>Topic:</strong> {item.topic}
              <br />
              <strong>SEO Score:</strong> {item.score}
              <br />
              <strong>Preview:</strong>{" "}
              {item.content ? item.content.slice(0, 80) + "..." : "No content"}
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ContentGenerator;
