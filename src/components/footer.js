import {
  Text,
  useDisclosure,
  HStack,
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
} from "@chakra-ui/react";

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        mt={5}
        p={5}
        bg="gray.100"
        left="0"
        bottom="0"
        width="full"
        justify="center"
        borderTopRadius={10}
      >
        <Text color="gray.500">By Vincent Haryadi</Text>
        <Button onClick={onOpen} colorScheme="red" variant="link">
          Sumber Data
        </Button>
      </HStack>
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
              <Text color="gray.500">Kasus COVID-19: </Text>
              <Link href="https://covid19.go.id" color="blue.500">
                Pemerintah Indonesia (covid19.go.id)
              </Link>
              <Divider />
              <Text color="gray.500">Vaksinasi COVID-19: </Text>
              <Link
                href="https://vaksincovid19-api.vercel.app/api/"
                color="blue.500"
              >
                Web Scraping API dari website Kemenkes oleh Reynadi
              </Link>
              <Link href="https://disease.sh/docs/#/" color="blue.500">
                Disease.sh API dari ourworldindata.org
              </Link>
              <Divider />
              <Text color="gray.500">Data provinsi: </Text>
              <Link href="https://disease.sh/docs/#/" color="blue.500">
                Disease.sh API dari pemerintah indonesia
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
              Kembali
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
