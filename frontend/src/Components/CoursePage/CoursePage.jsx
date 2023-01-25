import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import introvideo from '../../Assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'sadsadsad',
      title: 'Sample',
      description: 'sample seclkjdsf',
      video: {
        url: 'sadsadsads',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          src={introvideo}
          width="100%"
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading m={'4'}>
          `#${lectureNumber + 1} ${lectures[lectureNumber].title} `
        </Heading>
        <Heading m={'4'}>Description</Heading>
        <Text m={'4'}>{lectures[lectureNumber].description}</Text>
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
