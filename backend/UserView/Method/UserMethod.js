import axios from "axios";

const userMethod = async (route, formData, setUser) => {
  axios.defaults.withCredentials = true;
  if (route === "/create-user") {
    console.log(formData);
    axios.post(`${import.meta.env.VITE_Backend_Url}/user${route}`, formData);
  } else if (route === "/log-user") {
    console.log(formData);
    let res = await axios.post(
      `${import.meta.env.VITE_Backend_Url}/user${route}`,
      formData
    );
    setUser(res?.data);
    return res?.data;
  } else if (route === "/upload-img") {
    let res = await axios.post(
      `${import.meta.env.VITE_Backend_Url}/user${route}`,
      formData
    );
    setUser(res?.data);
  } else if (route === "/get-products") {
    let res = await axios.get(`${import.meta.env.VITE_Backend_Url}/user${route}`);
    console.log(res);
    setUser(res?.data);
  }
};

export default userMethod;
