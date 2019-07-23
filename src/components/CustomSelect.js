import React, { Component } from 'react';
import './CustomSelect.scss';

class CustomSelect extends Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: ''
  };

  handleClick = () =>
    this.setState(prevState => ({ showItems: !prevState.showItems }));

  selectItem = item => this.setState({ selectedItem: item, showItems: false });

  render() {
    return (
      <div className="select-box">
        <div onClick={this.handleClick} className="select-box--inner">
          <span className="select-box--label">Статус</span>
          <div
            className={`${
              this.state.showItems
                ? 'select-box--arrow-up'
                : 'select-box--arrow-down'
            }`}
          />
        </div>

        <div
          className="select-box--outer"
          style={{ display: this.state.showItems ? 'block' : 'none' }}
        >
          {this.state.items.map(item => (
            <div
              onClick={() => this.selectItem(item)}
              className={`select-box--option ${
                this.state.selectedItem === item ? 'selected' : ''
              }`}
              key={item.id}
            >
              {item.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CustomSelect;
