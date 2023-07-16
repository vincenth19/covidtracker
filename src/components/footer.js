import {
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Link,
  Divider,
  Flex,
} from "@chakra-ui/react";

import { useMemo } from "react";

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const SOURCE_LINKS = useMemo(
    () => [
      {
        title:
          "Kasus, kematian, rawatan, kesembuhan, vaksinasi, data provinsi:",
        link: "https://github.com/vincenth19/covidtracker-backend",
        linkText: "API sendiri, data diambil dari Pemerintah Indonesia",
      },
    ],
    []
  );

  return (
    <>
      <Flex
        mt={8}
        py={5}
        width="full"
        borderTopColor="gray.200"
        borderTopWidth="1px"
        justify="space-between"
        fontSize={["sm", "md"]}
      >
        <Flex wrap="wrap" color="gray.500">
          <Text>Designed & created by </Text>
          <Link
            target="_blank"
            rel="noreferrer"
            ml={[0, 1]}
            href="https://vincenth19.pages.dev"
          >
            <strong>Vincent Haryadi</strong>
          </Link>
        </Flex>
        <Flex>
          <Button
            onClick={onOpen}
            colorScheme="red"
            variant="link"
            fontSize={["sm", "md"]}
          >
            Sumber Data
          </Button>
        </Flex>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="md"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sumber Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="left">
              {SOURCE_LINKS.map((data, index) => {
                return (
                  <div key={index}>
                    <Text color="gray.500">{data.title}</Text>
                    <Link href={data.link} color="blue.500" isExternal>
                      {data.linkText}
                    </Link>
                    <Divider />
                  </div>
                );
              })}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              variant="outline"
            >
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
