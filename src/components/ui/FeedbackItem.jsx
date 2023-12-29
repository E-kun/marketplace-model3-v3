import { Grid, Paper } from "@mui/material";
import { StyledFeedbackItem } from "../styled_components/feedback/StyledFeedbackItem";

function FeedbackItem(feedbackItem) {
  const { feedback: message, author } = feedbackItem.feedback;

  return (
    <StyledFeedbackItem>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 900,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h3>{author}</h3>
                <p>{message}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </StyledFeedbackItem>
  );
}

export default FeedbackItem;
