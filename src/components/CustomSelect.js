import React, { Component } from 'react';
import './CustomSelect.scss';

class CustomSelect extends Component {
  state = {
    selectedItem: '',
    showItems: false
  };

  handleClick = () =>
    this.setState(prevState => ({ showItems: !prevState.showItems }));

  selectItem = item => {
    this.setState({ selectedItem: item.value, showItems: false });
    this.props.selectItem(item.value);
  };

  render() {
    return (
      <div
        className={`select-box ${this.state.showItems ? '_open' : ''} ${
          this.state.selectedItem ? '_selected' : ''
        }`}
      >
        <div onClick={this.handleClick} className="select-box--inner">
          <span className="select-box--label">Статус</span>
          <span
            className="select-box--selectedItem"
            style={{
              visibility: this.state.selectedItem ? 'visible' : 'hidden'
            }}
          >
            {this.state.selectedItem}
          </span>
          <div className="select-box--arrow" />
        </div>

        <div
          className="select-box--outer"
          style={{ display: this.state.showItems ? 'block' : 'none' }}
        >
          {this.props.items.map(item => (
            <div
              onClick={() => this.selectItem(item)}
              className={`select-box--option ${
                this.state.selectedItem === item.value ? 'selected' : ''
              }`}
              key={item.id}
            >
              {item.value}
            </div>
          ))}
        </div>
        <input type="hidden" value={this.state.selectedItem} name="status" />
      </div>
    );
  }
}

export default CustomSelect;
