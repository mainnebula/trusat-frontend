import React from "react";
import { NavLink } from "react-router-dom";
import TrusatLogoBig from "../assets/TrusatLogoBig.svg";
import Partners from "../app/components/Partners";
import RoundedButton from "../app/components/RoundedButton";
import MailingListForm from "../app/components/MailingListForm";

export default function Home() {
  return (
    <div className="welcome__wrapper">
      <div className="welcome__content__wrapper">
        {/* SECTION/GRADIENT ONE */}
        <section className="welcome__section--one">
          <div className="welcome__title-logo-wrapper">
            <img
              className="welcome__image welcome__logo-image"
              src={TrusatLogoBig}
              alt="Trusat logo"
            ></img>

            <h2 className="welcome__trusat-tagline">
              OPEN SOURCE SPACE SUSTAINABILITY
            </h2>

            <img
              className="welcome__image welcome__globe-image"
              src={`https://trusat-assets.s3.amazonaws.com/illustration-cover-square2-200px.png`}
              srcSet="
              https://trusat-assets.s3.amazonaws.com/illustration-cover-square2-800px.png,
              https://trusat-assets.s3.amazonaws.com/illustration-cover-square2-200px.png"
              alt="globe"
            ></img>
          </div>

          <div className="welcome__title-intro-wrapper">
            <p className="welcome__large-copy--bold">
              Space debris is a problem.{" "}
              <br className="app__hide-on-mobile"></br>You are the solution.
            </p>
            <p className="welcome__medium-copy--white">
              The number of satellites is increasing by 25x. Collisions threaten
              the technology we depend on every day, and our spacefaring future.
            </p>
            <p className="welcome__large-copy--bold">
              Welcome to the sport <br className="app__hide-on-mobile"></br>of
              satellite tracking:
            </p>
            <div className="welcome__iframe-wrapper">
              <iframe
                className="welcome__iframe"
                title="pale blue dot video"
                src="https://www.youtube.com/embed/YYWaJ7Hd7fQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
                mozallowullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                modestbranding="1"
              ></iframe>
            </div>
            <p className="welcome__medium-copy--white">
              Use TruSat to find satellites in the sky with your naked eye,
              record their positions, and help create a planetary record that
              encourages sustainable practices in orbit.
            </p>
          </div>
        </section>

        {/* SECTION/GRADIENT TWO */}
        <section className="welcome__section--two">
          <div className="welcome__illustration-join-wrapper">
            <div className="welcome__illustration-wrapper--left">
              <img
                className="welcome__illustration"
                src="https://trusat-assets.s3.amazonaws.com/illustration-posat-square-540px.png"
                alt="Illustration"
              ></img>
            </div>

            <div className="welcome__join-copy-wrapper">
              <h2 className="welcome__sub-header--white">
                Satellite tracking?{" "}
                <span className="welcome__small-copy--emoticon">
                  ¯\_(ツ)_/¯
                </span>
              </h2>
              <p className="welcome__small-copy--white welcome__small-copy--bold">
                It’s fun, relaxing, and all you need is a clear sky
              </p>
              <ul className="welcome__small-copy__ul">
                <li className="welcome__small-copy__li">
                  TruSat will show you to when and where to look to see
                  satellites that are the highest priority to monitor.{" "}
                </li>
                <li>
                  When you record an observation, you’ll be credited in the
                  TruSat Catalog, and the satellite will be added to your
                  collection.
                </li>
                <li>Never seen a sat? We’ll show you how.</li>
              </ul>
            </div>
          </div>

          <div className="welcome__illustration-join-wrapper welcome__illustration-join-wrapper--center">
            <div className="welcome__join-copy-wrapper">
              <h2 className="welcome__sub-header--white">Why track sats?</h2>
              <p className="welcome__small-copy--white welcome__small-copy--bold">
                Earth needs a transparent record of satellite behavior.
              </p>
              <p className="welcome__small-copy--white">
                Space is wild. There’s been no way to ensure responsible
                practices in orbit, because there has been no trusted source of
                orbital data. To fill this gap, TruSat tasks a global network of
                citizens to track satellites of interest.
              </p>
              <p className="welcome__small-copy--white">
                TruSat merges many individual observations into one planetary
                record of orbital positions. This allows the world to measure
                satellite behavior against international standards of
                sustainability.{" "}
                <NavLink className="app__nav-link app__link" to="/about">
                  Learn more
                </NavLink>
              </p>
            </div>
            <div className="welcome__illustration-wrapper--right">
              <img
                className="welcome__illustration"
                src="https://trusat-assets.s3.amazonaws.com/illustration-observation-square-540px.png"
                alt="Illustration"
              ></img>
            </div>
          </div>

          <div className="welcome__illustration-join-wrapper">
            <div className="welcome__illustration-wrapper--left">
              <img
                className="welcome__illustration"
                src="https://trusat-assets.s3.amazonaws.com/illustration-open_source-square-540px.png"
                alt="Illustration"
              ></img>
            </div>

            <div className="welcome__join-copy-wrapper">
              <h2 className="welcome__sub-header--white">How can I help?</h2>
              <p className="welcome__small-copy--white welcome__small-copy--bold">
                Join us so we can keep you posted
              </p>
              <p className="welcome__small-copy--white">
                TruSat’s first release—the TruSat Catalog—gives existing
                satellite trackers a live index of satellite positions, but does
                not yet assist with capturing observations. So we’re working on
                features to make satellite tracking easier for everyone.
              </p>
              <p className="welcome__small-copy--white">
                Sign up to stay posted on new features, hackathons, bounties,
                and governance:
              </p>
              <NavLink className="app__nav-link" to="/join">
                <RoundedButton
                  addStyles="welcome__join-button"
                  color="orange"
                  text="JOIN THE COMMUNITY"
                />
              </NavLink>
            </div>
          </div>
        </section>

        {/* SECTION/GRADIENT THREE */}
        <section className="welcome__section--three">
          <Partners />
        </section>
      </div>
      <div className="welcome__bottom__wrapper">
        <div className="welcome__content__wrapper">
          {/* SECTION/GRADIENT FOUR */}
          <section className="welcome__section--four">
            <h2 className="welcome__sub-header--white">Stay in the loop</h2>
            <p className="welcome__small-copy--white">
              Join the mailing list to stay posted on the project
            </p>
            <div className="welcome__mailing-list-wrapper">
              <MailingListForm testPilots={false} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}