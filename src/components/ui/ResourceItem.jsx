import { Grid, Paper } from "@mui/material";

import { useRegion } from "../../features/contexts/RegionContext";
import { StyledResourceItem } from "../styled_components/resource-item/StyledResourceItem";
import { StyledResourceLink } from "../styled_components/resource-item/StyledResourceLink";
import { StyledResourceImage } from "../styled_components/resource-item/StyledResourceImage";
import { StyledResourceName } from "../styled_components/resource-item/StyledResourceName";

function ResourceItem({ resource }) {
  const { region } = useRegion();
  const { name, price, subject, description, id } = resource;
  // const { name, price, subject, description, id, images } = resource;

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
              <StyledResourceImage
                src="https://thumb.ac-illust.com/28/284b06f3d622fd0c516f73b52625a117_t.jpeg"
                alt="resource thumbnail"
              />
              {/* <StyledResourceImage src={images[0]} alt="resource thumbnail" /> */}
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
