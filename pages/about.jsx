const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br/>
      <h4>I started learning to code in 2020 at my local bootcamp. 
        After finishing that experience I also worked in a few small projects and I'm currently looking for a full time position as a Web Developer.
        </h4>
        <br/>
        <h4>
        If you're looking for a reliable developer, I'm the one for you!
        </h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
