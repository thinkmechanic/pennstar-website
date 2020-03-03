import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Box, Text, Heading } from 'rebass'
import { Card } from '../components/Cards'
import { shortid } from '../utils'


export const Cards = ({ cards, ...props }) => {
  return (
    <Box
      display={['block', null, 'flex']}
      flexWrap={'wrap'}
      ml='auto'
      width={['full']}
      {...props}
    >
      {cards.map(card => (
        <Card
          key={shortid()}
          width={['full', null, 1 / 3]}
          mx={'auto'}
        >
          <Box
            bg='gray.1'
            fontSize='64px'
            textAlign='left'
            mt='5'
            p={[4, 2, null, 3]}
            sx={{
              borderTopLeftRadius: 'lg',
              borderTopRightRadius: 'lg'
            }}
          >
            <i className={card.icon} sx={{ color: 'gray.3' }} /><br />
            <Heading fontSize='3' color='primary'>{card.heading}</Heading>
          </Box>

          <Box
            bg='gray.1'
            textAlign='left'
            fontSize='0.75em'
            px='3'
            py='3'
            sx={{
              borderBottomLeftRadius: 'lg',
              borderBottomRightRadius: 'lg'
            }}>
            <Text>
              {card.details}
            </Text>
            <Text
              as={Link}
              to={card.link}
              color='gray.8'
              fontSize='0'
              sx={{
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }
              }}
            >
              <span sx={{ my: 2, pr: 2 }}>
                {card.linkLabel}
              </span>
              <i className={card.linkIcon} />
            </Text>
          </Box>
        </Card>
      ))}
    </Box>
  )
}
