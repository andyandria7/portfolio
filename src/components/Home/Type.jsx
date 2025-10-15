  import Typewriter from "typewriter-effect";

  function Type() {
    return (
      <Typewriter
        options={{
          strings: [
            "Développeur web & mobile",
            "Developpeur Full Stack",
            "Laravel, CodeIgniter",
            "VueJs, ReactJs",
            "React Native"
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
