import { Fragment } from 'react';

import sosystemDashboard from 'assets/new/projects/deros/deros_dashboard.png';
import sosystemGraficos from 'assets/new/projects/deros/deros_graficos.png';
import sosystemResponsive from 'assets/new/projects/deros/deros_responsive.png';
import sosystemsServicoes from 'assets/new/projects/deros/deros_servicos.png';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';

import { media } from 'utils/style';
import styles from './passinweb.module.css';

const title = 'Sistema de controle de serviços de TI';
const description =
  ' Com uma interface intuitiva, o sistema permite o controle de serviços de TI com o controle de status e patrimônio de equipamentos e materiais de informática. ';

const roles = [
  'Controle de status de serviços',
  'Controle de patrimônio de equipamentos e materiais de informática',
  'Dashboard para visualização quantitativa de serviços, status e setores',
  'Relatórios de serviços e equipamentos',
];

export const PassInWeb = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sosystemDashboard}
          srcSet={`${sosystemDashboard} 1280w, ${sosystemDashboard} 2560w`}
          width={1280}
          height={800}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="/projects/sosystem"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src={sosystemsServicoes}
              srcSet={`${sosystemsServicoes} 800w, ${sosystemsServicoes} 1920w`}
              width={800}
              height={500}
              alt="Sistema de controle de credenciamento"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Propósito</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    Facilitar o gerenciamento de serviços serviços com o controle de
                    status
                  </li>
                  <li>
                    Controle básico de patrimônio de euipamentos e materiais de
                    informática
                  </li>
                  <li>
                    Um dashboard para visualização quantitativa de serviços, status e
                    setores
                  </li>
                  <li>Relatórios de serviços e equipamentos</li>
                </ul>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={sosystemResponsive}
                srcSet={`${sosystemResponsive} 350w, ${sosystemResponsive} 700w`}
                width={350}
                height={750}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              src={sosystemGraficos}
              srcSet={`${sosystemGraficos} 800w, ${sosystemGraficos} 1920w`}
              width={800}
              height={500}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
