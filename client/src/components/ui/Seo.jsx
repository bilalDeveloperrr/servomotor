import { useEffect } from "react";

const SITE_NAME = "Servomates Industrial";

function Seo({ title, description, fullTitle }) {
  useEffect(() => {
    if (fullTitle) document.title = fullTitle;
    else if (title) document.title = `${title} | ${SITE_NAME}`;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}

export default Seo;
