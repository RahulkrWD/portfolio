import React from "react";
import styles from "./styles/Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "../../components/SectionHeading";
import {
  faCode,
  faShoppingCart,
  faCogs,
  faMobileScreen,
  faShieldHalved,
  faRocket,
  faChartLine,
  faPlug,
  faServer,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const services = [
    {
      title: "Custom Web Development",
      icon: faCode,
      description:
        "Tailored web applications designed to meet your unique business requirements",
      features: [
        { text: "Full stack development with modern frameworks", icon: faCode },
        { text: "Responsive, mobile-first design", icon: faMobileScreen },
        { text: "Third-party API integration", icon: faPlug },
        { text: "Scalable architecture", icon: faServer },
      ],
    },
    {
      title: "E-commerce Solutions",
      icon: faShoppingCart,
      description:
        "Complete online store solutions to boost your digital sales",
      features: [
        { text: "Secure payment gateway integration", icon: faShieldHalved },
        { text: "Product management systems", icon: faChartLine },
        { text: "Optimized checkout experience", icon: faRocket },
        { text: "Ongoing support & maintenance", icon: faCogs },
      ],
    },
    {
      title: "API Development",
      icon: faCogs,
      description: "Powerful APIs to connect your systems and services",
      features: [
        { text: "RESTful & GraphQL API development", icon: faPlug },
        { text: "Existing API integration", icon: faServer },
        { text: "Secure authentication", icon: faShieldHalved },
        { text: "Comprehensive documentation", icon: faPalette },
      ],
    },
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <SectionHeading
          title="My Services"
          subtitle="Solutions tailored to your business needs"
        />

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={service.icon}
                    className={styles.serviceIcon}
                  />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <ul className={styles.featuresList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className={styles.featureIcon}
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* <div className={styles.ctaButton}>Learn More</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
