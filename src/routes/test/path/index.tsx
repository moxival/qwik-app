import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const throwTest = () => {throw new Error('Test')}

export const useTest = routeLoader$(({ status }) => {
  try {
    throwTest();

    return {};
  } catch (error) {
    console.log('in catch', error);
    status(404);
  }
})

export default component$(() => {
  const test = useTest();

  return (
    // We try to force an error here
    test!.value!.error && <h1>Hello</h1> || <></>
  )
})
