import React from 'react'
import { Flex, Column, Background } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import { AppContainerNewest as AppContainer } from 'src/components'
import Terminal from './Terminal'
import FAQ from './FAQ'

const HomePreFooter = () => (
  <Background background='black'>
    <AppContainer>
      <Flex pt={166}>
        <Column width={0.5}>
          <TitleWithIcon color='white' headingComponent={Heading.h4}>
            Have a question?
          </TitleWithIcon>
          <FAQ />
        </Column>
        <Column ml={8}>
          <TitleWithIcon color='white' headingComponent={Heading.h4}>
            New to serverless?
          </TitleWithIcon>
          <P mt={0}>Get started in 3 steps</P>
          <Terminal />
        </Column>
      </Flex>
    </AppContainer>
  </Background>
)

export default HomePreFooter