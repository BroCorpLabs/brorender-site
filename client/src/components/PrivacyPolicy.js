import React, { useEffect, useState, useCallback, useReducer } from "react";

const PrivacyPolicy = () => (
  <>
    <div class="container">
      <h1>Privacy Policy</h1>
      <br />
      <p>
        <strong>Data Controller</strong>
        <br />
        BroCorp, Bangalore, contact email:{" "}
        <a href="mailto:support@brocorp.site">support@brocorp.site</a>
      </p>
      <p>
        This Privacy Policy provides our policies and procedures for collecting,
        using, and disclosing your information. Users can access the Brorender
        Render Service (the "Service") through our website www.brorender.site.
        All of the different forms of data, content, and information described
        below are collectively referred to as “information.” By using the
        Service, you consent to this Privacy Policy.
      </p>
      <h2>1. What information do we collect?</h2>
      <p>
        We collect information from you when you submit a render job or when
        contacting us for information.
      </p>
      <p>
        <strong>Information You Provide</strong>. When submitting a render job
        on our site, as appropriate, you may be asked to enter your e-mail
        address. You may, however, visit our site anonymously.
      </p>
      <p>
        <strong>Digital Files</strong>. We collect and store the files you
        upload using our Service. The files are stored on a secure online
        storage system and will be erased automatically after 2 hours. To
        protect your intellectual property, unless technical problems occur
        regarding your render project, or when you ask us to do so, your source
        files will not be accessed by us manually.
      </p>
      <h2>2. What do we use your information for?</h2>
      <p>
        Any of the information we collect from you may be used in one of the
        following ways:
      </p>
      <p>
        <em>To process transactions</em>. Your information, whether public or
        private, will not be sold, exchanged, transferred, or given to any other
        company for any reason whatsoever, without your consent, other than for
        the express purpose of delivering the purchased product or service
        requested.
      </p>
      <p>
        <em>To send periodic emails</em>. The email address you provide for
        order processing, may be used to send you information and updates
        pertaining to your order, in addition to receiving occasional company
        news, updates, related product or service information, etc.
      </p>
      <p>
        <strong>Google Analytics (Google Inc.)</strong>
        Google Analytics is a web analysis service provided by Google Inc.
        (“Google”). Google utilizes the Data collected to track and examine the
        use of this Website, to prepare reports on its activities and share them
        with other Google services. Google may use the Data collected to
        contextualize and personalize the ads of its own advertising network.
        Personal Data collected: Cookies and Usage Data. Place of processing: US
        – Privacy Policy – Opt Out.
      </p>
      <p>
        <strong>Mailing list or newsletter (This Website)</strong>
        By registering on the mailing list or for the newsletter, the User’s
        email address will be added to the contact list of those who may receive
        email messages containing information of commercial or promotional
        nature concerning this Website. Your email address might also be added
        to this list as a result of signing up to this Website or after making a
        purchase. Personal Data collected: Cookies, country, email address,
        first name, last name, province, state, Usage Data, website and
        ZIP/Postal code.
      </p>
      <p>
        Note: If at any time you would like to unsubscribe from receiving future
        emails, we include detailed unsubscribe instructions at the bottom of
        each email. If, in addition to unsubscribing, you would like to be
        "forgotten" from our system, i.e. all your Information erased from our
        database, please send a request to do so to{" "}
        <a href="mailto:support@brocorp.site">support@brocorp.site</a>.
      </p>
      <p>
        To report a a violation of GDPR principles that affected you, please
        contact us at{" "}
        <a href="mailto:support@brocorp.site">support@brocorp.site</a>. We will
        resolve the issue if possible, and prevent any future occurences of the
        same or similar violations.
      </p>
      <h2>3. How do we protect your information?</h2>
      <p>
        We implement a variety of security measures to maintain the safety of
        your personal information when you place an order, enter, submit, or
        access your personal information.
      </p>
      <p>
        We offer the use of a secure server. All supplied sensitive/credit
        information is transmitted via Secure Socket Layer (SSL) technology and
        then encrypted into our Payment gateway providers database only to be
        accessible by those authorized with special access rights to such
        systems, and are required to keep the information confidential.
      </p>
      <p>
        After a transaction, your private information (credit cards, social
        security numbers, financials, etc.) will not be stored on our servers,
        but instead managed and processed by a Level 1 PCI compliant payment
        processor, Stripe.
      </p>
      <h2>4. Do we use cookies?</h2>
      <p>
        We use cookies for the functionality of the web application, as well as
        to give the user a better and more streamlined browsing experience.
      </p>
      <h2>5. Do we disclose any information to outside parties?</h2>
      <p>
        We do not sell, trade, or otherwise transfer to outside parties your
        personally identifiable information. This does not include trusted third
        parties who assist us in operating our website, conducting our business,
        or servicing you, so long as those parties agree to keep this
        information confidential. We may also release your information when we
        believe release is appropriate to comply with the law, enforce our site
        policies, or protect ours or others rights, property, or safety.
        However, non-personally identifiable visitor information may be provided
        to other parties for marketing, advertising, or other uses.
      </p>
      <h2>6. Childrens Online Privacy Protection Act Compliance</h2>
      <p>
        We are in compliance with the requirements of COPPA (Childrens Online
        Privacy Protection Act), we do not collect any information from anyone
        under 13 years of age. Our website, products and services are all
        directed to people who are at least 13 years old or older.
      </p>
      <h2>7. Online Privacy Policy Only</h2>
      <p>
        This online privacy policy applies only to information collected through
        our website and not to information collected offline.
      </p>
      <h2>8. Contacting Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at <a href="mailto:support@brocorp.site">support@brocorp.site</a>.
      </p>
      <h2>9. Changes to our Privacy Policy</h2>
      <p>
        This Privacy Policy may change from time to time. If we make a change to
        this privacy policy that we believe materially reduces your rights, we
        will provide you with notice (for example, by email). And we may provide
        notice of changes in other circumstances as well. By continuing to use
        the Service after those changes become effective, you agree to be bound
        by the revised Privacy Policy.
      </p>
    </div>
  </>
);

export default PrivacyPolicy;
