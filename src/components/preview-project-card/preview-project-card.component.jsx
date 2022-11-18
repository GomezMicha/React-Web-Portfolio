import React from "react";
import "./preview-project-card.style.scss";

import ProjectCard from "../project-card/project-card.component";

class PreviewProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showHideComponent = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="preview-project-card">
        <div className="card-wrapper">
          <div className="img-hover"></div>
          <img
            className="image"
            src={this.props.src}
            alt=""
            onClick={this.showHideComponent}
          />
        </div>
        <div className="card-span">
          <span></span>
        </div>
        {this.state.show ? (
          <ProjectCard onClick={this.showHideComponent} props={this.props} />
        ) : null}
      </div>
    );
  }
}

export default PreviewProjectCard;
