import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { Container } from "reactstrap";
import Layout from "../components/common-layout";

//images

import bannerImg from "../assets/images/OTF/banner/faqbanner.jpg";

const PromotionTerms = (props) => {
  const DummyContent1 = (props) => <p>{props.answer}</p>;

  const faqData = [
    {
      question: "MARATHON",
      answer:
        "Participation open to all Orangetheory Fitness members and package holders. The cost to participate is a $25 registration fee, plus applicable class participation fees (membership or prepaid package sessions). Registration is required. Participants must commit to one of the five challenges prior to starting the challenge - Half, Full, Ultra, Bike or Strider. All mile distance must be accumulated at the studio where the participant registers. Warm-up distance does not count. All mileage must be exact, cannot be rounded up or down. will receive a special edition an OTF T-shirt at the end of the challenge.",
    },
    {
      question: "ONE FREE WORKOUT/CLASS",
      answer:
        "First-time visitors to Orangetheory Fitness and local residents only. Certain restrictions apply. $28 minimum value. At participating studios only. See studio for details. Subject to availability. As with any exercise program, you assume certain risks to your health and safety by starting an exercise program and/or participating in exercise activities. Workout is an extremely strenuous and physically demanding activity. Participants are urged to always consult a medical professional or physician before participating in activity or starting an exercise program. There is increased risk of injury by performing activity incorrectly, especially if you have existing health problem or physical conditions. If you choose to participate in this exercise program, you assume these risks or your own free will and accord.",
    },
    {
      question: "BURN 500 CALORIES OR MORE IN 60 MINUTES",
      answer: `Including the afterburn. Individual results may vary.

            This is not health or medical advice and is not a replacement of advice or treatment by a health professional or physician.
            
            Participants are urged to always consult a medical professional or physician before participating in activity or starting an exercise program.
            
            Workout is an extremely strenuous and physically demanding activity.
        
            It is your responsibility to ensure that you do not exceed your physical limits or over-exert yourself.
            
            Neither OTF, nor its employees, agents or affiliates, make any guarantees or warrants as to the results that may be obtained from exercise program or information and services provided during workout.
            
            OTF makes no claims or warrants that these that these results are typical.
            
            Even if you follow the program in full, you may not obtain desired results.
            
            Actual results depend on the individual and effort exerted.
            
            You may not experience weight loss, lose fat, gain muscle or attain the results you are seeking.
            
            As with any exercise program, you assume certain risks to your health and safety by starting an exercise program and/or participating in exercise activities.
            
            Increased risk of injury by performing activity incorrectly, especially if you have existing health problem or physical conditions.
            
            If you choose to participate in this exercise program, you assume these risks or your own free will and accord.`,
    },
    {
      question: "KEEP BURNING CALORIES FOR UP TO 36 HOURS",
      answer: `
            Based on intensity level, participants can burn an expected average of 15-20% more calories above their standard resting calorie burn.
            
This is not health or medical advice and is not a replacement of advice or treatment by a health professional or physician.

Participants are urged to always consult a medical professional or physician before participating in activity or starting an exercise program.

Workout is an extremely strenuous and physically demanding activity.

It is your responsibility to ensure that you do not exceed your physical limits or over-exert yourself.

Results may vary.

Nether OTF, nor its employees, agents or affiliates, make any guarantees or warrants as to the results that may be obtained from exercise program or information and services provided during workout.

OTF makes no claims or warrants that these that these results are typical.

Even if you follow the program in full, you may not obtain your desired results.

Actual results depend on the individual and effort exerted.

You may not experience weight loss, lose fat, gain muscle or attain the results you are seeking.

As with any exercise program, you assume certain risks to your health and safety by starting an exercise program and/or participating in exercise activities.

Increased risk of injury by performing activity incorrectly, especially if you have existing health problem or physical conditions.

If you choose to participate in this exercise program, you assume these risks or your own free will and accord.
            `,
    },
    {
      question: "QUIT FREE GUARANTEE",
      answer: `Offer only valid for Premier Members who complete 12 sessions within a month of membership start date (3 per week for 4 weeks). All 12 sessions must be at your home studio. OTbeat wearables and other retail sales are not refundable. Member must notify his or her home studio within a month of membership start date in order to receive refund of first month’s membership dues.

            Subject to availability.
            
            Results may vary. Even if you follow the program in full, you may not obtain your desired results. Actual results depend on the individual. You may not experience the weight loss, lose fat, gain muscle, or attain the results you are seeking.
            
            Neither Orangetheory®, nor its employees, agents, or affiliates, make any guarantees or warrants as to the results that may be obtained from exercise program or information and services provided during workout.
            
            Participants are urged to always consult a medical professional or physician before participating in activity or starting an exercise program.`,
    },
  ];
  const { global } = props;
  return (
    <div>
      <Helmet>
        <title>Promotion Terms</title>
        <meta name="description" content="Promotion Terms" />
      </Helmet>
      <Layout
        title="Promotion Terms"
        btntext="Book your Free class!"
        freeform="freeclass"
        promtext="*Promotion Terms. Limited Time Offer."
        bannerImg={bannerImg}
      >
        <section
          className="saas1 faq testimonial-bg inner-container rightAnimation"
          id="faq"
        >
          <div className="animated-bg">
            <i
              style={{
                background: "#f5822091",
                boxShadow: "0 15px 30px 0 #f5822091",
              }}
            ></i>
            <i
              style={{
                background: "#f5822091",
                boxShadow: "0 15px 30px 0 #f5822091",
              }}
            ></i>
            <i
              style={{
                background: "#f5822091",
                boxShadow: "0 15px 30px 0 #f5822091",
              }}
            ></i>
          </div>

          <Container>
            <div className="faq-block">
              <div>
                <h3 className="frequent-text">Promotion Terms</h3>
                <Accordion atomic={true}>
                  {faqData &&
                    faqData.length > 0 &&
                    faqData.map((x, i) => (
                      <AccordionItem
                        className="card-header bg-primary"
                        title={x.question}
                        key={i}
                      >
                        <DummyContent1 answer={x.answer} />
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    showSpinner: state?.globalReducer?.showSpinner,
    global: state.globalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PromotionTerms);
