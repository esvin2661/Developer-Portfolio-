"use-client";
import React from "react";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Center,
} from "@chakra-ui/react";

// This section handles the github contributios api as a img src
const GitHubContributions = () => {
  return (
    <>
      <Box>
        <Flex h={500} alignItems={"center"} justifyContent={"Center"}>
          <div className="github-contributions">
            <div className="contributinos-header">
              <h1>GitHub Contributions</h1>
              <img
                src="http://ghchart.rshah.org/esvin2661"
                alt="Esvin Ruiz 2023 Github chart"
                style={{ width: "800px", height: "auto" }} 
              />
            </div>
          </div>
        </Flex>
      </Box>
    </>
  );
};

export default GitHubContributions;
