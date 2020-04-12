import React from 'react';
import { Page, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

import {
  Avatar,
  Education,
  Experience,
  Header,
  Interests,
  Skills,
} from './sections/index';

import {
  name,
  title,
  address,
  email,
  education,
  experience,
  skills,
  interestsParagraph,
} from '../../json/json-bundle';

// body-font
Font.register({
  family: 'Muli',
  fonts: [
    { src: require('../../assets/fonts/Muli/static/Muli-Regular.ttf') },
    {
      src: require('../../assets/fonts/Muli/static/Muli-Italic.ttf'),
      fontStyle: 'italic',
    },
    {
      src: require('../../assets/fonts/Muli/static/Muli-ExtraBold.ttf'),
      fontWeight: 800,
    },
    {
      src: require('../../assets/fonts/Muli/static/Muli-ExtraBoldItalic.ttf'),
      fontStyle: 'italic',
      fontWeight: 800,
    },
  ],
});

// heading-font
Font.register({
  family: 'Saira Extra Condensed',
  fonts: [
    {
      src: require('../../assets/fonts/Saira_Extra_Condensed/SairaExtraCondensed-Regular.ttf'),
    },
    {
      src: require('../../assets/fonts/Saira_Extra_Condensed/SairaExtraCondensed-ExtraLight.ttf'),
      fontStyle: 'italic',
    },
    {
      src: require('../../assets/fonts/Saira_Extra_Condensed/SairaExtraCondensed-ExtraBold.ttf'),
      fontWeight: 800,
    },
    {
      src: require('../../assets/fonts/Saira_Extra_Condensed/SairaExtraCondensed-SemiBold.ttf'),
      fontStyle: 'italic',
      fontWeight: 800,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Muli',
    fontSize: 10,
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flexDirection: 'column',
    width: '70%',
    paddingRight: 10,
  },
  rightColumn: {
    flexDirection: 'column',
    width: '30%',
    paddingLeft: 10,
  },
});

const MyResume = () => (
  <Document
    author={name}
    keywords={`${name}, resume`}
    subject={`${name}'s Resume`}
    title="Resume"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Header name={name} title={title} email={email} address={address} />
          <Experience experience={experience} />
        </View>

        <View style={styles.rightColumn}>
          <Avatar />
          <Skills skills={skills} />
          <Education education={education} />
          <Interests text={interestsParagraph} />
        </View>
      </View>
    </Page>
  </Document>
);

export default MyResume;
