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

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            href="https://vincenth19.com"
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
              <Text color="gray.500">
                Kasus, kematian, rawatan, kesembuhan:
              </Text>
              <Link
                href="https://github.com/Reynadi531/api-covid19-indonesia-v2"
                color="blue.500"
              >
                API dari Reynadi, sumber dari pemerintah Indonesia
              </Link>
              <Divider />
              <Text color="gray.500">Vaksinasi: </Text>
              <Link
                href="https://vaksincovid19-api.vercel.app/api/"
                color="blue.500"
              >
                Web Scraping API dari website Kemenkes oleh Reynadi
              </Link>
              <Divider />
              <Text color="gray.500">Data provinsi: </Text>
              <Link
                href="https://github.com/Reynadi531/api-covid19-indonesia-v2"
                color="blue.500"
              >
                API dari Reynadi, sumber dari pemerintah Indonesia
              </Link>
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
