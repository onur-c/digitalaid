import React from "react";

const GoogleMap = () => {
  return (
    <div className="google-map-code my-14 flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48192.43724269729!2d28.79359969055979!3d40.98088243309312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa36a68702603%3A0xa5a84a3001d2f4ce!2zQmFrxLFya8O2eS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1692183085985!5m2!1str!2str"
        width="600"
        height="450"
        style={{
          border: "1px solid black",
          borderRadius: "4px",
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default GoogleMap;
