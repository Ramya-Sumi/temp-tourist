import aboutImg from '../images/about.jpg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
          Established in 1968, Backroads is entirely owned and managed by Sangam Group of Hotels. The Sangam Group is recognized as one of the largest hotel chains in Tamil Nadu. Along with the Group, the Backroads is striving hard for ultimate success and innovation.
          </p>
          <p>We are an ISO 9001: 2008 certified company that aim to set clear goals, fix the priorities and organize the resources effectively. Backroads enables you to discover a new destination and offer unique ideas to your travel.
          </p>
          <p> We provide a wide range of holiday tour packages for all the domestic and international destinations across the world.</p>
          
        </article>
      </div>
    </section>
  );
};
export default About;