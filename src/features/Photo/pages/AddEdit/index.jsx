import "./styles.scss";

import Banner from "components/Banner";
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from "react";

AddEditPage.propTypes = {};

// npm i --save react-select
function AddEditPage(props) {
  return (
      <div className="photo-edit">
          
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
