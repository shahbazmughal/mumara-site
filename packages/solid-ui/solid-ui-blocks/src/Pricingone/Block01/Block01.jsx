import React, { useState, useEffect, useRef } from "react";
import { Container, Flex, Box, Divider } from "theme-ui";
import Reveal from "@solid-ui-components/Reveal";
import ContentText from "@solid-ui-components/ContentText";
import ContentContainer from "@solid-ui-components/ContentContainer";
import ContentButtons from '@solid-ui-components/ContentButtons1'
import WithDefaultContent from "@solid-ui-blocks/WithDefaultContent";
import { graphql, useStaticQuery } from "gatsby";

const PricingBlockScroll = () => {
  const [planIndex, setPlanIndex] = useState(0);
  const sliderRef = useRef(null);

  // ✅ Fetch data from Strapi
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiPricing {
        nodes {
          heading
          subheading
          MarketersandDevelopers {
            heading
            plandescription
            planname
            plandescription
            planheading
            plansubheading
            plan1
            plan2
            plan3
            plan4
            plan5
            plan6
            plan7
            plan8
            plan9
            plan10
          }
          Essentialplans {
            heading
            description
            amount
            emailcredits
            cradittext
            button
            buttontext
          }
          Professionalplans {
            heading
            description
            amount
            credits
            cradittext
            button
            buttontext
          }
          Businessplans {
            heading
            description
            amount
            cradits
            cradittext
            button
            buttontext
          }
          Modal {
            enterprise
            unlimited
            button
            buttontext
          }
        }
      }
    }
  `);

  const pricingData = data.allStrapiPricing.nodes[1];
  const marketersData = pricingData.MarketersandDevelopers || {};
  const sliderValues = [
    marketersData.plan1 || "1,000",
    marketersData.plan2 || "5,000",
    marketersData.plan3 || "25,000",
    marketersData.plan4 || "50,000",
    marketersData.plan5 || "100,000",
    marketersData.plan6 || "250,000",
    marketersData.plan7 || "1,000,000",
    <span>5000000+</span>
  ];
  const maxPlans = sliderValues.length;

  const essentialPlans = pricingData.Essentialplans || [];
  const professionalPlans = pricingData.Professionalplans || [];
  const businessPlans = pricingData.Businessplans || [];

  // ✅ FIX: prevent negative array length
  const paddedEssentialPlans = [
    ...essentialPlans,
    ...Array(Math.max(0, maxPlans - essentialPlans.length)).fill({})
  ];
  const paddedProfessionalPlans = [
    ...professionalPlans,
    ...Array(Math.max(0, maxPlans - professionalPlans.length)).fill({})
  ];
  const paddedBusinessPlans = [
    ...businessPlans,
    ...Array(Math.max(0, maxPlans - businessPlans.length)).fill({})
  ];

  const selectedEssentialPlan = paddedEssentialPlans[planIndex] || paddedEssentialPlans[0];
  const selectedProfessionalPlan = paddedProfessionalPlans[planIndex] || paddedProfessionalPlans[0];
  const selectedBusinessPlan = paddedBusinessPlans[planIndex] || paddedBusinessPlans[0];

  // ✅ Mouse Drag Handler
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDragging = false;
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const sliderWidth = slider.offsetWidth;
      const progress = Math.max(0, Math.min(1, (e.clientX - slider.getBoundingClientRect().left) / sliderWidth));
      const newIndex = Math.round(progress * (maxPlans - 1));
      setPlanIndex(newIndex);
    };

    const handleMouseUp = () => {
      isDragging = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      handleMouseMove(e); // Update position immediately on click
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    slider.addEventListener("mousedown", handleMouseDown);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [maxPlans]);

  // Handle click on labels
  const handleLabelClick = (index) => {
    setPlanIndex(index);
  };

  const labelPositions = Array.from({ length: maxPlans }, (_, index) => {
    return {
      value: sliderValues[index],
      left: `${(index / (maxPlans - 1)) * 100}%`,
    };
  });

  return (
    <Box sx={{ textAlign: "center",py: 4, position: "relative", borderRadius: "8px" }}>
      {/* Heading + Subheading */}

      {/* ✅ Slider */}
      <Flex
            sx={{
              flexDirection: ["column", "row"],
              alignItems: "center", 
              justifyContent: "space-between",
              gap: 4,
              width: "100%",
              maxWidth: "1500px",
              mx: "auto",
              mb: 4,
            }}
          >
            {/* 🔹 Left Column → Heading + Subheading + Small text */}
            <Box sx={{ textAlign: "left", maxWidth: "650px", flex: "0 0 auto" }}>
              <ContentText
                content={{
                  type: "heading",
                  text: pricingData.MarketersandDevelopers.heading || "Let's Get Started",
                  as: "h2",
                  color: "#374254",
                }}
                mb={2}
              />
              <ContentText
                content={{
                  type: "text",
                  text: pricingData.subheading || "We would love to have you on board!",
                  color: "#374254",
                }}
                mb={3}
              />
            </Box>
      
            {/* 🔹 Right Column → Slider */}
            <Box sx={{ flex: 1, maxWidth: "700px" }}>
        <ContentText
          content={{
            text: pricingData.MarketersandDevelopers.plansubheading || "Select your plan",
            color: "#374254",
            as: "h5",
          }}
          mb={5}
          sx={{ textAlign: "left" }}
        />
      
        <Box
          ref={sliderRef}
          className="rangeslider rangeslider-horizontal"
          sx={{
            width: "100%",
            height: "15px",
            backgroundColor: "#D8D9DD",
            borderRadius: "60px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {/* Filled portion */}
          <Box
            className="rangeslider__fill"
            sx={{
              width: `${(planIndex / (maxPlans - 1)) * 100}%`,
              height: "100%",
              backgroundColor: "#3081f2",
              position: "absolute",
              borderRadius: "50px",
              transition: "width 0.3s ease",
            }}
          />
      
          {/* Handle */}
          <Box
            className="rangeslider__handle"
            tabIndex="0"
            sx={{
              position: "absolute",
              left: `${(planIndex / (maxPlans - 1)) * 100}%`,
              top: "-6px",
              width: "30px",
              height: "30px",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              transform: "translateX(-50%)",
              border: "2px solid #3081f2",
              transition: "left 0.3s ease",
              "&:focus": {
                outline: "none",
                boxShadow: "0 0 0 2px #E6FFFA",
              },
            }}
          >
            {/* Active Value Above Handle with Professional Box */}
            <Box
              sx={{
                position: "absolute",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#3081f2",
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: "bold",
                padding: "4px 10px",
                borderRadius: "6px",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "40px",
              }}
            >
              {sliderValues[planIndex]}
      
              {/* Small Arrow below the box */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "0",
                  height: "0",
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "6px solid #3081f2",
                }}
              />
            </Box>
          </Box>
      
          {/* Min & Max Labels */}
          <Box
            sx={{
              position: "absolute",
              top: "25px",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              fontWeight: "500",
              color: "#374254",
            }}
          >
            <span>50k</span>
            <span>500k</span>
          </Box>
        </Box>
      </Box>
      
          </Flex>

      {/* ✅ Three Cards */}
      <Flex sx={{ flexWrap: "wrap", justifyContent: "center", mx: -3 }}>
        {/* Essential */}
        <Box sx={{ flex: ["auto", 1], minWidth: 320, maxWidth: 400, p: 3, ml: 0 }}>
          <Reveal effect="fadeInUp">
            <ContentContainer
              variant="cards.paper"
              sx={{
                backgroundColor: "#bfe8fc",
                color: "#2d3748",
                borderRadius: 8,
                p: 3,
                opacity: selectedEssentialPlan.amount ? 1 : 0.5,
                pointerEvents: selectedEssentialPlan.amount ? "auto" : "none"
              }}
            >
              <ContentText content={{ type: "heading", text: selectedEssentialPlan.heading || "Essential", as: "h2", color: "#2d3748" }} />
              <ContentText content={{ type: "text", text: selectedEssentialPlan.description || "Empower your business with foundational email features.", color: "#718096" }} mb={2} />
              <ContentText content={{ type: "heading", text: selectedEssentialPlan.amount ? `$${selectedEssentialPlan.amount}/month` : "--", as: "h2", color: "#ffffffff", backgroundColor: "#3081f2" }} mb={4} />
              <Box sx={{ cursor: "pointer" }} mb={2}>
                <ContentButtons content={[{ type: "button", text: selectedEssentialPlan.buttontext || "Signup" }]} />
              </Box>
            </ContentContainer>
          </Reveal>
        </Box>

        {/* Professional */}
        <Box sx={{ flex: ["auto", 1], minWidth: 320, maxWidth: 400, p: 3, opacity: selectedProfessionalPlan.amount ? 1 : 0.5, pointerEvents: selectedProfessionalPlan.amount ? "auto" : "none" }}>
          <Reveal effect="fadeInUp">
            <ContentContainer variant="cards.paper" sx={{ backgroundColor: "#c7fffa", color: "#2d3748", borderRadius: 8, p: 3 }}>
              <ContentText content={{ type: "heading", text: selectedProfessionalPlan.heading || "Professional", as: "h2", color: "#2d3748" }} />
              <ContentText content={{ type: "text", text: selectedProfessionalPlan.description || "Take ownership of your sending to maximize email.", color: "#718096" }} mb={2} />
              <ContentText content={{ type: "heading", text: selectedProfessionalPlan.amount ? `$${selectedProfessionalPlan.amount}/month` : "--", as: "h2", color: "#ffffffff", backgroundColor: "#3081f2" }} mb={4} />
              <Box sx={{ cursor: "pointer" }} mb={2}>
                <ContentButtons content={[{ type: "button", text: selectedProfessionalPlan.buttontext || "Signup" }]} />
              </Box>
            </ContentContainer>
          </Reveal>
        </Box>

        {/* Business */}
        <Box sx={{ flex: ["auto", 1], minWidth: 320, maxWidth: 400, p: 3, opacity: selectedBusinessPlan.amount ? 1 : 0.5, pointerEvents: selectedBusinessPlan.amount ? "auto" : "none" }}>
          <Reveal effect="fadeInUp">
            <ContentContainer variant="cards.paper" sx={{ backgroundColor: "#fcf7d1", color: "#2d3748", borderRadius: 8, p: 3 }}>
              <ContentText content={{ type: "heading", text: selectedBusinessPlan.heading || "Business", as: "h2", color: "#2d3748" }} />
              <ContentText content={{ type: "text", text: selectedBusinessPlan.description || "Amplify your email program with extra support.", color: "#718096" }} mb={2} />
              <ContentText content={{ type: "heading", text: selectedBusinessPlan.amount ? `$${selectedBusinessPlan.amount}/month` : "--", as: "h2", color: "#ffffffff", backgroundColor: "#3081f2" }} mb={4} />
              <Box sx={{ cursor: "pointer" }} mb={2}>
                <ContentButtons content={[{ type: "button", text: selectedBusinessPlan.buttontext || "Signup" }]} />
              </Box>
            </ContentContainer>
          </Reveal>
        </Box>
      </Flex>
    </Box>
  );
};

export default WithDefaultContent(PricingBlockScroll);
