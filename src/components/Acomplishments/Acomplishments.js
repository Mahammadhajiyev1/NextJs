import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 8, text: "Furniture Production" },
  { number: 6, text: "Designing and Modeling 3D" },
  { number: 6, text: "Interior and Exterior Design" },
  { number: 2, text: "Web Development" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+ Years`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
