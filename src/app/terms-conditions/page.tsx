/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const TermsSection = ({ title, children }: { title: string; children: any }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-medium mb-4">{title}</h2>
    <div className="text-sub-gray space-y-4">{children}</div>
  </div>
);

const TermsAndConditions = () => {
  return (
    <div className="bg-veryLightPurple pt-[130px] md:pt-44">
      <div className="mx-auto ">
        <div className="text-center mb-12 rounded-b-[50px] md:py-10">
          <h1 className="text-4xl md:text-5xl mb-4">
            <span className="">Terms </span> & Conditions
          </h1>
        </div>
        <div className="bg-white pt-8 md:py-16 px-5">
          <div className="max-w-6xl mx-auto md:p-6 bg-white rounded-lg">
            <div className="space-y-6">
              <TermsSection title="Introduction">
                <p className="py-3">Kreatoors is an AI Loves HR Ltd Company.</p>
                <p className="py-3">
                  AI Loves HR Ltd (“AI Loves HR Ltd”, “we” or “us”) provides you access to the ailoveshr.com and other AI Loves HR Ltd websites (the
                  “Site”) in order to help you at every stage of the recruitment process and offer you other specialist services. Please read these
                  Terms of Use carefully before using the Site. Using the site indicates that you accept these Terms of Use regardless of whether or
                  not you choose to register with us. If you do not accept these terms, do not use the Site.
                </p>
              </TermsSection>

              <TermsSection title="Your use of this Site">
                <p className="py-3">
                  You may access most areas of the Site without registering your details with us. Certain areas of the site are only open to you if
                  you register by accessing any part of the Site, you shall be deemed to have accepted these Terms of Use in full. If you do not
                  accept these Terms of Use in full, you must leave this Site immediately.
                </p>
              </TermsSection>

              <TermsSection title="Prohibited Uses">
                <p className="py-3">You will not use the Site for any of the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To post or transmit any material for which you have not obtained all necessary licenses and/or approvals.</li>
                  <li>To post or transmit on the Site inaccurate, incomplete or false information.</li>
                  <li>
                    To post or transmit on the Site any libellous, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable
                    material.
                  </li>
                  <li>To post or transmit on the Site any material which contains any virus or other disabling devices.</li>
                  <li>To use any device, routine or software to crash, delay, or otherwise damage the operation of this Site.</li>
                  <li>To take any action that affects AI Loves HR Ltd’s reputation or that defames, abuses, harasses, or threatens others.</li>
                  <li>To encourage conduct that would be considered a criminal offence or otherwise be contrary to the law.</li>
                </ul>
              </TermsSection>

              <TermsSection title="Links to or from other websites">
                <p className="py-3">
                  As a convenience to users, this Site contains links to external websites and you may be offered a number of automatic links to other
                  sites, which may interest you. We accept no responsibility for or liability in respect of the content of those third party sites. AI
                  Loves HR Ltd has not reviewed or approved such sites and does not control or is responsible for those sites or their content.
                </p>
              </TermsSection>

              <TermsSection title="Security and passwords">
                <p className="py-3">
                  When you register with this site or log in when you visit the Site, you will need to use a user name and password. You are solely
                  responsible for the security and proper use of the password, which should be kept confidential at all times and not disclosed to
                  anyone. You must notify us immediately if you believe that your password is in the possession of someone else or if it may be used
                  in an unauthorized way.
                </p>
              </TermsSection>

              <TermsSection title="Intellectual Property Rights">
                <p className="py-3">
                  Unless otherwise stated, the copyright and other intellectual property rights in all material on this Site (including without
                  limitation photographs and graphical images) are owned by AI Loves HR Ltd or its licensors. You may not download, copy or print any
                  of the pages of the Site except for your own personal use, and provided you keep intact all copyright and proprietary notices.
                </p>
              </TermsSection>

              <TermsSection title="Changes to or temporary unavailability of this Site">
                <p className="py-3">
                  Every effort is made to keep the Site up and running smoothly and fault-free. However, AI Loves HR Ltd takes no responsibility for,
                  and will not be liable for, the Site being temporarily unavailable for reasons of maintenance / improvement, or due to technical
                  issues beyond our control.
                </p>
              </TermsSection>

              <TermsSection title="Termination">
                <p className="py-3">
                  We may at our absolute discretion deny you access to this Site (which may include any of the services or information available
                  through it) or any part of it at any time without explanation.
                </p>
              </TermsSection>

              <TermsSection title="Liability and Disclaimer">
                <p className="py-3">
                  The information contained on this Site including any salary information or surveys are given in good faith and AI Loves HR Ltd uses
                  all reasonable efforts to ensure that it is accurate. However, AI Loves HR Ltd gives no representation or warranty in respect of
                  such information and all such representations and warranties, whether express or implied, are excluded.
                </p>
              </TermsSection>

              <TermsSection title="Indemnity">
                <p className="py-3">
                  You agree fully to indemnity us and keep us fully indemnified against all costs, expenses, claims, losses, liabilities or
                  proceedings arising from use or misuse by you of this Site.
                </p>
              </TermsSection>

              <TermsSection title="Governing Law">
                <p className="py-3">
                  Your use of the Site and downloads from it, and the operation of these terms and conditions, shall be governed in accordance with
                  the laws of England and Wales. The English courts shall have exclusive jurisdiction over any dispute arising out of the use of this
                  website.
                </p>
              </TermsSection>

              <TermsSection title="Company Details">
                <p className="py-3">
                  ailoveshr.com is the website for AI Loves HR Ltd, a company registered in England, registered number 10250913 whose registered
                  office is 128 City Road London EC1V 2NX.
                </p>
              </TermsSection>

              <TermsSection title="Contact Information">
                <p className="py-3">
                  If you have any queries regarding the information on this website, please contact us at info@ailoveshr.com.
                  <br />
                  *Please note, this address is only for the purposes mentioned herein, and no CVs or speculative applications that are sent to this
                  email address will be considered. 
                </p>
              </TermsSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
