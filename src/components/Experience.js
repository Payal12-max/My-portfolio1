import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import experiences from "./Experiencedata";


function ExperienceCard({ experience, index }) {
  const cardRef = useRef(null);
  const isLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "start 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [isLeft ? -80 : 80, 0],
  );

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [40, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.94, 1],
  );

  return (
    <motion.article
      ref={cardRef}
      style={{
        opacity,
        x: translateX,
        y: translateY,
        scale,
      }}
      className={`experience-card-wrapper ${
        isLeft ? "experience-left" : "experience-right"
      }`}
    >
      <div
        className={`experience-connector ${
          isLeft ? "connector-left" : "connector-right"
        }`}
      />

      <div className="experience-card">
        <div className="experience-card-glow" />

        <div className="experience-card-content">
          <div className="experience-header">
            <div className="experience-title-container">
              <h3>{experience.role}</h3>

              <p className="experience-company">
                {experience.company}
              </p>
            </div>

            <div className="experience-meta">
              <p>{experience.duration}</p>
              <span>{experience.location}</span>
            </div>
          </div>

          <ul className="experience-description">
            {experience.description.map((point, pointIndex) => (
              <motion.li
                key={`${experience.id}-${pointIndex}`}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: pointIndex * 0.08,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
              >
                <span className="description-dot" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          <div className="experience-technologies">
            {experience.technologies.map(
              (technology, technologyIndex) => (
                <motion.span
                  key={`${experience.id}-${technology}`}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: technologyIndex * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {technology}
                </motion.span>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const [timelineHeight, setTimelineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.4,
    restDelta: 0.001,
  });

  const dotY = useTransform(
    smoothProgress,
    [0, 1],
    [0, Math.max(timelineHeight - 24, 0)],
  );

  useEffect(() => {
    if (!timelineRef.current) return;

    const updateHeight = () => {
      if (timelineRef.current) {
        setTimelineHeight(
          timelineRef.current.offsetHeight,
        );
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(
      updateHeight,
    );

    resizeObserver.observe(timelineRef.current);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        updateHeight,
      );
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="experience-section"
    >
      <div className="experience-background-glow experience-glow-one" />
      <div className="experience-background-glow experience-glow-two" />

      <div className="experience-container">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="experience-heading"
        >
          <p>My Journey</p>

          <h2>Experience</h2>

          <span>
            Research, development, cybersecurity and
            open-source experiences that have shaped my
            technical journey.
          </span>
        </motion.div>

        <div
          ref={timelineRef}
          className="experience-timeline"
        >
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="experience-row"
            >
              <div className="timeline-segment" />

              <div className="timeline-static-dot">
                <span />
              </div>

              <ExperienceCard
                experience={experience}
                index={index}
              />
            </div>
          ))}

          <motion.div
            style={{
              y: dotY,
            }}
            className="timeline-moving-dot"
          >
            <span className="moving-dot-pulse" />
            <span className="moving-dot-centre" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
