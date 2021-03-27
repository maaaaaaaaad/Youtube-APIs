import React, { Component } from "react";
import styles from "./css/Search.module.css";

class Search extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const userText = this.inputRef.current.value;
    userText && this.props.userEnter(userText);
  };

  render() {
    return (
      <form ref={this.formRef} className={styles.form} onSubmit={this.onSubmit}>
        <div className={styles.inputSection}>
          <span className={styles.title}>
            WOONGTUBE
            <input
              ref={this.inputRef}
              className={styles.input}
              type="text"
              placeholder="Search..."
            />
            <input className={styles.submit} type="submit" value="Search" />
          </span>
        </div>
      </form>
    );
  }
}

export default Search;
