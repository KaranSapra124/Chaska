import axios from "axios";

const ownerMethod = async (route, formData, setOwner) => {
  axios.defaults.withCredentials = true;
  if (route === "/create-user") {
    let res = await axios.post(
      `${import.meta.env.VITE_Backend_Url}/admin${route}`,
      formData
    );
    console.log(res);
  } else if (route === "/log-user") {
    console.log(formData);
    let res = await axios.post(
      `${import.meta.env.VITE_Backend_Url}/admin${route}`,
      formData
    );
    console.log(res);
    setOwner(res?.data);
    return res?.data;
  } else if (route === "/upload-img") {
    console.log(route);
    let res = await axios.post(
      `${import.meta.env.VITE_Backend_Url}/admin${route}`,
      formData
    );
    setOwner(res?.data);
  } else if (route === "/upload-product") {
    console.log(formData);
    let res = await axios.post(
      `${import.meta.env.VITE_Backend_Url}/admin${route}`,
      formData
    );
    setOwner((prev) => ({
      ...prev,
      mealImages: res?.data,
    }));
  } else if (route === "/add-product") {
    let res = axios.post(
      `${import.meta.env.VITE_Backend_Url}/admin${route}`,
      formData
    );
    console.log(res);
  }
};

export default ownerMethod;
