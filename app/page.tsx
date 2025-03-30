'use client';
import { useState } from 'react';
import { Button, Htag, P, Tag, Rating, Input } from '../components';



export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(2);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCounter(counter+1)}>Text</Button>
      <Button appearance="ghost" arrow="down">Text</Button>
      <P size="small">Text</P>
      <P size="medium">Text</P>
      <P size="large">Text</P>
      <Tag size="small" color="red">Red small</Tag>
      <Tag size="small" color="green">Green small</Tag>
      <Tag size="small" color="grey">Gray small</Tag>
      <Tag size="medium" color="primary">Primary medium</Tag>
      <Tag size="medium" color="ghost">Ghost medium</Tag>
      <Tag size="medium" color="red">Red medium</Tag>
      <Tag size="medium" color="green">Green medium</Tag>
      <Tag size="medium" color="grey">Gray medium</Tag>
      <Rating numberOfStars={rating} isEditable setRating={setRating}/>
      <Input placeholder="test" />
    </>
  );
}
