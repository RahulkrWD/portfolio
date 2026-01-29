import React from "react";
import styles from "./styles/WorkExperience.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeading from "../../components/SectionHeading";

function WorkExperience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <Container>
        <SectionHeading
          title="Work Experience"
          subtitle="Hands-on experience building real mobile features"
        />

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.cardHeader}>
                <div className={styles.role}>
                  <FaBriefcase className={styles.roleIcon} />
                  <div>
                    <h3 className={styles.roleTitle}>React Native Developer</h3>
                    <p className={styles.company}>Intern / Trainee</p>
                  </div>
                </div>

                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <FaCalendarAlt /> 3 months
                  </span>
                  <span className={styles.metaItem}>
                    <FaMapMarkerAlt /> Remote / On-site
                  </span>
                </div>
              </div>

              <ul className={styles.bullets}>
                <li>
                  Built and maintained mobile screens in React Native with reusable
                  components and consistent UI.
                </li>
                <li>
                  Integrated REST APIs, handled loading/error states, and improved
                  user flows across multiple screens.
                </li>
                <li>
                  Worked with navigation, state management, and debugging to deliver
                  stable app builds.
                </li>
              </ul>

              <div className={styles.tech}>
                <span className={styles.techLabel}>Tech:</span>
                <div className={styles.techStack}>
                  <span className={styles.techItem}>React Native</span>
                  <span className={styles.techItem}>JavaScript</span>
                  <span className={styles.techItem}>TypeScript</span>
                  <span className={styles.techItem}>REST APIs</span>
                  <span className={styles.techItem}>Git</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WorkExperience;

