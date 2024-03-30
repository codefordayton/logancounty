import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import survey from '../data/survey.json'

import 'survey-core/defaultV2.min.css';



function NeedHelp() {
  const surveyConfig = new Model(survey);
  return (
    <div>
      <Header />
      <main className="p-6">
        <p>
          Does your home need repaired, replaced, or demolished due to the March
          2024 Tornado?
        </p>
        <p>
          Report Damages to the{" "}
          <a href="https://www.co.logan.oh.us/201/Emergency-Management-Agency">
            Logan County EMA
          </a>
          .
        </p>
        <p>
          Does your home need repaired, replaced, or demolished due to the March
          2024 Tornado?
        </p>
        <Survey model={surveyConfig} />
        <p>
          Report Damages to the{" "}
          <a href="https://www.co.logan.oh.us/201/Emergency-Management-Agency">
            Logan County EMA
          </a>
          .
        </p>
        <p>Is your home located in a licensed manufactured home park?</p>
        <p>
          Yes: Contact the Ohio Department of Commerce Division of Industrial
          Compliance at: Phone: (614) 644-2223, Email: IC@com.state.oh.us
        </p>
        <p>Is your home located in a licensed RV park?</p>
        <p>Yes: Contact the Ohio Department of Health: Phone: 614-644-7455</p>
        <p>Which Jurisdiction do you live in?</p>
        <p>
          Stokes Township: Contact the Logan County Soil and Water Conservation
          District to Determine Floodplain info at: Phone: 937-404-3147 Email:
          allison.fowler@oh.nacdnet.net
        </p>
        <p>
          Washington Township: Contact the Logan County Soil and Water
          Conservation District to Determine Floodplain info at: Phone:
          937-404-3147 Email: allison.fowler@oh.nacdnet.net Contact Washington
          Township Zoning for any applicable permits at: 937-539-1879 Email:
          washtwpzoning@gmail.com
        </p>
        <p>
          Lakeview: Contact Village for floodplain info, demolition permits, and
          any applicable zoning permits at: phone: 937-360-8412
        </p>
        <p>
          Russells Point: Contact village for floodplain info, demolition
          permits, and any applicable zoning permits at: 937-843-2245 ext. 4
        </p>
        <p>All:</p>
        <p>
          CONTACT THE LOGAN COUNTY BUILDING AUTHORITY FOR ANY APPLICABLE
          BUILDING, GAS, AND ELECTRICAL PERMITS AT PHONE: (937) 592-7473 Email:
          buildinginfo@logancountyohio.gov
        </p>
        <p>
          CONTACT THE LOGAN COUNTY PLUMBING INSPECTOR FOR ALL PLUMBING PERMITS
          AT: PHONE: 937-651-6195 EMAIL: cwren@loganhealthohio.gov
        </p>
        <p>
          CONTACT THE LOGAN COUNTY SEWER DISTRICT FOR ANY APPLICABLE SEWER
          PERMITS AT: PHONE: (937) 843-3328
        </p>
        <p>
          CONTACT THE LOGAN COUNTY AUDITORS OFFICE BEFORE MOVING OR PLACING ANY
          MANUFACTURED HOME TO GET ALL APPLICABLE PERMITS AT: PHONE:
          937-599-7209
        </p>
        <p>
          CONTACT THE LOGAN COUNTY HEALTH DISTIRCT IF YOU HAVE A WELL TO GET A
          BUILDING SITE REVIEW AND ANY APPLICABLE WELL (New,Altered,Abandoned)
          PERMITS AT: PHONE: 937-651-6205 EMAIL: aharshfield@loganhealthohio.gov
        </p>
        <p>
          Here you can provide more detailed information about the resources and
          requirements for repair, reconstruction, and demolition, as well as
          information on financial aid.
        </p>
        {/* Add the rest of your content here, converting HTML tags to JSX where necessary */}
      </main>
      <Footer />
    </div>
  );
}

export default NeedHelp;
