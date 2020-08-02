import React from "react";
import { connect } from "react-redux";

function HistoryPage(props) {
  const { searchHistory } = props;

  if (!searchHistory.length) {
    return <p>There is no data to show</p>;
  } else {
    return (
      <ul>
        {searchHistory.map((item) => {
          return <li key={Math.random()}>{item}</li>;
        })}
      </ul>
    );
  }
}

//just for reading from props use mapStateToProps

const mapStateToProps = (state) => ({
  searchHistory: state.weather.searchHistory,
});

export default connect(mapStateToProps)(HistoryPage);
