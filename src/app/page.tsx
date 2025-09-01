import Link from 'next/link';

//icons
import IconGithub from '@icon/github.svg';
import IconTwitter from '@icon/twitter.svg';

export default function Home() {
  return (
    <div className={'flex h-full w-full flex-col items-center justify-center gap-6'}>
      <h1 className={'text-4xl font-semibold'}>Nextjs 15 Starter Template</h1>
      <div className={'flex items-center gap-3'}>
        <div className={'flex items-center gap-2'}>TailwindCSS v4</div>
        <div className={'flex items-center gap-2'}>Prettier</div>
        <div className={'flex items-center gap-2'}>Eslint</div>
        <div className={'flex items-center gap-2'}>SVGR</div>
      </div>
      <div className={'flex items-center gap-4 text-3xl'}>
        <Link target={'_blank'} className={'transition duration-200 ease-in-out hover:opacity-50'} href={'https://github.com/ardasarico'}>
          <IconGithub />
        </Link>
        <Link target={'_blank'} className={'transition duration-200 ease-in-out hover:opacity-50'} href={'https://x.com/ardasarico'}>
          <IconTwitter />
        </Link>
      </div>
    </div>
  );
}
