import React from "react";
import "./app.css";
import Tilt from "react-parallax-tilt";
import Confetti from "react-confetti";

const Card = () => {
  const [isConfettiVisible, setisConfettiVisible] = React.useState(false);

  const toggleConfetti = (): void => {
    setisConfettiVisible((prevState) => !prevState);
  };
  return (
    <>
      <div className="container">
        <Tilt
          className="tilt-root"
          glareEnable="true"
          glareMaxOpacity="1"
          scale="1.1"
          tiltReverse="true"
          perspective="800"
        >
          {/* I made card content separate so that I can enable confetti only on contents */}
          <CardContent
            isConfettiVisible={isConfettiVisible}
            toggleConfetti={toggleConfetti}
          />
        </Tilt>
      </div>
    </>
  );
};

interface CardContentProps {
  isConfettiVisible: boolean;
  toggleConfetti: () => void;
}

const CardContent: React.FC<CardContentProps> = (props) => {
  return (
    <>
      {/* confetti is manually given size equal to tilt-child div */}
      {props.isConfettiVisible ? <Confetti width={650} height={700} /> : null}
      <div
        className="tilt-child"
        onMouseEnter={props.toggleConfetti}
        onMouseLeave={props.toggleConfetti}
      >
        <div className="totally-centered">
          <div className="content-container">
            <img
              className="cover-img"
              src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="cover-img"
            />
            <p className="header">Header!</p>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus nostrum, ipsam dolores assumenda aspernatur quam
              omnis sapiente cupiditate optio eveniet, iure officiis. Modi
              molestiae, corporis aperiam placeat laborum vero nobis!
            </p>
            <p>Footer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
