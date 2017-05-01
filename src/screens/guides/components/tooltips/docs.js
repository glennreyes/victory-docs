import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryLine, VictoryAxis,
  VictoryBar, VictoryScatter, VictoryStack, VictoryTooltip, VictoryVoronoiTooltip,
  VictoryGroup, VictoryVoronoiContainer
} from "victory";
import { range, random} from "lodash";
import EcologyRecipe from "../ecology-recipe";

class TooltipsGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        scope={{
          range, random, React, ReactDOM, VictoryPie, VictoryContainer, VictoryLabel,
          VictoryLine, VictoryAxis, VictoryBar, VictoryScatter, VictoryStack, VictoryTooltip,
          VictoryVoronoiTooltip, VictoryGroup, VictoryChart, VictoryVoronoiContainer
        }}
      />
    );
  }
}

TooltipsGuide.propTypes = {
  location: React.PropTypes.object
};

export default TooltipsGuide;
