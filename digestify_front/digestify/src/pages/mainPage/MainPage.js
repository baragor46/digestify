import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const MainPage = () => {
  const [isSummarized, setSummarized] = useState(false);

  const [url, setUrl] = useState("");

  const [summarizedText, setSummarizedText] = useState("");
  const handleUrlChanged = (e) => {
    setUrl(e.target.value);
  };

  const handleDigestify = () => {
    setSummarized(true);
    setSummarizedText(url);
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
      {isSummarized && <SummarizedText text={summarizedText} />}
    </Grid>
  );
};

const SummarizedText = ({ text }) => {
  return (
    <>
      <Grid item xs={12} style={{ textAlign: "center", marginTop: "2rem" }}>
        <Typography variant="h5" alignContent={"center"}>
          Summarized article:
        </Typography>
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
