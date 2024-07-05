  import Typewriter from "typewriter-effect";

  function Type() {
    return (
      <Typewriter
        options={{
          strings: [
            "Développeur web",
            "Freelanceur",
            "Developpeur Full Stack",
            "React Laravel",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 10,
          delay: 20
        }}
      />
    );
  }

  export default Type;
