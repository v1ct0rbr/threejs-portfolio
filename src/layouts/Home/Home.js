import derosTextureLarge from 'assets/new/deros.png1600x2560.png';
import derosTexturePlaceholder from 'assets/new/deros.png20x32.png';
import derosTexture from 'assets/new/deros.png800x1280.png';
import eventCredentialsLarge from 'assets/new/event_credentials.png__1320x520.png';
import eventCredentials from 'assets/new/event_credentials.png__660x260.png';
import eventCredentialsPlaceholder from 'assets/new/event_credentials.png_placeholder_33x13.png';
import pontoSimTextureLarge from 'assets/new/projects/pontosim/pontosim02.png1600x2560.png';
import pontoSimTexturePlaceholder from 'assets/new/projects/pontosim/pontosim02.png20x32.png';
import pontoSimTexture from 'assets/new/projects/pontosim/pontosim02.png800x1280.png';

import eventCredentials2 from 'assets/new/event_credentials2.png__660x260.png';
import eventCredentialsLarge2 from 'assets/new/event_credentials2.png_large_1320x520.png';
import eventCredentialsPlaceholder2 from 'assets/new/event_credentials2.png_placeholder_33x13.png';

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useLayoutEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Student', 'Learner'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  // const projectFour = useRef();
  const details = useRef();

  useLayoutEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Mayank Jain — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Sistema de ponto Eletrônico"
        description="Desenvolvimento de uma aplicação para controle de ponto eletrônico. Foi construído para controlar o ponto dos funcionários da empresa."
        buttonText="View project"
        buttonLink="projects/pontosim"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',

          textures: [
            {
              srcSet: [pontoSimTexture],
              placeholder: pontoSimTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Event credentials"
        description="Development of a web app for event credentials. It is used to control the credentials of the event. "
        buttonText="View project"
        buttonLink="/projects/pass-in-web"
        model={{
          type: 'phone',
          alt: 'Smart Sparrow lesson builder',

          textures: [
            {
              srcSet: [eventCredentials],
              placeholder: eventCredentialsPlaceholder,
            },
            {
              srcSet: [eventCredentials2],
              placeholder: eventCredentialsPlaceholder2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="IT Service control"
        description="Development of a web app for service control. It is used to control the it services of the company like the servers, the computers, the network and the services. "
        buttonText="View project"
        buttonLink="projects/sosystem"
        model={{
          type: 'laptop',
          alt: 'deros app',
          textures: [
            {
              srcSet: [derosTexture],
              placeholder: derosTexturePlaceholder,
            },
          ],
        }}
      />
      {/* <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Stocks Dashboard"
        description="A dashboard to display some of the top performing stocks in the Indian market"
        buttonText="View website"
        buttonLink="http://stock-dashboard.kiitians.com/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [stockDash],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [stockDash2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      /> */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
