import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";

const StyledFeedbackItem = styled.li`
  /* background-color: #94ec94; */
  margin: 1em;
  max-width: 900px;
`;

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
