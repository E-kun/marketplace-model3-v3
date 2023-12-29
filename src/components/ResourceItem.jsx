import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";
import { useRegion } from "../features/contexts/RegionContext";
import { useCurrency } from "../../archive/useCurrency";

const StyledResourceName = styled.h3`
  align-self: flex-start;
`;

const StyledResourceItem = styled.li`
  background-color: #94ec94;
  max-width: 900px;
`;

const StyledResourceLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  /* padding: 0 1em; */
`;

const StyledResourceImage = styled.img`
  margin-right: 1em;
  margin: "auto";
  display: "block";
  max-width: 200px;
  max-height: 150px;
`;

function ResourceItem({ resource }) {
  const { region } = useRegion();
  // const { currency, changeCurrency } = useCurrency();
  const { name, price, subject, description, id, images } = resource;

  // changeCurrency(region);
  let currency = "";

  switch (region) {
    case "malaysia":
      currency = "MYR";
      break;
    case "brunei":
      currency = "BND";
      break;
    case "singapore":
      currency = "SGD";
      break;
    case "indonesia":
      currency = "IDR";
      break;
    default:
      break;
  }

  return (
    <StyledResourceItem>
      <StyledResourceLink to={`${id}`}>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 900,
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <StyledResourceImage src={images[0]} alt="resource thumbnail" />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <StyledResourceName>{name}</StyledResourceName>
                  <h4>{subject}</h4>
                  <p>{description}</p>
                </Grid>
              </Grid>
              <Grid item>
                <h4>
                  {currency}
                  {price}
                </h4>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </StyledResourceLink>
    </StyledResourceItem>
  );
}

export default ResourceItem;
