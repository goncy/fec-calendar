import React from "react";
import {Stack, Heading, Badge, Image, Text, Grid} from "@chakra-ui/core";
import {GetServerSideProps} from "next";

interface Event {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

interface Props {
  events: Event[];
}

const Home: React.FC<Props> = ({events}) => {
  return (
    <Stack spacing={6}>
      <Heading color="white" fontSize={48}>
        Eventos
      </Heading>
      <Grid gridGap={8} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {events.map((event) => (
          <Stack
            key={event.title}
            backgroundColor="white"
            borderRadius={4}
            boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"
            padding={4}
            spacing={6}
          >
            <Image borderRadius={4} src={event.image} />
            <Stack>
              <Heading fontSize={24} lineHeight="normal">
                {event.title}
              </Heading>
              <Text>{event.description}</Text>
            </Stack>
            <Stack isInline spacing={4}>
              {event.tags.map((tag) => (
                <Badge borderRadius={16} paddingX={3} paddingY={1}>
                  {tag}
                </Badge>
              ))}
            </Stack>
          </Stack>
        ))}
      </Grid>
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps<any, any> = async function ({res}) {
  try {
    // Get the tenant for this page slug
    const events: Event[] = [
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        tags: ["some tag", "another tag"],
        title: "Chilling with Florin Pop",
      },
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. 1",
        tags: ["some tag", "another tag"],
        title: "Gitflow and best practices",
      },
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. 2",
        tags: ["some tag", "another tag"],
        title: "Sci-fi",
      },
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. 3",
        tags: ["some tag", "another tag"],
        title: "Some title",
      },
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. 4",
        tags: ["some tag", "another tag"],
        title: "Some title",
      },
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. 5",
        tags: ["some tag", "another tag"],
        title: "Some title",
      },
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. 6",
        tags: ["some tag", "another tag"],
        title: "Some title",
      },
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. 7",
        tags: ["some tag", "another tag"],
        title: "Some title",
      },
      {
        image: "//placehold.it/256x256",
        description:
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. 8",
        tags: ["some tag", "another tag"],
        title: "Some title",
      },
    ];

    // Return props
    return {props: {events}};
  } catch (err) {
    // If something failed report it to _app.tsx
    return {props: {statusCode: err?.status || res?.statusCode || 404}};
  }
};

export default Home;
