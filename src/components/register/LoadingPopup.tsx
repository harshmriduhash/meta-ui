import { BackgroundLines } from '../ui/background-lines';

const LoadingPopup = () => {
  return (
    <div className='fixed inset-0 z-20 flex'>
      <BackgroundLines className='flex h-screen w-full flex-col items-center justify-center px-4'>
        <h2 className='relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 md:text-4xl lg:text-7xl'>
          Your Website is <br /> generating
        </h2>
        <p className='mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg'>
          Your mockup is being processing. Please wait while we prepare everything for you.
        </p>

        <div className='three-body'>
          <div className='three-body__dot'></div>
          <div className='three-body__dot'></div>
          <div className='three-body__dot'></div>
        </div>
      </BackgroundLines>
    </div>
  );
};
export default LoadingPopup;
