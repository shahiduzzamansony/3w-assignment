import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  const faq = [
    {
      ques: "What is a blockchain oracle?",
      ans: "A blockchain oracle is any system that services a smart contract by providing it with data from an off-chain source or connecting it with an off-chain system. Oracles enable connectivity between blockchains and real-world data by interfacing with external APIs and data feeds, allowing them to pull data for or push data from a smart contract.",
    },
    {
      ques: "Why do blockchains need oracle?",
      ans: "Oracles enable smart contracts to interact with off-chain resources. Without oracles, smart contracts can only access data within a blockchain, severely limiting their potential applications. The majority of industry-changing real-world use cases for smart contracts require off-chain data and computation for proper execution and often an integration with existing payment rails to settle a contract. For example, a smart contract may require high-quality weather data from a reputable source like AccuWeather to trigger a transaction. It may also require the ability to pay out escrowed fiat currency through existing financial infrastructure, such as a bank checking account.",
    },
    {
      ques: "What is the Chainlink Network?",
      ans: "The Chainlink Network refers to all of the decentralized oracle networks actively operating using the Chainlink protocol, including individual oracles, data providers running their own node, and node operators. By enabling smart contracts to quickly and securely connect to off-chain data sources using decentralized oracle networks, the Chainlink Network helps developers build more robust and diverse blockchain applications using real-world inputs and outputs. Additionally, as middleware between low-level blockchain protocols and external, off-chain data sources, the Chainlink Network serves as an abstraction layer for data providers to easily sell their existing APIs to any blockchain network.",
    },
    {
      ques: "Where can I explore the performance and reliability of the Chainlink Network?",
      ans: "The Chainlink Price Feeds page provides real-time visualizations of each decentralized price feed that provides on-chain exchange rates for cryptocurrencies, stablecoins, commodities, and indices. Users can explore each individual price feed, which offers transparency around which nodes power each feed, each node’s latest response, how often feed updates occur, the gas price paid by each node, the users sponsoring each feed, and hyperlinks to on-chain transactions.requests, average response times, and more.",
    },
    {
      ques: "What is Chainlink Verifiable Random Function(VRF)?",
      ans: "Chainlink VRF brings secure random number generation to the blockchain. Chainlink VRF solves the difficult problem of providing an on-chain source of randomness that is publicly verifiable to be authentic and tamper-proof. Many smart contracts are augmenting the value they can create by utilizing Chainlink VRF, specifically applications such as gaming dApps that must prove to their users that their source of randomness is provably fair and resistant to manipulation from any external entity. Chainlink VRF enables and accelerates the development of smart contracts focused on blockchain gaming, security, layer-two protocols, and various other use cases",
    },
    {
      ques: "What is Chainlink Proof of Reserve?",
      ans: "Chainlink Proof of Reserve provides smart contracts with the data required to calculate the true collateralization of any on-chain asset backed by off-chain reserves such as stablecoins and cross-chain assets. Operated by a decentralized network of oracles, Chainlink Proof of Reserve enables the autonomous auditing of collateral used within DeFi in real-time, ensuring users’ funds are protected from unforeseen fractional reserve practices and other fraudulent activity from off-chain custodians. This provides both the growing DeFi ecosystem and the traditional financial system a way to increase the transparency of operations with definitive on-chain proof of any asset’s true collateralization.",
    },
    {
      ques: "Who can use Chainlink?",
      ans: "Any individual or group that needs real-world data to power and secure the execution of their smart contracts can benefit from Chainlink’s robust and customizable framework for creating decentralized oracle networks. Today, hundreds of teams working on dApps, blockchains, industry consortiums, enterprise projects, and more rely on Chainlink to provide tamper-proof inputs and outputs for their smart contracts. Chainlink has become the de facto oracle solution for the DeFi space, supporting top projects like Aave, Synthetix, and Compound, and securing billions in value across the sector.If you’d like more information on how Chainlink could provide solutions for your project, join us in the Official Discord Channel and reach out through the integrations submission form.",
    },
    {
      ques: "How do I keep up with current protocol development?",
      ans: "The Chainlink development team is continuously building the network and protocol. To keep up to date with current progress you can follow the Chainlink Github. You can find a full list of open roles on the Chainlink Labs careers page.",
    },
    {
      ques: "How do I reach out to Chainlink for support?",
      ans: "For inquiries related to security and support, please reach out to the admins of official Chainlink channels or email support@chain.link‍. You can also find more technical information in the documentation. Always practice a security mindset and ensure that users you are interacting with on community channels have verifiable trusted identities. You can confirm the accounts of official Chainlink community admin by clicking their names in the chat or viewing their handles under the official channel info.",
    },
    {
      ques: "How do I participate in building Chainlink?",
      ans: "There are numerous projects working on the development of the Chainlink ecosystem, including Chainlink Labs. You can find a full list of open roles on the Chainlink Labs careers page.",
    },
  ];
  return (
    <div className="bg-white py-4">
      <Container>
        <h2 className="text-center fw-semibold text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion>
          {faq.map((f, i) => (
            <Accordion.Item eventKey={i} key={i}>
              <Accordion.Header>
                {" "}
                <span className="fw-bold fs-5">{f.ques}</span>
              </Accordion.Header>
              <Accordion.Body>{f.ans}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
