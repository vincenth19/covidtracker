import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  OrderedList,
  ListItem,
  Link,
  Stack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaHospital,
  FaBuilding,
  FaSyringe,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { BiDonateBlood } from "react-icons/bi";

export default function Info() {
  return (
    <Box>
      <Text mt={6} fontSize="1.5rem" fontWeight="bold">
        Kumpulan Informasi Bantuan COVID-19
      </Text>
      <Text>
        Ini adalah kumpulan berbagai macam informasi tentang COVID-19. Dari
        oksigen, ambulan, rumah sakit, vaksinasi, dan lain-lain.
        <br />
        Bisa{" "}
        <Link
          href="mailto:vincenthary19@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Text color="blue.500" as="u">
            email
          </Text>
        </Link>{" "}
        atau cari saya di{" "}
        <Link
          href="https://www.instagram.com/vincenth19/"
          target="_blank"
          rel="noreferrer"
        >
          <Text color="blue.500" as="u">
            instagram
          </Text>
        </Link>{" "}
        jika mau menambahkan/memperbaiki informasi.
      </Text>
      <Box>
        <SimpleGrid mt={2} minChildWidth={["94%", "47%"]} spacing="2%">
          <Box
            px={5}
            py={[2, 5]}
            borderRadius={5}
            boxShadow="md"
            mt={3}
            bg="white"
          >
            <Flex alignContent="center" align="center">
              <Box p={2} bg="teal.50" borderRadius={10} mr={4}>
                <Text fontSize="2rem" color="teal.500">
                  <FaPhoneAlt />
                </Text>
              </Box>
              <Stack spacing={1}>
                <Link href="tel:119p9">
                  <Text fontSize="1rem" color="gray.500" fontWeight="semibold">
                    Hotline telpon Kemenkes
                  </Text>
                  119 extension 9
                </Link>
              </Stack>
            </Flex>
          </Box>
          <Box
            px={5}
            py={[2, 5]}
            borderRadius={5}
            mt={3}
            boxShadow="md"
            bg="white"
          >
            <Flex alignContent="center" align="center">
              <Box p={2} bg="teal.50" borderRadius={10} mr={4}>
                <Text fontSize="2rem" color="teal.500">
                  <FaPhoneAlt />
                </Text>
              </Box>
              <Stack spacing={1}>
                <Link href="tel:117p5">
                  <Text fontSize="1rem" color="gray.500" fontWeight="semibold">
                    Hotline Contact Center BNPB, Donor Konvalesen
                  </Text>
                  117 extension 5
                </Link>
              </Stack>
            </Flex>
          </Box>
          <Box
            px={5}
            py={[2, 5]}
            borderRadius={5}
            mt={3}
            boxShadow="md"
            bg="white"
          >
            <Flex alignContent="center" align="center">
              <Box p={2} bg="blue.50" borderRadius={10} mr={4}>
                <Text fontSize="2rem" color="blue.500">
                  <FaGlobe />
                </Text>
              </Box>
              <Stack spacing={1}>
                <Link href="https://www.wargabantuwarga.com/">
                  <Text fontSize="1rem" color="gray.500" fontWeight="semibold">
                    Website informasi COVID
                  </Text>
                  Oleh tim WargaBantuWarga.com
                </Link>
              </Stack>
            </Flex>
          </Box>
          <Box
            px={5}
            py={[2, 5]}
            borderRadius={5}
            mt={3}
            boxShadow="md"
            bg="white"
          >
            <Flex alignContent="center" align="center">
              <Box p={2} bg="teal.50" borderRadius={10} mr={4}>
                <Text fontSize="2rem" color="teal.500">
                  <FaWhatsapp />
                </Text>
              </Box>
              <Stack spacing={1}>
                <Link href="https://api.whatsapp.com/send/?phone=6281257579812&text&app_absent=0">
                  <Text fontSize="1rem" color="gray.500" fontWeight="semibold">
                    Hotline Chat WhatsApp
                  </Text>
                  Oleh tim WargaBantuWarga.com
                </Link>
              </Stack>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple mt={[12, 5]}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize="1.2rem"
              >
                <Flex>
                  <Text color="blue.600">
                    O<Text as="sup">2</Text>
                  </Text>
                  <Text ml={1}>Oksigen</Text>
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList>
              <Stack>
                <ListItem>
                  <Link
                    href="https://www.instagram.com/gerakantabungoksigen.drj/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>@gerakantabungoksigen.drj (Instagram)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://oksigen.carrd.co/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Info Oxygen (Website)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://bit.ly/OksigenJKT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Oxygen Jakarta (Google Drive)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="http://bit.ly/pinjamoksi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Pinjam Tabung Oxygen (Website)</Text>
                  </Link>
                </ListItem>
              </Stack>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize="1.2rem"
              >
                <Flex alignItems="center">
                  <Text color="red.500" mr={2}>
                    <GiWaterDrop />
                  </Text>
                  Cari Donor Darah
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList>
              <Stack>
                <ListItem>
                  <Link
                    href="https://linktr.ee/donorplasma"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Group WhatsApp per Daerah (WhatsApp)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://blood4life.id/donor/permohonan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Blood 4 Life (Website)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://ahaha.id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Cari/Memberi Donor Darah Konvalesen</Text>
                  </Link>
                </ListItem>
              </Stack>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize="1.2rem"
              >
                <Flex alignItems="center">
                  <Text color="red.600" mr={2}>
                    <BiDonateBlood />
                  </Text>
                  Memberi Donor Darah
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList>
              <Stack>
                <ListItem>
                  <Link
                    href="https://plasmakonvalesen.covid19.go.id/id/formulir.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>
                      Palang Merah Indonesia (PMI, Website Pemerintah)
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://instagram.com/yukdonorplasma"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>@yukdonorplasma (Instagram)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://bit.ly/ayodonorplasma"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>ReBlood (Website)</Text>
                  </Link>
                </ListItem>
              </Stack>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize="1.2rem"
              >
                <Flex alignItems="center">
                  <Text color="green.700" mr={2}>
                    <FaHospital />
                  </Text>
                  Rumah Sakit, Puskesmas, Obat, FasKes
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList>
              <Stack>
                <ListItem>
                  <Link
                    href="https://bit.ly/SiranapIndo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>
                      Cari Ketersediaan Rumah Sakit Non/COVID-19 (Website
                      Kemenkes)
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://covid19.go.id/daftar-rumah-sakit-rujukan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>
                      Daftar Rumah Sakit Rujukan COVID-19 (Website Pemerintah
                      Indonesia)
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://farmaplus.kemkes.go.id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>
                      Paket Obat-obatan Kimia Farma (Website Kemenkes)
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://urundayacovid.com/rumahsakit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Hotline Rumah Sakit (Website)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://urundayacovid.com/puskesmas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Hotline Puskesmas (Website)</Text>
                  </Link>
                </ListItem>
              </Stack>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize="1.2rem"
              >
                <Flex alignItems="center">
                  <Text color="gray.600" mr={2}>
                    <FaBuilding />
                  </Text>
                  Layanan IsoMan
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList>
              <Stack>
                <ListItem>
                  <Link
                    href="https://urundayacovid.com/isoman"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Seluruh Indonesia (Website)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://pikobar.jabarprov.go.id/isoman"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Jawa Barat (Website)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://sobatisoman.id/10-cara-isolasi-di-rumah/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Panduan IsoMan (Website)</Text>
                  </Link>
                </ListItem>
              </Stack>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize="1.2rem"
              >
                <Flex alignItems="center">
                  <Text color="blue.500" mr={2}>
                    <FaSyringe />
                  </Text>
                  Vaksinasi
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList>
              <Stack>
                <ListItem>
                  <Link
                    href="https://covid19.go.id/faskesvaksin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Seluruh Indonesia (Website Pemerintah)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://instagram.com/infovaksincovid_19"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>@infovaksincovid_19 (Instagram)</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://vaksincovid.carrd.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Stack direction="row" alignItems="center">
                      <Text>Yuk Vaksin (Website)</Text>
                    </Stack>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://vaksinasi.medup.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Tim Relawan Digital (Website)</Text>
                  </Link>
                </ListItem>
              </Stack>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
