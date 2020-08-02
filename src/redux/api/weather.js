import axios from "axios";

const weatherApi = {
  getData: async ({ cityId }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=13985bfe16f0748905dca2d093948551`
      );
      return response;
    } catch (e) {
      const error = {
        status: "error",
        massage: e.massage,
      };
      return {
        data: error,
      };
    }
  },
};

export default weatherApi;
