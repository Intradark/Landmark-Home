import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src='/images/burgess-rawson-symbol-and-wordmark.svg'
      alt='Burgess Rawson Logo'
      width={900}
      height={300}
      className='w-full h-auto'
    />
  );
}
