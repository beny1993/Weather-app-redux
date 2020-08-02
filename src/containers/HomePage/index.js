import React from "react";
import { getData } from "../../redux/actions/action";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Weather from "../../components/weather/index";
// import { compose } from "redux";

function HomePage(props) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { fetchWeatherById, loading, cityData } = props;
  console.log(props);
  const SearchChangeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchWeatherById({
        cityId: searchQuery,
      });
      setSearchQuery("");
    } else {
      toast("please enter the city name", {
        type: toast.TYPE.ERROR,
        position: "top-center",
      });
    }
  };

  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <form>
        <input
          type="text"
          value={searchQuery}
          placeholder="Enter your City ID.."
          onChange={SearchChangeHandler}
        />
        <button onClick={searchSubmitHandler}>Search</button>
      </form>
      {Object.keys(cityData).length !== 0 && !loading && (
        <Weather cityData={cityData} />
      )}
    </>
  );
}

//send somedata to action for changeing state in store
const mapDispatchToProps = (dispatch) => ({
  fetchWeatherById: (payload) => dispatch(getData(payload)),
});

//getting data from initial state
const mapStateToProps = (state) => ({
  loading: state.weather.loading,
  cityData: state.weather.currentCityData,
});

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);

//must use connect with this order cause problem others
