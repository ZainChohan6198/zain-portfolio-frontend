const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m Zain Chohan</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Based in Pakistan <span className='ml-1'>🇵🇰</span>
            </li>
            <li>Front End Developer</li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        Front End Developer focused on building fast, accessible, and responsive
        user interfaces. I work with React, Next.js, TypeScript, and modern CSS
        to create clean, maintainable web experiences. I care about performance,
        accessibility, and staying current with front-end best practices.
      </p>
    </section>
  );
};

export default Introduction;
