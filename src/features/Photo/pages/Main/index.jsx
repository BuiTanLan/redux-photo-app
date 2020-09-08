import Banner from "components/Banner";
import { Container } from "reactstrap";
import Images from "constants/images";
import { Link } from "react-router-dom";
import React from "react";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;
