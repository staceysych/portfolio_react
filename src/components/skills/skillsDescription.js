import React from "react";

const SkillsDescription = ({ id }) => {
  console.log(id);
  const education = (
    <>
      <h3>Education:</h3>
      <ol>
        <li>
          The Rolling Scopes School - Front-end Development(JavaScript)
          <br />
          2020
        </li>
        <li>
          The Rolling Scopes School - React
          <br />
          2020
        </li>
      </ol>
    </>
  );

  const html = (
    <>
      <h3>HTML:</h3>
      <span>
        I use HTML5 to create layouts of web pages or web applications as well
        as to structure application tree
      </span>
    </>
  );

  const css = (
    <>
      <h3>CSS:</h3>
      <span>
        I use CSS and SASS/SCSS preprocessor to apply styles, animation and make
        my applications stand out.
      </span>
    </>
  );
  const js = (
    <>
      <h3>JavaScript:</h3>
      <span>
        I use JavaScript to apply interactivity and creativity to my Apps. I use
        it to implement website logic and make it easier for user to operate.
      </span>
    </>
  );
  const react = (
    <>
      <h3>Rect & Redux:</h3>
      <span>
        I use React and Redux as a JavaScript framework to make my code easier
        to read, and apply modern ways from UI/UX sphere to my Apps. I often use
        Ant design library with React.
      </span>
    </>
  );
  const git = (
    <>
      <h3>Git & GitHub:</h3>
      <span>
        I use git to control versions of my development and gitHub to hold my
        application on the Internet to have an access to all my works wherever I
        code.
      </span>
    </>
  );
  return (
    <div className="skill__description">
      <div className="education__description">
        {!id ? education : null}
        {id === 1 ? html : null}
        {id === 2 ? js : null}
        {id === 3 ? css : null}
        {id === 4 ? react : null}
        {id === 5 ? git : null}
      </div>
    </div>
  );
};

export default SkillsDescription;
