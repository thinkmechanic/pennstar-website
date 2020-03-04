import React from 'react'
import { Flex, Box, Text, Heading, Image } from 'rebass'
import { Cards } from './service-featuredCards'
import { FullHero } from '../components/Hero'

const defaultbg = "https://www.lifeofpix.com/wp-content/uploads/2019/02/310-jira00830-nam-1600x1045.jpg"

const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'
}

export const ServiceHero = ({ hero }) => {
  return (
    <FullHero
      bgImg={defaultbg || hero.image}
      backgroundSize='cover'
      backgroundPosition={['top left', null, null, 'center left']}
      outerProps={{ boxShadow: 'insetLight' }}
    >
      <Flex
        justifyContent='flex-end'
        position='relative'
        width='full'
        maxWidth='2400px'
        mt={[null, null, null, '6']}
        mx='auto'
        sx={{

        }}
      >
        <Box
          mt={[5, null, null, 4]}
          mr={[0, null, null, 4]}
          color='secondary'
          textAlign={['center', null, null, 'right']}
          className='serviceHero-box'
        >
          <Heading
            fontSize='6'
            color='primary'
            sx={{ ...textShadow }}
          >
            {hero.heading}
          </Heading>
          <Text
            mt='5'
            display='inline'
            textAlign='center'
            color={['text', null, null, 'white']}
            mb='4'
            sx={{ ...textShadow }}
          >
            {hero.taglineA}&nbsp;{hero.taglineB}
          </Text>
          <Box>
            <Cards
              ml={[0, null, null, 5]}
              cards={hero.featuredCards}
            />
          </Box>
        </Box>
      </Flex>
    </FullHero>

  )
}
