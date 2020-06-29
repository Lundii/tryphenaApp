import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Section from '../../components/section';
import Input from '../../components/input';
import {VerticalBlank} from '../../components/blank';
import Question from './question';

const Observations = () => {
  return (
    <ScrollView>
      <Section>
        <Question
          question="Are the loadings on the tower evenly distributed across all legs
              or is one leg more loaded than the others?"
        />
      </Section>
      <Section>
        <Question question="Are there Tower members or parts lying around?" />
        <Question question="Are they fallen pieces from the Tower?" />
      </Section>
      <Section>
        <Question question="If yes, are they fallen pieces from the Tower?" />
      </Section>
      <Section>
        <Question question="Are aviation lights available?" />
        <Question question="Are they working?" />
      </Section>
      <Section>
        <Question question="Does the Tower require painting?" />
      </Section>
      <Section>
        <Question question="Are Guy Wires installed?" />
        <Question question="Are they in good condition?" />
      </Section>
      <Section>
        <Question question="Is the Tower straight/twisted/bent/generally in good condition?" />
      </Section>
      <Section>
        <Question question="Are there any empty load brackets?">
          <View style={styles.row}>
            <Input label="Height" />
            <VerticalBlank />
            <Input label="Section" />
          </View>
        </Question>
      </Section>
      <Section>
        <Question question="Are the Earthing cables and connections in good order?" />
      </Section>
      <Section>
        <Question question="Is the foundation in good condition?" />
      </Section>
      <Section>
        <Question question="Are there visible foundation failure signs?" />
      </Section>
      <Section>
        <Question question="Is the Tower very well secured?" />
      </Section>
      <Section>
        <Question question="What is the status of the existing tower torque?" />
      </Section>
      <Section>
        <Question question="Are the tower members Rusted?">
          <View style={styles.row}>
            <Input label="Member" />
            <VerticalBlank />
            <Input label="Section" />
          </View>
        </Question>
      </Section>
      <Section>
        <Question question="Are Outer and inner splice plates installed accordingly?" />
      </Section>
      <Section>
        <Question question="Are proper members used in all sections">
          <View style={styles.row}>
            <Input label="Where" />
            <VerticalBlank />
            <Input label="Member" />
          </View>
        </Question>
      </Section>
      <Section>
        <Question question="Is the tower fully triangulated?">
          <Input label="To what panel" />
        </Question>
      </Section>
      <Section>
        <Question question="Are in-plan bracings installed on the tower?">
          <Input label="To what panel" />
        </Question>
      </Section>
      <Section>
        <Question question="Are Hip bracings installed on the tower?">
          <Input label="To what panel" />
        </Question>
      </Section>
      <Section>
        <Question question="Are Sub bracings installed on the tower?">
          <Input label="To what panel" />
        </Question>
      </Section>
      <Section>
        <Input
          label="How is the site environment"
          multiline={true}
          numberOfLines={3}
          textAlignVertical="top"
        />
      </Section>
      <Section>
        <Input
          label="Any other observation"
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
      </Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
export default Observations;
