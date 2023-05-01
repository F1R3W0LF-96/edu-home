/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
function Avatar({ size, imageSrc }) {
  let _avatar = (
    <div className="h-6 w-6 mb-4 lg:mb-0 mr-4">
      <img
        src={imageSrc}
        alt
        className="h-full w-full rounded-full overflow-hidden shadow"
      />
    </div>
  );
  if (size === 100) {
    _avatar = (
      <div className="h-6 w-6 mb-4 lg:mb-0 mr-4">
        <img
          src={imageSrc}
          alt
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    );
  } else if (size === 200) {
    _avatar = (
      <div className="h-8 w-8 mb-4 lg:mb-0 mr-4">
        <img
          src={imageSrc}
          alt
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    );
  } else if (size === 300) {
    _avatar = (
      <div className="h-10 w-10 mb-4 lg:mb-0 mr-4">
        <img
          src={imageSrc}
          alt
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    );
  } else if (size === 400) {
    _avatar = (
      <div className="h-12 w-12 mb-4 lg:mb-0 mr-4">
        <img
          src={imageSrc}
          alt
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    );
  } else if (size === 500) {
    _avatar = (
      <div className="h-16 w-16 mb-4 lg:mb-0 mr-4">
        <img
          src={imageSrc}
          alt
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    );
  } else if (size === 600) {
    _avatar = (
      <div className="h-20 w-20 mb-4 lg:mb-0 mr-4">
        <img
          src={imageSrc}
          alt
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    );
  } else if (size === 700) {
    _avatar = (
      <div className="h-24 w-24 mb-4 lg:mb-0 mr-4">
        <img
          src={imageSrc}
          alt
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    );
  } else {
    _avatar = (
      <div className="h-8 w-8 mb-4 lg:mb-0 mr-4">
        <img
          src={imageSrc}
          alt
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
    );
  }
  return (
    <>
      <div className="px-6 flex items-center sm:flex-row flex-wrap">
        {_avatar}
      </div>
    </>
  );
}
export default Avatar;
