import React from "react";

export default function Pricing() {
  return (
    <section className="section has-background-info">
      <div className="block has-text-centered">
        <h2 className="title has-text-light">Simple Pricing</h2>
      </div>
      <div className="block has-text-centered">
        <p className="is-size-1 has-text-light">$1.00</p>
        <p className="is-size-6 has-text-grey-lighter">per survey</p>
      </div>
      <div className="block has-text-centered">
        <p className="subtitle has-text-light">
          No confusing pricing plans. No subscriptions. Dead simple.
        </p>
      </div>
    </section>
  );
}
