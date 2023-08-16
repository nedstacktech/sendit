import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Faq() {
  const faqs = [
    {
      question: "What is $SENDIT Coin and what is its purpose?",
      answer:
        "SendIt Coin is an ERC-20 token built on the Ethereum blockchain, designed to facilitate seamless and secure digital transactions. Its primary purpose is to serve as a utility token within the SendIt platform, allowing users to transfer value quickly and efficiently across the network. SendIt Coin can be used for various purposes, including remittances, micropayments, and as a medium of exchange within the SendIt ecosystem.",
    },
    {
      question: "How can I acquire SendIt Coins?",
      answer:
        "You can acquire SendIt coins by purchasing them from supported cryptocurrency exchanges where SendIt is listed. Look for the SendIt trading pairs on these platforms and follow their instructions for buying the coin. Make sure to store your SendIt coins in a secure Ethereum wallet that supports ERC-20 tokens.",
    },
    {
      question: "What utility does SendIt coin offer?",
      answer:
        "SendIt coin is designed to serve as a utility token within its designated ecosystem. It can be used for various purposes such as paying for transaction fees, accessing premium features, participating in governance decisions (if applicable), and facilitating peer-to-peer transfers. The precise utility and use cases may vary based on the platform or project associated with SendIt.",
    },
    {
      question: "Can I store SendIt coins in any Ethereum wallet?",
      answer:
        "Yes, SendIt is an ERC-20 token, which means it is compatible with a wide range of Ethereum wallets that support this standard. Popular wallets like MetaMask, MyEtherWallet, Ledger Live (with compatible hardware wallets), and Trust Wallet are suitable for storing SendIt coins securely. Just ensure that you're using a wallet that you trust and that you control the private keys to maintain control over your coins.",
    },
    {
      question: "Is SendIt susceptible to price volatility?",
      answer:
        "Yes, like most cryptocurrencies, SendIt's value can be subject to price volatility. Its price may fluctuate based on market demand and supply dynamics, investor sentiment, technological developments, regulatory changes, and macroeconomic factors. As with any investment, it's important to do your own research and understand the risks associated with price fluctuations before acquiring SendIt coins.",
    },
  ];
  return (
    <Box p="8" w={{md: "45%"}}>
      <Heading as="h3" fontSize="clamp(1.3rem, 1.7vw, 2.3rem)" mb="2">
        Frequently asked questions
      </Heading>
      <Box>
        <Accordion allowToggle>
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem border={"0"} key={index}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                  px="0"
                    gap="2"
                    fontSize="clamp(.8rem, 1.2vw, 1.8rem)"
                    fontWeight={"bold"}
                  >
                    <Text flex="1" textAlign={"left"}>
                      {question}
                    </Text>{" "}
                    <Text fontSize={"1rem"}>{isExpanded ? "-" : "+"}</Text>
                  </AccordionButton>
                  <AccordionPanel>{answer}</AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}
