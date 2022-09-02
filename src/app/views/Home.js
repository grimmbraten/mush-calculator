import {
  Container,
  Grid,
  Image,
  NumberInput,
  SegmentedControl,
  Slider,
  Space,
  Text,
  Title
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import image from '../assets/mush.png';

const Home = () => {
  const MUSH_BLOCK = 256;
  const MUSH_BALL = 25;

  const [weight, setWeight] = useState(0);
  const [mush, setMush] = useState(0);
  const [puppyPercentage, setPuppyPercentage] = useState(8);
  const [lifeStage, setLifeStage] = useState('puppy');

  useEffect(() => {
    setMush((weight / 100) * (lifeStage === 'adult' ? 2 : puppyPercentage));
  }, [weight, lifeStage, puppyPercentage]);

  return (
    <>
      <Container>
        <Image src={image} width="33%" fit="contain" />

        <Space h="xl" />
        <Space h="md" />

        <SegmentedControl
          value={lifeStage}
          onChange={setLifeStage}
          data={[
            { label: 'Puppy', value: 'puppy' },
            { label: 'Adult', value: 'adult' }
          ]}
        />
      </Container>

      <Space h="xl" />

      <Container>
        <NumberInput
          value={weight}
          decimalSeparator=","
          onChange={value => setWeight(value * 1000)}
          label="What does your dog weigh?"
          hideControls
          precision={1}
        />
      </Container>

      <Space h="xl" />

      <Container>
        <Grid>
          <Grid.Col span={6}>
            <Title order={2}>Block(s)</Title>
            <Text>{(mush / MUSH_BLOCK).toFixed(1)} / day</Text>
            <Text size="sm" color="grey">
              {mush}g{' '}
              {lifeStage === 'puppy'
                ? '(2-8 months 5-10% of body weight)'
                : '(2% of desiered body weight)'}
            </Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Title order={2}>Ball(s)</Title>
            <Text>{(mush / MUSH_BALL).toFixed(1)} / day</Text>
            <Text size="sm" color="grey">
              {mush}g{' '}
              {lifeStage === 'puppy'
                ? '(2-8 months 5-10% of body weight)'
                : '(2% of desiered body weight)'}
            </Text>
          </Grid.Col>
        </Grid>
      </Container>

      {lifeStage === 'puppy' && (
        <Container>
          <Space h="xl" />

          <Text size="sm">Desired percentage of total weight</Text>
          <Slider
            min={5}
            max={10}
            value={puppyPercentage}
            onChange={setPuppyPercentage}
            marks={[
              { value: 5, label: '5%' },
              { value: 6, label: '6%' },
              { value: 7, label: '7%' },
              { value: 8, label: '8%' },
              { value: 9, label: '9%' },
              { value: 10, label: '10%' }
            ]}
          />
        </Container>
      )}
    </>
  );
};

export default Home;
