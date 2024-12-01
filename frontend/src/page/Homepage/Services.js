import React from "react";
import styles from "./styles/Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faShoppingCart,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div id="services" className="main_container">
      <h2 className="services_heading">Services</h2>
      <div className={styles.services_container}>
        <div className={styles.service}>
          <h5 className={styles.service_heading}>
            <FontAwesomeIcon icon={faCode} className={styles.icon} /> Custom Web
            Application Development
          </h5>
          <span className={styles.description}>
            I specialize in creating custom web applications tailored to meet
            your unique business needs. Whether it's a simple website or a
            complex multi-functional platform, I ensure a seamless and
            user-friendly experience. My services include:
          </span>
          <hr />
          <ul className={styles.list_items}>
            <li>
              Full stack development using modern frameworks and technologies.
            </li>
            <li>
              Responsive design to ensure compatibility across all devices.
            </li>
            <li>Integration with third-party APIs and services.</li>
            <li>Scalable solutions that grow with your business.</li>
          </ul>
        </div>
        <div className={styles.service}>
          <h5 className={styles.service_heading}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />{" "}
            E-commerce Solutions
          </h5>
          <span className={styles.description}>
            Boost your online sales with a robust e-commerce platform. I provide
            comprehensive e-commerce development services that include:
          </span>
          <hr />
          <ul className={styles.list_items}>
            <li>
              Custom online store development with secure payment gateway
              integration.
            </li>
            <li>Shopping cart and product management systems.</li>
            <li>
              User-friendly interface design to enhance customer experience.
            </li>
            <li>
              Performance optimization for fast and reliable transactions.
            </li>
            <li>
              Ongoing support and maintenance to keep your store running
              smoothly.
            </li>
          </ul>
        </div>
        <div className={styles.service}>
          <h5 className={styles.service_heading}>
            <FontAwesomeIcon icon={faCogs} className={styles.icon} /> API
            Development and Integration
          </h5>
          <span className={styles.description}>
            Enhance your web applications with powerful APIs that enable
            seamless interaction between different systems. My API development
            and integration services include:
          </span>
          <hr />
          <ul className={styles.list_items}>
            <li>Development of custom RESTful and GraphQL APIs.</li>
            <li>
              Integration of existing APIs to extend the functionality of your
              applications.
            </li>
            <li>Secure data exchange and authentication mechanisms.</li>
            <li>
              Thorough documentation and support for easy implementation and
              use.
            </li>
            <li>
              Ensuring APIs are scalable, reliable, and meet your performance
              requirements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
