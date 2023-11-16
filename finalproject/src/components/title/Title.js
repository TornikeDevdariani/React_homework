import React, { useEffect } from "react";

function Title() {
  useEffect(() => {
    document.title = "Movies";
  }, []);
}

export default Title;
