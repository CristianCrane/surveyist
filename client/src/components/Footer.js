import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <InfoArea />
          </div>
          <div className="column">
            <ContactForm />
          </div>
        </div>
        <p className="has-text-centered is-size-6 has-text-grey-dark">
          Website design and development by <a href="#">Cristian Crane</a>.
        </p>
      </div>
    </footer>
  );
}

const InfoArea = () => {
  return (
    <section className="section">
      <h2 className="title has-text-grey-dark is-size-4">About</h2>
      <p className="block has-text-justified">
        Connect with your users and gain valuable feedback with Surveyist. A
        surveys as a service platform, Surveyist lets you create surveys and
        distribute them to your mailing list in just a few clicks. We aggregate
        the feedback so you can track user engagement and gain valuable insight
        allowing you to give your customers exactly what they want.
      </p>
      <div className="p-6">
        <nav className="level">
          <div className="level-item">
            <a className="icon has-text-link">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </div>
          <div className="level-item">
            <a className="icon has-text-info">
              <i className="fab fa-twitter fa-2x fa-info-circle"></i>
            </a>
          </div>
          <div className="level-item">
            <a className="icon has-text-info">
              <i className="fab fa-instagram fa-2x fa-info-circle"></i>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="section">
      <form>
        <h2 className="title has-text-grey-dark is-size-4">Contact</h2>
        <div className="field">
          <label className="label is-small">Name</label>
          <div className="control has-icons-left">
            <input
              className="input is-small"
              type="text"
              placeholder="Text input"
              value="bulma"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label is-small">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-small"
              type="email"
              placeholder="Email input"
              value="hello@"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>
        <div className="field">
          <label className="label is-small">Subject</label>
          <div className="control">
            <div className="select is-small">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label is-small">Message</label>
          <div className="control">
            <textarea
              className="textarea is-small"
              placeholder="Textarea"
            ></textarea>
          </div>
        </div>
      </form>
    </section>
  );
};
