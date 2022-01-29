import React from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BoardCard = ({ title, description = "asdasdsd", color }) => {
  return (
    <Card raised>
      <CardContent>
        <Typography variant="h6" gutterBottom component="h6">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="span">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

BoardCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default BoardCard;
