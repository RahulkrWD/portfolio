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
      title: "Full-Stack Web Development",
      icon: faCode,
      description:
        "End-to-end web development services using modern technologies and best practices to create responsive, scalable applications",
      features: [
        { text: "React, Vue, Angular frontend frameworks", icon: faCode },
        { text: "Node.js, Express, NestJS backend solutions", icon: faServer },
        { text: "Responsive & mobile-first design", icon: faMobileScreen },
        { text: "Database design & optimization", icon: faChartLine },
      ],
    },
    {
      title: "Mobile App Development",
      icon: faMobileScreen,
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experience and performance",
      features: [
        { text: "React Native & Flutter development", icon: faMobileScreen },
        { text: "API integration & real-time features", icon: faPlug },
        { text: "Secure authentication systems", icon: faShieldHalved },
        { text: "App deployment & maintenance", icon: faRocket },
      ],
    },
    {
      title: "E-Commerce & Business Solutions",
      icon: faShoppingCart,
      description:
        "Complete e-commerce platforms and business solutions with payment integration, analytics, and admin dashboards",
      features: [
        { text: "Multi-vendor store management", icon: faChartLine },
        { text: "Secure payment gateway integration", icon: faShieldHalved },
        { text: "Inventory & order management", icon: faCogs },
        { text: "Analytics & reporting tools", icon: faRocket },
      ],
    },
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <SectionHeading
          title="My Services"
          subtitle="Professional development services for web and mobile applications"
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
