import React from "react";

const AboutUs = () => {
  const tableOfContent = [
    {
      main: "general",
      sub1: "who we are",
      sub2: "what we do",
      sub3: "our strategy",
      sub4: "our branches",
      sub5: "budget",
      sub6: "future plans",
      mainUrl: "#general",
      sub1Url: "#whoweare",
      sub2Url: "#whatwedo",
      sub3Url: "#ourstrategy",
      sub4Url: "#ourbranches",
      sub5Url: "#budget",
      sub6Url: "#futureplans",
      key: 0,
    },
    {
      main: "managing body",
      sub1: "organogram",
      url: "#managinBody",
      key: 1,
    },
    {
      main: "meet our team",
      sub1: "chair man",
      sub2: "secretary",
      sub4: "controller",
      url: "#meetOurTeam",
      key: 2,
    },
    {
      main: "how we are governed",
      sub1: "rules and regulations",
      url: "#howWeAreGoverned",
      key: 3,
    },
  ];
  const whatWeDo = [
    {
      description: ` To hold and conduct examinations pertaining to Intermediate
     Education, Secondary Education, Pakistani and Classical
     Languages and such other examinations as determined by the
     government.`,
      key: 0,
    },
    {
      description: ` To accord, refuse or withdraw recognition to the Educational
     Institutions.`,
      key: 1,
    },
    {
      description: `To lay down conditions for appointment to various examinations
     held by the Board.`,
      key: 2,
    },
    {
      description: `To grant certificates and diplomas to the successful candidates.`,
      key: 3,
    },
    {
      description: `To fix, demand and receive fee as may be prescribed by.`,
      key: 4,
    },
    {
      description: `To award scholarships, medals and prizes to position holders.`,
      key: 5,
    },
    { description: `To organize and promote extra mural activities.`, key: 6 },
    {
      description: `To create posts and appoint such staff as may be considered
     necessary for the purpose of its functions; provided that a post
     in Bs-17 or above, shall be created with a prior approval of the
     Controlling Authority.`,
      key: 6,
    },
    {
      description: `To make provision for buildings premises, furniture, apparatus,
     books and other means required for carrying out the purposes of
     the Act.`,
      key: 7,
    },
  ];

  const boardCommittees = [
    {
      description: ` Date of Birth Committee`,
      key: 0,
    },
    {
      description: ` Name Correction Committee`,
      key: 1,
    },
    {
      description: `Appeal Committee`,
      key: 2,
    },
    {
      description: `Inspection Committee about affiliation`,
      key: 3,
    },
    {
      description: `DPC Committee`,
      key: 4,
    },
    {
      description: `Appointment Committee`,
      key: 5,
    },
    { description: `Finance Committee`, key: 6 },
    {
      description: `Appointment Committee of Sub-Examiners`,
      key: 7,
    },
    {
      description: `Appointment Committee for Paper Setters & Head Examiners`,
      key: 8,
    },
    {
      description: `Indent Scrutiny Committee`,
      key: 9,
    },
    {
      description: `Purchase/Tender Opening Committee`,
      key: 10,
    },
    {
      description: `Inspection Committee`,
      key: 11,
    },
    {
      description: `Auction/Write Off Committee`,
      key: 12,
    },
  ];
  const boardBranches = [
    {
      description: ` Establishment Branch`,
      key: 0,
    },
    {
      description: ` Estate Branch`,
      key: 1,
    },
    {
      description: `Sports Branch`,
      key: 2,
    },
    {
      description: `Library Branch`,
      key: 3,
    },
    {
      description: `Audit Branch`,
      key: 4,
    },
    {
      description: `Finance Branch`,
      key: 5,
    },
    { description: `Enquiry Branch`, key: 6 },
    {
      description: `Secrecy Branch`,
      key: 7,
    },
    {
      description: `Verification Branch`,
      key: 8,
    },
    {
      description: `Conduct Branch`,
      key: 9,
    },
    {
      description: `Matric Branch`,
      key: 10,
    },
    {
      description: `Inter Branch`,
      key: 11,
    },
    {
      description: `Computer Section`,
      key: 12,
    },
    {
      description: `Confidential Press `,
      key: 13,
    },
    {
      description: `Store Branch`,
      key: 14,
    },
  ];
  return (
    <div
      className="bg-primary p-2
    "
    >
      {/* page name */}
      <p className="uppercase font-semibold p-4 text-text underline text-lg mx-2 cursor-pointer">
        about us
      </p>
      {/* table of content */}
      <div
        className="uppercase text-sm text-primary   cursor-pointer bg-text shadow-lg
        md:my-8 md:mx-8 md:rounded-md
        lg:mx-32  "
      >
        <p className="uppercase text-primary cursor-default text-sm font-bold ">
          Table of content
        </p>
        <div className="flex capitalize text-xs justify-evenly w-full  ">
          {tableOfContent.map((txt) => {
            return (
              <div className="px-1 text-[9px]">
                <a href={txt.mainUrl}>
                  <div className="font-bold cursor-pointer hover:underline">
                    {txt.main}
                  </div>
                </a>
                <div className="">
                  <a href={txt.sub1Url}>
                    <p className=" hover:underline">{txt.sub1}</p>
                  </a>
                  <a href={txt.sub2Url}>
                    <p className=" hover:underline">{txt.sub2}</p>
                  </a>
                  <a href={txt.sub3Url}>
                    <p className=" hover:underline">{txt.sub3}</p>
                  </a>
                  <a href={txt.sub4Url}>
                    <p className=" hover:underline">{txt.sub4}</p>
                  </a>
                  <a href={txt.sub5Url}>
                    <p className=" hover:underline">{txt.sub5}</p>
                  </a>
                  <a href={txt.sub6Url}>
                    <p className=" hover:underline">{txt.sub6}</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* section general */}
      <div className="mt-2">
        {/* main heading of section */}
        <p
          id="general"
          className="uppercase font-bold p-4 text-primary  text-2xl mx-2  text-center cursor-default bg-text shadow-lg
        md:my-8 md:mx-8 md:rounded-md
        lg:mx-32"
        >
          general
        </p>
        {/* description who we are */}
        <p
          className=" p-4 m-2 rounded-md cursor-default bg-text shadow-lg 
          md:mx-16
        
        "
        >
          {/* description main heading */}
          <p
            id="whoweare"
            className="uppercase font-bold text-lg underline  text-primary
          md:text-center md:text-2xl"
          >
            introduction to the bise d.g khan
          </p>
          {/* description sub-heading1 */}
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4">
            creation
          </p>
          {/* description text1 */}
          <p className="text-justify text-semibold capitalize text-slate-800">
            {`Board of intermediate and Secondary Education, DG.KHAN was
            constituted under the West Pakistan Board of Intermediate and
            Secondary Education (DG.KHAN) Ordinance, 1989 (now repealed) out of
            Multan Board. It is now being governed under the Punjab Boards of
            Intermediate and Secondary Education Act, 1976.`}
          </p>
          {/* description sub-heading2 */}
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4">
            history
          </p>
          {/* description text2 */}
          <p className="text-justify text-semibold capitalize text-slate-800">
            {`Board of Intermediate and Secondary Education DG.Khan was established on 4th Jan 1989.
Camp Office of DG.Khan board started working in the Multan Board then, it was shifted to DG.Khan headquarter.
`}
          </p>
          {/* description sub-heading3 */}
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4">
            BOARD OF GOVERNORS
          </p>
          {/* description text3 */}
          <p className="text-justify text-semibold capitalize text-slate-800">
            {`There are 15 members on the Board of Governors including the Chairman. Few members are ex-officio and others are nominated as
             per provisions of the Act.

`}
          </p>
          {/* description sub-heading4 */}
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4">
            fund raising
          </p>
          {/* description text4 */}
          <p className="text-justify text-semibold capitalize text-slate-800">
            {`The Board is an autonomous institution with powers to make rules. It does not receive any grant-in-aid or any donation from the Govt. or
            other semi Govt. agency. It has to generate its own funds through the levy of examinations and other fees.
`}
          </p>
          {/* description sub-heading5 */}
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4">
            APPOINTMENTS
          </p>
          {/* description text5 */}
          <p className="text-justify text-semibold capitalize text-slate-800">
            {`The Board is an autonomous body and Govt. of the Punjab is its controlling authority. The Chairman, Secretary Controller of
            Examinations, Audit Officer and DPE are appointed by the Controlling Authority/Govt. on deputation normally for a period of 3 years.
            Other officers and staff in BS-16 and above are appointed by the Governors, in BS-5 to BS-15 by the Chairman and in BS-1 to BS-4 by the Secretary.

`}
          </p>
        </p>

        {/* description what we do */}
        <p
          className=" p-4 m-2 rounded-md cursor-default bg-text shadow-lg 
          md:mx-16
        
        "
        >
          {/* description main heading */}
          <p
            id="whatwedo"
            className="uppercase font-bold text-lg underline  text-primary
          md:text-center md:text-2xl"
          >
            what we do
          </p>
          {/* description sub-heading1 */}
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4">
            main functions of the board are as under:
          </p>
          {/* description text */}
          <p className="text-justify text-semibold capitalize text-slate-800">
            <ol>
              {whatWeDo.map((txt) => {
                return (
                  <li
                    key={txt.key}
                    type={1}
                    className="m-4 text-black font-bold "
                  >
                    <p className="text-base font-normal mx-1 text-gray-800">
                      {" "}
                      {txt.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </p>
        </p>

        {/* description our strategy */}
        <p
          className=" p-4 m-2 rounded-md cursor-default bg-text shadow-lg 
          md:mx-16
        
        "
        >
          {/* description main heading */}
          <p
            id="ourstrategy"
            className="uppercase font-bold text-lg underline  text-primary
          md:text-center md:text-2xl"
          >
            our strategy
          </p>
          {/* description sub-heading1 */}
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4">
            Board Committees
          </p>
          {/* description text board committees*/}
          <p className="text-justify text-semibold capitalize text-slate-800">
            <p className="mb-4">
              {" "}
              {`To achieve the targets & to ensure the completion of all time scheduled activities within the schedule, the Board has constituted different
              committees to look after these activities. Moreover to achieve different targets the Board has assigned different tasks to different
              branches specific to that assignment. These branches are responsible to do the job assigned to them properly and within the time
              schedule set for them.
             In this connection following are the important committees have been constituted by the Board.
`}
            </p>
            <ol>
              {boardCommittees.map((txt) => {
                return (
                  <li
                    key={txt.key}
                    type={1}
                    className="mx-6 my-2  text-black font-bold "
                  >
                    <p className="text-base font-normal mx-2 text-gray-800">
                      {" "}
                      {txt.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </p>

          {/* description sub-heading1 */}
          <p
            id="ourbranches"
            className="uppercase font-bold text-xl tracking-tight text-primary py-4"
          >
            Branches
          </p>
          {/* description text board branches*/}
          <p className="text-justify text-semibold capitalize text-slate-800">
            <p className="mb-4">
              {" "}
              {`Below are the Branches of BISE DG Khan
`}
            </p>
            <ol>
              {boardBranches.map((txt) => {
                return (
                  <li
                    key={txt.key}
                    type={1}
                    className="mx-6 my-2  text-black font-bold "
                  >
                    <p className="text-base font-normal mx-2 text-gray-800">
                      {" "}
                      {txt.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </p>
        </p>

        {/* budget section */}

        <p
          id="budget"
          className=" p-4 m-2 rounded-md cursor-default bg-text shadow-lg 
          md:mx-16
        
        "
        >
          {/* description main heading */}
          <p
            className="uppercase font-bold text-lg underline  text-primary
          md:text-center md:text-2xl"
          >
            budget
          </p>
          {/* description sub-heading1 */}
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4 cursor-pointer">
            budget 2012-17
          </p>
          <p className="uppercase font-bold text-xl tracking-tight text-primary py-4 cursor-pointer">
            budget 2017-18
          </p>
        </p>

        {/* future plans section */}

        <p
          className=" p-4 m-2 rounded-md cursor-default bg-text shadow-lg 
          md:mx-16
        
        "
        >
          {/* description main heading */}
          <p
            id="futureplans"
            className="uppercase font-bold text-lg underline  text-primary
          md:text-center md:text-2xl"
          >
            future plans
          </p>
          <p className="text-justify text-semibold capitalize my-2 text-slate-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            voluptates quod repudiandae debitis quasi illo est, ducimus tenetur
            eum, dignissimos dolor cum perspiciatis iusto placeat? Nisi fuga
            aliquid laboriosam rerum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis magnam debitis numquam fugiat aliquid
            recusandae earum laudantium, magni laboriosam repellat fuga ullam
            eum reprehenderit beatae ipsam eius, consectetur, ab illum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odit
            asperiores nihil ea eos natus minima necessitatibus, vero magni
            veniam, laudantium molestiae minus ipsam commodi atque laborum
            dolore sunt sequi.
          </p>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
