import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const MainPage = () => {
  const [isSummarized, setSummarized] = useState(false);

  const [url, setUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false)

  const [summarizedText, setSummarizedText] = useState({
    author: "",
    title: "",
    summary: "",
  });
  const handleUrlChanged = (e) => {
    setUrl(e.target.value);
  };

  const handleDigestify = async () => {
    setIsLoading(true)
   
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url }),
    };
    const response = await fetch(
      "http://127.0.0.1:5000/digestify",
      requestOptions
    );
    const data = await response.json();

    const article = data.article;

    setSummarizedText(article);
    setIsLoading(false)
    setSummarized(true);

  };

  return (
    <Grid alignItems={"center"} justifyContent={"center"} container spacing={2}>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth={true}
          variant="standard"
          required
          id="outlined-required"
          label={"URL"}
          onChange={handleUrlChanged}
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <Button variant="contained" onClick={handleDigestify}>
          Digestify!
        </Button>
      </Grid>
      {isLoading && 
        <Grid item xs={12}>
            <CircularProgress />
        </Grid>
      }
      {isSummarized && (
        <SummarizedText
          author={summarizedText.author}
          title={summarizedText.title}
          text={summarizedText.summary}
        />
      )}
    </Grid>
  );
};

const SummarizedText = ({ author, title, text }) => {
  return (
    <>
      <Grid item xs={12} style={{ textAlign: "center", marginTop: "2rem" }}>
        <Typography variant="h5" alignContent={"center"}>
          Summarized article:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Author: {author}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Title: {title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          multiline
          maxRows={4}
          value={text}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
    </>
  );
};

export default MainPage;
