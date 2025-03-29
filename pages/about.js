export default function About() {
    return (
      <div>
        <h1>About Us</h1>
        <p>This page is statically generated.</p>
      </div>
    );
  }
  
  export async function getStaticProps() {
    return {
      props: {},
    };
  }