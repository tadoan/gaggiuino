import  React, { Component } from "react";
import ReactDOM from "react-dom";
import GaugeLiquid from "react-liquid-gauge";

class GaugeLiquidComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 50
    };
  }

  updateValue = (newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const radius = 50;

    return (
      <div>
        <div style={{ textAlign: "center", fontSize: "13px", color: "gray" }}>Water Level</div>
        <br></br>
        <GaugeLiquid
          style={{ margin: "0 auto" }}
          width={radius * 2}
          height={radius * 2}
          value={this.state.value}
          percent="%"
          textSize={0}
          textOffsetX={0}
          textOffsetY={0}
          riseAnimation
          waveAnimation
          waveFrequency={1}
          waveAmplitude={3}
        />
      </div>
    );
  }
}

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(<GaugeLiquidComponent />, root);
}

export default GaugeLiquidComponent;
