import React, { useEffect } from "react";
import axios from "axios";
export default function Logout() {
  useEffect(() => {
    (async () => {
      try {
        console.log(localStorage.getItem("refresh_token"));
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/logout/",
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          { headers: { "Content-Type": "application/json" } },
          { withCredentials: true }
        );
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        window.location.href = "/";
      } catch (e) {
        console.log("logout not working", e);
      }
    })();
  }, []);
  return <div></div>;
}
