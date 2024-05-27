import React from "react";
import styles from "./styles/Certificate.module.css";

function Certificate() {
  const data = [
    {
      image: "/image/Screenshot 2024-03-04 102812.png",
      link: "https://www.edureka.co/certificates/mycertificate/28834f06fcdc466d2f7697c7bde473bb",
    },
    {
      image: "/image/Screenshot 2024-03-04 102843.png",
      link: "https://www.edureka.co/certificates/mycertificate/4e358ff7b9b699dd4551ab987d874a13",
    },
    {
      image: "/image/Screenshot 2024-03-04 102904.png",
      link: "https://www.edureka.co/certificates/mycertificate/8d2a0dfa1a7f9df7d1943914438c66e3",
    },
    {
      image: "/image/Screenshot 2024-03-04 102923.png",
      link: "https://www.edureka.co/certificates/mycertificate/922617a4d93db74fa38cb477678a180e",
    },
    {
      image: "/image/Screenshot 2024-03-04 102937.png",
      link: "https://www.edureka.co/certificates/mycertificate/ba3530917d6ff73c4c66440727aa5553",
    },
  ];

  return (
    <div>
      <h4 className="text-center p-1 mt-4 text-bg-secondary">Certificates</h4>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {data.map((item, index) => (
            <div key={index} className={styles.certificate}>
              <img
                className={styles.image}
                src={item.image}
                alt={`Certificate ${index + 1}`}
              />
            </div>
          ))}
          {data.map((item, index) => (
            <div key={index + data.length} className={styles.certificate}>
              <img
                className={styles.image}
                src={item.image}
                alt={`Certificate ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
