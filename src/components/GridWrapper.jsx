import React from "react";
import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { WIDTHS } from "../constants/layout";

const GridWrapper = ({
  items,
  className,
  maxWidth = WIDTHS.md,
  gridSpacing = 4,
  gridItemWidths = {},
}) => (
  <Container maxWidth={maxWidth} classes={className}>
    <Grid container wrap="wrap" spacing={gridSpacing}>
      {items &&
        items.map(({ id, Component }, index) => (
          <Grid item {...gridItemWidths} key={id + index}>
            <Component />
          </Grid>
        ))}
    </Grid>
  </Container>
);

GridWrapper.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  gridSpacing: PropTypes.number,
  gridItemWidths: PropTypes.object,
};

export default GridWrapper;
