import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Divider,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";

function App() {
  const [url, setUrl] = useState();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();

  useEffect(() => {
    const handleClick = async () => {
      try {
        const sourceUrl =
          "https://api.nasa.gov/planetary/apod?date=2022-03-01&api_key=DEMO_KEY";
        const options = {
          method: "GET",
        };
        const response = await fetch(sourceUrl, options);

        if (response.ok) {
          const data = await response.json();
          setUrl(data.url);
          setTitle(data.title);
          setExplanation(data.explanation);
        } else {
          // response error message.
          alert();
        }
      } catch (error) {
        alert(error);
      }
    };
    handleClick();
  }, []);

  return (
    <Flex justifyContent="center">
      <Card maxW="sm">
        <CardBody>
          <Heading size="md" textAlign="center" margin={10}>
            {title}
          </Heading>
          <Image src={url} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Text>{explanation}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Flex>
  );
}

export default App;
