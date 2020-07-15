import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };
  state = {
    currentListIndex: 0
  }
  handleButtonClick(index){
    this.setState({
      currentListIndex: index
    })
  }
  renderButtons(){
    return this.props.sections.map((title, index) => (
      <li key={index}>
        <button onClick={ () => this.handleButtonClick(index) }>
          {title.title}
        </button>
      </li>
    ))
  }
  renderContent(){
    const currentContent = this.props.sections[this.state.currentListIndex];
    return (
        <p>{ currentContent.content }</p>
    )
  }
  render() {
    return (
      <ul>
        { this.renderButtons() }
        { this.renderContent() }
      </ul>
    )
  }
}

export default Accordion;