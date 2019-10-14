import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="static-page__wrapper">
      <section className="static-page__section about__about-trusat-section">
        <h1 className="static-page__main-header">About Trusat</h1>
        <h2 className="static-page__sub-header about__sub-header--top">
          WHAT IS TRUSAT?
        </h2>
        <p className="static-page__copy">
          TruSat is an open source, citizen-powered space sustainability tool
          designed to assess satellite operations against sustainability
          standards. TruSat depends on satellite observers like you making and
          reporting satellite observations. TruSat’s Proof of Satellite software
          engine assembles observations of a satellite from around the world
          into a record of the satellite’s orbital position suitable for
          assessing orbital behavior against sustainability standards
        </p>
        <p className="static-page__copy">
          Version 0.1 of TruSat was developed by{" "}
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://consensys.space"
          >
            ConsenSys Space.
          </a>{" "}
          TruSat is ConsenSys Space’s first step on its mission to democratize,
          diversify, and decentralize space endeavors. TruSat aims to enable any
          person on Earth to be a direct contributor to the long-term
          sustainability of outer space, whether by spotting satellites,
          developing the software that eases the process of making and reporting
          satellite observations, or writing or translating documentation
        </p>
        <h2 className="static-page__sub-header">LINKS</h2>
        <p className="static-page__copy">
          <NavLink className="app__nav-link static-page__link" to="/whitepaper">
            The TruSat white paper
          </NavLink>{" "}
          — A technical deep dive into how TruSat works.
        </p>
        <p className="static-page__copy">
          <NavLink className="app__nav-link static-page__link" to="/charter">
            The TruSat Charter
          </NavLink>{" "}
          — An outline of TruSat’s initial governance.
        </p>
        <p className="static-page__copy">
          <NavLink className="app__nav-link static-page__link" to="/how">
            FAQ
          </NavLink>{" "}
          — Frequently asked questions
        </p>
        <p className="static-page__copy">
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://discordapp.com"
          >
            TruSat's community chat
          </a>{" "}
          — A Discord channel to discuss the project and get help.
        </p>
        <p className="static-page__copy">
          Follow project updates on{" "}
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/PlanetaryResourcesInc/"
          >
            Facebook
          </a>{" "}
          and{" "}
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/planetaryrsrcs"
          >
            Twitter
          </a>
        </p>
        <div className="about__partners-wrapper">
          <h2 className="static-page__sub-header">PARTNERS</h2>
          <div className="about__partners-list">
            <div
              style={{
                background: "#C4C4C4",
                borderRadius: "50%",
                height: "120px",
                marginBottom: "1em",
                width: "120px"
              }}
            ></div>
            <div
              style={{
                background: "#C4C4C4",
                borderRadius: "50%",
                height: "120px",
                marginBottom: "1em",
                width: "120px"
              }}
            ></div>
            <div
              style={{
                background: "#C4C4C4",
                borderRadius: "50%",
                height: "120px",
                marginBottom: "1em",
                width: "120px"
              }}
            ></div>
            <div
              style={{
                background: "#C4C4C4",
                borderRadius: "50%",
                height: "120px",
                marginBottom: "1em",
                width: "120px"
              }}
            ></div>
            <div
              style={{
                background: "#C4C4C4",
                borderRadius: "50%",
                height: "120px",
                marginBottom: "1em",
                width: "120px"
              }}
            ></div>
          </div>
        </div>
        <h2 className="static-page__sub-header about__sub-header--top">
          Press
        </h2>
        <p className="static-page__copy">
          Space News — 
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://spacenews.com/"
          >
            The Blockchain-based Satellite Catalog to Keep Space Clean
          </a>
        </p>
        <p className="static-page__copy">
          Tech Crunch — 
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://spacenews.com/"
          >
            Here’s the Headline for the Story
          </a>
        </p>
        <p className="static-page__copy">
          New York Times — 
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://spacenews.com/"
          >
            Blockchain in Outer Space Might Just Work
          </a>
        </p>
      </section>

      <section className="static-page__section">
        <h1 className="static-page__main-header">Questions and Answers</h1>
        <h2 className="static-page__sub-header about__sub-header--top">
          LEARN ABOUT TRUSAT
        </h2>
        <h3 className="about__question">What is TruSat?</h3>
        <p className="static-page__copy ">
          a. TruSat is an open source, citizen-powered system for creating a
          trusted record of satellite orbits in service of the long-term
          sustainability of outer space. This TruSat System comprises two main
          elements: Satellite Observers, who make and report satellite
          observations, and TruSat Software that autonomously processes
          observations of a satellite from multiple points around Earth into an
          orbit prediction and confidence assessment of that prediction. Space
          Sustainability Advocates may task the TruSat System to observe
          satellites of interest for sustainability purposes, and utilize the
          resulting data.
        </p>
        <p className="static-page__copy">
          b. The TruSat System is developed and maintained by the TruSat Open
          Source Community. In addition to developing the TruSat Software, this
          global community of Contributors provide valuable input on feature
          roadmaps, author documentation and other content that enable a diverse
          range of Contributors, and translate them into multiple languages.
        </p>
        <p className="static-page__copy about__answer">
          c. You can find a more detailed introduction and overview of TruSat
          here [litepaper/overview link], and find the technical details in the
          TruSat White Paper [link to white paper PDF]
        </p>

        <h3 className="about__question">
          Who uses the data generated by TruSat?
        </h3>
        <p className="static-page__copy about__answer">
          The data in this catalog is openly available without restriction to
          anyone who chooses to use it. TruSat is designed to provide space
          sustainability advocates data suitable for assessing satellite
          operations against emerging standards for responsible orbital
          operations Spacecraft operators, NGOs, and Research Institutions often
          use this type of data to support their operations and research of
          objects in space.
        </p>

        <h3 className="about__question">
          Why a citizen-powered system? Aren’t governments tracking objects in
          space?
        </h3>
        <p className="static-page__copy ">
          a. A handful of national governments track objects in space for
          national security purposes, and make a portion of their data publicly
          available. While these government programs are vital, they are not
          suited for independent assessment of compliance with space
          sustainability standards. Because a single national government
          controls the data, whose creation is neither transparent nor
          verifiable, it is not always trusted as a source of truth by all
          involved in space sustainability applications. As explained in the
          TruSat Overview [link], TruSat’s decentralized, automated
          infrastructure places its data beyond the control of any institution.
        </p>
        <p className="static-page__copy about__answer">
          TruSat is also designed to provide opportunities to anyone to make
          concrete, measurable contributions to the long-term sustainability of
          outer space.
        </p>

        <h3 className="about__question ">
          How can I contribute to TruSat other than by making satellite
          observations?
        </h3>
        <p className="static-page__copy">
          TruSat depends on the diverse skillsets of its global Open Source
          Community, from developing new software features to creating content
          in multiple languages to enable people around the world to participate
          and contribute. To learn more about these opportunities, please visit
          the{` `}
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://trusat.discord.com"
          >
            TruSat Discord Channel.
          </a>
        </p>
        <p className="static-page__copy about__answer">
          If you wish to further explore how to contribute, please contact the
          TruSat Community Manager, Kim Macharia at{" "}
          <a
            className="static-page__link"
            href="mailto:Kim.Macharia@consensys.net"
          >
            Kim.Macharia@consensys.net.
          </a>
        </p>

        <h3 className="about__question">
          What factors go into the priority list?
        </h3>
        <p className="static-page__copy">
          a. TruSat autonomously prioritizes satellites from recent launches,
          those whose orbits have changed, and those whose orbits are
          lesser-known, for example.
        </p>
        <p className="static-page__copy about__answer">
          b. In addition to these algorithmically-determined priorities, the
          version .02 release of TruSat will add Missions: satellites of high
          priority for space sustainability advocates.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__sub-header">MANAGING MY PROFILE</h2>

        <h3 className="about__question">
          Do I need a MetaMask Account to submit an observation?
        </h3>
        <p className="static-page__copy  about__answer">
          A MetaMask account is only necessary if you would like to add an
          additional level of security to your data. If you choose to connect
          your TruSat account to Metamask, you will unlock additional features
          on your profile. To create a Metamask account, please visit
          <a
            className="static-page__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://metamask.io"
          >
            metamask.io
          </a>
        </p>

        <h3 className="about__question">
          Can I make submit my observations anonymously?
        </h3>
        <p className="static-page__copy  about__answer">
          Yes. Simply email your observations to{" "}
          <a className="static-page__link" href="mailto:submit@trusat.org">
            submit@trusat.org
          </a>{" "}
          or paste them into the input field on the{" "}
          <NavLink className="app__nav-link static-page__link" to="/submit">
            Submissions Page
          </NavLink>
        </p>

        <h3 className="about__question">
          Can I remove my data from the TruSat system?
        </h3>
        <p className="static-page__copy">
          Yes. Head to the account settings page. In the “Privacy” section you
          will find an option to remove your current and historical data from
          the system.
        </p>
      </section>

      <section className="static-page__section">
        <h2 className="static-page__sub-header">
          MAKING & SUBMITTING SATELLITE OBSERVATIONS
        </h2>
        <h3 className="about__question">
          What equipment do I need to observe a satellite?
        </h3>
        <p className="static-page__copy">
          While many satellites are visible to the naked eye in locations
          without much light pollution, a pair of binoculars and accurate clocK
          will enable you to reliably observe satellites. As explained in the
          How To section [link], a range of smartphone apps and online resources
          will tell you when and where in the sky to look, based on your
          location. If you have a digital SLR camera and tripod, you can use it
          to make satellite observations, as explained in the{" "}
          <NavLink className="app__nav-link static-page__link" to="/how">
            How To
          </NavLink>{" "}
          section.
        </p>
        <h3 className="about__question">
          When is the best time to observe a satellite?
        </h3>
        <p className="static-page__copy">
          As explained in the{" "}
          <NavLink className="app__nav-link static-page__link" to="/how">
            How To
          </NavLink>{" "}
          section, the best time to view a satellite depends on when a satellite
          will be passing over your location. Typically satellites are most
          visible before sunrise and after sunset. Satellites are easiest to
          view with a clear sky.
        </p>
      </section>

      <section className="static-page__section">
        <p className="static-page__copy">
          Have any other questions? Reach out to us at{" "}
          <a className="static-page__link" href="mailto:support@trusat.org">
            support@trusat.org
          </a>
        </p>
      </section>
    </div>
  );
}
