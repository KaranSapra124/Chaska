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
    let res;
    console.log(formData);
    if (formData !== null) {
      res = await axios.post(
        `${import.meta.env.VITE_Backend_Url}/admin${route}`,
        formData
      );
      console.log(res);
      setOwner(res?.data);
      return res?.data;
    } else {
      res = await axios.post(
        `${import.meta.env.VITE_Backend_Url}/admin${route}`,
        formData
      );
      console.log(res,'............');
      setOwner(res?.data);
      return res?.data;
    }
  } else if (route === "/upload-img") {
    console.log(formData);
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
    console.log(res, ".................................");
    setOwner((prev) => ({
      ...prev,
      mealImages: res?.data?.img,
    }));
  } else if (route === "/add-product") {
    let res = await axios.post(
      `${import.meta.env.VITE_Backend_Url}/admin${route}`,
      formData
    );
    console.log(res);
  } else if (route === "/get-product") {
    let res = await axios.get(
      `${import.meta.env.VITE_Backend_Url}/admin${route}`
    );
    console.log(res);
    setOwner(res?.data?.products);
  }
};

export default ownerMethod;
